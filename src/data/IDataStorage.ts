export interface IDataStorage {
    saveDocument(document: any): string;
    loadDocument(id: string): any;
    getDocuments(): string[];
}