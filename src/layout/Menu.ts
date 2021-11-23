import AbstractInputItem from "./AbstractInputItem";
import type { LayoutProps } from "../types";

export default class Menu extends AbstractInputItem {
    layout: LayoutProps = {
        type: "menu",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
