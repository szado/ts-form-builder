import {ILabelable} from "../ILabelable";
import {ComponentAbstract} from "../ComponentAbstract";

export class Label extends ComponentAbstract {
    public text: string;
    public element: ILabelable;

    render(): HTMLLabelElement {
        let element = document.createElement('label');
        element.innerHTML = this.text;
        element.htmlFor = this.element.id;
        return element;
    }
}