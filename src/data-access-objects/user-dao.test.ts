import { UserDao, IUser } from "./user-dao"
import { Database } from "../database";
import {MongoMemoryServer} from "mongodb-memory-server"

describe("user-dao", () => {
    let userDao: UserDao
    let database: Database;
    let memoryServer: MongoMemoryServer;
    let user: IUser;
    const testUser: IUser = {
        email: 'test@',
        firstName: "test",
        lastName: "tester"
    }

    beforeEach(async () => {
        userDao = new UserDao()
        memoryServer = new MongoMemoryServer()
       const uri =  await memoryServer.getUri()
       // console.log("uri", uri)
       database = new Database(uri)
        await database.connect()
    })

    afterEach(async () => {
        if (user.id) {
            await userDao.deleteById(user.id)
        }
        await database.disconnect()
    })
    describe("create", () => {
        it("should return a new user", async () => {
            user = await userDao.create(testUser)
            expect(user.id).toBeTruthy()
        })
    })
})