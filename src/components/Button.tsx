import * as React from "react";
import { FaustUIItem } from "./Base";
import "./Button.scss";

interface FaustUIButtonStyle extends FaustUIItemStyle {
    fontname?: string;
    fontsize?: number;
    fontface?: "regular" | "bold" | "italic" | "bold italic";
    bgcolor?: string;
    bgoncolor?: string;
    bordercolor?: string;
    focusbordercolor?: string;
    textcolor?: string;
    textoncolor?: string;
}
export class FaustUIButton extends FaustUIItem<FaustUIButtonStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUIButtonStyle> {
        const inherited = super.defaultProps;
        return {
            ...inherited,
            style: {
                ...inherited.style,
                fontname: "Arial",
                fontsize: undefined,
                fontface: "regular",
                bgcolor: "rgba(90, 90, 90, 1)",
                bgoncolor: "rgba(195, 195, 195, 1)",
                bordercolor: "rgba(80, 80, 80, 1)",
                focusbordercolor: "rgba(80, 80, 80, 1)",
                textcolor: "rgba(255, 255, 255, 1)",
                textoncolor: "rgba(255, 255, 255, 1)"
            }
        };
    }
    className = "button";
    get children() {
        if (!this.isConnected) return <></>;
        const { value, label } = this.state;
        const style = { ...this.initialProps.style, ...this.state.style };
        return <button style={{
            backgroundColor: value ? style.bgoncolor : style.bgcolor,
            borderColor: focus ? style.focusbordercolor : style.bordercolor,
            color: value ? style.textoncolor : style.textcolor,
            fontSize: style.fontsize || style.height / 3
        }}>
            <span>{label}</span>
        </button>;
    }
    handlePointerDown = () => {
        this.setValue(1);
    }
    handlePointerUp = () => {
        this.setValue(0);
    }
}
