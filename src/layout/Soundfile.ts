import AbstractInputItem from "./AbstractInputItem";
import { LayoutProps } from "../types";

export default class Soundfile extends AbstractInputItem {
    layout: LayoutProps = {
        type: "soundfile",
        width: 2,
        height: 1,
        sizing: "horizontal"
    };
}
