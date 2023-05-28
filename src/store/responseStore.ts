import { create } from 'zustand';

interface responseState {
  value: any;
  setValue: (value: any) => void;
  getValue: () => any;
}

const responseState = create<responseState>((set, get) => ({
  value: undefined,
  setValue: (value) => set({ value }),
  getValue: () => get().value,
}));

export const useResponseStore = () => responseState((state) => state);