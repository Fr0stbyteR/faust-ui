import AbstractInputItem from "./AbstractInputItem";
import type { LayoutProps } from "../types";

export default class Nentry extends AbstractInputItem {
    layout: LayoutProps = {
        type: "nentry",
        width: 1,
        height: 1,
        sizing: "none"
    };
}
