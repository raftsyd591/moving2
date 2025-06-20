import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogIndex from './pages/blog/index';
import BlogPost from './pages/blog/[slug]';
import TestImagesPage from './pages/test-images';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ErrorBoundary from './components/ErrorBoundary';

// Create and export router with React Router v7
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/blog",
    element: <BlogIndex />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPost />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/test-images",
    element: <TestImagesPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <HomePage />,
    errorElement: <ErrorBoundary />,
  }
]); 