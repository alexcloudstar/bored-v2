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
  };
  setActivity: (activity: ActivityState['activity']) => void;
};

export const useActivityStore = create<ActivityState>(set => ({
  activity: {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    accessibility: 0,
  },
  setActivity: (activity: ActivityState['activity']) => set({ activity }),
}));
