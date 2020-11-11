import { Container } from 'inversify';
import IBaseController from './interfaces/base-controller';
import TYPES from './types';
import { UserController } from "./controllers/user"

const container = new Container();
container.bind<IBaseController>(TYPES.Controller).to(UserController);

export default container;