import {Viewport} from "./components/Viewport";
import {IndexPage} from "./components/pages/IndexPage";
import {DocumentsListPage} from "./components/pages/DocumentsListPage";
import {IPage} from "./components/pages/IPage";
import {NewDocumentPage} from "./components/pages/NewDocumentPage";

const viewport = new Viewport();
let page: IPage;
switch (document.location.pathname) {
    case '/':
        page = new IndexPage();
        break;
    case '/documents-list.html':
        page = new DocumentsListPage();
        break;
    case '/new-document.html':
        page = new NewDocumentPage();
        break;
}
viewport.displayPage(page);