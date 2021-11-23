import AbstractInputItem from "./AbstractInputItem";
import { LayoutProps } from "../types";

export default class Checkbox extends AbstractInputItem {
    layout: LayoutProps = {
        type: "checkbox",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
