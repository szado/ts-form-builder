import {Viewport} from "./components/Viewport";
import {IndexPage} from "./components/pages/IndexPage";
import {DocumentsListPage} from "./components/pages/DocumentsListPage";
import {NewDocumentPage} from "./components/pages/NewDocumentPage";
import {Router} from "./utilities/Router";
import {EditDocumentPage} from "./components/pages/EditDocumentPage";

const viewport = new Viewport();
const router = new Router();
router.mapper = (route: string) => {
    switch (route) {
        case '/':
            return new IndexPage();
        case '/documents-list.html':
            return new DocumentsListPage();
        case '/new-document.html':
            return new NewDocumentPage();
        case '/edit-document.html':
            return new EditDocumentPage();
    }
};

viewport.displayPage(router.getPage());