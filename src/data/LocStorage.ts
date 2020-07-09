import {IDataStorage} from "./IDataStorage";
import {v4 as uuidv4} from "uuid";

const LOCAL_STORAGE_KEY: string = 'form_builder_documents';

export class LocStorage implements IDataStorage {
    private readonly data: any;

    constructor() {
        this.data = localStorage[LOCAL_STORAGE_KEY] ? JSON.parse(localStorage[LOCAL_STORAGE_KEY]) : {};
    }

    public getDocuments(): string[] {
        return Object.keys(this.data);
    }

    public loadDocument(id: string): any {
        return this.data[id];
    }

    public saveDocument(document: any): string {
        let id = uuidv4();
        this.data[id] = document;
        this.storeData();
        return id;
    }

    public removeDocument(id: string): void {
        delete this.data[id];
        this.storeData();
    }

    private storeData(): void {
        localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(this.data);
    }
}