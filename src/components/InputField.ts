import {Label} from "./Label";
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
    public label: Label;
    public name: string;
    public value: string;

    protected createFieldElement(): HTMLInputElement | HTMLTextAreaElement {
        let el = new HTMLInputElement();
        el.type = this.type;
        el.name = this.name;
        el.value = this.value;
        return el;
    }
}