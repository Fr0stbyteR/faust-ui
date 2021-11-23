import AbstractInputItem from "./AbstractInputItem";
import { LayoutProps } from "../types";

export default class Button extends AbstractInputItem {
    layout: LayoutProps = {
        type: "button",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
