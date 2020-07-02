import {Label} from "./Label";
import {IComponent} from "./IComponent";
import {ILabelable} from "./ILabelable";

export interface IFormField extends IComponent, ILabelable {
    label: Label;
    name: string;
    value: string;
}