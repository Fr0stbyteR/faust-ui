import * as React from "react";
import { FaustUIItem } from "./Base";
import { FaustUIItemStyle, FaustUIItemProps } from "./types";
import "./Nentry.scss";

interface FaustUINentryStyle extends FaustUIItemStyle {
    fontname?: string;
    fontsize?: number;
    fontface?: "regular" | "bold" | "italic" | "bold italic";
    bgcolor?: string;
    bordercolor?: string;
    labelcolor?: string;
    textcolor?: string;
}
export class FaustUINentry extends FaustUIItem<FaustUINentryStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUINentryStyle> {
        const inherited = super.defaultProps;
        return {
            ...inherited,
            style: {
                ...inherited.style,
                fontname: "Arial",
                fontsize: undefined,
                fontface: "regular",
                bgcolor: "rgba(18, 18, 18, 1)",
                bordercolor: "rgba(80, 80, 80, 1)",
                labelcolor: "rgba(226, 222, 255, 0.5)",
                textcolor: "rgba(226, 222, 255, 0.5)"
            }
        };
    }
    className = "nentry";

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setValue(+e.currentTarget.value);
    }
    get children() {
        if (!this.isConnected) return <></>;
        const { value, label, min, max, step } = this.state;
        const style = { ...this.initialProps.style, ...this.state.style };
        return (
            <>
                <div className="faust-ui-component-label" style={{ fontSize: style.height / 4, color: style.labelcolor }}>{label}</div>
                <input
                    type="number"
                    style={{
                        backgroundColor: style.bgcolor,
                        borderColor: style.bordercolor,
                        color: style.textcolor,
                        fontSize: style.fontsize || style.height / 4
                    }}
                    {...{ min, max, step, value }}
                    onChange={this.handleChange}
                />
            </>
        );
    }
}
