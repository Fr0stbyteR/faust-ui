import { AbstractInputItem } from "./AbstractOutputItem";

export class Knob extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "knob",
        width: 1,
        height: 2,
        sizing: "none"
    };
}
