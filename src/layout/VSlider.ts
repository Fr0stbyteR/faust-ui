import { AbstractOutputItem } from "./AbstractOutputItem";

export class VSlider extends AbstractOutputItem {
    layout: TLayoutProp = {
        type: "vslider",
        width: 1,
        height: 5,
        sizing: "vertical"
    };
}
