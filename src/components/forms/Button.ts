import {ComponentAbstract} from "../ComponentAbstract";

export class Button extends ComponentAbstract {
    public handler: any;
    public text: string;

    public render(): HTMLElement {
        let button = document.createElement('button');
        if (this.handler && this.handler.call) {
            button.addEventListener('click', this.handler)
        }
        button.innerHTML = this.text ?? '';
        return button;
    }
}