import type { FaustUIItem } from "@grame/faustwasm";
import type FaustUI from "../FaustUI";

export interface FaustUIItemProps<T extends FaustUIItemStyle> {
    value?: number;
    active?: boolean;
    focus?: boolean;
    label?: string;
    address: string;
    min?: number;
    max?: number;
    step?: number;
    tooltip?: string;
    enums?: { [key: string]: number };
    type?: "enum" | "int" | "float";
    unit?: string;
    scale?: "linear" | "exp" | "log";
    style?: T;
    emitter?: FaustUI;
}
export interface FaustUIGroupProps {
    label?: string;
    type?: "tgroup" | "vgroup" | "hgroup";
    style?: FaustUIItemStyle;
    items?: FaustUIItem[];
    isRoot?: boolean;
    emitter?: FaustUI;
}
export interface FaustUIItemStyle {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    grid?: number;
    labelcolor?: string;
}
export interface PointerDownEvent {
    x: number;
    y: number;
    originalEvent: MouseEvent | TouchEvent;
}
export interface PointerDragEvent {
    prevValue: number;
    x: number;
    y: number;
    fromX: number;
    fromY: number;
    movementX: number;
    movementY: number;
    originalEvent: MouseEvent | TouchEvent;
}
export interface PointerUpEvent {
    x: number;
    y: number;
    originalEvent: MouseEvent | TouchEvent;
}
