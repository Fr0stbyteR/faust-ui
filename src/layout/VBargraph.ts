import { AbstractInputItem } from "./AbstractInputItem";

export class VBargraph extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "vbargraph",
        width: 1,
        height: 5,
        sizing: "vertical"
    };
}
