import { FaustUIItem } from "./Base";
import { FaustUIItemStyle, FaustUIItemProps } from "./types";
import "./Menu.scss";

export interface FaustUIMenuStyle extends FaustUIItemStyle {
    fontname?: string;
    fontsize?: number;
    fontface?: "regular" | "bold" | "italic" | "bold italic";
    bgcolor?: string;
    bordercolor?: string;
    labelcolor?: string;
    textcolor?: string;
}
export class FaustUIMenu extends FaustUIItem<FaustUIMenuStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUIMenuStyle> {
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
    className = "menu";

    label: HTMLDivElement;
    select: HTMLSelectElement;
    componentWillMount() {
        super.componentWillMount();
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.select = document.createElement("select");
        this.getOptions();
        this.setStyle();
    }
    getOptions() {
        const { enums } = this.state;
        this.select.innerHTML = "";
        if (enums) {
            let i = 0;
            for (const key in enums) {
                const option = document.createElement("option");
                option.value = enums[key].toString();
                option.text = key;
                if (i === 0) option.selected = true;
                this.select.appendChild(option);
                i++;
            }
        }
    }
    handleChange = (e: Event) => {
        this.setValue(+(e.currentTarget as HTMLInputElement).value);
    }
    setStyle() {
        const style = { ...this.defaultProps.style, ...this.state.style };
        this.select.style.backgroundColor = style.bgcolor;
        this.select.style.borderColor = style.bordercolor;
        this.select.style.color = style.textcolor;
        this.select.style.fontSize = `${style.fontsize || style.height / 4}px`;
        this.label.style.fontSize = `${style.height / 4}px`;
        this.label.style.color = style.labelcolor;
    }
    componentDidMount() {
        super.componentDidMount();
        this.select.addEventListener("change", this.handleChange);
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("enums", () => this.getOptions());
        this.on("value", () => {
            for (let i = this.select.children.length - 1; i >= 0; i--) {
                const option = this.select.children[i] as HTMLOptionElement;
                if (+option.value === this.state.value) this.select.selectedIndex = i;
            }
        });
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.select);
        return super.mount();
    }
}
