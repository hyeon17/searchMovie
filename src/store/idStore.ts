import { create } from 'zustand';

interface idState {
  id: number;
  setId: (id: number) => void;
  getId: () => number;
}

const idState = create<idState>((set, get) => ({
  id: 0,
  setId: (id) => set({ id }),
  getId: () => get().id,
}));

export const useIdStore = () => idState((state) => state);
