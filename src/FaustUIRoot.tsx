import * as React from "react";
import { FaustUIGroup } from "./TFaustUIGroup";
import { FaustUI } from "./FaustUI";

export class FaustUIRoot extends React.Component {
    props: { emitter: FaustUI; ui: TFaustUI; layout: TLayoutProp; width: number; height: number };
    state: { ui: TFaustUI } = { ui: [] };
    componentDidMount() {
        this.setState({ ui: this.props.ui });
        this.props.emitter.on("uiChange", ui => this.setState({ ui }));
    }
    render() {
        if (this.state.ui.length === 0) return <></>;
        const xGrids = this.props.layout.width;
        const yGrids = this.props.layout.height;
        const grid = Math.min(this.props.width / xGrids, this.props.height / yGrids);
        const left = (this.props.width - xGrids * grid) / 2;
        const top = (this.props.height - yGrids * grid) / 2;
        return (
            <div className="faust-ui-root" style={{ left, top }}>
                {this.state.ui.map(group => <FaustUIGroup key={group.label} {...this.props} ui={group} grid={grid} />)}
            </div>
        );
    }
}
