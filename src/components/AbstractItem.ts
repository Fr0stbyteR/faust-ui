/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaustUIItemStyle, FaustUIItemProps, PointerDownEvent, PointerDragEvent, PointerUpEvent } from "./types";
import "./Base.scss";
import { Component } from "./Component";

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
 *
 * @export
 * @abstract
 * @class AbstractItem
 * @extends {EventEmitter}
 * @template T
 */
export abstract class AbstractItem<T extends FaustUIItemStyle> extends Component<FaustUIItemProps<T>> {
    /**
     * The default state of the component.
     *
     * @static
     * @type {FaustUIItemProps<FaustUIItemStyle>}
     * @memberof AbstractItem
     */
    static defaultProps: FaustUIItemProps<FaustUIItemStyle> = {
        value: 0,
        active: true,
        focus: false,
        label: "",
        address: "",
        min: 0,
        max: 1,
        enums: {},
        type: "float",
        unit: "",
        exponent: 1,
        step: 0.01,
        style: { width: 45, height: 15, left: 0, top: 0 }
    }
    /**
     * DOM Div container of the componnt
     *
     * @type {HTMLDivElement}
     * @memberof AbstractItem
     */
    container: HTMLDivElement;
    /**
     * Override this to get css work
     *
     * @type {string}
     * @memberof AbstractItem
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
        let prevX = e.touches[0].pageX;
        let prevY = e.touches[0].pageY;
        const fromX = prevX - rect.left;
        const fromY = prevY - rect.top;
        const prevValue = this.state.value;
        this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const pageX = e.changedTouches[0].pageX;
            const pageY = e.changedTouches[0].pageY;
            const movementX = pageX - prevX;
            const movementY = pageY - prevY;
            prevX = pageX;
            prevY = pageY;
            const x = pageX - rect.left;
            const y = pageY - rect.top;
            this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX, movementY, originalEvent: e });
        };
        const handleTouchEnd = (e: TouchEvent) => {
            e.preventDefault();
            const x = e.changedTouches[0].pageX - rect.left;
            const y = e.changedTouches[0].pageY - rect.top;
            this.handlePointerUp({ x, y, originalEvent: e });
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
        document.addEventListener("touchmove", handleTouchMove, { passive: false });
        document.addEventListener("touchend", handleTouchEnd, { passive: false });
    };
    handleWheel = (e: WheelEvent) => {};
    handleClick = (e: MouseEvent) => {};
    handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        (e.currentTarget as HTMLElement).focus();
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const fromX = e.pageX - rect.left;
        const fromY = e.pageY - rect.top;
        const prevValue = this.state.value;
        this.handlePointerDown({ x: fromX, y: fromY, originalEvent: e });
        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            const x = e.pageX - rect.left;
            const y = e.pageY - rect.top;
            this.handlePointerDrag({ prevValue, x, y, fromX, fromY, movementX: e.movementX, movementY: e.movementY, originalEvent: e });
        };
        const handleMouseUp = (e: MouseEvent) => {
            e.preventDefault();
            const x = e.pageX - rect.left;
            const y = e.pageY - rect.top;
            this.handlePointerUp({ x, y, originalEvent: e });
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };
    handleMouseOver = (e: MouseEvent) => {};
    handleMouseOut = (e: MouseEvent) => {};
    handleContextMenu = (e: MouseEvent) => {};
    handlePointerDown = (e: PointerDownEvent) => {};
    handlePointerDrag = (e: PointerDragEvent) => {};
    handlePointerUp = (e: PointerUpEvent) => {};
    handleFocusIn = (e: FocusEvent) => this.setState({ focus: true });
    handleFocusOut = (e: FocusEvent) => this.setState({ focus: false });

    /**
     * Initiate default state with incoming state.
     * @param {FaustUIItemProps<T>} [props]
     * @memberof AbstractItem
     */
    constructor(props?: FaustUIItemProps<T>) {
        super(props);
        this.state.style = { ...this.defaultProps.style, ...props.style };
        if (this.state.emitter) this.state.emitter.register(this.state.address, this);
        return this;
    }
    /**
     * Use this method if you want the emitter to send value to DSP
     *
     * @param {number} value
     * @memberof AbstractItem
     */
    setValue(value: number) {
        this.setState({ value });
        this.change(value);
    }
    /**
     * Send value to DSP
     *
     * @param {number} [valueIn]
     * @memberof AbstractItem
     */
    change(valueIn?: number) {
        if (this.state.emitter) this.state.emitter.paramChangeByUI(this.state.address, typeof valueIn === "number" ? valueIn : this.state.value);
    }
    /**
     * set internal state and fire events for UI parts subscribed
     * This will not send anything to DSP
     *
     * @param {{ [key in keyof FaustUIItemProps<T>]?: FaustUIItemProps<T>[key] }} newState
     * @returns
     * @memberof AbstractItem
     */
    setState(newState: { [key in keyof FaustUIItemProps<T>]?: FaustUIItemProps<T>[key] }) {
        let shouldUpdate = false;
        for (const key in newState) {
            const stateKey = key as keyof FaustUIItemProps<T>;
            const stateValue = newState[stateKey];
            if (stateKey === "style") {
                for (const styleKey in newState.style) {
                    if (styleKey in this.state.style && this.state.style[styleKey] !== newState.style[styleKey]) {
                        this.state.style[styleKey] = newState.style[styleKey];
                        shouldUpdate = true;
                    }
                }
            } else if (stateKey in this.state && this.state[stateKey] !== stateValue) {
                (this.state as any)[stateKey] = stateValue;
                shouldUpdate = true;
            } else return;
            if (shouldUpdate) this.emit(stateKey, this.state[stateKey]);
        }
    }
    /**
     * Create container with class name
     * override it with `super.componentWillMount();`
     *
     * @returns {this}
     * @memberof AbstractItem
     */
    componentWillMount(): this {
        this.container = document.createElement("div");
        this.container.className = ["faust-ui-component", "faust-ui-component-" + this.className].join(" ");
        this.container.tabIndex = 1;
        this.container.id = this.state.address;
        if (this.state.tooltip) this.container.title = this.state.tooltip;
        return this;
    }
    /**
     * Here append all child DOM to container
     *
     * @returns {this}
     * @memberof AbstractItem
     */
    mount(): this {
        return this;
    }
    /**
     * will call this method when mounted
     *
     * @returns {this}
     * @memberof AbstractItem
     */
    componentDidMount(): this {
        const handleResize = () => {
            const { grid, left, top, width, height } = this.state.style;
            this.container.style.width = `${width * grid}px`;
            this.container.style.height = `${height * grid}px`;
            this.container.style.left = `${left * grid}px`;
            this.container.style.top = `${top * grid}px`;
        };
        this.on("style", () => this.schedule(handleResize));
        handleResize();
        return this;
    }
    get steps() {
        const { type, max, min, step, enums } = this.state;
        const full = 100;
        const maxSteps = type === "enum" ? enums.length : type === "int" ? max - min : full;
        if (step) {
            if (type === "enum") return enums.length;
            if (type === "int") return Math.min(Math.floor((max - min) / (Math.round(step) || 1)), maxSteps);
            return Math.min(Math.floor((max - min) / step), maxSteps);
        }
        return maxSteps;
    }
    /**
     * Normalized value between 0 - 1.
     *
     * @readonly
     * @memberof AbstractItem
     */
    get distance() {
        const { type, max, min, value, enums } = this.state;
        return type === "enum" ? value / enums.length : (value - min) / (max - min);
    }
    /**
     * Mousemove pixels for each step
     *
     * @readonly
     * @memberof AbstractItem
     */
    get stepRange() {
        const full = 100;
        const trueSteps = this.steps;
        return full / trueSteps;
    }
}