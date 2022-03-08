/// <reference types="svelte" />

export type DepositType = "CUBE" | "SPRAY" | "SPHERE";

export type BrushSettings = {
  color: string;
  size: number;
  deposit: DepositType;
  erase: boolean;
};
