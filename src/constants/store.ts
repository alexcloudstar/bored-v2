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

type ActivityState = {
  activity: {
    activity: string;
    type: string;
    participants: number;
    price: number;
    accessibility: number;
  } | null;
  error: string | null;
  setActivity: (activity: ActivityState['activity']) => void;
  setError: (error: ActivityState['error']) => void;
};

export const useActivityStore = create<ActivityState>(set => ({
  activity: null,
  error: '',
  setActivity: (activity: ActivityState['activity']) => set({ activity }),
  setError: (error: ActivityState['error']) => set({ error }),
}));
