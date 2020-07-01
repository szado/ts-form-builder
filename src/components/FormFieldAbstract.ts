import {IFormField} from "./IFormField";
import {Label} from "./Label";

export abstract class FormFieldAbstract implements IFormField {
    label: Label;
    name: string;
    value: string;

    public render(): HTMLElement {
        let div = new HTMLDivElement();
        let field = this.createFieldElement();
        field.addEventListener(this.getValueBindingEventName(field), element => {
            this.value = (element.target as HTMLFormElement).value;
        });
        if (this.label) {
            div.append(this.label.render());
        }
        div.append(field);
        return div;
    }

    protected getValueBindingEventName(
        element: HTMLInputElement
                | HTMLTextAreaElement
                | HTMLSelectElement
    ): string {
        switch (element.constructor.name) {
            case 'HTMLInputElement':
            case 'HTMLTextAreaElement':
                return 'input';
            default:
                return 'change';
        }
    }

    protected abstract createFieldElement():
        HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement;
}