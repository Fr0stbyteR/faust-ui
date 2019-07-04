import { FaustUIItem } from "./Base";
import { FaustUIItemProps } from "./types";
import "./Numerical.scss";
import { FaustUINentryStyle } from "./Nentry";

export class FaustUINumerical extends FaustUIItem<FaustUINentryStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUINentryStyle> {
        const inherited = super.defaultProps;
        return {
            ...inherited,
            style: {
                ...inherited.style,
                fontname: "Arial",
                fontsize: undefined,
                fontface: "regular",
                bgcolor: "rgba(255, 255, 255, 0.25)",
                bordercolor: "rgba(80, 80, 80, 0)",
                labelcolor: "rgba(226, 222, 255, 0.5)",
                textcolor: "rgba(18, 18, 18, 1)"
            }
        };
    }
    className = "numerical";

    label: HTMLDivElement;
    input: HTMLInputElement;
    componentWillMount() {
        super.componentWillMount();
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.input = document.createElement("input");
        this.input.disabled = true;
        this.input.value = (+this.state.value.toFixed(3)).toString() + (this.state.unit || "");
        this.setStyle();
    }
    setStyle() {
        const style = { ...this.defaultProps.style, ...this.state.style };
        this.input.style.backgroundColor = style.bgcolor;
        this.input.style.borderColor = style.bordercolor;
        this.input.style.color = style.textcolor;
        this.input.style.fontSize = `${style.fontsize || style.height / 4}px`;
        this.label.style.fontSize = `${style.height / 4}px`;
        this.label.style.color = style.labelcolor;
    }
    componentDidMount() {
        super.componentDidMount();
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("value", () => this.input.value = (+this.state.value.toFixed(3)).toString() + (this.state.unit || ""));
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.input);
        return super.mount();
    }
}
