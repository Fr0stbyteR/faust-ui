import { AbstractOutputItem } from "./AbstractInputItem";

export class Led extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "led",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
