import { AbstractOutputItem } from "./AbstractOutputItem";

export class Menu extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "menu",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
