type TFaustUI = TFaustUIGroup[];
type TFaustUIItem = TFaustUIInputItem | TFaustUIOutputItem | TFaustUIGroup;
type TFaustUIInputItem = {
    type: TFaustUIInputType;
    label: string;
    address: string;
    index: string;
    init?: string;
    min?: string;
    max?: string;
    step?: string;
    meta?: TFaustUIMeta[];
    layout?: TLayoutProp;
};
type TFaustUIOutputItem = {
    type: TFaustUIOutputType;
    label: string;
    address: string;
    index: string;
    min?: string;
    max?: string;
    meta?: TFaustUIMeta[];
    layout?: TLayoutProp;
};
type TFaustUIMeta = {
    [order: number]: string;
    style?: string; // "knob" | "menu{'Name0':value0;'Name1':value1}" | "radio{'Name0':value0;'Name1':value1}" | "led";
    unit?: string;
    scale?: "linear" | "exp" | "log";
    tooltip?: string;
    hidden?: string;
    [key: string]: string;
}
type TFaustUIGroupType = "vgroup" | "hgroup" | "tgroup";
type TFaustUIOutputType = "hbargraph" | "vbargraph";
type TFaustUIInputType = "vslider" | "hslider" | "button" | "checkbox" | "nentry";
type TFaustUIGroup = {
    type: TFaustUIGroupType;
    label: string;
    items: TFaustUIItem[];
    layout?: TLayoutProp;
}
type TFaustUIType = TFaustUIGroupType | TFaustUIOutputType | TFaustUIInputType;
interface FaustUIEventMap {
    "paramChangeByUI": { path: string; value: number };
    "paramChangeByDSP": { path: string; value: number };
    "uiChange": TFaustUI;
}
type TLayoutProp = {
    left?: number;
    top?: number;
    width: number;
    height: number;
    sizing: "horizontal" | "vertical" | "both" | "none";
}
type TLayoutType = "vgroup" | "hgroup" | "tgroup" | "hbargraph" | "vbargraph" | "vslider" | "hslider" | "button" | "checkbox" | "nentry" | "label" | "knob" | "menu" | "radio" | "led";
type TLayout = { [path: string]: TLayoutProp };
