import type { BrushSettings } from "./global";

export const defaultSettings: BrushSettings = {
  color: "#ff0000",
  size: 1,
  deposit: "CUBE",
  erase: false,
};

export const Hex2Str = (hex) => {
  return "#" + hex.toString(16);
};

export const Str2Hex = (str) => {
  return Number("0x" + str.substring(1));
};
