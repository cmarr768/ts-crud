import request from 'supertest';
import { app } from "../server"

describe("ping-controller", () => {
    describe("get", () => {
        it("should return pong", async () => {
            const response = await request(app).get("/ping")
            expect(response.status).toBe(200)
            expect(response.body.ping).toEqual("pong")
        })
    })
})
