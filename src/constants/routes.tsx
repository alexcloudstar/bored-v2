import { RouteObject } from 'react-router-dom';
import Activities from '../pages/Activities';
import Homepage from '../pages/Homepage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/activities',
    element: <Activities />,
  },
];
