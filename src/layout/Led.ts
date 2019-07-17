import { AbstractInputItem } from "./AbstractInputItem";

export class Led extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "led",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
