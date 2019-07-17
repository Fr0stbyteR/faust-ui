import { Layout } from "./layout/Layout";
import "./index.scss";
import { AbstractItem } from "./components/AbstractItem";
import { Group } from "./components/Group";
import { FaustUIGroupProps } from "./components/types";

type TOptions = {
    root: HTMLDivElement;
    ui?: TFaustUI;
}

export class FaustUI {
    componentMap: { [path: string]: AbstractItem<any>[] } = {};
    DOMroot: HTMLDivElement;
    faustUIRoot: Group;
    hostWindow: Window;
    grid: number;
    private _ui: TFaustUI;
    private _layout: TLayoutProp;
    constructor(options: TOptions) {
        const { root, ui: uiIn } = options;
        this.DOMroot = root;
        this.ui = uiIn || [];
        window.addEventListener("resize", () => {
            this.resize();
        });
        window.addEventListener("message", (e) => {
            const { data, source } = e;
            this.hostWindow = source as Window;
            const { type } = data;
            if (!type) return;
            if (type === "ui") {
                this.ui = data.ui;
            } else if (type === "param") {
                const { path, value } = data;
                this.paramChangeByDSP(path, value);
            }
        });
    }
    mount() {
        this.componentMap = {};
        this.DOMroot.innerHTML = "";
        const props: FaustUIGroupProps = {
            label: "",
            type: "vgroup",
            items: this.ui,
            style: {
                grid: this.grid,
                width: this.layout.width,
                height: this.layout.height,
                left: this.layout.offsetLeft,
                top: this.layout.offsetTop
            },
            isRoot: true,
            emitter: this
        };
        this.faustUIRoot = new Group(props);
        this.faustUIRoot.componentWillMount();
        this.faustUIRoot.mount();
        this.DOMroot.appendChild(this.faustUIRoot.container);
        this.faustUIRoot.componentDidMount();
    }
    register(path: string, item: AbstractItem<any>) {
        if (this.componentMap[path]) this.componentMap[path].push(item);
        else this.componentMap[path] = [item];
    }
    paramChangeByDSP(path: string, value: number) {
        if (this.componentMap[path]) this.componentMap[path].forEach(item => item.setState({ value }));
    }
    paramChangeByUI(path: string, value: number) {
        if (!this.hostWindow) return;
        this.hostWindow.postMessage({ path, value, type: "param" }, "*");
    }
    calc() {
        const { items, layout } = Layout.calc(this.ui);
        this._ui = items;
        this._layout = layout;
        this.calcGrid();
    }
    calcGrid() {
        const { width, height } = this.DOMroot.getBoundingClientRect();
        const grid = Math.max(40, Math.min(width / this._layout.width, height / this._layout.height));
        this.grid = grid;
        return grid;
    }
    resize() {
        if (!this.faustUIRoot) return;
        this.calcGrid();
        this.faustUIRoot.setState({ style: { grid: this.grid } });
    }
    get ui() {
        return this._ui;
    }
    set ui(uiIn) {
        this._ui = uiIn;
        this.calc();
        this.mount();
    }
    get layout() {
        return this._layout;
    }
}
