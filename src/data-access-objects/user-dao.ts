import { User } from "../models/user"

export interface IUser {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
}

export interface IUserDao {
    create(user: IUser): Promise<IUser>;
    deleteById(id: string): Promise<void>
}

export class UserDao implements IUserDao {
    constructor() { }

    public async create(user: IUser): Promise<IUser> {
        const newUser = new User({ ...user })
        return newUser.save()
    }

    public async deleteById(id: string): Promise<void> {
        const user = await User.findById(id);
        await user?.remove();
    }
}