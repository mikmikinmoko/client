import { create } from "zustand";

export const useSelectedMember = create((set) => ({
  selectedMember: [],

  setSelectedMember: (selectedMember) => set({ selectedMember }),
}));
