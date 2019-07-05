import { FaustUI } from "./FaustUI";
import { Layout } from "./Layout";
import { FaustUIButton } from "./components/Button";
import { FaustUICheckbox } from "./components/Checkbox";
import { FaustUIItemProps, FaustUIItemStyle } from "./components/types";
import { FaustUINentry } from "./components/Nentry";
import { Component } from "./components/Component";
import { FaustUIKnob } from "./components/Knob";
import { FaustUIVSlider } from "./components/VSlider";
import { FaustUIHSlider } from "./components/HSlider";
import { FaustUIVBargraph } from "./components/VBargraph";
import { FaustUIHBargraph } from "./components/HBargraph";
import { FaustUINumerical } from "./components/Numerical";
import { FaustUILed } from "./components/Led";
import { FaustUIMenu } from "./components/Menu";
import { FaustUIRadio } from "./components/Radio";

export class FaustUIGroup extends Component<{ emitter: FaustUI; ui: TFaustUIGroup; grid: number; outerLeft: number; outerTop: number }> {
    static parseMeta(metaIn: TFaustUIMeta[]): { metaObject: TFaustUIMeta; enums?: { [key: string]: number } } {
        const metaObject: TFaustUIMeta = {};
        if (!metaIn) return { metaObject };
        metaIn.forEach(m => Object.assign(metaObject, m));
        if (metaObject.style) {
            const enumsRegex = /\{(?:(?:'|_)(.+?)(?:'|_):([-+]?[0-9]*\.?[0-9]+?);)+(?:(?:'|_)(.+?)(?:'|_):([-+]?[0-9]*\.?[0-9]+?))\}/;
            const matched = metaObject.style.match(enumsRegex);
            if (matched) {
                const enums: { [key: string]: number } = {};
                for (let i = 1; i < matched.length; i += 2) {
                    enums[matched[i]] = +matched[i + 1];
                }
                return { metaObject, enums };
            }
        }
        return { metaObject };
    }
    static getComponent(item: TFaustUIInputItem | TFaustUIOutputItem, emitter: FaustUI, grid: number, itemLeft: number, itemTop: number) {
        const type = Layout.predictType(item);
        const { metaObject, enums } = this.parseMeta(item.meta);
        const { tooltip, unit } = metaObject;
        const { label, min, max, address, layout } = item;
        const props: FaustUIItemProps<FaustUIItemStyle> = {
            label,
            address,
            tooltip,
            unit,
            emitter,
            enums,
            style: {
                width: layout.width * grid,
                height: layout.height * grid,
                left: itemLeft,
                top: itemTop
            },
            type: "float",
            min: isFinite(+min) ? +min : Number.MIN_VALUE,
            max: isFinite(+max) ? +max : Number.MAX_VALUE,
            step: "step" in item ? +item.step : 1,
            value: "init" in item ? +item.init || 0 : 0
        };
        if (type === "button") return new FaustUIButton({ ...props });
        if (type === "checkbox") return new FaustUICheckbox({ ...props });
        if (type === "nentry") return new FaustUINentry({ ...props });
        if (type === "knob") return new FaustUIKnob({ ...props });
        if (type === "menu") return new FaustUIMenu({ ...props });
        if (type === "radio") return new FaustUIRadio({ ...props });
        if (type === "hslider") return new FaustUIHSlider({ ...props });
        if (type === "vslider") return new FaustUIVSlider({ ...props });
        if (type === "hbargraph") return new FaustUIHBargraph({ ...props });
        if (type === "vbargraph") return new FaustUIVBargraph({ ...props });
        if (type === "numerical") return new FaustUINumerical({ ...props });
        if (type === "led") return new FaustUILed({ ...props });
        return undefined;
    }

