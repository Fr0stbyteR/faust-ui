import { FaustUIItem } from "./Base";
import { FaustUIItemProps } from "./types";
import "./VBargraph.scss";
import { FaustUINentryStyle } from "./Nentry";

interface FaustUIBargraphStyle extends FaustUINentryStyle {
    barbgcolor?: string;
    coldcolor?: string;
    warmcolor?: string;
    hotcolor?: string;
    overloadcolor?: string;
}
export class FaustUIVBargraph extends FaustUIItem<FaustUIBargraphStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUIBargraphStyle> {
        const inherited = super.defaultProps;
        return {
            ...inherited,
            style: {
                ...inherited.style,
                fontname: "Arial",
                fontsize: undefined,
                fontface: "regular",
                bgcolor: "rgba(18, 18, 18, 0)",
                bordercolor: "rgba(80, 80, 80, 0)",
                labelcolor: "rgba(226, 222, 255, 0.5)",
                textcolor: "rgba(18, 18, 18, 1)",
                barbgcolor: "rgba(18, 18, 18, 1)",
                coldcolor: "rgba(12, 248, 100, 1)",
                warmcolor: "rgba(195, 248, 100, 1)",
                hotcolor: "rgba(255, 193, 10, 1)",
                overloadcolor: "rgba(255, 10, 10, 1)"
            }
        };
    }
    className = "vbargraph";

    label: HTMLDivElement;
    canvas: HTMLCanvasElement;
    span: HTMLSpanElement;
    ctx: CanvasRenderingContext2D;
    componentWillMount() {
        super.componentWillMount();
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.span = document.createElement("span");
        this.span.innerText = (+this.state.value.toFixed(3)).toString() + (this.state.units || "");
        this.setStyle();
    }
    handleChange = (e: Event) => {
        this.setValue(+(e.currentTarget as HTMLInputElement).value);
        this.paint();
    }
    setStyle() {
        const style = { ...this.defaultProps.style, ...this.state.style };
        this.span.style.fontSize = `${style.fontsize || style.height * 0.05}px`;
        this.span.style.color = style.textcolor;
        this.label.style.fontSize = `${style.height * 0.05}px`;
        this.label.style.color = style.labelcolor;
        this.container.style.backgroundColor = style.bgcolor;
        this.container.style.borderColor = style.bordercolor;
        this.paint();
    }
    componentDidMount() {
        super.componentDidMount();
        this.state.emitter.on("uiConnected", () => this.paint());
        this.span.addEventListener("change", this.handleChange);
        this.canvas.addEventListener("mousedown", this.handleMouseDown);
        this.canvas.addEventListener("touchstart", this.handleTouchStart, { passive: false });
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("value", () => {
            this.span.innerText = (+this.state.value.toFixed(3)).toString() + (this.state.units || "");
            this.paint();
        });
        this.on("max", () => this.paint());
        this.on("min", () => this.paint());
        this.on("step", () => this.paint());
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.canvas);
        this.container.appendChild(this.span);
        return super.mount();
    }
    paintValue: number = 0;
    maxValue: number = -Infinity;
    maxTimer: number;
    paint() {
        const { barbgcolor, coldcolor, warmcolor, hotcolor, overloadcolor } = { ...this.defaultProps.style, ...this.state.style };
        const { min, max, value } = this.state;
        const ctx = this.ctx;
        const canvas = this.canvas;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;

        this.paintValue = value;
        const paintValue = this.paintValue;
        if (paintValue > this.maxValue) {
            this.maxValue = paintValue;
            if (this.maxTimer) window.clearTimeout(this.maxTimer);
            this.maxTimer = window.setTimeout(() => {
                this.maxValue = this.paintValue;
                this.maxTimer = undefined;
            }, 1000);
        }
        if (paintValue < this.maxValue && typeof this.maxTimer === "undefined") {
            this.maxTimer = window.setTimeout(() => {
                this.maxValue = this.paintValue;
                this.maxTimer = undefined;
            }, 1000);
        }
        const maxValue = this.maxValue;
        const coldStop = (-18 - min) / (max - min);
        const warmStop = (-6 - min) / (max - min);
        const hotStop = (-3 - min) / (max - min);
        const overloadStop = -min / (max - min);
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        if (coldStop <= 1 && coldStop >= 0) gradient.addColorStop(coldStop, coldcolor);
        else if (coldStop > 1) gradient.addColorStop(1, coldcolor);
        if (warmStop <= 1 && warmStop >= 0) gradient.addColorStop(warmStop, warmcolor);
        if (hotStop <= 1 && hotStop >= 0) gradient.addColorStop(hotStop, hotcolor);
        if (overloadStop <= 1 && overloadStop >= 0) gradient.addColorStop(overloadStop, overloadcolor);
        else if (overloadStop < 0) gradient.addColorStop(0, coldcolor);

        ctx.fillStyle = barbgcolor;
        if (paintValue < 0) ctx.fillRect(0, (1 - overloadStop) * height, width, height * overloadStop);
        if (paintValue < max) ctx.fillRect(0, 0, width, (1 - overloadStop) * height - 1);
        ctx.fillStyle = gradient;
        if (paintValue > min) {
            const drawHeight = (Math.min(0, paintValue) - min) / (max - min);
            ctx.fillRect(0, (1 - drawHeight) * height, width, height * drawHeight);
        }
        if (paintValue > 0) {
            const drawHeight = Math.min(max, paintValue) / (max - min);
            ctx.fillRect(0, (1 - overloadStop - drawHeight) * height, width, height * drawHeight - 1);
        }
        if (maxValue > paintValue) {
            if (maxValue <= 0) {
                const drawHeight = (Math.min(0, maxValue) - min) / (max - min);
                ctx.fillRect(0, (1 - drawHeight) * height, width, 1);
            }
            if (maxValue > 0) {
                const drawHeight = Math.min(max, maxValue) / (max - min);
                ctx.fillRect(0, Math.max(0, (1 - overloadStop - drawHeight) * height - 1), width, 1);
            }
        }
    }
}
