import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      token: null,
      isSignOut: false,

      setuserData: (userData) => set({ userData }),
      setSignout: (isSignOut) => set({ isSignOut }),
      setToken: (token) => set({ token }),
      reset: () => set({ userData: null, token: null, isSignOut: false }),
    }),
    {
      name: "Auth",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
