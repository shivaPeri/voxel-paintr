import { writable } from "svelte/store";
import type { BrushSettings } from "./global";
import { defaultSettings } from "./utils";

interface GlobalStore {
  brush: BrushSettings;
}

export const settings = writable<GlobalStore>({
  brush: defaultSettings,
});
