import { AbstractItem } from "./AbstractItem";
import { TFaustUIInputItem } from "../types";

export abstract class AbstractInputItem extends AbstractItem {
    init: number;
    step: number;
    constructor(item: TFaustUIInputItem) {
        super(item);
        this.init = +item.init || 0;
        this.step = +item.step || 1;
    }
}
