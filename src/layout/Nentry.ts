import { AbstractInputItem } from "./AbstractOutputItem";

export class Nentry extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "nentry",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
