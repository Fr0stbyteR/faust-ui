import { AbstractItem } from "./AbstractItem";
import { FaustUIItemProps } from "./types";
import "./Numerical.scss";
import { FaustUINentryStyle } from "./Nentry";

export class Numerical extends AbstractItem<FaustUINentryStyle> {
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
        return this;
    }
    setStyle = () => {
        const { height, grid, fontsize, textcolor, labelcolor, bgcolor, bordercolor } = this.state.style;
        this.input.style.backgroundColor = bgcolor;
        this.input.style.borderColor = bordercolor;
        this.input.style.color = textcolor;
        this.input.style.fontSize = `${fontsize || height * grid / 4}px`;
        this.label.style.fontSize = `${height * grid / 4}px`;
        this.label.style.color = labelcolor;
    }
    componentDidMount() {
        super.componentDidMount();
        this.on("style", () => this.schedule(this.setStyle));
        const labelChange = () => this.label.innerText = this.state.label;
        this.on("label", () => this.schedule(labelChange));
        const valueChange = () => this.input.value = (+this.state.value.toFixed(3)).toString() + (this.state.unit || "");
        this.on("value", () => this.schedule(valueChange));
        return this;
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.input);
        return super.mount();
    }
}
