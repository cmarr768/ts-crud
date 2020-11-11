import { Router, Request, Response } from 'express'
import { injectable } from 'inversify'
import IBaseController from '../interfaces/base-controller'

@injectable()
export class PingController implements IBaseController {
    private path = "/ping"
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
        this.router.get("/", this.getPing)
    }

    private getPing = (req: Request, res: Response): void => {
        res.send({ ping: "pong" })
    }
}