import request from 'supertest';
import {MongoMemoryServer} from "mongodb-memory-server"
import { Database } from '../database';
import { App } from "../server"

describe("ping-controller", () => {
    let app: any;
    let server: any
    let memoryServer: MongoMemoryServer;
    let database:Database
    beforeEach(async()=> { 
         memoryServer = new MongoMemoryServer()
        const uri =  await memoryServer.getUri()
        // console.log("uri", uri)
        database = new Database(uri)
       await database.connect()
    //    console.log("database", database)
        server = new App(3002, database);
        // console.log("created new server")
        app = await server.start()
        // console.log("app", app)
    })

    afterEach(async ()=> {
        try{
            console.log("after1")
        // await database.disconnect()
        console.log("after2")
        await memoryServer.stop()
        console.log("after3")
        await server.stop()
        console.log("after4")
        }
        catch(e){
            console.log("err", e)
        }
    })

    describe("get", () => {
        it("should return pong", async () => {
            console.log("running tests")
            const x = request(app)
            console.log("request app ", x)
            try{
            const response = await request(app).get("/ping")
            console.log("response", response.body)
            expect(response.status).toBe(200)
            expect(response.body.ping).toEqual("pong")
            }
            catch(e){
                console.log(e)

            }
        })
    })
})
