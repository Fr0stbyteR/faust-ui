import * as React from "react";
import { FaustUI } from "./FaustUI";
import { Layout } from "./Layout";

export class Button extends React.Component {
    props: { emitter: FaustUI; ui: TFaustUIGroup }
    render() {
        const { left, top, width, height } = this.props.ui.layout;
        return (
            <live-button></live-button>
        );
    }
}
