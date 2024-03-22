import { fillRoundedRect } from "./utils";
import VSlider from "./VSlider";
import "./HSlider.scss";

export default class HSlider extends VSlider {
    className = "hslider";

    paintLabel() {
        return super.paintLabel("left");
    }
    setStyle = () => {
        const { height, grid, fontsize, textcolor, bgcolor, bordercolor } = this.state.style;
        this.input.style.fontSize = `${fontsize || height * grid * 0.2}px`;
        this.input.style.color = textcolor;
        this.container.style.backgroundColor = bgcolor;
        this.container.style.borderColor = bordercolor;
    };
    paint = () => {
        const { sliderwidth, sliderbgcolor, sliderbgoncolor, slidercolor } = this.state.style;
        const ctx = this.ctx;
        const canvas = this.canvas;
        const distance = this.distance;
        const ratio = window.devicePixelRatio || 1;
        let { width, height } = this.canvasDiv.getBoundingClientRect();
        width = Math.floor(width);
        height = Math.floor(height);
        const scaledWidth = Math.floor(width * ratio);
        const scaledHeight = Math.floor(height * ratio);
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        // canvas.style.width = width + "px";
        // canvas.style.height = height + "px";
        ctx.scale(ratio, ratio);

        const drawWidth = width * 0.9;
        const drawHeight = sliderwidth || Math.min(height / 3, drawWidth * 0.05);
        const left = width * 0.05;
        const top = (height - drawHeight) * 0.5;
        const borderRadius = drawHeight * 0.25;
        this.interactionRect = [left, 0, drawWidth, height];
        const grd = ctx.createLinearGradient(left, 0, left + drawWidth, 0);
        grd.addColorStop(Math.max(0, Math.min(1, distance)), sliderbgoncolor);
        grd.addColorStop(Math.max(0, Math.min(1, distance)), sliderbgcolor);
        ctx.fillStyle = grd;
        fillRoundedRect(ctx, left, top, drawWidth, drawHeight, borderRadius);
        // draw slider
        ctx.fillStyle = slidercolor;
        fillRoundedRect(ctx, left + drawWidth * distance - drawHeight, top - drawHeight, drawHeight * 2, drawHeight * 3, borderRadius);
    };
}
