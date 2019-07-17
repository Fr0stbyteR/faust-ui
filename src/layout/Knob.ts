import { AbstractOutputItem } from "./AbstractOutputItem";

export class Knob extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "knob",
        width: 1,
        height: 2,
        sizing: "none"
    };
}
