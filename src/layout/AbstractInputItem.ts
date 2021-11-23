import type { FaustUIInputItem } from "@shren/faustwasm";
import AbstractItem from "./AbstractItem";

export default abstract class AbstractInputItem extends AbstractItem {
    init: number;
    step: number;
    constructor(item: FaustUIInputItem) {
        super(item);
        this.init = +item.init || 0;
        this.step = +item.step || 1;
    }
}
