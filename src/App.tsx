import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './constants/routes';

const router = createBrowserRouter(routes);

const App = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');

    if (isDarkMode === 'true') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
