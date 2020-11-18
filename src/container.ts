import { Container } from 'inversify';
import IBaseController from './interfaces/base-controller';
import TYPES from './types';
import { UserController } from "./controllers/user"
import { PingController } from './controllers/ping';

const container = new Container();
container.bind<IBaseController>(TYPES.Controller).to(UserController);
container.bind<IBaseController>(TYPES.Controller).to(PingController);

export default container;