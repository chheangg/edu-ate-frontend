import { create } from "zustand";

export const useLocation = create((set) => ({
  location: {
    country: 'U.S',
    city: 'Irvine',
  },
  setNewLocation: (location) => set((state) => state.location = location)
}))