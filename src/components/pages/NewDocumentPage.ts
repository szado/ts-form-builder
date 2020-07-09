import {PageAbstract} from "./PageAbstract";
import {Paragraph} from "../others/Paragraph";
import {Button} from "../forms/Button";

export class NewDocumentPage extends PageAbstract {
    title: string = 'FormBuiler - wypełnianie formularza';
    homeButton: boolean = true;

    public constructor() {
        super();
        this.addComponent(
            new Paragraph({html: 'elo'}),
            new Button({text: 'Zapisz', handler: function () {
                console.log('click!')
            }})
        );
    }
}