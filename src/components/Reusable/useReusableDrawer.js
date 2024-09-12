import { create } from "zustand";

export const useOpenDrawer = create((set) => ({
  drawers: {},

  setOpen: (id, open) =>
    set((state) => ({
      drawers: {
        ...state.drawers,
        [id]: open,
      },
    })),

  toggleDrawer: (id) =>
    set((state) => ({
      drawers: {
        ...state.drawers,
        [id]: !state.drawers[id],
      },
    })),
}));
