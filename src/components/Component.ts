import { EventEmitter } from "events";

export class Component<T extends {}> extends EventEmitter {
    on<K extends keyof T>(type: K, listener: (e: T[K]) => void) {
        return super.on(type, listener);
    }
    once<K extends keyof T>(type: K, listener: (e: T[K]) => void) {
        return super.once(type, listener);
    }
    off<K extends keyof T>(type: K, listener: (e: T[K]) => void) {
        return super.off(type, listener);
    }
    removeAllListeners<K extends keyof T>(type: K) {
        return super.removeAllListeners(type);
    }
    emit<K extends keyof T>(type: K, e?: T[K]) {
        return super.emit(type, e);
    }
    static defaultProps = {};
    get defaultProps() {
        return (this.constructor as typeof Component).defaultProps as T;
    }
    children: Component<any>[];
    container: HTMLElement;
    state: T;
    constructor(props?: T) {
        super();
        const state = { ...this.defaultProps, ...props };
        this.state = state;
        return this;
    }
    render() {
        this.componentWillMount();
        const rendered = this.mount();
        this.componentDidMount();
        return rendered;
    }
    setState(newState: { [key in keyof T]?: T[key] }) {
        for (const key in newState) {
            const stateKey = key as keyof T;
            const stateValue = newState[stateKey];
            if (stateKey in this.state && this.state[stateKey] !== stateValue) {
                this.state[stateKey] = stateValue;
                this.emit(stateKey, stateValue);
            }
        }
    }
    componentWillMount() {}
    componentDidMount() {}
    mount(): HTMLElement[] {
        if (this.container && this.children) this.children.forEach(child => child.render().forEach(e => this.container.appendChild(e)));
        return [this.container];
    }
}
