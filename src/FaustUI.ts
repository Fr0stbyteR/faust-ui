import { EventEmitter } from "events";
import { Layout } from "./Layout";
import { FaustUIRoot } from "./FaustUIRoot";
import "./index.scss";

type TOptions = {
    root: HTMLDivElement;
    ui?: TFaustUI;
}

export class FaustUI extends EventEmitter {
    on<K extends keyof FaustUIEventMap>(type: K, listener: (e: FaustUIEventMap[K]) => void) {
        return super.on(type, listener);
    }
    once<K extends keyof FaustUIEventMap>(type: K, listener: (e: FaustUIEventMap[K]) => void) {
        return super.once(type, listener);
    }
    off<K extends keyof FaustUIEventMap>(type: K, listener: (e: FaustUIEventMap[K]) => void) {
        return super.off(type, listener);
    }
    removeAllListeners<K extends keyof FaustUIEventMap>(type: K) {
        return super.removeAllListeners(type);
    }
    emit<K extends keyof FaustUIEventMap>(type: K, e?: FaustUIEventMap[K]) {
        return super.emit(type, e);
    }
    root: HTMLDivElement;
    faustUIRoot: FaustUIRoot;
    private _ui: TFaustUI;
    constructor(options: TOptions) {
        super();
        const { root, ui: uiIn } = options;
        this.root = root;
        if (uiIn) this.ui = uiIn;
        this.render();
        window.addEventListener("resize", () => {
            this.faustUIRoot.setState(this.calc());
            this.emit("layoutChange");
        });
    }
    calc() {
        const { width, height } = this.root.getBoundingClientRect();
        const { layout } = Layout.calcLayout(this.ui);
        return { width, height, layout };
    }
    render() {
        const { width, height, layout } = this.calc();
        this.faustUIRoot = new FaustUIRoot({ width, height, layout, ui: this.ui, emitter: this });
        const children = this.faustUIRoot.render();
        children.forEach(e => this.root.appendChild(e));
    }
    get ui() {
        return this._ui;
    }
    set ui(uiIn) {
        this._ui = uiIn;
        const state = this.calc();
        if (this.faustUIRoot) this.faustUIRoot.setState({ ...state, ui: this.ui });
        this.emit("uiChange", this._ui);
    }
    changeParamByUI(path: string, value: number) {
        this.emit("paramChangeByUI", { path, value });
    }
    changeParamByDSP(path: string, value: number) {
        this.emit("paramChangeByDSP", { path, value });
    }
}
