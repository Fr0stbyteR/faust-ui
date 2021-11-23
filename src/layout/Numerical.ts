import AbstractOutputItem from "./AbstractOutputItem";
import type { LayoutProps } from "../types";

export default class Numerical extends AbstractOutputItem {
    layout: LayoutProps = {
        type: "numerical",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
