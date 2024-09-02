import { Service } from "../abstract/Service";
import { Users } from "../interfaces/Users";
import { usersModel } from "../orm/schemas/usersSchemas";

export class UsersService extends Service{

    public async getUsers(){
        console.log(usersModel)
        const users:Users[] = await usersModel.find();
        return users;
    }

}