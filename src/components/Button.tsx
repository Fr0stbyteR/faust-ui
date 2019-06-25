import * as React from "react";
import { FaustUIItem } from "./Base";
import { FaustUIItemStyle, FaustUIItemProps } from "./types";
import "./Button.scss";

interface FaustUIButtonStyle extends FaustUIItemStyle {
    fontname?: string;
    fontsize?: number;
    fontface?: "normal" | "bold" | "italic" | "bold italic";
    bgcolor?: string;
    bgoncolor?: string;
    bordercolor?: string;
    borderoncolor?: string;
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
                fontface: "normal",
                bgcolor: "rgba(40, 40, 40, 1)",
                bgoncolor: "rgba(18, 18, 18, 1)",
                bordercolor: "rgba(80, 80, 80, 1)",
                borderoncolor: "rgba(255, 165, 0, 1)",
                textcolor: "rgba(226, 222, 255, 0.5)",
                textoncolor: "rgba(255, 165, 0, 1)"
            }
        };
    }
    className = "button";

    get children() {
        if (!this.isConnected) return <></>;
        const { value, label } = this.state;
        const style = { ...this.initialProps.style, ...this.state.style };
        return <button
            style={{
                backgroundColor: value ? style.bgoncolor : style.bgcolor,
                borderColor: value ? style.borderoncolor : style.bordercolor,
                color: value ? style.textoncolor : style.textcolor,
                fontSize: style.fontsize || style.height / 4,
                fontFamily: `${style.fontname}, sans-serif`,
                fontStyle: style.fontface
            }}
            {...this.eventHandler}
        >
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
