import AbstractInputItem from "./AbstractInputItem";
import type { LayoutProps } from "../types";

export default class VSlider extends AbstractInputItem {
    layout: LayoutProps = {
        type: "vslider",
        width: 1,
        height: 5,
        sizing: "vertical"
    };
}
