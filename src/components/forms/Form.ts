import {ContainerAbstract} from "../ContainerAbstract";
import {IFormField} from "./IFormField";
import {IComponent} from "../IComponent";

export interface FormFieldSummary {
    name: string;
    value: string;
    labelText: string;
}

export class Form extends ContainerAbstract {
    public getDocument(): FormFieldSummary[]
    {
        let document: FormFieldSummary[] = [];
        this.getFields().forEach((field: IFormField) => {
            document.push({
                name: field.name,
                value: field.value,
                labelText: field.label ? field.label.text: ''
            });
        });
        return document;
    }

    public getFields(): IFormField[] {
        return this.findComponentsBy((component: IComponent) => {
             return component.hasOwnProperty('label')
                    && component.hasOwnProperty('name')
                    && component.hasOwnProperty('value');
        }) as IFormField[];
    }

    public findField(name: string): IFormField {
        let found: IFormField = null;
        this.getFields().forEach(field => {
            if (field.name === name) {
                found = field;
                return false;
            }
        });
        return found;
    }

    protected createContainerElement(): HTMLDivElement {
        return document.createElement('div');
    }
}