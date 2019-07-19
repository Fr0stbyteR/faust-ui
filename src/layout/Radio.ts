import { AbstractInputItem } from "./AbstractOutputItem";

export class Radio extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "radio",
        width: 2,
        height: 2, // TODO: vradio and hradio
        sizing: "both"
    };
}
