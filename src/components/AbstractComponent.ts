import TypedEventEmitter from "@shren/typed-event-emitter";

export default abstract class AbstractComponent<T extends { [key: string]: any; }> extends TypedEventEmitter<T> {
    /**
     * The default state of the component.
     */
    static defaultProps: Record<string, any> = {};
    get defaultProps() {
        return (this.constructor as typeof AbstractComponent).defaultProps as T;
    }
    /**
     * Here stores corrent state of component
     * change the state with `setState` method to fire state events
     * then UI parts will get notified and rerender
     */
    state: T;
    /**
     * Frame count in order to reduce frame rate
     */
    private $frame = 0;
    /**
     * Frame reducing factor, 1 = render at every browser rendering tick, 2 will skip one every two ticks.
     */
    frameReduce = 1;
    /**
     * Here stores current `requestAnimationFrame` reference
     * if we have a new state to render, we cancel the old one
     */
    private $raf: number;
    /**
     * `requestAnimationFrame` callback
     */
    private raf = () => {
        this.$frame++;
        if (this.$frame % this.frameReduce !== 0) {
            this.$raf = window.requestAnimationFrame(this.raf);
            return;
        }
        this.$raf = undefined;
        this.tasks.forEach(f => f());
        this.tasks = [];
    };
    /**
     * tasks to execute in next redering tick
     */
    private tasks: (() => any)[] = [];
    /**
     * Initiate default state with incoming state.
     */
    constructor(props?: T) {
        super();
        this.state = { ...this.defaultProps, ...props };
    }
    /**
     * set internal state and fire events for UI parts subscribed
     */
    setState(newState: Partial<T>) {
        let shouldUpdate = false;
        for (const stateKey in newState) {
            const stateValue = newState[stateKey];
            if (stateKey in this.state && this.state[stateKey] !== stateValue) {
                this.state[stateKey] = stateValue;
                shouldUpdate = true;
            } else return;
            if (shouldUpdate) this.emit(stateKey, this.state[stateKey]);
        }
    }
    /**
     * Use this method to request a new rendering
     * schedule what you need to do in next render tick in `raf` callback
     */
    schedule(func: () => any) {
        if (this.tasks.indexOf(func) === -1) this.tasks.push(func);
        if (this.$raf) return;
        this.$raf = window.requestAnimationFrame(this.raf);
    }
}
