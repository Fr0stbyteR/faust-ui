import { FaustUI } from "./FaustUI";

export const instantiate = () => {
    const faustUI = new FaustUI({ root: document.getElementById("root") as HTMLDivElement });
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
