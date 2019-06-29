import { LiveDial, LiveTab, LiveMeter, LiveSlider } from "live-components";
import { FaustUI } from "./FaustUI";
import { Layout } from "./Layout";
import { FaustUIButton } from "./components/Button";
import { FaustUICheckbox } from "./components/Checkbox";
import { FaustUIItemProps, FaustUIItemStyle } from "./components/types";
import { FaustUINentry } from "./components/Nentry";
import { Component } from "./components/Component";

export class FaustUIGroup extends Component<{ emitter: FaustUI; ui: TFaustUIGroup; grid: number; outerLeft: number; outerTop: number }> {
    static getComponent(item: TFaustUIInputItem | TFaustUIOutputItem, emitter: FaustUI, grid: number, itemLeft: number, itemTop: number) {
        const type = Layout.predictType(item);
        const tooltipMeta = item.meta ? item.meta.find(meta => meta.tooltip) : undefined;
        const tooltip = tooltipMeta ? tooltipMeta.tooltip : undefined;
        const { label, min, max, address, layout } = item;
        const props: FaustUIItemProps<FaustUIItemStyle> = {
            label,
            address,
            tooltip,
            emitter,
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
        if (type === "nentry") return new FaustUINentry({ ...props }); /*
        if (type === "knob") return <LiveDial showname={false} {...props} />;
        if (type === "menu") return <LiveTab {...props} />;
        if (type === "radio") return <LiveTab {...props} />;
        if (type === "hslider") return <LiveSlider orientation="horizontal" showname={false} {...props} />;
        if (type === "vslider") return <LiveSlider orientation="vertical" showname={false} {...props} />;
        if (type === "hbargraph") return <LiveMeter orientation="horizontal" {...props} />;
        if (type === "vbargraph") return <LiveMeter orientation="vertical" {...props} />;
        if (type === "led") return <LiveMeter orientation="vertical" {...props} />;*/
        return undefined;
    }

    label: HTMLDivElement;
    items: TFaustUIItem[];
    componentWillMount() {
        this.items = [];
        this.container = document.createElement("div");
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
    }
    updateLayout() {
        const { ui, grid } = this.state;
        let { outerLeft, outerTop } = this.state;
        let { left, top, width, height } = ui.layout;
        this.label.innerText = ui.label;
        this.label.title = ui.label;
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
        return super.mount();
    }
}
