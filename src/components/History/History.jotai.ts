import { atom, useAtom } from "jotai";

export interface HistoryState {
  id: number;
  date: Date;
  command: string;
  output: unknown;
}

export const historyAtom = atom<HistoryState | null>(null);
