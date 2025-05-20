import { create } from "zustand";

export const useMembersStore = create((set) => ({
  selectedMember: null,

  selectedTab: "0",

  setSelectedMember: (member) => set(() => ({ selectedMember: member })),
  setSelectedTab: (tab) => set(() => ({ selectedTab: tab })),
}));
