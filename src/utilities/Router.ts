import {IPage} from "../components/pages/IPage";

export class Router {
    public mapper: (route: string) => IPage|null;

    public getParam(key: string): string {
        const query: string = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query);
        return urlParams.get(key);
    }

    public getPage(): IPage|null {
        let page = this.mapper(document.location.pathname);
        if (!page) {
            return null;
        }
        page.router = this;
        return page;
    }
}