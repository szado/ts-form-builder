import {Label} from "./Label";
import {FormFieldAbstract} from "./FormFieldAbstract";

export class TextAreaField extends FormFieldAbstract {
    label: Label;
    name: string;
    value: string;

    protected createFieldElement(): HTMLInputElement | HTMLTextAreaElement {
        let el = new HTMLTextAreaElement();
        el.name = this.name;
        el.innerHTML = this.value;
        return el;
    }
}