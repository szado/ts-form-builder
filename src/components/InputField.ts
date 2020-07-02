import {FormFieldAbstract} from "./FormFieldAbstract";

export enum InputFieldTypes {
    Text = 'text',
    Number = 'number',
    Email = 'email',
    Date = 'date',
    Checkbox = 'checkbox',
    Radio = 'radio',
}

export class InputField extends FormFieldAbstract {
    public type: InputFieldTypes = InputFieldTypes.Text;

    protected createFieldElement(): HTMLInputElement {
        let el = document.createElement('input');
        el.type = this.type;
        el.name = this.name;
        el.value = this.value;
        el.id = this.id;
        return el;
    }
}