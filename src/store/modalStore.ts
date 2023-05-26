import { create } from 'zustand';

interface modalState {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

const modalState = create<modalState>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));

export const useModalStore = () => modalState((state) => state);