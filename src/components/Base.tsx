/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { toMIDI } from "./utils";
import "./Base.scss";

export class FaustUIItem<T extends FaustUIItemStyle> extends React.Component {
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
        unitstyle: "native",
        units: "",
        exponent: 1,
        step: 0.01,
        style: { width: 15, height: 15 },
        onChange: () => undefined
    }
    get initialProps() {
        return (this.constructor as typeof FaustUIItem).defaultProps;
    }
    props: FaustUIItemProps<T>;
    state: FaustUIItemProps<T> = (this.constructor as typeof FaustUIItem).defaultProps as any;
    className: string;
    refDiv = React.createRef<HTMLDivElement>();

    get div() {
        return this.refDiv.current;
    }
    get eventHandler() {
        return {
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.handleKeyUp,
            onTouchStart: this.handleTouchStart,
            onWheel: this.handleWheel,
            onClick: this.handleClick,
            onMouseDown: this.handleMouseDown,
            onMouseOver: this.handleMouseOver,
            onMouseOut: this.handleMouseOut,
            onContextMenu: this.handleContextMenu,
            onFocus: this.handleFocusIn,
            onBlur: this.handleFocusOut
        };
    }
    get children() {
        return <></>;
    }
    get isConnected() {
        return !!this.refDiv.current;
    }
    handleKeyDown = (e: React.KeyboardEvent) => {};
    handleKeyUp = (e: React.KeyboardEvent) => {};
    handleTouchStart = (e: React.TouchEvent) => {
        this.div.focus();
        const rect = this.div.getBoundingClientRect();
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
    handleWheel = (e: React.WheelEvent) => {};
    handleClick = (e: React.MouseEvent) => {};
    handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        this.div.focus();
        const rect = this.div.getBoundingClientRect();
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
    handleMouseOver = (e: React.MouseEvent) => {};
    handleMouseOut = (e: React.MouseEvent) => {};
    handleContextMenu = (e: React.MouseEvent) => {};
    handlePointerDown = (e: PointerDownEvent) => {};
    handlePointerDrag = (e: PointerDragEvent) => {};
    handlePointerUp = (e: PointerUpEvent) => {};
    handleFocusIn = (e: React.FocusEvent) => this.setState({ focus: true });
    handleFocusOut = (e: React.FocusEvent) => this.setState({ focus: false });

    get displayValue() {
        const { value, type, unitstyle, units } = this.state;
        if (type === "enum") return Object.keys(this.state.enums).find(key => this.state.enums[key] === value) || "";
        if (type === "int") return value.toFixed(0);
        if (type === "float") return value.toFixed(2);
        if (unitstyle === "time") return value.toFixed(type === "int" ? 0 : 2) + " ms";
        if (unitstyle === "hertz") return value.toFixed(type === "int" ? 0 : 2) + " Hz";
        if (unitstyle === "decibel") return value.toFixed(type === "int" ? 0 : 2) + " dB";
        if (unitstyle === "%") return value.toFixed(type === "int" ? 0 : 2) + " %";
        if (unitstyle === "pan") return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
        if (unitstyle === "semitones") return value.toFixed(type === "int" ? 0 : 2) + " st";
        if (unitstyle === "midi") return toMIDI(value);
        if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
        if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
        return "N/A";
    }
    setValue(value: number) {
        this.setState({ value });
    }
    change() {
        if (this.state.onChange) this.state.onChange({ value: this.state.value, displayValue: this.displayValue });
    }
    componentDidMount() {
        this.setState(this.props);
        this.paint();
    }
    componentDidUpdate() {
        this.paint();
    }
    paint() {}
    render() {
        const style = this.state ? { ...this.initialProps.style, ...this.state.style } : this.initialProps.style;
        return (
            <div
                ref={this.refDiv}
                style={style}
                className={["faust-ui-component", "faust-ui-component-" + this.className].join(" ")}
                tabIndex={1}
                title={this.state.tooltip}
                children={this.children}
            />
        );
    }
}
