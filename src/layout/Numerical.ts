import { AbstractInputItem } from "./AbstractInputItem";

export class Numerical extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "numerical",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
