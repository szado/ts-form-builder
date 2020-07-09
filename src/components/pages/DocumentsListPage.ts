import {PageAbstract} from "./PageAbstract";
import {LocStorage} from "../../data/LocStorage";
import {Paragraph} from "../others/Paragraph";

export class DocumentsListPage extends PageAbstract {
    title: string = 'FormBuilder - wypełnione formularze';
    homeButton: boolean = true;

    public constructor() {
        super();
        this.createList();
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

            this.addComponent(new Paragraph({
                html: '<a href="edit-document.html?id=' + id + '">Formularz id: ' + id + '</a>'
            }));
        });
    }
}