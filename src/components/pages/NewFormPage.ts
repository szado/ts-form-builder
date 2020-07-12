import {PageAbstract} from "./PageAbstract";
import {LocStorage} from "../../data/LocStorage";
import {Paragraph} from "../others/Paragraph";
import {Button} from "../forms/Button";
import {HorizontalLine} from "../others/HorizontalLine";

export class EditDocumentPage extends PageAbstract {
    title: string = 'FormBuilder - kreator formularzy';
    homeButton: boolean = true;

    public constructor() {
        super();
        this.createForm();
    }

    private createForm(): void {
        const howManyFields = Number.parseInt(this.router.getParam('fields'));
        if (isNaN(howManyFields)) {
            this.addComponent(new Paragraph({html: 'Podaj poprawną liczbę pól formularza'}));
            return;
        }

        for (let i = 0; i < howManyFields; i++) {

        }
    }
}