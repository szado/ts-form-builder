import {ContainerAbstract} from "./ContainerAbstract";
import {IFormField} from "./IFormField";
import {IComponent} from "./IComponent";

export class Form extends ContainerAbstract {
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

    protected createContainerElement(): HTMLFormElement {
        return document.createElement('form');
    }
}