import {IContainer} from "./IContainer";
import {IComponent} from "./IComponent";

export abstract class ContainerAbstract implements IContainer {
    public components: IComponent[] = [];

    public addComponent(...component: IComponent[]): IContainer {
        component.forEach(component => {
            this.components.push(component);
        });
        return this;
    }

    public findComponentsBy(name: string, value: any): IComponent[];
    public findComponentsBy(callback: (component: IComponent) => boolean): IComponent[];
    public findComponentsBy(name: string | ((component: IComponent) => boolean), value?: any): IComponent[] {
        let found: IComponent[] = [];
        if (typeof name === 'function') {
            this.components.forEach(component => {
                if (name(component)) {
                    found.push(component);
                }
            });
        } else if (typeof name === 'string') {
            this.components.forEach(component => {
                // @ts-ignore
                if (component[name] === value) {
                    found.push(component);
                }
            });
        }
        return found;
    }

    public removeComponent(component: IComponent): boolean {
        let index = this.components.indexOf(component);
        if (index !== -1) {
            this.components.splice(index, 1);
            return true;
        }
        return false;
    }

    public render(): HTMLElement {
        let container = this.createContainerElement();
        this.components.forEach(component => {
            container.append(component.render());
        });
        return container;
    }

    protected abstract createContainerElement(): HTMLElement;
}