import {Label} from "./Label";
import {IComponent} from "./IComponent";

export interface IFormField extends IComponent {
    label: Label;
    name: string;
    value: string;
}