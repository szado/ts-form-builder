import {ComponentAbstract} from "../ComponentAbstract";

export enum HeaderSizes {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
}

export class Header extends ComponentAbstract {
    public type: HeaderSizes = HeaderSizes.h1;
    public html: string;

    render(): HTMLElement {
        let element = document.createElement(this.type.toString());
        element.innerHTML = this.html ?? '';
        return element;
    }
}