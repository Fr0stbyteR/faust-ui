import type { FaustUIType } from "@grame/faustwasm";
import type { LayoutProps } from "../types";

export default interface IItem {
    /**
     * Initial type of item given by Faust compiler
     */
    type: FaustUIType;
    /**
     * Initial item label given by Faust compiler
     */
    label: string;
    /**
     * Calculated layout
     */
    layout: LayoutProps;

    /**
     * Adjust group width and height by its items' dimensions
     */
    adjust(): this;
    /**
     * Expand flexible items within a group
     *
     * @param dX - Extra horizontal spaces that this group could take
     * @param dY - Extra vertical spaces that this group could take
     */
    expand(dX: number, dY: number): this;

    /**
     * calculate all the items' absolute coordination (in grids)
     */
    offset(): this;
}
