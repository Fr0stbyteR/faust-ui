import { AbstractOutputItem } from "./AbstractOutputItem";

export class Nentry extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "nentry",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
