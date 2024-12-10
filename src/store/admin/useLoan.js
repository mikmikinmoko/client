import { create } from "zustand";

export const useSelectedLoan = create((set) => ({
  selectedLoan: [],

  setSelectedLoan: (selectedLoan) => set({ selectedLoan }),
}));
