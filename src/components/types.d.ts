declare interface FaustUIItemProps<T extends FaustUIItemStyle> {
    value?: number;
    active?: boolean;
    focus?: boolean;
    label?: string;
    address: string;
    min?: number;
    max?: number;
    step?: number;
    enums?: { [key: string]: number };
    type?: "enum" | "int" | "float";
    unitstyle?: "time" | "hertz" | "decibel" | "%" | "pan" | "semitones" | "midi" | "custom" | "native";
    units?: string;
    exponent?: number;
    style?: T;
    onChange?: (e: { value: number; displayValue: string }) => any;
}
declare interface FaustUIItemStyle {
    width: number;
    height: number;
}
