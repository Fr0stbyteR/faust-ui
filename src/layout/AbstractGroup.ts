import type { FaustUIGroupType } from "@grame/faustwasm";
import IItem from "./IItem";
import AbstractItem from "./AbstractItem";
import type { LayoutProps } from "../types";

export default abstract class AbstractGroup implements IItem {
    static padding = 0.2;
    static labelHeight = 0.25;
    static spaceBetween = 0.1;
    isRoot: boolean;
    type: FaustUIGroupType;
    label: string;
    items: (AbstractGroup | AbstractItem)[];
    layout: LayoutProps;

    constructor(group: { type: FaustUIGroupType; label: string; items: (AbstractGroup | AbstractItem)[] }, isRoot?: boolean) {
        this.isRoot = !!isRoot;
        Object.assign(this, group);
        const { hasHSizingDesc, hasVSizingDesc } = this;
        const sizing = hasHSizingDesc && hasVSizingDesc ? "both" : hasHSizingDesc ? "horizontal" : hasVSizingDesc ? "vertical" : "none";
        this.layout = {
            type: group.type,
            width: AbstractGroup.padding * 2,
            height: AbstractGroup.padding * 2 + (this.isRoot ? 0 : AbstractGroup.labelHeight),
            sizing
        };
    }

    /**
     * find recursively if the group has horizontal-sizable item
     */
    get hasHSizingDesc(): boolean {
        return !!this.items.find((item) => {
            if (item instanceof AbstractGroup) return item.hasHSizingDesc;
            return item.layout.sizing === "horizontal" || item.layout.sizing === "both";
        });
    }
    /**
     * find recursively if the group has vertical-sizable item
     */
    get hasVSizingDesc(): boolean {
        return !!this.items.find((item) => {
            if (item instanceof AbstractGroup) return item.hasVSizingDesc;
            return item.layout.sizing === "vertical" || item.layout.sizing === "both";
        });
    }
    adjust() {
        return this;
    }
    expand(dX: number, dY: number) {
        return this;
    }
    offset() {
        return this;
    }
}
