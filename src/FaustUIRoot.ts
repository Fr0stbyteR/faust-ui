import { FaustUIGroup } from "./FaustUIGroup";
import { FaustUI } from "./FaustUI";
import { Component } from "./components/Component";

export class FaustUIRoot extends Component<{ emitter: FaustUI; ui: TFaustUI; layout: TLayoutProp; width: number; height: number }> {
    container: HTMLDivElement;
    xGrids: number;
    yGrids: number;
    grid: number;
    left: number;
    top: number;
    componentWillMount() {
        this.container = document.createElement("div");
        this.container.className = "faust-ui-root";
    }
    componentDidMount() {
        this.on("layout", () => this.updateLayout());
        this.on("width", () => this.updateLayout());
        this.on("height", () => this.updateLayout());
        this.on("ui", () => this.mount());
    }
    updateLayout() {
        this.xGrids = this.state.layout.width;
        this.yGrids = this.state.layout.height;
        this.grid = Math.min(this.state.width / this.xGrids, this.state.height / this.yGrids);
        this.left = (this.state.width - this.xGrids * this.grid) / 2;
        this.top = (this.state.height - this.yGrids * this.grid) / 2;
        this.container.style.top = `${this.top}px`;
        this.container.style.left = `${this.left}px`;
        const childrenStateUpdate = { grid: this.grid };
        this.children.forEach(e => e.setState(childrenStateUpdate));
    }
    updateChildren() {
        this.container.innerHTML = "";
        this.children = this.state.ui.map(group => new FaustUIGroup({ ...this.state, grid: this.grid, ui: group, outerLeft: 0, outerTop: 0 }));
    }
    mount() {
        this.updateChildren();
        this.updateLayout();
        return super.mount();
    }
}
