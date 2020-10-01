import { UserRepository } from './user-repository'

describe("UserRepository", () => {
    describe("get", () => {
        let userRepository: UserRepository;
        beforeEach(() => {
            userRepository = new UserRepository();
        })
        it("should return an object with id 12345", () => {
            const result = userRepository.get();
            expect(result.id).toEqual("12345");
        })
    })
})