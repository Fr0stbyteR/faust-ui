import { AbstractItem } from "./AbstractItem";

export abstract class AbstractOutputItem extends AbstractItem {
    init: number;
    step: number;
    constructor(item: TFaustUIOutputItem) {
        super(item);
        this.init = +this.init || 0;
        this.step = +this.step || 1;
    }
}
