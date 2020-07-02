import {PageAbstract} from "./PageAbstract";
import {Paragraph} from "../others/Paragraph";

export class NewDocumentPage extends PageAbstract {
    title: string = 'FormBuiler - wypełnianie formularza';
    homeButton: boolean = true;

    public constructor() {
        super();
        this.addComponent(
            new Paragraph({html: 'elo'}),
        );
    }
}