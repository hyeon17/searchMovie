import create from 'zustand';

interface optionState {
  year: number;
  category: string;
  Count: number;
  setYear: (year: number) => void;
  setCategory: (category: string) => void;
  setPage: (Count: number) => void;
  getYear: () => number;
  getCategory: () => string;
  getPage: () => number;
}

const optionState = create<optionState>((set, get) => ({
  year: 2021,
  category: 'movie',
  Count: 1,
  setYear: (year:number) => set({ year }),
  setCategory: (category:string) => set({ category }),
  setPage: (Count: number) => set({ Count }),
  getYear: () => get().year,
  getCategory: () => get().category,
  getPage: () => get().Count,
}));

export const useOptionStore = () => optionState((state) => state);