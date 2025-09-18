import { create } from "zustand";

type FilterState = {
  activeTag: string | null;
  setActiveTag: (tag: string | null) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  activeTag: null,
  setActiveTag: (tag) => set({ activeTag: tag }),
}));


