import { AbstractItem } from "./AbstractItem";

export abstract class AbstractOutputItem extends AbstractItem {
    constructor(item: TFaustUIOutputItem) {
        super(item);
    }
}
