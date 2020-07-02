import {PageAbstract} from "./PageAbstract";
import {IComponent} from "../IComponent";

export class DocumentsListPage extends PageAbstract {
    title: string = 'FormBuilder - wypełnione formularze';
    createPageElement(): IComponent {
        return undefined;
    }
}