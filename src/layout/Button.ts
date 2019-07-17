import { AbstractInputItem } from "./AbstractOutputItem";

export class Button extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "button",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
