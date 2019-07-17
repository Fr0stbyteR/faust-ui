import { AbstractOutputItem } from "./AbstractOutputItem";

export class Button extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "button",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
