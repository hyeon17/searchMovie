import { create } from 'zustand';

interface favoriteState {
  isHeart: boolean;
  Fid: number;
  setFid: (Fid: number) => void;
  getFid: () => number;
  setFavorite: () => void;
}

const favoriteState = create<favoriteState>((set, get) => ({
  isHeart: false,
  Fid: 0,
  setFid: (Fid) => set({ Fid }),
  getFid: () => get().Fid,
  setFavorite: () => set({ isHeart: true }),
}));

export const useFavoriteStore = () => favoriteState((state) => state);