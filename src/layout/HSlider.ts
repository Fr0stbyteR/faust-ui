import AbstractInputItem from "./AbstractInputItem";
import type { LayoutProps } from "../types";

export default class HSlider extends AbstractInputItem {
    layout: LayoutProps = {
        type: "hslider",
        width: 5,
        height: 1,
        sizing: "horizontal"
    };
}
