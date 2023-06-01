import { getLocalStorage } from 'src/utils/localStorage';
import { create } from 'zustand';

export type DarkModeState = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const useDarkModeStore = create<DarkModeState>(set => ({
  darkMode: getLocalStorage('darkMode') === 'true',
  toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
}));
