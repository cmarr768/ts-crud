import { User } from "../models/user"
import { UserDao, IUser } from "./user-dao"
import { Database } from "../database";

describe("user-dao", () => {
    let userDao: UserDao
    let database: Database;
    let user: IUser;
    const testUser: IUser = {
        email: 'test@',
        firstName: "test",
        lastName: "tester"
    }

    beforeEach(async () => {
        userDao = new UserDao()
        database = new Database();
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

//TODO: once tests are run have need to add the dao at controller level
//TODO: add inversify