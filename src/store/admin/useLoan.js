import { create } from "zustand";

export const useLoanStore = create((set) => ({
  selectedLoan: [],
  loanTermDrawer: false,

  setSelectedLoan: (selectedLoan) => set({ selectedLoan }),
  setLoanTermDrawer: (isOpen) => set(() => ({ loanTermDrawer: isOpen })),
}));
