import {IFormField} from "./IFormField";
import {Label} from "./Label";
import {ComponentAbstract} from "../ComponentAbstract";

export abstract class FormFieldAbstract extends ComponentAbstract implements IFormField {
    id: string;
    label: Label;
    name: string;
    value: string;

    public constructor(options?: object) {
        super(options);
        this.id || this.generateId();
        this.name = this.name ?? '';
        this.value = this.value ?? '';
        if (this.label !== undefined) {
            this.label.element = this;
        }
    }

    public render(): HTMLElement {
        let div = document.createElement('div');
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

    private generateId(): void
    {
        this.id = 'field_' + (this.name ? this.name + '_' : '') + Math.random().toString(10).substr(2);
    }
}