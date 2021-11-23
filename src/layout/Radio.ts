import AbstractInputItem from "./AbstractInputItem";
import type { LayoutProps } from "../types";

export default class Radio extends AbstractInputItem {
    layout: LayoutProps = {
        type: "radio",
        width: 2,
        height: 2, // TODO: vradio and hradio
        sizing: "both"
    };
}
