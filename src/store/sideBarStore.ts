import { create } from 'zustand';

interface sideBarState {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
}

const sideBarState = create<sideBarState>((set) => ({
  isOpen: false,
  setOpen: () => set({ isOpen: true }),
  setClose: () => set({ isOpen: false }),
}));

export const useSideBarStore = () => sideBarState((state) => state);
