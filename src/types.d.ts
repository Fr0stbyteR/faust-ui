import type { FaustUIDescriptor, FaustUIGroup, FaustUIInputItem, FaustUIOutputItem } from "@grame/faustwasm";

export interface FaustUIEventMap {
    "paramChangeByUI": { path: string; value: number };
    "paramChangeByDSP": { path: string; value: number };
    "uiWillChange": FaustUIDescriptor;
    "uiChanged": FaustUIDescriptor;
    "uiConnected": FaustUIDescriptor;
    "layoutChange": undefined;
}
export interface LayoutProps {
    type: TLayoutType;
    left?: number;
    top?: number;
    offsetLeft?: number; // relative to parent group
    offsetTop?: number;
    width: number;
    height: number;
    sizing: "horizontal" | "vertical" | "both" | "none";
}
export type TLayoutType = "vgroup" | "hgroup" | "tgroup" | "hbargraph" | "vbargraph" | "vslider" | "hslider" | "button" | "checkbox" | "nentry" | "soundfile" | "knob" | "menu" | "radio" | "led" | "numerical";
export interface ILayout { [path: string]: LayoutProps }
export interface LayoutTypeMap {
    "vgroup": FaustUIGroup;
    "hgroup": FaustUIGroup;
    "tgroup": FaustUIGroup;
    "hbargraph": FaustUIOutputItem;
    "vbargraph": FaustUIOutputItem;
    "led": FaustUIOutputItem;
    "numerical": FaustUIOutputItem;
    "vslider": FaustUIInputItem;
    "hslider": FaustUIInputItem;
    "button": FaustUIInputItem;
    "checkbox": FaustUIInputItem;
    "nentry": FaustUIInputItem;
    "soundfile": FaustUIInputItem;
    "knob": FaustUIInputItem;
    "menu": FaustUIInputItem;
    "radio": FaustUIInputItem;
}
