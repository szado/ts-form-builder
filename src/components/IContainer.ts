import {IComponent} from "./IComponent";

export interface IContainer extends IComponent {
    components: IComponent[];
    addComponent(...component: IComponent[]): IContainer;
    removeComponent(component: IComponent): boolean;
    findComponentsBy(name: string, value: any): IComponent[];
    findComponentsBy(callback: (component: IComponent) => boolean): IComponent[];
}