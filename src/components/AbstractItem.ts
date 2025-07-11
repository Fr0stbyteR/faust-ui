import AbstractComponent from "./AbstractComponent";
import { normalize, normExp, normLog } from "./utils";
import type { FaustUIItemStyle, FaustUIItemProps, PointerDownEvent as MouseOrTouchDownEvent, PointerDragEvent as MouseOrTouchMoveEvent, PointerUpEvent as MouseOrTouchUpEvent } from "./types";
import "./Base.scss";

/**
 * Abstract class that describes a FaustUI Component
 * this is an event emitter that emits every state change to inform UI renderer parts
 * Each UI parts could subscribe to a specific state such as `value`, `min`, `max` or `style`
 * when the event subscribed is fired, this part of ui updated using its own handler without updating the rest of UI parts
 * the types of events is restricted to the same as keys of `state` object:
 * `state` object is a `FaustUIItemProps` with a `style` object that contains `T` defined by child class.
 * Child class can override life cycle methods
 * `componentWillMount` prepare data before DOM get loads to page
 * `mount` get DOMs append to page
 * `componentDidMount` Now draw canvas etc.
 */
export default abstract class AbstractItem<T extends FaustUIItemStyle> extends AbstractComponent<FaustUIItemProps<T>> {
    /**
     * The default state of the component.
     */
    static defaultProps: FaustUIItemProps<FaustUIItemStyle> = {
        value: 0,
        active: true,
        focus: false,
        label: "",
        address: "",
        min: 0,
        max: 1,
        init: 0,
        enums: {},
        type: "float",
        unit: "",
        scale: "linear",
        step: 0.01,
        style: { width: 45, height: 15, left: 0, top: 0, labelcolor: "rgba(226, 222, 255, 0.5)" }
    };
    /**
     * DOM Div container of the component
     */
    container: HTMLDivElement;
    /**
     * DOM Div container of label canvas
     */
    label: HTMLDivElement;
    /**
     * Use canvas as label to fit full text in.
     */
    labelCanvas: HTMLCanvasElement;
    labelCtx: CanvasRenderingContext2D;
    /**
     * Override this to get css work
     */
    className: string;
    frameReduce = 3;
    /**
     * Default DOM event listeners, unify mousedown and touchstart events
     * For mouse or touch events, please use `handlePointerDown` `handlePointerUp` `handlePointerDrag` callbacks
     */
    handleKeyDown = (e: KeyboardEvent) => {};
    handleKeyUp = (e: KeyboardEvent) => {};
    handleTouchStart = (e: TouchEvent) => {
        e.preventDefault();
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        let prevX = e.touches[0].clientX;
        let prevY = e.touches[0].clientY;
        const fromX = prevX - rect.left;
        const fromY = prevY - rect.top;
        const prevValue = this.state.value;
        this.handleMouseOrTouchDown({ pointerId: -1, x: fromX, y: fromY, originalEvent: e });
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const clientX = e.changedTouches[0].clientX;
            const clientY = e.changedTouches[0].clientY;
            const movementX = clientX - prevX;
            const movementY = clientY - prevY;
            prevX = clientX;
            prevY = clientY;
            const x = clientX - rect.left;
            const y = clientY - rect.top;
            this.handleMouseOrTouchMove({ pointerId: -1, prevValue, x, y, fromX, fromY, movementX, movementY, originalEvent: e });
        };
        const handleTouchEnd = (e: TouchEvent) => {
            e.preventDefault();
            const x = e.changedTouches[0].clientX - rect.left;
            const y = e.changedTouches[0].clientY - rect.top;
            this.handleMouseOrTouchUp({ pointerId: -1, x, y, originalEvent: e });
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
        document.addEventListener("touchmove", handleTouchMove, { passive: false });
        document.addEventListener("touchend", handleTouchEnd, { passive: false });
    };
    handleWheel = (e: WheelEvent) => {};
    handleClick = (e: MouseEvent) => {};
    /**
     * Handle double-click events to reset the value to its initial state.
     */
    handleDoubleClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        this.setToInitialValue();
    };
    handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        (e.currentTarget as HTMLElement).focus();
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const fromX = e.clientX - rect.left;
        const fromY = e.clientY - rect.top;
        const prevValue = this.state.value;
        this.handleMouseOrTouchDown({ pointerId: -1, x: fromX, y: fromY, originalEvent: e });
        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.handleMouseOrTouchMove({ pointerId: -1, prevValue, x, y, fromX, fromY, movementX: e.movementX, movementY: e.movementY, originalEvent: e });
        };
        const handleMouseUp = (e: MouseEvent) => {
            e.preventDefault();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.handleMouseOrTouchUp({ pointerId: -1, x, y, originalEvent: e });
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
    handleMouseOver = (e: MouseEvent) => {};
    handleMouseOut = (e: MouseEvent) => {};
    handleContextMenu = (e: MouseEvent) => {};
    handlePointerDown = (e: PointerEvent) => {
        e.preventDefault();
        (e.currentTarget as HTMLElement).focus();
        const { pointerId } = e;
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const fromX = e.clientX - rect.left;
        const fromY = e.clientY - rect.top;
        const prevValue = this.state.value;
        this.handleMouseOrTouchDown({ pointerId, x: fromX, y: fromY, originalEvent: e });
        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerId !== pointerId) return;
            e.preventDefault();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.handleMouseOrTouchMove({ pointerId, prevValue, x, y, fromX, fromY, movementX: e.movementX, movementY: e.movementY, originalEvent: e });
        };
        const handlePointerUp = (e: PointerEvent) => {
            if (e.pointerId !== pointerId) return;
            e.preventDefault();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            this.handleMouseOrTouchUp({ pointerId, x, y, originalEvent: e });
            document.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("pointerup", handlePointerUp);
        };
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp);
        
    };
    handleMouseOrTouchDown = (e: MouseOrTouchDownEvent) => {};
    handleMouseOrTouchMove = (e: MouseOrTouchMoveEvent) => {};
    handleMouseOrTouchUp = (e: MouseOrTouchUpEvent) => {};
    handleFocusIn = (e: FocusEvent) => this.setState({ focus: true });
    handleFocusOut = (e: FocusEvent) => this.setState({ focus: false });

    /**
     * Initiate default state with incoming state.
     */
    constructor(props?: FaustUIItemProps<T>) {
        super(props);
        this.state.style = { ...this.defaultProps.style, ...props.style };
        if (this.state.emitter) this.state.emitter.register(this.state.address, this);
    }
    /**
     * Get a nearest valid number
     */
    toValidNumber(value: number) {
        const { min, max, step } = this.state;
        if (typeof min !== "number" || typeof max !== "number") return value;
        const v = Math.min(max, Math.max(min, value));
        if (!step) return v;
        return min + Math.floor((v - min) / step) * step;
    }
    /**
     * Use this method if you want the emitter to send value to DSP
     */
    setValue(valueIn: number) {
        const value = this.toValidNumber(valueIn);
        const changed = this.setState({ value });
        if (changed) this.change(value);
        return changed;
    }
    setToInitialValue() {
        this.setValue(this.state.init);
    }
    /**
     * Send value to DSP
     */
    change(valueIn?: number) {
        if (this.state.emitter) this.state.emitter.paramChangeByUI(this.state.address, typeof valueIn === "number" ? valueIn : this.state.value);
    }
    /**
     * set internal state and fire events for UI parts subscribed
     * This will not send anything to DSP
     * @returns is state updated
     */
    setState(newState: { [key in keyof FaustUIItemProps<T>]?: FaustUIItemProps<T>[key] }) {
        let shouldUpdate = false;
        for (const key in newState) {
            const stateKey = key as keyof FaustUIItemProps<T>;
            const stateValue = newState[stateKey];
            if (stateKey === "style") {
                for (const styleKey in newState.style) {
                    if (styleKey in this.state.style /* Fix hidden -> canvas not rendered bug && this.state.style[styleKey] !== newState.style[styleKey] */) {
                        this.state.style[styleKey] = newState.style[styleKey];
                        shouldUpdate = true;
                    }
                }
            } else if (stateKey in this.state && this.state[stateKey] !== stateValue) {
                (this.state as any)[stateKey] = stateValue;
                shouldUpdate = true;
            } else return false;
            if (shouldUpdate) this.emit(stateKey, this.state[stateKey]);
        }
        return shouldUpdate;
    }
    /**
     * Create container with class name
     * override it with `super.componentWillMount();`
     */
    componentWillMount() {
        this.container = document.createElement("div");
        this.container.className = ["faust-ui-component", "faust-ui-component-" + this.className].join(" ");
        this.container.tabIndex = 1;
        this.container.id = this.state.address;
        if (this.state.tooltip) this.container.title = this.state.tooltip;
        this.label = document.createElement("div");
        this.label.className = "faust-ui-component-label";
        this.labelCanvas = document.createElement("canvas");
        this.labelCtx = this.labelCanvas.getContext("2d");
        return this;
    }
    /**
     * Here append all child DOM to container
     */
    mount() {
        this.label.appendChild(this.labelCanvas);
        return this;
    }
    paintLabel(align?: CanvasTextAlign) {
        const label = this.state.label;
        const color = this.state.style.labelcolor;
        const ctx = this.labelCtx;
        const canvas = this.labelCanvas;
        const ratio = window.devicePixelRatio || 1;
        let { width, height } = this.label.getBoundingClientRect();
        if (!width || !height) return this;
        width = Math.floor(width);
        height = Math.floor(height);
        const scaledWidth = Math.floor(width * ratio);
        const scaledHeight = Math.floor(height * ratio);
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        // canvas.style.width = width + "px";
        // canvas.style.height = height + "px";
        ctx.scale(ratio, ratio);
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = color;
        ctx.textBaseline = "middle";
        ctx.textAlign = align || "center";
        ctx.font = `bold ${height * 0.9}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
        ctx.fillText(label, align === "left" ? 0 : align === "right" ? width : width / 2, height / 2, width);
        return this;
    }
    /**
     * will call this method when mounted
     */
    componentDidMount() {
        const handleResize = () => {
            const { grid, left, top, width, height } = this.state.style;
            this.container.style.width = `${width * grid}px`;
            this.container.style.height = `${height * grid}px`;
            this.container.style.left = `${left * grid}px`;
            this.container.style.top = `${top * grid}px`;
            this.label.style.height = `${grid * 0.25}px`;
            this.paintLabel();
        };
        this.on("style", () => this.schedule(handleResize));
        handleResize();
        return this;
    }
    /**
     * Count steps in range min-max with step
     */
    get stepsCount() {
        const { type, max, min, step, enums } = this.state;
        const maxSteps = type === "enum" ? enums.length : type === "int" ? max - min : (max - min) / step;
        if (step) {
            if (type === "enum") return enums.length;
            if (type === "int") return Math.min(Math.floor((max - min) / (Math.round(step) || 1)), maxSteps);
            return Math.floor((max - min) / step);
        }
        return maxSteps;
    }
    /**
     * Normalized value between 0 - 1.
     */
    get distance() {
        const { type, max, min, value, enums, scale } = this.state;
        return AbstractItem.getDistance({ type, max, min, value, enums, scale });
    }
    static getDistance(state: { value: number; min: number; max: number; enums?: { [key: string]: number }; type: "enum" | "int" | "float"; scale: "linear" | "exp" | "log" }) {
        const { type, max, min, value, enums, scale } = state;
        if (type === "enum") return value / (enums.length - 1);
        const v = scale === "exp" ? normLog(value, min, max) : scale === "log" ? normExp(value, min, max) : value;
        return normalize(v, min, max);
    }
    /**
     * Mousemove pixels for each step
     */
    get stepRange() {
        const full = 100;
        const stepsCount = this.stepsCount;
        return full / stepsCount;
    }
}
