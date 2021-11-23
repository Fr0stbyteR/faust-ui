import FaustUI from "./FaustUI";

const instantiate = () => {
    const faustUI = new FaustUI({
        root: document.getElementById("root") as HTMLDivElement,
        listenWindowResize: true,
        listenWindowMessage: true
    });
    let host: Window;
    window.addEventListener("message", (e) => {
        const { source } = e;
        host = source as Window;
    });

    window.addEventListener("keydown", (e) => {
        if (host) host.postMessage({ type: "keydown", key: e.key }, "*");
    });
    window.addEventListener("keyup", (e) => {
        if (host) host.postMessage({ type: "keyup", key: e.key }, "*");
    });
    (window as any).faustUI = faustUI;
};

export default instantiate;
