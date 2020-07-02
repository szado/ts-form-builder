import {ComponentAbstract} from "../ComponentAbstract";

export class Paragraph extends ComponentAbstract {
    public html: string;

    render(): HTMLElement {
        let element = document.createElement('p');
        element.innerHTML = this.html ?? '';
        return element;
    }
}