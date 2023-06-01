export type FormOptionsType = {
  id: number;
  value: string;
  name: string;
};

export const activityTypes: FormOptionsType[] = [
  {
    id: 0,
    name: 'education',
    value: 'Education',
  },
  {
    id: 1,
    name: 'recreational',
    value: 'Recreational',
  },
  {
    id: 2,
    name: 'social',
    value: 'Social',
  },
  {
    id: 3,
    name: 'diy',
    value: 'Diy',
  },
  {
    id: 4,
    name: 'charity',
    value: 'Charity',
  },
  {
    id: 5,
    name: 'cooking',
    value: 'Cooking',
  },
  {
    id: 6,
    name: 'relaxation',
    value: 'Relaxation',
  },
  {
    id: 7,
    name: 'music',
    value: 'Music',
  },
  {
    id: 8,
    name: 'busywork',
    value: 'Busywork',
  },
];

export const accessibilityOptions: FormOptionsType[] = [
  {
    id: 0,
    value: 'Low',
    name: '1',
  },
  {
    id: 1,
    value: 'Medium',
    name: '0.5',
  },
  {
    id: 2,
    value: 'High',
    name: '0',
  },
];

export const participantsOptions: FormOptionsType[] = [
  {
    id: 0,
    value: '1',
    name: '1',
  },
  {
    id: 1,
    value: '2',
    name: '2',
  },
  {
    id: 2,
    value: '3',
    name: '3',
  },
  {
    id: 3,
    value: '4+',
    name: '4',
  },
];

export const priceOptions: FormOptionsType[] = [
  {
    id: 0,
    name: '0',
    value: 'Free',
  },
  {
    id: 1,
    name: '0.5',
    value: 'Not expensive',
  },
  {
    id: 2,
    name: '1',
    value: 'Expensive',
  },
];
