import { create } from 'zustand';

interface heartState {
  heart: boolean;
  setIsHeart: (heart: boolean) => void;
}

const heartState = create<heartState>((set) => ({
  heart: false,
  setIsHeart: (heart) => set({ heart }),
}));

export const useHeartStore = () => heartState((state) => state);