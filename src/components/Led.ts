import { FaustUIItem } from "./Base";
import { FaustUIItemProps } from "./types";
import "./Led.scss";
import { FaustUINentryStyle } from "./Nentry";

interface FaustUILedStyle extends FaustUINentryStyle {
    shape?: "circle" | "square";
    ledbgcolor?: string;
    coldcolor?: string;
    warmcolor?: string;
    hotcolor?: string;
    overloadcolor?: string;
}
export class FaustUILed extends FaustUIItem<FaustUILedStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUILedStyle> {
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
                shape: "circle",
                ledbgcolor: "rgba(18, 18, 18, 1)",
                coldcolor: "rgba(12, 248, 100, 1)",
                warmcolor: "rgba(195, 248, 100, 1)",
                hotcolor: "rgba(255, 193, 10, 1)",
                overloadcolor: "rgba(255, 10, 10, 1)"
            }
        };
    }
    className = "led";

    label: HTMLDivElement;
    canvas: HTMLCanvasElement;
    tempCanvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    tempCtx: CanvasRenderingContext2D;
    componentWillMount() {
        super.componentWillMount();
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.tempCanvas = document.createElement("canvas");
        this.tempCtx = this.tempCanvas.getContext("2d");
        this.tempCanvas.width = 128;
        this.tempCanvas.height = 1;
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.setStyle();
    }
    setStyle() {
        const style = { ...this.defaultProps.style, ...this.state.style };
        this.label.style.fontSize = `${style.height * 0.25}px`;
        this.label.style.color = style.labelcolor;
        this.container.style.backgroundColor = style.bgcolor;
        this.container.style.borderColor = style.bordercolor;
        this.paint();
    }
    componentDidMount() {
        super.componentDidMount();
        const handleUIConnected = () => this.paint();
        const handleUIWillChange = () => {
            this.state.emitter.off("uiConnected", handleUIConnected);
            this.state.emitter.off("uiWillChange", handleUIWillChange);
        };
        this.state.emitter.on("uiConnected", handleUIConnected);
        this.state.emitter.on("uiWillChange", handleUIWillChange);
        this.canvas.addEventListener("mousedown", this.handleMouseDown);
        this.canvas.addEventListener("touchstart", this.handleTouchStart, { passive: false });
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("value", () => this.paint());
        this.on("max", () => this.paint());
        this.on("min", () => this.paint());
        this.on("step", () => this.paint());
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.canvas);
        return super.mount();
    }
    paint() {
        const { shape, ledbgcolor, coldcolor, warmcolor, hotcolor, overloadcolor } = { ...this.defaultProps.style, ...this.state.style };
        const { min, max } = this.state;
        const { canvas, ctx, tempCanvas, tempCtx, distance } = this;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;

        const drawHeight = Math.min(height, width) * 0.75;
        const drawWidth = drawHeight;
        const left = (width - drawWidth) * 0.5;
        const top = (height - drawHeight) * 0.5;
        const coldStop = (-18 - min) / (max - min);
        const warmStop = (-6 - min) / (max - min);
        const hotStop = (-3 - min) / (max - min);
        const overloadStop = -min / (max - min);
        const gradient = tempCtx.createLinearGradient(0, 0, tempCanvas.width, 0);
        if (coldStop <= 1 && coldStop >= 0) gradient.addColorStop(coldStop, coldcolor);
        else if (coldStop > 1) gradient.addColorStop(1, coldcolor);
        if (warmStop <= 1 && warmStop >= 0) gradient.addColorStop(warmStop, warmcolor);
        if (hotStop <= 1 && hotStop >= 0) gradient.addColorStop(hotStop, hotcolor);
        if (overloadStop <= 1 && overloadStop >= 0) gradient.addColorStop(overloadStop, overloadcolor);
        else if (overloadStop < 0) gradient.addColorStop(0, coldcolor);
        tempCtx.fillStyle = gradient;
        tempCtx.fillRect(0, 0, tempCanvas.width, 10);
        const d = tempCtx.getImageData(Math.min(tempCanvas.width - 1, distance * tempCanvas.width), 0, 1, 1).data;
        if (distance) ctx.fillStyle = `rgb(${d[0]}, ${d[1]}, ${d[2]})`;
        else ctx.fillStyle = ledbgcolor;
        if (shape === "circle") ctx.arc(width / 2, height / 2, width / 2 - left, 0, 2 * Math.PI);
        else ctx.rect(left, top, drawWidth, drawHeight);
        ctx.fill();
    }
}
