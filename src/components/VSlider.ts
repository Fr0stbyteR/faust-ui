import { AbstractItem } from "./AbstractItem";
import { FaustUIItemProps, PointerDownEvent, PointerDragEvent } from "./types";
import "./VSlider.scss";
import { FaustUINentryStyle } from "./Nentry";
import { fillRoundedRect } from "./utils";

interface FaustUISliderStyle extends FaustUINentryStyle {
    sliderwidth?: number;
    sliderbgcolor?: string;
    sliderbgoncolor?: string;
    slidercolor?: string;
}
export class VSlider extends AbstractItem<FaustUISliderStyle> {
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
                textcolor: "rgba(18, 18, 18, 1)",
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
    inputNumber: HTMLInputElement;
    input: HTMLInputElement;
    flexDiv: HTMLDivElement;
    canvasDiv: HTMLDivElement;
    ctx: CanvasRenderingContext2D;
    interactionRect: number[] = [0, 0, 0, 0];
    componentWillMount() {
        super.componentWillMount();
        this.flexDiv = document.createElement("div");
        this.flexDiv.className = `faust-ui-component-${this.className}-flexdiv`;
        this.canvasDiv = document.createElement("div");
        this.canvasDiv.className = `faust-ui-component-${this.className}-canvasdiv`;
        this.canvas = document.createElement("canvas");
        this.canvas.width = 10;
        this.canvas.height = 10;
        this.ctx = this.canvas.getContext("2d");
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.label.innerText = this.state.label;
        this.inputNumber = document.createElement("input");
        this.inputNumber.type = "number";
        this.inputNumber.value = (+this.state.value.toFixed(3)).toString();
        this.inputNumber.max = this.state.max.toString();
        this.inputNumber.min = this.state.min.toString();
        this.inputNumber.step = this.state.step.toString();
        this.input = document.createElement("input");
        this.input.value = this.inputNumber.value + (this.state.unit || "");
        this.input.spellcheck = false;
        this.setStyle();
        return this;
    }
    handleChange = (e: Event) => {
        this.inputNumber.value = parseFloat((e.currentTarget as HTMLInputElement).value).toFixed(3).toString();
        this.setValue(+this.inputNumber.value);
        // this.schedule(this.paint);
    }
    setStyle = () => {
        const { height, width, grid, fontsize, textcolor, labelcolor, bgcolor, bordercolor } = this.state.style;
        const fontSize = Math.min(height * grid * 0.05, width * grid * 0.2);
        this.inputNumber.style.fontSize = `${fontsize || fontSize}px`;
        this.inputNumber.style.color = textcolor;
        this.label.style.fontSize = `${fontSize}px`;
        this.label.style.color = labelcolor;
        this.container.style.backgroundColor = bgcolor;
        this.container.style.borderColor = bordercolor;
    }
    componentDidMount() {
        super.componentDidMount();
        this.input.addEventListener("change", this.handleChange);
        this.canvas.addEventListener("mousedown", this.handleMouseDown);
        this.canvas.addEventListener("touchstart", this.handleTouchStart, { passive: false });
        this.on("style", () => {
            this.schedule(this.setStyle);
            this.schedule(this.paint);
        });
        const labelChange = () => this.label.innerText = this.state.label;
        this.on("label", () => this.schedule(labelChange));
        const valueChange = () => {
            this.inputNumber.value = (+this.state.value.toFixed(3)).toString();
            this.input.value = this.inputNumber.value + (this.state.unit || "");
        };
        this.on("value", () => {
            this.schedule(valueChange);
            this.schedule(this.paint);
        });
        const maxChange = () => this.inputNumber.max = this.state.max.toString();
        this.on("max", () => {
            this.schedule(maxChange);
            this.schedule(this.paint);
        });
        const minChange = () => this.inputNumber.min = this.state.min.toString();
        this.on("min", () => {
            this.schedule(minChange);
            this.schedule(this.paint);
        });
        const stepChange = () => this.inputNumber.step = this.state.step.toString();
        this.on("step", () => {
            this.schedule(stepChange);
            this.schedule(this.paint);
        });
        this.schedule(this.paint);
        return this;
    }
    mount() {
        this.canvasDiv.appendChild(this.canvas);
        this.flexDiv.appendChild(this.canvasDiv);
        this.flexDiv.appendChild(this.input);
        this.container.appendChild(this.label);
        this.container.appendChild(this.flexDiv);
        return super.mount();
    }
    paint = () => {
        const { sliderwidth, sliderbgcolor, sliderbgoncolor, slidercolor } = this.state.style;
        const ctx = this.ctx;
        const canvas = this.canvas;
        const distance = this.distance;
        let { width, height } = this.canvasDiv.getBoundingClientRect();
        width = Math.floor(width);
        height = Math.floor(height);
        canvas.width = width;
        canvas.height = height;

        const drawHeight = height * 0.9;
        const drawWidth = sliderwidth || Math.min(width / 3, drawHeight * 0.05);
        const left = (width - drawWidth) * 0.5;
        const top = height * 0.05;
        const borderRadius = drawWidth * 0.25;
        this.interactionRect = [0, top, width, drawHeight];
        const grd = ctx.createLinearGradient(0, top, 0, top + drawHeight);
        grd.addColorStop(Math.max(0, Math.min(1, 1 - distance)), sliderbgcolor);
        grd.addColorStop(Math.max(0, Math.min(1, 1 - distance)), sliderbgoncolor);
        ctx.fillStyle = grd;
        fillRoundedRect(ctx, left, top, drawWidth, drawHeight, borderRadius);
        // draw slider
        ctx.fillStyle = slidercolor;
        fillRoundedRect(ctx, left - drawWidth, top + drawHeight * (1 - distance) - drawWidth, drawWidth * 3, drawWidth * 2, borderRadius);
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
