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

    btn: HTMLButtonElement;
    span: HTMLSpanElement;
    componentWillMount() {
        super.componentWillMount();
        this.btn = document.createElement("button");
        this.span = document.createElement("span");
        this.span.innerText = this.state.label;
        this.setStyle();
    }
    setStyle() {
        const { value } = this.state;
        const style = { ...this.defaultProps.style, ...this.state.style };
        this.btn.style.backgroundColor = value ? style.bgoncolor : style.bgcolor;
        this.btn.style.borderColor = value ? style.borderoncolor : style.bordercolor;
        this.btn.style.color = value ? style.textoncolor : style.textcolor;
        this.btn.style.fontSize = `${style.fontsize || style.height / 4}px`;
        this.btn.style.fontFamily = `${style.fontname}, sans-serif`;
        this.btn.style.fontStyle = style.fontface;
    }
    componentDidMount() {
        super.componentDidMount();
        this.btn.addEventListener("mousedown", this.handlePointerDown);
        this.btn.addEventListener("mouseup", this.handlePointerUp);
        this.btn.addEventListener("touchstart", this.handlePointerDown);
        this.btn.addEventListener("touchend", this.handlePointerUp);
        this.on("style", () => this.setStyle());
        this.on("label", () => this.span.innerText = this.state.label);
    }
    mount() {
        this.btn.appendChild(this.span);
        this.container.appendChild(this.btn);
        return super.mount();
    }
    handlePointerDown = () => {
        this.setValue(1);
    }
    handlePointerUp = () => {
        this.setValue(0);
    }
}
