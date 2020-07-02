import {IComponent} from "./IComponent";

export abstract class ComponentAbstract implements IComponent {
    public constructor(options?: object) {
        if (options !== undefined) {
            Object.keys(options).forEach(key => {
                // @ts-ignore
                this[key] = options[key];
                // @ts-ignore
                console.log(key, options[key])
            });
        }
    }

    abstract render(): HTMLElement;
}