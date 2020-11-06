import request from 'supertest';
import { app } from "../server"

describe("user-controller", () => {
    describe("get", () => {
        it("should return user ID", async () => {
            const response = await request(app).get("/users/1234")
            expect(response.status).toBe(200)
            console.log(response.body)
            expect(response.body).toEqual({
                "id": "1234"
            })
        })
    })
    describe("post", () => {
        it("should return 204", async () => {
            const response = await request(app).post("/users")
            expect(response.status).toBe(204)
        })
    })
})
