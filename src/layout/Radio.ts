import { AbstractOutputItem } from "./AbstractOutputItem";

export class Radio extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "radio",
        width: 2,
        height: 2,
        sizing: "both"
    };
}
