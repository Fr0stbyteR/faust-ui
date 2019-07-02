import { FaustUIItem } from "./Base";
import { FaustUIItemProps } from "./types";
import "./VSlider.scss";
import { FaustUINentryStyle } from "./Nentry";
import { fillRoundedRect } from "./utils";

interface FaustUISliderStyle extends FaustUINentryStyle {
    sliderwidth?: number;
    sliderbgcolor?: string;
    sliderbgoncolor?: string;
    slidercolor?: string;
}
export class FaustUIVSlider extends FaustUIItem<FaustUISliderStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUISliderStyle> {
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
                textcolor: "rgba(226, 222, 255, 0.5)",
                sliderwidth: undefined,
                sliderbgcolor: "rgba(18, 18, 18, 1)",
                sliderbgoncolor: "rgba(255, 165, 0, 1)",
                slidercolor: "rgba(200, 200, 200, 0.75)"
            }
        };
    }
    className = "vslider";

    label: HTMLDivElement;
    canvas: HTMLCanvasElement;
    input: HTMLInputElement;
    ctx: CanvasRenderingContext2D;
    interactionRect: number[] = [0, 0, 0, 0];
    componentWillMount() {
        super.componentWillMount();
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.input = document.createElement("input");
        this.input.type = "number";
        this.input.value = (+this.state.value.toFixed(3)).toString();
        this.input.max = this.state.max.toString();
        this.input.min = this.state.min.toString();
        this.input.step = this.state.step.toString();
        this.setStyle();
    }
    handleChange = (e: Event) => {
        this.setValue(+(e.currentTarget as HTMLInputElement).value);
        this.paint();
    }
    setStyle() {
        const style = { ...this.defaultProps.style, ...this.state.style };
        this.input.style.fontSize = `${style.fontsize || style.height * 0.05}px`;
        this.input.style.color = style.textcolor;
        this.label.style.fontSize = `${style.height * 0.05}px`;
        this.label.style.color = style.labelcolor;
        this.container.style.backgroundColor = style.bgcolor;
        this.container.style.borderColor = style.bordercolor;
        this.paint();
    }
    componentDidMount() {
        super.componentDidMount();
        this.state.emitter.on("uiConnected", () => this.paint());
        this.input.addEventListener("change", this.handleChange);
        this.canvas.addEventListener("mousedown", this.handleMouseDown);
        this.canvas.addEventListener("touchstart", this.handleTouchStart, { passive: false });
        this.on("style", () => this.setStyle());
        this.on("label", () => this.label.innerText = this.state.label);
        this.on("value", () => {
            this.input.value = (+this.state.value.toFixed(3)).toString();
            this.paint();
        });
        this.on("max", () => {
            this.input.max = this.state.max.toString();
            this.paint();
        });
        this.on("min", () => {
            this.input.min = this.state.min.toString();
            this.paint();
        });
        this.on("step", () => {
            this.input.step = this.state.step.toString();
            this.paint();
        });
    }
    mount() {
        this.container.appendChild(this.label);
        this.container.appendChild(this.canvas);
        this.container.appendChild(this.input);
        return super.mount();
    }
    paint() {
        const { sliderwidth, sliderbgcolor, sliderbgoncolor, slidercolor } = { ...this.defaultProps.style, ...this.state.style };
        const ctx = this.ctx;
        const canvas = this.canvas;
        const distance = this.distance;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;

        const drawHeight = height * 0.9;
        const drawWidth = sliderwidth || drawHeight * 0.05;
        const left = (width - drawWidth) * 0.5;
        const top = height * 0.05;
        this.interactionRect = [0, top, width, drawHeight];
        // draw upper
        if (distance < 1) {
            ctx.fillStyle = sliderbgcolor;
            fillRoundedRect(ctx, left, top, drawWidth, drawHeight * (1 - distance), drawWidth * 0.25);
        }
        // draw lower
        if (distance) {
            ctx.fillStyle = sliderbgoncolor;
            fillRoundedRect(ctx, left, top + drawHeight * (1 - distance), drawWidth, drawHeight * distance, drawWidth * 0.25);
        }
        // draw slider
        ctx.fillStyle = slidercolor;
        fillRoundedRect(ctx, left - drawWidth, drawHeight * (1 - distance), drawWidth * 3, height * 0.1, drawWidth * 0.25);
    }
    get trueSteps() {
        const { type, max, min, step, enums } = this.state;
        const full = this.interactionRect[this.className === "vslider" ? 3 : 2];
        const maxSteps = type === "enum" ? enums.length : type === "int" ? max - min : full;
        if (step) {
            if (type === "enum") return enums.length;
            if (type === "int") return Math.min(Math.floor((max - min) / (Math.round(step) || 0)), maxSteps);
            return Math.min(Math.floor((max - min) / step), maxSteps);
        }
        return maxSteps;
    }
    get stepRange() {
        const full = this.interactionRect[this.className === "vslider" ? 3 : 2];
        const trueSteps = this.trueSteps;
        return full / trueSteps;
    }
    getValueFromPos(e: { x: number; y: number }) {
        const { type, min, max } = this.state;
        const stepRange = this.stepRange;
        const trueSteps = this.trueSteps;
        const step = type === "enum" ? 1 : (max - min) / trueSteps;
        let steps = Math.round((this.className === "vslider" ? this.interactionRect[3] - (e.y - this.interactionRect[1]) : e.x - this.interactionRect[0]) / stepRange);
        steps = Math.min(trueSteps, Math.max(0, steps));
        if (type === "enum") return steps;
        if (type === "int") return Math.round(steps * step + min);
        return steps * step + min;
    }
    handlePointerDown = (e: PointerDownEvent) => {
        const { value } = this.state;
        if (
            e.x < this.interactionRect[0]
            || e.x > this.interactionRect[0] + this.interactionRect[2]
            || e.y < this.interactionRect[1]
            || e.y > this.interactionRect[1] + this.interactionRect[3]
        ) return;
        const newValue = this.getValueFromPos(e);
        if (newValue !== value) this.setValue(this.getValueFromPos(e));
    }
    handlePointerDrag = (e: PointerDragEvent) => {
        const newValue = this.getValueFromPos(e);
        if (newValue !== this.state.value) this.setValue(newValue);
    }
}
