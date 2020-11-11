import { Router, Request, Response } from 'express'
import { injectable } from 'inversify'
import IBaseController from '../interfaces/base-controller'
import { User } from "../models/user"

@injectable()
export class UserController implements IBaseController {
    private path = "/users"
    private router = Router()

    constructor() {
        this.initRoutes()
    }

    public getPath = (): string => {
        return this.path;
    }

    public getRouter = (): Router => {
        return this.router;
    }

    private initRoutes = (): void => {
        this.router.get("/:id", this.getUser)
        this.router.post("/", this.createUser)
    }

    private getUser = (req: Request, res: Response): void => {
        const id = req.params.id
        console.log("userControllerTest", id)
        res.send({
            id
        })
    }

    private createUser = (req: Request, res: Response): void => {
        const user = new User({ email: 'controller-test', firstName: 'controller-test' })
        console.log(user, "controller was hit")
        res.sendStatus(204)
    }
}