    label: HTMLDivElement;
    tabs: HTMLDivElement;
    items: TFaustUIItem[];
    componentWillMount() {
        this.items = [];
        this.container = document.createElement("div");
        this.tabs = document.createElement("div");
        this.tabs.className = "faust-ui-tgroup-tabs";
        this.label = document.createElement("div");
        this.label.className = "faust-ui-group-label";
        this.updateUI();
    }
    updateUI() {
        this.children = [];
        const { ui, grid } = this.state;
        let { outerLeft, outerTop } = this.state;
        let { left, top, width, height } = ui.layout;
        this.label.innerText = ui.label;
        this.label.title = ui.label;
        this.label.style.fontSize = `${0.25 * grid}px`;
        left = left * grid - outerLeft;
        top = top * grid - outerTop;
        width *= grid;
        height *= grid;
        outerLeft += left;
        outerTop += top;
        this.container.style.left = `${left}px`;
        this.container.style.top = `${top}px`;
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
        this.container.className = ["faust-ui-group", "faust-ui-" + ui.type].join(" ");
        this.children = [];
        const tabs: string[] = [];
        ui.items.forEach((item) => {
            const itemLeft = item.layout.left * grid - outerLeft;
            const itemTop = item.layout.top * grid - outerTop;
            if (item.type === "tgroup") {
                tabs.push(item.label);
                const component = new FaustUIGroup({ grid, outerLeft, outerTop, ui: item, emitter: this.state.emitter });
                this.children.push(component);
                this.items[this.children.length - 1] = item;
            } else if (item.type === "vgroup" || item.type === "hgroup") {
                tabs.push(item.label);
                const component = new FaustUIGroup({ grid, outerLeft, outerTop, ui: item, emitter: this.state.emitter });
                this.children.push(component);
                this.items[this.children.length - 1] = item;
            } else {
                const ioItem = item as TFaustUIInputItem | TFaustUIOutputItem;
                const itemComponent = FaustUIGroup.getComponent(ioItem, this.state.emitter, grid, itemLeft, itemTop);
                if (itemComponent) {
                    this.children.push(itemComponent);
                    this.items[this.children.length - 1] = ioItem;
                }
            }
        });
        if (ui.type === "tgroup") {
            this.tabs.innerHTML = "";
            this.tabs.style.height = `${grid}px`;
            this.tabs.style.top = `${0.25 * grid}px`;
            tabs.forEach((label, i) => {
                const tab = document.createElement("span");
                tab.innerText = label;
                tab.className = "faust-ui-tgroup-tab";
                tab.style.fontSize = `${0.25 * grid}px`;
                tab.style.width = `${2 * grid - 10}px`;
                tab.style.height = `${grid - 10}px`;
                tab.style.lineHeight = `${grid - 10}px`;
                tab.addEventListener("click", () => {
                    const groups: HTMLDivElement[] = [];
                    for (let j = 0; j < this.container.children.length; j++) {
                        const element = this.container.children[j] as HTMLDivElement;
                        if (element.classList.contains("faust-ui-group")) groups.push(element);
                    }
                    for (let j = 0; j < groups.length; j++) {
                        const element = groups[j] as HTMLDivElement;
                        element.style.visibility = i === j ? "visible" : "hidden";
                    }
                    for (let j = 0; j < this.tabs.children.length; j++) {
                        const e = this.tabs.children[j];
                        if (i !== j) {
                            if (e.classList.contains("active")) e.classList.remove("active");
                        } else e.classList.add("active");
                    }
                });
                this.tabs.appendChild(tab);
                if (i === 0) this.state.emitter.on("uiConnected", () => tab.click());
            });
        }
    }
    updateLayout() {
        const { ui, grid } = this.state;
        let { outerLeft, outerTop } = this.state;
        let { left, top, width, height } = ui.layout;
        this.label.innerText = ui.label;
        this.label.title = ui.label;
        this.label.style.fontSize = `${0.25 * grid}px`;
        left = left * grid - outerLeft;
        top = top * grid - outerTop;
        width *= grid;
        height *= grid;
        outerLeft += left;
        outerTop += top;
        this.container.style.left = `${left}px`;
        this.container.style.top = `${top}px`;
        this.container.style.width = `${width}px`;
        this.container.style.height = `${height}px`;
        for (let i = 0; i < this.tabs.children.length; i++) {
            const tab = this.tabs.children[i] as HTMLSpanElement;
            tab.style.fontSize = `${0.25 * grid}px`;
            tab.style.width = `${2 * grid - 10}px`;
            tab.style.height = `${grid - 10}px`;
            tab.style.lineHeight = `${grid - 10}px`;
        }
        this.children.forEach((child, i) => {
            if (child instanceof FaustUIGroup) {
                child.setState({ outerLeft, outerTop, grid: this.state.grid });
            } else {
                const item = this.items[i];
                const itemLeft = item.layout.left * grid - outerLeft;
                const itemTop = item.layout.top * grid - outerTop;
                const style = {
                    width: item.layout.width * grid,
                    height: item.layout.height * grid,
                    left: itemLeft,
                    top: itemTop
                };
                child.setState({ style });
            }
        });
    }
    componentDidMount() {
        this.on("ui", () => this.updateUI());
        this.on("grid", () => this.updateLayout());
        this.on("outerLeft", () => this.updateLayout());
        this.on("outerTop", () => this.updateLayout());
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.tabs);
        return super.mount();
    }
}
