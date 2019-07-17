import { AbstractOutputItem } from "./AbstractOutputItem";

export class HSlider extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "hslider",
        width: 5,
        height: 1,
        sizing: "horizontal"
    };
}
