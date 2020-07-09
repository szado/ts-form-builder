import {PageAbstract} from "./PageAbstract";
import {Button} from "../forms/Button";
import {InputField} from "../forms/InputField";
import {Label} from "../forms/Label";
import {EmailField} from "../forms/EmailField";
import {SelectField} from "../forms/SelectField";
import {CheckboxField} from "../forms/CheckboxField";
import {TextAreaField} from "../forms/TextAreaField";
import {Form} from "../forms/Form";
import {LocStorage} from "../../data/LocStorage";

export class NewDocumentPage extends PageAbstract {
    title: string = 'FormBuiler - wypełnianie formularza';
    homeButton: boolean = true;

    public constructor() {
        super();
        let form = new Form();
        form.addComponent(
            new InputField({
                name: 'firstname',
                label: new Label({text: 'Imię'})
            }),
            new InputField({
                name: 'lastname',
                label: new Label({text: 'Nazwisko'})
            }),
            new EmailField({
                name: 'email',
                label: new Label({text: 'E-mail'})
            }),
            new SelectField({
                name: 'study',
                values: ['Informatyka i ekonometria', 'Rachunkowość', 'Dziennikarstwo i komunikacja społeczna'],
                label: new Label({text: 'Wybrany kierunek studiów'})
            }),
            new CheckboxField({
                name: 'elearning',
                label: new Label({text: 'Czy preferujesz e-learning?'})
            }),
            new TextAreaField({
                name: 'notes',
                label: new Label({text: 'Uwagi'})
            }),
            new Button({text: 'Zapisz', handler: function () {
                new LocStorage().saveDocument(form.getDocument());
                location.href = '/';
            }})
        );
        this.addComponent(form);
    }
}