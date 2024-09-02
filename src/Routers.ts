import {Route} from "./abstract/Route";
import { PageRoute } from "./routers/pageRoute";

export const router: Array<Route> = [
    new PageRoute()
];

