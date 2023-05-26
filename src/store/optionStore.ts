import { create } from 'zustand';

interface optionState {
  year: number | string;
  category: string;
  Count: number | string;
  title: string;
  setYear: (year: number | string) => void;
  setCategory: (category: string) => void;
  setCount: (Count: number | string) => void;
  setTitle: (title: string) => void;
  getYear: () => number | string;
  getCategory: () => string;
  getCount: () => number | string;
  getTitle: () => string;
}

const optionState = create<optionState>((set, get) => ({
  year: '',
  category: '',
  Count: '',
  title: '',
  setYear: (year: number | string) => set({ year }),
  setCategory: (category: string) => set({ category }),
  setCount: (Count: number | string) => set({ Count }),
  setTitle: (title: string) => set({ title }),
  getYear: () => get().year,
  getCategory: () => get().category,
  getCount: () => get().Count,
  getTitle: () => get().title,
}));

export const useOptionStore = () => optionState((state) => state);
