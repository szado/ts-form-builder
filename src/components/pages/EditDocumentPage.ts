import {PageAbstract} from "./PageAbstract";
import {LocStorage} from "../../data/LocStorage";
import {Paragraph} from "../others/Paragraph";
import {FormFieldSummary} from "../forms/Form";
import {Router} from "../../utilities/Router";

export class EditDocumentPage extends PageAbstract {
    title: string = 'FormBuilder - podgląd formularza';
    homeButton: boolean = true;

    public init(router: Router) {
        super.init(router);
        this.createForm();
    }

    private createForm(): void
    {
        let documents = new LocStorage();

        let document = documents.loadDocument(this.router.getParam('id'));

        if (!document) {
            return;
        }

        (document as FormFieldSummary[]).forEach((field) => {
            this.addComponent(new Paragraph({
                html: '<strong>' + field.labelText + ':</strong> ' + field.value
            }));
        });
    }
}