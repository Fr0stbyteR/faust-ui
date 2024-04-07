import type { FaustUIInputType, FaustUIItem, FaustUIMeta, FaustUIOutputType } from "@grame/faustwasm";
import type { LayoutProps } from "../types";
import type IItem from "./IItem";

export default abstract class AbstractItem implements IItem {
    type: FaustUIInputType | FaustUIOutputType;
    label: string;
    address: string;
    url: string;
    index: number;
    init: number;
    min: number;
    max: number;
    meta?: FaustUIMeta[];
    layout: LayoutProps;
    constructor(item: FaustUIItem) {
        Object.assign(this, item);
        this.min = isFinite(+this.min) ? +this.min : 0;
        this.max = isFinite(+this.max) ? +this.max : 1;
    }

    adjust(): this {
        return this;
    }
    expand(dX: number, dY: number): this {
        return this;
    }
    offset(): this {
        return this;
    }
}
