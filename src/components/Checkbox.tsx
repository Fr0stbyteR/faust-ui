import { FaustUIButton } from "./Button";
import "./Checkbox.scss";

export class FaustUICheckbox extends FaustUIButton {
    className = "checkbox";

    handlePointerDown = () => {
        this.setValue(1 - this.state.value);
    }
    handlePointerUp = () => {
    }
}
