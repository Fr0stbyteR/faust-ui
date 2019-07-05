import { FaustUIItem } from "./Base";
import { FaustUIItemStyle, FaustUIItemProps } from "./types";
import "./Radio.scss";

export interface FaustUIRadioStyle extends FaustUIItemStyle {
    fontname?: string;
    fontsize?: number;
    fontface?: "regular" | "bold" | "italic" | "bold italic";
    bgcolor?: string;
    bordercolor?: string;
    labelcolor?: string;
    textcolor?: string;
}
export class FaustUIRadio extends FaustUIItem<FaustUIRadioStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUIRadioStyle> {
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
    className = "radio";

    label: HTMLDivElement;
    group: HTMLDivElement;
    componentWillMount() {
        super.componentWillMount();
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.group = document.createElement("div");
        this.group.className = "faust-ui-component-radio-group";
        this.getOptions();
        this.setStyle();
    }
    getOptions() {
        const { enums, address } = this.state;
        this.group.innerHTML = "";
        if (enums) {
            let i = 0;
            for (const key in enums) {
                const input = document.createElement("input");
                const div = document.createElement("div");
                input.value = enums[key].toString();
                input.name = address;
                input.type = "radio";
                if (i === 0) input.checked = true;
                input.addEventListener("change", () => this.setValue(enums[key]));
                div.appendChild(input);
                div.append(key);
                this.group.appendChild(div);
                i++;
            }
        }
    }
    handleChange = (e: Event) => {
        this.setValue(+(e.currentTarget as HTMLInputElement).value);
    }
    setStyle() {
        const style = { ...this.defaultProps.style, ...this.state.style };
        const fontSize = Math.min(style.height * 0.1, style.width * 0.1);
        this.group.style.backgroundColor = style.bgcolor;
        this.group.style.borderColor = style.bordercolor;
        this.group.style.color = style.textcolor;
        this.group.style.fontSize = `${style.fontsize || fontSize}px`;
        this.label.style.fontSize = `${fontSize}px`;
        this.label.style.color = style.labelcolor;
    }
    componentDidMount() {
        super.componentDidMount();
        this.group.addEventListener("change", this.handleChange);
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("enums", () => this.getOptions());
        this.on("value", () => {
            for (let i = this.group.children.length - 1; i >= 0; i--) {
                const input = this.group.children[i].querySelector("input");
                if (+input.value === this.state.value) input.checked = true;
            }
        });
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.group);
        return super.mount();
    }
}
