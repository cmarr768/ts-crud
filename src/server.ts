import express from 'express';
import cors from "cors"
import IBaseController from './interfaces/base-controller';
import container from "./container"
import TYPES from './types';
import { Database } from './database';

export class App {
    private app:any;
    // private server: any;
    private appListener: any

    constructor(private readonly port: number, private readonly database: Database) { 
        this.initApp();
    }
    
    public async start(): Promise<any> {
        const listen = (port: number): Promise<void> => {
        return new Promise((resolve, reject) => {
          this.appListener = this.app.listen(port);
          this.appListener
            .once('listening', ()=>{
                console.log(`listening on port ${port}`)
                return resolve();
            })
            .once('error', reject);
        });
      }
      await this.database.connect()
        // console.log("server", this.server);
        await listen(this.port);
        return this.app
    }

    public stop(): void {
        this.database.disconnect()
        this.appListener.close()
    }

    private initApp(): void {
        this.app = express();

        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }));
        this.initControllers();
    }

    private initControllers(): void {
        const controllers: IBaseController[] = container.getAll<IBaseController>(TYPES.Controller);
        controllers.forEach(controller => this.app.use(controller.getPath(), controller.getRouter()));
    }
}