import * as React from "react";
import { LiveText, LiveNumbox, LiveDial, LiveTab, LiveMeter, LiveSlider } from "live-components";
import { FaustUI } from "./FaustUI";
import { Layout } from "./Layout";

export class FaustUIGroup extends React.Component {
    props: { emitter: FaustUI; ui: TFaustUIGroup; grid: number };
    static getComponent(item: TFaustUIItem, grid: number) {
        if (item.type === "tgroup" || item.type === "vgroup" || item.type === "hgroup") return undefined;
        const type = Layout.predictType(item);
        const props = { width: item.layout.width * grid, height: item.layout.height * grid };
        if (type === "button") return <LiveText mode={"button"} {...props} text={item.label} />;
        if (type === "checkbox") return <LiveText mode={"toggle"} {...props} text={item.label} />;
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
        let { left, top, width, height } = ui.layout;
        left *= grid;
        top *= grid;
        width *= grid;
        height *= grid;
        const classList = ["faust-ui-group", "faust-ui-" + ui.type].join(" ");
        const items: JSX.Element[] = [];
        const tabs: string[] = [];
        ui.items.forEach((item) => {
            if (item.type === "tgroup") {
                tabs.push(item.label);
                items.push(<FaustUIGroup key={item.label} ui={item} emitter={this.props.emitter} grid={this.props.grid} />);
            } else if (item.type === "vgroup" || item.type === "hgroup") {
                items.push(<FaustUIGroup key={item.label} ui={item} emitter={this.props.emitter} grid={this.props.grid} />);
            } else {
                const itemComponent = FaustUIGroup.getComponent(item, grid);
                if (itemComponent) items.push(<div key={(item as TFaustUIInputItem | TFaustUIOutputItem).address} className="faust-ui-item" style={{ left: item.layout.left * grid, top: item.layout.top * grid }}>{itemComponent}</div>);
            }
        });
        return (
            <div className={classList} style={{ left, top, width, height }}>
                {items}
            </div>
        );
    }
}
