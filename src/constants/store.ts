import { create } from 'zustand';

export type BearState = {
  bears: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
};

export const useBearStore = create<BearState>()(set => ({
  bears: 0,
  increase: by => set(state => ({ bears: state.bears + by })),
  decrease: by => set(state => ({ bears: state.bears - by })),
}));

export type DarkModeState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const useDarkModeStore = create<DarkModeState>(set => ({
  darkMode: false,
  toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
}));
