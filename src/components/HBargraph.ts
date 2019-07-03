import "./HBargraph.scss";
import { FaustUIVBargraph } from "./VBargraph";

export class FaustUIHBargraph extends FaustUIVBargraph {
    className = "hbargraph";

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
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        if (coldStop <= 1 && coldStop >= 0) gradient.addColorStop(coldStop, coldcolor);
        else if (coldStop > 1) gradient.addColorStop(1, coldcolor);
        if (warmStop <= 1 && warmStop >= 0) gradient.addColorStop(warmStop, warmcolor);
        if (hotStop <= 1 && hotStop >= 0) gradient.addColorStop(hotStop, hotcolor);
        if (overloadStop <= 1 && overloadStop >= 0) gradient.addColorStop(overloadStop, overloadcolor);
        else if (overloadStop < 0) gradient.addColorStop(0, coldcolor);

        ctx.fillStyle = barbgcolor;
        if (paintValue < 0) ctx.fillRect(0, 0, width * overloadStop, height);
        if (paintValue < max) ctx.fillRect(width * overloadStop + 1, 0, width * (1 - overloadStop) - 1, height);
        ctx.fillStyle = gradient;
        if (paintValue > min) {
            const drawWidth = (Math.min(0, paintValue) - min) / (max - min);
            ctx.fillRect(0, 0, drawWidth * width, height);
        }
        if (paintValue > 0) {
            const drawWidth = Math.min(max, paintValue) / (max - min);
            ctx.fillRect(overloadStop * width + 1, 0, drawWidth * width - 1, height);
        }
        if (maxValue > paintValue) {
            if (maxValue <= 0) {
                const drawWidth = (Math.min(0, maxValue) - min) / (max - min);
                ctx.fillRect(drawWidth * width - 1, 0, 1, height);
            }
            if (maxValue > 0) {
                const drawWidth = Math.min(max, maxValue) / (max - min);
                ctx.fillRect(Math.min(width - 1, (overloadStop + drawWidth) * width), 0, 1, height);
            }
        }
    }
}
