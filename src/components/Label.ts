import {IComponent} from "./IComponent";
import {ILabelable} from "./ILabelable";

export class Label implements IComponent {
    public text: string;
    public element: ILabelable;

    render(): HTMLElement {
        let element = new HTMLLabelElement();
        element.innerHTML = this.text;
        element.htmlFor = this.element.id;
        return element;
    }
}