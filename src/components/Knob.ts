import { FaustUIItem } from "./Base";
import { FaustUIItemProps, PointerDragEvent } from "./types";
import "./Knob.scss";
import { FaustUINentryStyle } from "./Nentry";
import { toRad } from "./utils";

interface FaustUIKnobStyle extends FaustUINentryStyle {
    knobwidth?: number;
    knobcolor?: string;
    knoboncolor?: string;
    needlecolor?: string;
}
export class FaustUIKnob extends FaustUIItem<FaustUIKnobStyle> {
    static get defaultProps(): FaustUIItemProps<FaustUIKnobStyle> {
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
                knobwidth: undefined,
                knobcolor: "rgba(18, 18, 18, 1)",
                knoboncolor: "rgba(255, 165, 0, 1)",
                needlecolor: "rgba(200, 200, 200, 0.75)"
            }
        };
    }
    className = "knob";

    label: HTMLDivElement;
    canvas: HTMLCanvasElement;
    input: HTMLInputElement;
    ctx: CanvasRenderingContext2D;
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
        this.input.style.fontSize = `${style.fontsize || style.height * 0.1}px`;
        this.input.style.color = style.textcolor;
        this.label.style.fontSize = `${style.height * 0.1}px`;
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
        const { knobwidth, knobcolor, knoboncolor, needlecolor } = { ...this.defaultProps.style, ...this.state.style };
        const ctx = this.ctx;
        const canvas = this.canvas;
        const distance = this.distance;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;

        const start = 5 / 8 * Math.PI;
        const end = 19 / 8 * Math.PI;
        const valPos = start + toRad(distance * 315);
        const dialHeight = Math.min(width, height) * 0.75;
        const dialRadius = dialHeight * 0.5;
        const dialCenterX = width * 0.5;
        const dialCenterY = height * 0.5;
        // const arcStartX = dialCenterX + (dialHeight * 0.5 * Math.cos(start));
        // const arcStartY = dialCenterY + (dialHeight * 0.5 * Math.sin(start));
        // const arcEndX = dialCenterX + (dialHeight * 0.5 * Math.cos(end));
        // const arcEndY = dialCenterY + (dialHeight * 0.5 * Math.sin(end));
        const valuePosX = dialCenterX + (dialHeight * 0.5 * Math.cos(valPos));
        const valuePosY = dialCenterY + (dialHeight * 0.5 * Math.sin(valPos));
        const lineWidth = knobwidth || dialRadius * 0.2;

        ctx.strokeStyle = knobcolor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        // draw background arc
        ctx.beginPath();
        ctx.arc(dialCenterX, dialCenterY, dialRadius, valPos, end);
        ctx.stroke();
        // draw value arc
        if (distance) {
            ctx.strokeStyle = knoboncolor;
            ctx.beginPath();
            ctx.arc(dialCenterX, dialCenterY, dialRadius, start, valPos);
            ctx.stroke();
        }
        // draw dial needle
        ctx.strokeStyle = needlecolor;
        ctx.beginPath();
        ctx.moveTo(dialCenterX, dialCenterY);
        ctx.lineTo(valuePosX, valuePosY);
        ctx.stroke();
    }
    getValueFromDelta(e: PointerDragEvent) {
        const { type, min, max } = this.state;
        const stepRange = this.stepRange;
        const trueSteps = this.trueSteps;
        const step = type === "enum" ? 1 : (max - min) / trueSteps;
        const prevSteps = type === "enum" ? e.prevValue : (e.prevValue - min) / step;
        const dSteps = Math.round((e.fromY - e.y) / stepRange);
        const steps = Math.min(trueSteps, Math.max(0, prevSteps + dSteps));
        if (type === "enum") return steps;
        if (type === "int") return Math.round(steps * step + min);
        return steps * step + min;
    }
    handlePointerDrag = (e: PointerDragEvent) => {
        const newValue = this.getValueFromDelta(e);
        if (newValue !== this.state.value) this.setValue(newValue);
    }
}
