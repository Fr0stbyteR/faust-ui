import AbstractInputItem from "./AbstractInputItem";
import type { LayoutProps } from "../types";

export default class Knob extends AbstractInputItem {
    layout: LayoutProps = {
        type: "knob",
        width: 1,
        height: 1.75,
        sizing: "none"
    };
}
