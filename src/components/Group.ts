import { FaustUI } from "../FaustUI";
import { Component } from "./Component";
import { AbstractItem } from "./AbstractItem";
import { FaustUIItemProps, FaustUIItemStyle, FaustUIGroupProps } from "./types";
import { HSlider } from "./HSlider";
import { VSlider } from "./VSlider";
import { Nentry } from "./Nentry";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Knob } from "./Knob";
import { Menu } from "./Menu";
import { Radio } from "./Radio";
import { Led } from "./Led";
import { Numerical } from "./Numerical";
import { HBargraph } from "./HBargraph";
import { VBargraph } from "./VBargraph";
import { Layout } from "../layout/Layout";

export class Group extends Component<FaustUIGroupProps> {
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
    static getComponent(item: TFaustUIItem, emitter: FaustUI, grid: number) {
        const type = Layout.predictType(item);
        if (type.endsWith("group")) {
            const { label, items, type, layout } = item as TFaustUIGroup;
            const props: FaustUIGroupProps = {
                label,
                type,
                items,
                style: {
                    grid,
                    width: layout.width,
                    height: layout.height,
                    left: layout.offsetLeft,
                    top: layout.offsetTop
                },
                emitter
            };
            return new Group(props);
        }
        const ioItem = item as TFaustUIInputItem | TFaustUIOutputItem;
        const { metaObject, enums } = this.parseMeta(ioItem.meta);
        const { tooltip, unit } = metaObject;
        const { label, min, max, address, layout } = ioItem;
        const props: FaustUIItemProps<FaustUIItemStyle> = {
            label,
            address,
            tooltip,
            unit,
            emitter,
            enums,
            style: {
                grid,
                width: layout.width,
                height: layout.height,
                left: layout.offsetLeft,
                top: layout.offsetTop
            },
            type: "float",
            min: isFinite(+min) ? +min : Number.MIN_VALUE,
            max: isFinite(+max) ? +max : Number.MAX_VALUE,
            step: "step" in item ? +item.step : 1,
            value: "init" in item ? +item.init || 0 : 0
        };
        if (type === "button") return new Button(props);
        if (type === "checkbox") return new Checkbox(props);
        if (type === "nentry") return new Nentry(props);
        if (type === "knob") return new Knob(props);
        if (type === "menu") return new Menu(props);
        if (type === "radio") return new Radio(props);
        if (type === "hslider") return new HSlider(props);
        if (type === "vslider") return new VSlider(props);
        if (type === "hbargraph") return new HBargraph(props);
        if (type === "vbargraph") return new VBargraph(props);
        if (type === "numerical") return new Numerical(props);
        if (type === "led") return new Led(props);
        return null;
    }
    /**
     * DOM Div container of the group
     *
     * @type {HTMLDivElement}
     * @memberof AbstractItem
     */
    container: HTMLDivElement;
    label: HTMLDivElement;
    tabs: HTMLDivElement;
    children: (AbstractItem<FaustUIItemStyle> | Group)[];
    layout: TLayoutProp;
    setState(newState: { [key in keyof FaustUIGroupProps]?: FaustUIGroupProps[key] }) {
        let shouldUpdate = false;
        for (const key in newState) {
            const stateKey = key as keyof FaustUIGroupProps;
            const stateValue = newState[stateKey];
            if (stateKey === "style") {
                for (const key in newState.style) {
                    const styleKey = key as keyof FaustUIItemStyle;
                    if (styleKey in this.state.style && this.state.style[styleKey] !== newState.style[styleKey]) {
                        this.state.style[styleKey] = newState.style[styleKey];
                        shouldUpdate = true;
                    }
                }
            } else if (stateKey in this.state && this.state[stateKey] !== stateValue) {
                (this.state as any)[stateKey] = stateValue;
                shouldUpdate = true;
            } else return;
            if (shouldUpdate) this.emit(stateKey, this.state[stateKey]);
        }
    }
    componentWillMount(): this {
        this.container = document.createElement("div");
        this.tabs = document.createElement("div");
        this.tabs.className = "faust-ui-tgroup-tabs";
        this.label = document.createElement("div");
        this.label.className = "faust-ui-group-label";
        this.updateUI();
        this.children.forEach(item => item.componentWillMount());
        return this;
    }
    updateUI = () => {
        this.children = [];
        const { label, style, type, items, emitter, isRoot } = this.state;
        const { grid, left, top, width, height } = style;
        this.label.innerText = label;
        this.label.title = label;
        this.label.style.fontSize = `${0.25 * grid}px`;
        this.container.style.left = `${left * grid}px`;
        this.container.style.top = `${top * grid}px`;
        this.container.style.width = `${width * grid}px`;
        this.container.style.height = `${height * grid}px`;
        this.container.className = ["faust-ui-group", `faust-ui-${type}`, `${isRoot ? "faust-ui-root" : ""}`].join(" ");
        items.forEach((item) => {
            if (item.type.endsWith("group")) {
                const component = Group.getComponent(item, emitter, grid);
                if (component) this.children.push(component);
            } else {
                const ioItem = item as TFaustUIInputItem | TFaustUIOutputItem;
                const itemComponent = Group.getComponent(ioItem, this.state.emitter, grid);
                if (itemComponent) this.children.push(itemComponent);
            }
        });
        if (type === "tgroup") {
            this.tabs.innerHTML = "";
            this.tabs.style.height = `${grid}px`;
            this.tabs.style.top = `${0.25 * grid}px`;
            this.state.items.forEach((item, i) => {
                const label = item.label;
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
            });
        }
    }
    mount(): this {
        this.container.appendChild(this.label);
        if (this.tabs.children.length) this.container.appendChild(this.tabs);
        this.children.forEach((item) => {
            item.mount();
            this.container.appendChild(item.container);
        });
        return this;
    }
    componentDidMount(): this {
        const handleResize = () => {
            const { grid, left, top, width, height } = this.state.style;
            this.label.style.fontSize = `${0.25 * grid}px`;
            this.container.style.width = `${width * grid}px`;
            this.container.style.height = `${height * grid}px`;
            this.container.style.left = `${left * grid}px`;
            this.container.style.top = `${top * grid}px`;
            if (this.state.type === "tgroup") {
                this.tabs.style.height = `${grid}px`;
                this.tabs.style.top = `${0.25 * grid}px`;
                for (let i = 0; i < this.tabs.children.length; i++) {
                    const tab = this.tabs.children[i] as HTMLSpanElement;
                    tab.style.fontSize = `${0.25 * grid}px`;
                    tab.style.width = `${2 * grid - 10}px`;
                    tab.style.height = `${grid - 10}px`;
                    tab.style.lineHeight = `${grid - 10}px`;
                }
            }
            this.children.forEach(item => item.setState({ style: { grid } }));
        };
        this.on("style", () => this.schedule(handleResize));
        const itemsChange = () => {
            this.updateUI();
            this.children.forEach(item => item.componentWillMount());
        };
        this.on("items", () => this.schedule(itemsChange));
        const labelChange = () => {
            this.label.innerText = this.state.label;
            this.label.title = this.state.label;
        };
        this.on("label", () => this.schedule(labelChange));
        if (this.tabs && this.tabs.children.length) (this.tabs.children[0] as HTMLSpanElement).click();
        this.children.forEach(item => item.componentDidMount());
        return this;
    }
}
