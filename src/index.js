import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './routes/main/main';
import Contact from './routes/contact/contact';
import About from './routes/about/about';
import Error from './routes/error';
import VydNeruhomist from './routes/vyd-neruhomist/vyd-neruhomist';
import Neruhomist from './routes/neruhomist/neruhomist';
import StatusNeruhomist from './routes/status-neruhomist/status-neruhomist';
import CityNeruhomist from './routes/city-neruhomist/city-neruhomist';
import SearchNeruhomist from './routes/search-neruhomist/search-neruhomist';
import PolitykaKonfidenczijnosti from './routes/polityka-konfidenczijnosti/polityka-konfidenczijnosti';
import PravylaTaUmovyVykorystannyaSajtu from './routes/pravyla-ta-umovy-vykorystannya-sajtu/pravyla-ta-umovy-vykorystannya-sajtu';
import LiczenzijnyjDogovir from './routes/liczenzijnyj-dogovir/liczenzijnyj-dogovir';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: '/neruhomist/:id',
    element: <Neruhomist />,
  },
  {
    path: '/vyd-neruhomist/:vyd',
    element: <VydNeruhomist />,
  },
  {
    path: '/status-neruhomist/:status',
    element: <StatusNeruhomist />,
  },
  {
    path: '/city-neruhomist/:location',
    element: <CityNeruhomist />,
  },
  {
    path: '/search-neruhomist',
    element: <SearchNeruhomist />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/polityka-konfidenczijnosti',
    element: <PolitykaKonfidenczijnosti />,
  },
  {
    path: '/pravyla-ta-umovy-vykorystannya-sajtu',
    element: <PravylaTaUmovyVykorystannyaSajtu />,
  },
  {
    path: '/liczenzijnyj-dogovir',
    element: <LiczenzijnyjDogovir />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
