import {IPage} from "./pages/IPage";

export class Viewport {
    public displayPage(page: IPage): void {
        document.body.childNodes.forEach(node => {
            node.remove();
        });
        document.body.append(page.render());
        document.head.querySelector('title').innerText = page.title;
    }
}