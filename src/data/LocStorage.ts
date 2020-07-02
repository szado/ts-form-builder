import {IDataStorage} from "./IDataStorage";
import {v4 as uuidv4} from "uuid";

const LOCAL_STORAGE_KEY: string = 'form_builder_documents';

export class LocStorage implements IDataStorage {
    private readonly data: any;

    constructor() {
        this.data = localStorage[LOCAL_STORAGE_KEY] ? JSON.parse(localStorage[LOCAL_STORAGE_KEY]) : {};
    }

    getDocuments(): string[] {
        return Object.keys(this.data);
    }

    loadDocument(id: string): any {
        return this.data[id];
    }

    saveDocument(document: any): string {
        let id = uuidv4();
        this.data[id] = document;
        localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(this.data);
        return id;
    }
}