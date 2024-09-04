import { create } from "zustand";

export const useSelectedMember = create((set) => ({
  selectedMember: [],

  setSelectedMember: (selectedMember) => set({ selectedMember }),
}));

export const useMode = create((set) => ({
  mode: ["pending", "accept"],
  setMode: (mode) => set({ mode }),
}));
