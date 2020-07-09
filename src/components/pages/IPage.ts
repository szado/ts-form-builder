import {IComponent} from "../IComponent";
import {Router} from "../../utilities/Router";

export interface IPage extends IComponent {
    router: Router;
    title: string;
}