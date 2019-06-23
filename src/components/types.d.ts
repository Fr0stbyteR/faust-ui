type TFaustUIItemProps = {
    value?: number;
    active?: boolean;
    focus?: boolean;
    width?: number;
    height?: number;
    label?: string;
    address: string;
    min?: number;
    max?: number;
    step?: number;
    enums?: { [key: string]: number };
    unitstyle?: "int" | "float" | "time" | "hertz" | "decibel" | "%" | "pan" | "semitones" | "midi" | "custom" | "native";
    units?: string;
    exponent?: number;
    onChange?: (e: { value: number; displayValue: string }) => any;
};
