import Button from "./Button";
import "./Checkbox.scss";

export default class Checkbox extends Button {
    className = "checkbox";

    handleMouseOrTouchDown = () => {
        this.setValue(1 - this.state.value);
    };
    handleMouseOrTouchUp = () => {
    };
}
