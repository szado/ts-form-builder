import {Form} from "./components/Form";
import {InputField} from "./components/InputField";
import {Label} from "./components/Label";
import {SelectField} from "./components/SelectField";
import {CheckboxField} from "./components/CheckboxField";

export class App {
    public constructor() {
        let form = new Form();
        form.addComponent(
            new InputField({
                name: 'name',
                label: new Label({
                    text: 'Imię:',
                }),
            }),
            new SelectField({
                name: 'color',
                values: ['czerwony', 'bordowy', 'pomarańczowy', 'niebieski', 'zielony', 'czarny'],
                label: new Label({
                    text: 'Wybierz ulubiony kolor:',
                }),
            }),
            new CheckboxField({
                label: new Label({
                    text: 'Jesteś pełnoletni?',
                })
            }),
        );

        console.log(form)
        document.body.append(form.render());
    }
}