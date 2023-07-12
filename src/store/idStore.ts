import { create } from 'zustand';

interface idState {
  id: string;
  setId: (id: string) => void;
  getId: () => string;
}

const idState = create<idState>((set, get) => ({
  id: '',
  setId: (id) => set({ id }),
  getId: () => get().id,
}));

export const useIdStore = () => idState((state) => state);
