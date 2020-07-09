import {PageAbstract} from "./PageAbstract";
import {LocStorage} from "../../data/LocStorage";
import {Paragraph} from "../others/Paragraph";
import {Button} from "../forms/Button";
import {HorizontalLine} from "../others/HorizontalLine";

export class EditDocumentPage extends PageAbstract {
    title: string = 'FormBuilder - edycja formularza';
    homeButton: boolean = true;

    public constructor() {
        super();
        //this.createForm();
    }

    private createList(): void
    {
        let documents = new LocStorage();
        documents.getDocuments().forEach((id: string) => {
//             let document = documents.loadDocument(id);
// console.log(document)
//             if (!document) {
//                 return;
//             }
//
//             //this.addComponent(new Header({html: 'Formularz', type: HeaderSizes.h3}));
//             (document as FormFieldSummary[]).forEach((field) => {
//                 this.addComponent(new Paragraph({
//                     html: '<strong>' + field.labelText + ':</strong> ' + field.value
//                 }));
//             });

            this.addComponent(
                new Paragraph({
                    html: '<a href="edit-document.html?id=' + id + '">Formularz id: ' + id + '</a>'
                }),
                new Button({
                    text: '❌ Usuń',
                    handler: () => {
                        documents.removeDocument(id);
                        location.reload();
                    }
                }),
                new HorizontalLine()
            );
        });
    }
}