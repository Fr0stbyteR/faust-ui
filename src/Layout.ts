export class Layout {
    static padding = 0.2;
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
            width: 3,
            height: 1,
            sizing: "horizontal"
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
            height: 1,
            sizing: "none"
        },
        menu: {
            width: 3,
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
            width: 1,
            height: 2,
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
        const groupLayout: TLayoutProp = { width: this.padding * 2, height: this.padding * 2, sizing: "none" };
        const direction = directionIn || "vertical";
        let tabs = 0;
        uiInjected.forEach((item) => {
            if (item.type === "hgroup") item.layout = this.adjustLayout(item.items, "horizontal");
            else if (item.type === "vgroup") item.layout = this.adjustLayout(item.items, "vertical");
            else if (item.type === "tgroup") {
                item.layout = this.adjustLayout(item.items, "stacked");
                tabs++;
            }
            if (direction === "horizontal") {
                groupLayout.width += item.layout.width;
                groupLayout.height = Math.max(groupLayout.height, item.layout.height + 2 * this.padding);
            } else if (direction === "vertical") {
                groupLayout.width = Math.max(groupLayout.width, item.layout.width + 2 * this.padding);
                groupLayout.height += item.layout.height;
            } else {
                groupLayout.width = Math.max(groupLayout.width, item.layout.width + 2 * this.padding);
                groupLayout.height = Math.max(groupLayout.height, item.layout.height + 2 * this.padding);
            }
        });
        if (tabs) {
            groupLayout.height += this.itemLayoutMap.tab.height;
            groupLayout.width = Math.max(groupLayout.width, tabs * this.itemLayoutMap.tab.width + 2 * this.padding);
        }
        uiInjected.forEach((item) => {
            if (directionIn !== "horizontal" && (item.layout.sizing === "both" || item.layout.sizing === "horizontal")) item.layout.width = groupLayout.width - 2 * this.padding;
            if (directionIn !== "vertical" && (item.layout.sizing === "both" || item.layout.sizing === "vertical")) item.layout.height = groupLayout.height - 2 * this.padding;
        });
        return groupLayout;
    }
    static offsetLayout(uiAdjusted: TFaustUIItem[], directionIn: "vertical" | "horizontal" | "stacked", layoutIn: TLayoutProp) {
        const direction = directionIn || "vertical";
        let $left = (layoutIn.left || 0) + this.padding;
        let $top = (layoutIn.top || 0) + this.padding;
        const { width, height } = layoutIn;
        uiAdjusted.forEach((item) => {
            item.layout.left = $left;
            item.layout.top = $top;
            // center the item
            if (direction === "horizontal" || direction === "stacked") item.layout.top += (height - item.layout.height) / 2 - this.padding;
            else if (direction === "vertical" || direction === "stacked") item.layout.left += (width - item.layout.width) / 2 - this.padding;
            if (item.type === "hgroup") this.offsetLayout(item.items, "horizontal", item.layout);
            else if (item.type === "vgroup") this.offsetLayout(item.items, "vertical", item.layout);
            else if (item.type === "tgroup") this.offsetLayout(item.items, "stacked", item.layout);
            if (direction === "horizontal") $left += item.layout.width;
            else if (direction === "vertical") $top += item.layout.height;
        });
        return uiAdjusted;
    }
    static calcLayout(ui: TFaustUI) {
        this.injectLayout(ui);
        const layout = this.adjustLayout(ui);
        this.offsetLayout(ui, "vertical", layout);
        layout.left = 0;
        layout.top = 0;
        return { ui, layout };
    }
}
