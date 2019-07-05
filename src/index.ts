import { FaustUI } from "./FaustUI";

const faustUI = new FaustUI({ root: document.getElementById("root") as HTMLDivElement });
let host: Window;
window.addEventListener("message", (e) => {
    const { data, source } = e;
    host = source as Window;
    const { type } = data;
    if (!type) return;
    if (type === "ui") faustUI.ui = data.ui;
    if (type === "param") {
        const { path, value } = data;
        faustUI.emit("paramChangeByDSP", { path, value });
    }
});
faustUI.on("paramChangeByUI", (e) => {
    if (!host) return;
    const { path, value } = e;
    host.postMessage({ path, value, type: "param" }, "*");
});
window.addEventListener("keydown", (e) => {
    if (host) host.postMessage({ type: "keydown", key: e.key }, "*");
});
window.addEventListener("keyup", (e) => {
    if (host) host.postMessage({ type: "keyup", key: e.key }, "*");
});
(window as any).faustUI = faustUI;
