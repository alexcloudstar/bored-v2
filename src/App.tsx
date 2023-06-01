import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './constants/routes';
import { useDarkModeStore } from './constants/store';

const router = createBrowserRouter(routes);

const App = () => {
  const { darkMode } = useDarkModeStore(state => state);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
