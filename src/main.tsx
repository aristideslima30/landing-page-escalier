import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Obrigado from './pages/Obrigado';
import Sobre from './pages/Sobre';
import CasosDeSucesso from './pages/CasosDeSucesso';
import ComoFunciona from './pages/ComoFunciona';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicos', element: <Servicos /> },
      { path: 'como-funciona', element: <ComoFunciona /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'casos-de-sucesso', element: <CasosDeSucesso /> },
      { path: 'contato', element: <Contato /> },
      { path: 'obrigado', element: <Obrigado /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
