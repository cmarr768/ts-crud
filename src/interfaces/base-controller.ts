import { Router } from "express";

export default interface IBaseController {
    getPath(): string;
    getRouter(): Router
}