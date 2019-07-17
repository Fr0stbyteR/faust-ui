import { AbstractOutputItem } from "./AbstractOutputItem";

export class Checkbox extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "checkbox",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
