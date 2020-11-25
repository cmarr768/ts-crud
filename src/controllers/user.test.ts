import request from 'supertest';
import { App } from "../server"

describe("user-controller", () => {
    describe("get", () => {
        it("should return user ID", async () => {
            // const response = await request(app).get("/users/1234")
            // expect(response.status).toBe(200)
            // console.log(response.body)
            // expect(response.body).toEqual({
            //     "id": "1234"
            // })
        })
    })
    describe("post", () => {
        it("should return 200", async () => {
            // const userData = {
            //     email: 'controller-test@email',
            //     firstName: 'firstName',
            //     lastName: 'LastName',
            //     address: '123 Fake Street',
            //     dateOfBirth: "2015-03-25"
            // }
            // const response = await (await request(app).post("/users").send(userData))
            // expect(response.status).toBe(200)
            // expect(response.body).toMatchObject(userData)
        })
    })
})
