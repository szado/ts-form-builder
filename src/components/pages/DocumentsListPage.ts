import {PageAbstract} from "./PageAbstract";
import {IComponent} from "../IComponent";

export class DocumentsListPage extends PageAbstract {
    title: string = 'FormBuilder - wypełnione formularze';
    homeButton: boolean = true;

    createPageElement(): IComponent {
        return undefined;
    }
}