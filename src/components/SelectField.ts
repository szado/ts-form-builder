import {FormFieldAbstract} from "./FormFieldAbstract";

export class SelectField extends FormFieldAbstract {
    values: string[] = [];

    render(): HTMLElement {
        return undefined;
    }

    protected createFieldElement(): HTMLSelectElement {
        let element = new HTMLSelectElement();
        element.name = this.name;
        this.values.forEach((value: string) => {
            let option = new HTMLOptionElement();
            option.value = value;
            option.innerText = value;
            element.append(option);
        });
        element.value = this.value;
        return element;
    }
}