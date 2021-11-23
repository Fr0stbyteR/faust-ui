import AbstractOutputItem from "./AbstractOutputItem";
import type { LayoutProps } from "../types";

export default class HBargraph extends AbstractOutputItem {
    layout: LayoutProps = {
        type: "hbargraph",
        width: 5,
        height: 1,
        sizing: "horizontal"
    };
}
