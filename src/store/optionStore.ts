import { create } from 'zustand';

interface optionState {
  year: number | string;
  category: string;
  Count: number;
  title: string;
  setYear: (year: number | string) => void;
  setCategory: (category: string) => void;
  setCount: (Count: number) => void;
  setTitle: (title: string) => void;
  getYear: () => number | string;
  getCategory: () => string;
  getCount: () => number;
  getTitle: () => string;
}

const optionState = create<optionState>((set, get) => ({
  year: '',
  category: '',
  Count: 1,
  title: '',
  setYear: (year: number | string) => set({ year }),
  setCategory: (category: string) => set({ category }),
  setCount: (Count: number) => set({ Count }),
  setTitle: (title: string) => set({ title }),
  getYear: () => get().year,
  getCategory: () => get().category,
  getCount: () => get().Count,
  getTitle: () => get().title,
}));

export const useOptionStore = () => optionState((state) => state);
