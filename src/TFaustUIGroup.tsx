import * as React from "react";
import { LiveText, LiveNumbox, LiveDial, LiveTab, LiveMeter, LiveSlider } from "live-components";
import { FaustUI } from "./FaustUI";
import { Layout } from "./Layout";
import { FaustUIButton } from "./components/Button";
import { FaustUICheckbox } from "./components/Checkbox";

export class FaustUIGroup extends React.Component {
    props: { emitter: FaustUI; ui: TFaustUIGroup; grid: number; outerLeft: number; outerTop: number };
    static getComponent(item: TFaustUIInputItem | TFaustUIOutputItem, grid: number) {
        const type = Layout.predictType(item);
        const tooltipMeta = item.meta ? item.meta.find(meta => meta.tooltip) : undefined;
        const tooltip = tooltipMeta ? tooltipMeta.tooltip : undefined;
        const { label, min, max, address, layout } = item;
        const props: FaustUIItemProps<FaustUIItemStyle> = {
            label,
            address,
            tooltip,
            style: {
                width: layout.width * grid,
                height: layout.height * grid
            },
            type: "float",
            min: isFinite(+min) ? +min : Number.MIN_VALUE,
            max: isFinite(+max) ? +max : Number.MAX_VALUE,
            step: "step" in item ? +item.step : 1,
            value: "init" in item ? +item.init || 0 : 0
        };
        if (type === "button") return <FaustUIButton {...props} />;
        if (type === "checkbox") return <FaustUICheckbox {...props} />;
        if (type === "nentry") return <LiveNumbox {...props} />;
        if (type === "knob") return <LiveDial showname={false} {...props} />;
        if (type === "menu") return <LiveTab {...props} />;
        if (type === "radio") return <LiveTab {...props} />;
        if (type === "hslider") return <LiveSlider orientation="horizontal" showname={false} {...props} />;
        if (type === "vslider") return <LiveSlider orientation="vertical" showname={false} {...props} />;
        if (type === "hbargraph") return <LiveMeter orientation="horizontal" {...props} />;
        if (type === "vbargraph") return <LiveMeter orientation="vertical" {...props} />;
        if (type === "led") return <LiveMeter orientation="vertical" {...props} />;
        return undefined;
    }
    render() {
        const { ui, grid } = this.props;
        let { outerLeft, outerTop } = this.props;
        let { left, top, width, height } = ui.layout;
        left = left * grid - outerLeft;
        top = top * grid - outerTop;
        width *= grid;
        height *= grid;
        outerLeft += left;
        outerTop += top;
        const classList = ["faust-ui-group", "faust-ui-" + ui.type].join(" ");
        const items: JSX.Element[] = [];
        const tabs: string[] = [];
        ui.items.forEach((item) => {
            const itemLeft = item.layout.left * grid - outerLeft;
            const itemTop = item.layout.top * grid - outerTop;
            if (item.type === "tgroup") {
                tabs.push(item.label);
                items.push(<FaustUIGroup key={item.label} ui={item} emitter={this.props.emitter} grid={this.props.grid} outerLeft={outerLeft} outerTop={outerTop} />);
            } else if (item.type === "vgroup" || item.type === "hgroup") {
                items.push(<FaustUIGroup key={item.label} ui={item} emitter={this.props.emitter} grid={this.props.grid} outerLeft={outerLeft} outerTop={outerTop} />);
            } else {
                const itemComponent = FaustUIGroup.getComponent(item as TFaustUIInputItem | TFaustUIOutputItem, grid);
                if (itemComponent) items.push(<div key={(item as TFaustUIInputItem | TFaustUIOutputItem).address} className="faust-ui-item" style={{ left: itemLeft, top: itemTop }}>{itemComponent}</div>);
            }
        });
        return (
            <div className={classList} style={{ left, top, width, height }}>
                {items}
            </div>
        );
    }
}
