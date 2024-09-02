import { Contorller } from "../abstract/Contorller";
import { Request, Response } from "express";
import { logger } from "../middlewares/log";
import { Service } from "../abstract/Service";
import { UsersService } from "../Service/UsersService";
import { resp } from "../utils/resp";
import { Users } from "../interfaces/Users";
require('dotenv').config()

export class UsersController extends Contorller {
    
    protected service: UsersService = new UsersService();

    constructor() {
        super();
    }

    public test(Request: Request, Response: Response) {

        this.service.getUsers().then(res => {

            /**
             * 用戶表
             */
            const resp: resp<Users[]> = {
                code: "200",
                message: "getUser logs",
                body: res
            }

            Response.send(resp)

        }).catch((err:string) => {

            /**
             * 錯誤訊息
             */
            const resp: resp<string> = {
                code: "501",
                message: err,
                body: err
            }

            Response.send(resp)

        })
        
    }
}