import type { FaustUIItem } from "@grame/faustwasm";
import HSlider from "./HSlider";
import VSlider from "./VSlider";
import Nentry from "./Nentry";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Knob from "./Knob";
import Menu from "./Menu";
import Radio from "./Radio";
import Led from "./Led";
import Numerical from "./Numerical";
import HBargraph from "./HBargraph";
import VBargraph from "./VBargraph";
import HGroup from "./HGroup";
import VGroup from "./VGroup";
import TGroup from "./TGroup";
import type AbstractItem from "./AbstractItem";
import type AbstractGroup from "./AbstractGroup";
import type { TLayoutType } from "../types";

export default class Layout {
    /**
     * Get the rendering type of an item by parsing its metadata
     */
    static predictType(item: FaustUIItem): TLayoutType {
        if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup"
                || item.type === "button"
                || item.type === "checkbox"
        ) return item.type;
        if (item.type === "hbargraph" || item.type === "vbargraph") {
            if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("led"))) return "led";
            if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("numerical"))) return "numerical";
            return item.type;
        }
        if (item.type === "hslider" || item.type === "nentry" || item.type === "vslider") {
            if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("knob"))) return "knob";
            if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("menu"))) return "menu";
            if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("radio"))) return "radio";
        }
        return item.type;
    }
    /**
     * Get the Layout class constructor of an item
     */
    static getItem(item: FaustUIItem): AbstractItem | AbstractGroup {
        const Ctor = {
            hslider: HSlider,
            vslider: VSlider,
            nentry: Nentry,
            button: Button,
            checkbox: Checkbox,
            knob: Knob,
            menu: Menu,
            radio: Radio,
            led: Led,
            numerical: Numerical,
            hbargraph: HBargraph,
            vbargraph: VBargraph,
            hgroup: HGroup,
            vgroup: VGroup,
            tgroup: TGroup
        };
        const layoutType = this.predictType(item);
        return new Ctor[layoutType](item as any);
    }
    static getItems(items: FaustUIItem[]) {
        return items.map((item) => {
            if ("items" in item) item.items = this.getItems(item.items);
            return this.getItem(item);
        });
    }
    static calc(ui: FaustUIItem[]) {
        const rootGroup = new VGroup({ items: this.getItems(ui), type: "vgroup", label: "" }, true);
        rootGroup.adjust();
        rootGroup.expand(0, 0);
        rootGroup.offset();
        return rootGroup;
    }
}
