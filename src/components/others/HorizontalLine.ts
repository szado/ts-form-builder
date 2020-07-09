import {ComponentAbstract} from "../ComponentAbstract";

export class HorizontalLine extends ComponentAbstract {
    render(): HTMLElement {
        return document.createElement('hr');
    }
}