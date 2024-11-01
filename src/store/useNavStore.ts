// src/store/useNavStore.ts
import { create } from "zustand";

interface NavStore {
  isLoggedIn: boolean;
  activeNav: string | null;
  setActiveNav: (label: string) => void;
  setLoggedIn: (loggedIn: boolean) => void;
}

const useNavStore = create<NavStore>((set) => ({
  isLoggedIn: false,
  activeNav: null,
  setActiveNav: (label) => set({ activeNav: label }),
  setLoggedIn: (loggedIn) => set({ isLoggedIn: loggedIn }),
}));

export default useNavStore;
