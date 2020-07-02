import {IPage} from "./IPage";
import {ContainerAbstract} from "../ContainerAbstract";

export abstract class PageAbstract extends ContainerAbstract implements IPage {
    abstract title: string;

    createContainerElement(): HTMLElement {
        let element = document.createElement('div');
        element.classList.add('page');
        element.innerHTML = '<h1>' + this.title + '</h1>';
        return element;
    };
}