import {PageAbstract} from "./PageAbstract";
import {LocStorage} from "../../data/LocStorage";
import {Paragraph} from "../others/Paragraph";
import {Header} from "../others/Header";

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
            let document = documents.loadDocument(id);

            if (!document) {
                return;
            }

            this.addComponent(new Header({text: 'Formularz'}));
            for (let key in document) {
                this.addComponent(new Paragraph({
                    text: '<strong>' + key + ':</strong> ' + document[key]
                }));
            }
        })
    }
}