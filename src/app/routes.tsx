import { createBrowserRouter } from 'react-router';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: 'about',
          Component: AboutPage,
        },
        {
          path: 'contact',
          Component: ContactPage,
        },
        {
          path: 'book-appointment',
          Component: BookAppointmentPage,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL || '/',
  }
);