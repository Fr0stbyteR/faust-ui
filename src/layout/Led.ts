import AbstractOutputItem from "./AbstractOutputItem";
import type { LayoutProps } from "../types";

export default class Led extends AbstractOutputItem {
    layout: LayoutProps = {
        type: "led",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
