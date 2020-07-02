import {FormFieldAbstract} from "./FormFieldAbstract";

export class SelectField extends FormFieldAbstract {
    values: string[];

    protected createFieldElement(): HTMLSelectElement {
        let element = document.createElement('select');
        element.name = this.name;
        this.values.forEach((value: string) => {
            let option = document.createElement('option');
            option.value = value;
            option.innerText = value;
            element.append(option);
        });
        element.value = this.value;
        element.id = this.id;
        return element;
    }
}