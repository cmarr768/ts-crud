import { Router, Request, Response } from 'express'
import { injectable } from 'inversify'
import IBaseController from '../interfaces/base-controller'
import { User } from "../models/user"

// const router = Router()

// router.get("/:id", (req, res) => {
//     const id = req.params.id
//     console.log("userControllerTest", id)
//     res.send({
//         id
//     })
// })

// router.post("/", (req, res) => {
//     const user = new User({ email: 'controller-test', firstName: 'controller-test' })
//     console.log(user, "controller was hit")
//     res.sendStatus(204)
// })

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

    private initRoutes = () => {
        this.router.get("/:id", this.getUser)
        this.router.post("/", this.createUser)
    }

    private getUser = (req: Request, res: Response) => {
        const id = req.params.id
        console.log("userControllerTest", id)
        res.send({
            id
        })
    }

    private createUser = (req: Request, res: Response) => {
        const user = new User({ email: 'controller-test', firstName: 'controller-test' })
        console.log(user, "controller was hit")
        res.sendStatus(204)
    }
}

// export { router }