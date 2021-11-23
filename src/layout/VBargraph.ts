import AbstractOutputItem from "./AbstractOutputItem";
import type { LayoutProps } from "../types";

export default class VBargraph extends AbstractOutputItem {
    layout: LayoutProps = {
        type: "vbargraph",
        width: 1,
        height: 5,
        sizing: "vertical"
    };
}
