import * as React from "react";
import * as ReactDOM from "react-dom";
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
    private _ui: TFaustUI;
    constructor(options: TOptions) {
        super();
        const { root, ui: uiIn } = options;
        this.root = root;
        if (uiIn) this.ui = uiIn;
        this.render();
        window.addEventListener("resize", () => {
            this.render();
            this.emit("layoutChange");
        });
    }
    render() {
        const rect = this.root.getBoundingClientRect();
        const { layout } = Layout.calcLayout(this.ui);
        ReactDOM.render(<FaustUIRoot emitter={this} width={rect.width} height={rect.height} ui={this.ui} layout={layout} />, this.root);
    }
    get ui() {
        return this._ui;
    }
    set ui(uiIn) {
        this._ui = uiIn;
        this.emit("uiChange", this._ui);
    }
    changeParamByUI(path: string, value: number) {
        this.emit("paramChangeByUI", { path, value });
    }
    changeParamByDSP(path: string, value: number) {
        this.emit("paramChangeByDSP", { path, value });
    }
}
