import { atom } from "jotai";

export interface HistoryState {
  id: number;
  date: Date;
  command: string;
  output: string;
}

export const historyAtom = atom<HistoryState[]>([]);
