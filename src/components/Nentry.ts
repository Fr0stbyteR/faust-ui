import { FaustUIItem } from "./Base";
import { FaustUIItemStyle, FaustUIItemProps } from "./types";
import "./Nentry.scss";

export interface FaustUINentryStyle extends FaustUIItemStyle {
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

    label: HTMLDivElement;
    input: HTMLInputElement;
    componentWillMount() {
        super.componentWillMount();
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.input = document.createElement("input");
        this.input.type = "number";
        this.input.value = (+this.state.value.toFixed(3)).toString();
        this.input.max = this.state.max.toString();
        this.input.min = this.state.min.toString();
        this.input.step = this.state.step.toString();
        this.setStyle();
    }
    handleChange = (e: Event) => {
        this.setValue(+(e.currentTarget as HTMLInputElement).value);
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
        this.input.addEventListener("change", this.handleChange);
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("value", () => this.input.value = (+this.state.value.toFixed(3)).toString());
        this.on("max", () => this.input.max = this.state.max.toString());
        this.on("min", () => this.input.min = this.state.min.toString());
        this.on("step", () => this.input.step = this.state.step.toString());
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.input);
        return super.mount();
    }
}
