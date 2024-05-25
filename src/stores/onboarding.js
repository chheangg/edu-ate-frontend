import { create } from "zustand";

export const useOnboardingStore = create((set) => ({
  stage: 0,
  nextStage: () => set((state) => ({ stage: state.stage + 1 }))
}))