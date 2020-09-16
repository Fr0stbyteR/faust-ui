export type TFaustUI = TFaustUIItem[];
export type TFaustUIItem = TFaustUIInputItem | TFaustUIOutputItem | TFaustUIGroup;
export type TFaustUIInputItem = {
    type: TFaustUIInputType;
    label: string;
    address: string;
    index: number;
    init?: number;
    min?: number;
    max?: number;
    step?: number;
    meta?: TFaustUIMeta[];
    layout?: TLayoutProp;
};
export type TFaustUIOutputItem = {
    type: TFaustUIOutputType;
    label: string;
    address: string;
    index: number;
    min?: number;
    max?: number;
    meta?: TFaustUIMeta[];
    layout?: TLayoutProp;
};
export type TFaustUIMeta = {
    [order: number]: string;
    style?: string; // "knob" | "menu{'Name0':value0;'Name1':value1}" | "radio{'Name0':value0;'Name1':value1}" | "led";
    unit?: string;
    scale?: "linear" | "exp" | "log";
    tooltip?: string;
    hidden?: string;
    [key: string]: string;
};
export type TFaustUIGroupType = "vgroup" | "hgroup" | "tgroup";
export type TFaustUIOutputType = "hbargraph" | "vbargraph";
export type TFaustUIInputType = "vslider" | "hslider" | "button" | "checkbox" | "nentry";
export type TFaustUIGroup = {
    type: TFaustUIGroupType;
    label: string;
    items: TFaustUIItem[];
    layout?: TLayoutProp;
};
export type TFaustUIType = TFaustUIGroupType | TFaustUIOutputType | TFaustUIInputType;
export interface FaustUIEventMap {
    "paramChangeByUI": { path: string; value: number };
    "paramChangeByDSP": { path: string; value: number };
    "uiWillChange": TFaustUI;
    "uiChanged": TFaustUI;
    "uiConnected": TFaustUI;
    "layoutChange": undefined;
}
export type TLayoutProp = {
    type: TLayoutType;
    left?: number;
    top?: number;
    offsetLeft?: number; // relative to parent group
    offsetTop?: number;
    width: number;
    height: number;
    sizing: "horizontal" | "vertical" | "both" | "none";
};
export type TLayoutType = "vgroup" | "hgroup" | "tgroup" | "hbargraph" | "vbargraph" | "vslider" | "hslider" | "button" | "checkbox" | "nentry" | "knob" | "menu" | "radio" | "led" | "numerical";
export type TLayout = { [path: string]: TLayoutProp };
export interface LayoutTypeMap {
    "vgroup": TFaustUIGroup;
    "hgroup": TFaustUIGroup;
    "tgroup": TFaustUIGroup;
    "hbargraph": TFaustUIOutputItem;
    "vbargraph": TFaustUIOutputItem;
    "led": TFaustUIOutputItem;
    "numerical": TFaustUIOutputItem;
    "vslider": TFaustUIInputItem;
    "hslider": TFaustUIInputItem;
    "button": TFaustUIInputItem;
    "checkbox": TFaustUIInputItem;
    "nentry": TFaustUIInputItem;
    "knob": TFaustUIInputItem;
    "menu": TFaustUIInputItem;
    "radio": TFaustUIInputItem;
}
