import {IContainer} from "../components/IContainer";

export abstract class PageAbstract {
    protected abstract title: string;
    protected abstract container: IContainer;

    public render(): void {
        document.querySelector('title').innerText = this.title;
        document.body.append(this.container.render());
    }
}