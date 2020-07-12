import {IPage} from "./IPage";
import {ContainerAbstract} from "../ContainerAbstract";
import {Router} from "../../utilities/Router";

export abstract class PageAbstract extends ContainerAbstract implements IPage {
    public router: Router|null = null;
    abstract title: string;
    protected homeButton: boolean = false;

    createContainerElement(): HTMLElement {
        let element = document.createElement('div'),
            html: string = '';
        if (this.homeButton) {
            html += '<a href="/">🏠 powrót</a>';
        }
        html += '<h1>' + this.title + '</h1>';
        element.classList.add('page');
        element.innerHTML = html;
        return element;
    };

    init(router: Router): void {
        this.router = router;
    }
}