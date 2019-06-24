export const toMIDI = (f: number) => ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][(f % 12 + 12) % 12] + Math.round(f / 12 - 2);
export const toRad = (degrees: number) => degrees * Math.PI / 180;
export const atodb = (a: number) => 20 * Math.log10(a);
export const dbtoa = (db: number) => 10 ** (db / 20);
