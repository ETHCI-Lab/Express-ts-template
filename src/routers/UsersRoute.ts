import { Route } from "../abstract/Route"
import { UsersController } from "../controller/UsersController";

export class UsersRoute extends Route{
    
    protected url: string;
    protected Contorller = new UsersController();

    constructor(){
        super()
        this.url = '/users'
        this.setRoutes()
    }

    protected setRoutes(): void {
        this.router.get(`${this.url}/test`,(req, res)=>{
            this.Contorller.test(req, res)
        })
    }

}