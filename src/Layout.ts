export class Layout {
    static padding = 0.2;
    static labelHeight = 0.25;
    static spaceBetween = 0.1;
    static itemLayoutMap: { [type: string]: TLayoutProp } = {
        hslider: {
            width: 5,
            height: 1,
            sizing: "horizontal"
        },
        vslider: {
            width: 1,
            height: 5,
            sizing: "vertical"
        },
        nentry: {
            width: 1,
            height: 1,
            sizing: "none"
        },
        button: {
            width: 2,
            height: 1,
            sizing: "horizontal"
        },
        checkbox: {
            width: 2,
            height: 1,
            sizing: "horizontal"
        },
        knob: {
            width: 1,
            height: 1.5,
            sizing: "none"
        },
        menu: {
            width: 2,
            height: 1,
            sizing: "horizontal"
        },
        radio: {
            width: 2,
            height: 2,
            sizing: "both"
        },
        led: {
            width: 1,
            height: 1,
            sizing: "none"
        },
        numerical: {
            width: 1,
            height: 1,
            sizing: "none"
        },
        hbargraph: {
            width: 5,
            height: 1,
            sizing: "horizontal"
        },
        vbargraph: {
            width: 1,
            height: 5,
            sizing: "vertical"
        },
        tab: {
            width: 2,
            height: 1,
            sizing: "none"
        }
    }
    static predictType(item: TFaustUIItem): TLayoutType {
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
    static injectLayout(ui: TFaustUIItem[]) {
        ui.forEach((item) => {
            if ("items" in item) this.injectLayout(item.items);
            else item.layout = { ...this.itemLayoutMap[this.predictType(item)] };
        });
        return ui;
    }
    static adjustLayout(uiInjected: TFaustUIItem[], directionIn?: "vertical" | "horizontal" | "stacked") {
        const hasHSizingDesc = this.hasHSizingDesc(uiInjected);
        const hasVSizingDesc = this.hasVSizingDesc(uiInjected);
        const sizing = hasHSizingDesc && hasVSizingDesc ? "both" : hasHSizingDesc ? "horizontal" : hasVSizingDesc ? "vertical" : "none";
        const groupLayout: TLayoutProp = { width: this.padding * 2, height: this.padding * 2 + this.labelHeight, sizing };
        const direction = directionIn || "vertical";
        let tabs = 0;
        uiInjected.forEach((item) => {
            if (item.type.endsWith("group")) {
                if (direction === "stacked") tabs++;
                if (item.type === "hgroup") item.layout = this.adjustLayout(item.items, "horizontal");
                else if (item.type === "vgroup") item.layout = this.adjustLayout(item.items, "vertical");
                else if (item.type === "tgroup") item.layout = this.adjustLayout(item.items, "stacked");
            }
            if (direction === "horizontal") {
                groupLayout.width += item.layout.width + this.spaceBetween;
                groupLayout.height = Math.max(groupLayout.height, item.layout.height + 2 * this.padding + this.labelHeight);
            } else if (direction === "vertical") {
                groupLayout.width = Math.max(groupLayout.width, item.layout.width + 2 * this.padding);
                groupLayout.height += item.layout.height + this.spaceBetween;
            } else {
                groupLayout.width = Math.max(groupLayout.width, item.layout.width + 2 * this.padding);
                groupLayout.height = Math.max(groupLayout.height, item.layout.height + 2 * this.padding + this.labelHeight);
            }
        });
        if (direction === "horizontal") groupLayout.width -= this.spaceBetween;
        else if (direction === "vertical") groupLayout.height -= this.spaceBetween;
        if (tabs) {
            groupLayout.height += this.itemLayoutMap.tab.height;
            groupLayout.width = Math.max(groupLayout.width, tabs * this.itemLayoutMap.tab.width + 2 * this.padding);
        }
        return groupLayout;
    }
    static expandLayout(uiInjected: TFaustUIItem[], dV: number, dH: number, directionIn: "vertical" | "horizontal" | "stacked", layoutIn: TLayoutProp) {
        let vExpandItems = 0;
        let hExpandItems = 0;
        let tabs = 0;
        uiInjected.forEach((item) => {
            if (directionIn === "stacked") tabs++;
            if (directionIn === "vertical" && (item.layout.sizing === "both" || item.layout.sizing === "vertical")) vExpandItems++;
            if (directionIn === "horizontal" && (item.layout.sizing === "both" || item.layout.sizing === "horizontal")) hExpandItems++;
        });
        uiInjected.forEach((item) => {
            let dV$ = 0;
            let dH$ = 0;
            if (directionIn === "vertical") {
                if (item.layout.sizing === "both" || item.layout.sizing === "vertical") dV$ = vExpandItems ? dV / vExpandItems : 0;
                if (item.layout.sizing === "both" || item.layout.sizing === "horizontal") dH$ = layoutIn.width - 2 * this.padding - item.layout.width;
            } else if (directionIn === "horizontal") {
                if (item.layout.sizing === "both" || item.layout.sizing === "vertical") dV$ = layoutIn.height - 2 * this.padding - this.labelHeight - (tabs ? this.itemLayoutMap.tab.width : 0) - item.layout.height;
                if (item.layout.sizing === "both" || item.layout.sizing === "horizontal") dH$ = hExpandItems ? dH / hExpandItems : 0;
            } else {
                if (item.layout.sizing === "both" || item.layout.sizing === "vertical") dV$ = layoutIn.height - 2 * this.padding - this.labelHeight - (tabs ? this.itemLayoutMap.tab.width : 0) - item.layout.height;
                if (item.layout.sizing === "both" || item.layout.sizing === "horizontal") dH$ = layoutIn.width - 2 * this.padding - item.layout.width;
            }
            if (directionIn !== "stacked") {
                if (item.layout.sizing === "both" || item.layout.sizing === "vertical") item.layout.height += dV$;
                if (item.layout.sizing === "both" || item.layout.sizing === "horizontal") item.layout.width += dH$;
            }
            if (item.type === "hgroup" || item.type === "vgroup" || item.type === "tgroup") {
                const hasVSizingDesc = item.layout.sizing === "vertical" || item.layout.sizing === "both";
                const hasHSizingDesc = item.layout.sizing === "horizontal" || item.layout.sizing === "both";
                if (item.type === "hgroup") this.expandLayout(item.items, hasVSizingDesc ? dV$ : 0, hasHSizingDesc ? dH$ : 0, "horizontal", item.layout);
                else if (item.type === "vgroup") this.expandLayout(item.items, hasVSizingDesc ? dV$ : 0, hasHSizingDesc ? dH$ : 0, "vertical", item.layout);
                else if (item.type === "tgroup") this.expandLayout(item.items, hasVSizingDesc ? dV$ : 0, hasHSizingDesc ? dH$ : 0, "stacked", item.layout);
            }
        });
        return layoutIn;
    }
    static offsetLayout(uiAdjusted: TFaustUIItem[], directionIn: "vertical" | "horizontal" | "stacked", layoutIn: TLayoutProp) {
        const direction = directionIn || "vertical";
        let tabs = 0;
        if (directionIn === "stacked") {
            uiAdjusted.forEach((item) => {
                if (item.type.endsWith("group")) tabs++;
            });
        }
        let $left = (layoutIn.left || 0) + this.padding;
        let $top = (layoutIn.top || 0) + this.padding + this.labelHeight + (tabs ? this.itemLayoutMap.tab.height : 0);
        const { width, height } = layoutIn;
        uiAdjusted.forEach((item) => {
            item.layout.left = $left;
            item.layout.top = $top;
            // center the item
            if (direction === "horizontal") item.layout.top += (height - this.labelHeight - item.layout.height) / 2 - this.padding;
            if (direction === "vertical") item.layout.left += (width - item.layout.width) / 2 - this.padding;
            if (item.type === "hgroup") this.offsetLayout(item.items, "horizontal", item.layout);
            else if (item.type === "vgroup") this.offsetLayout(item.items, "vertical", item.layout);
            else if (item.type === "tgroup") this.offsetLayout(item.items, "stacked", item.layout);
            if (direction === "horizontal") $left += item.layout.width + this.spaceBetween;
            else if (direction === "vertical") $top += item.layout.height + this.spaceBetween;
        });
        return uiAdjusted;
    }
    static hasVSizingDesc(ui: TFaustUIItem[]): boolean {
        return !!ui.find((item) => {
            if (item.type === "hgroup" || item.type === "vgroup" || item.type === "tgroup") return this.hasVSizingDesc(item.items);
            return item.layout.sizing === "vertical" || item.layout.sizing === "both";
        });
    }
    static hasHSizingDesc(ui: TFaustUIItem[]): boolean {
        return !!ui.find((item) => {
            if (item.type === "hgroup" || item.type === "vgroup" || item.type === "tgroup") return this.hasHSizingDesc(item.items);
            return item.layout.sizing === "horizontal" || item.layout.sizing === "both";
        });
    }
    static calcLayout(ui: TFaustUI) {
        this.injectLayout(ui);
        const layout = this.adjustLayout(ui);
        this.expandLayout(ui, 0, 0, "vertical", layout);
        this.offsetLayout(ui, "vertical", layout);
        layout.left = 0;
        layout.top = 0;
        return { ui, layout };
    }
}
