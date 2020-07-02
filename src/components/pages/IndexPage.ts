import {PageAbstract} from "./PageAbstract";
import {Paragraph} from "../others/Paragraph";

export class IndexPage extends PageAbstract {
    title: string = 'FormBuiler - strona główna';

    public constructor() {
        super();
        this.addComponent(
            new Paragraph({html: 'Witaj w aplikacji FormBuilder. Wybierz podstronę:'}),
            new Paragraph({html: '<a href="documents-list.html">Lista wypełnionych formularzy</a>'}),
        );
    }
}