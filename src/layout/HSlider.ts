import { AbstractInputItem } from "./AbstractOutputItem";

export class HSlider extends AbstractInputItem {
    layout: TLayoutProp = {
        type: "hslider",
        width: 5,
        height: 1,
        sizing: "horizontal"
    };
}
