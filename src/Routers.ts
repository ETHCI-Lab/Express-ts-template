import {Route} from "./abstract/Route";
import { PageRoute } from "./routers/pageRoute";
import { UsersRoute } from "./routers/UsersRoute";

export const router: Array<Route> = [
    new PageRoute(),new UsersRoute()
];

