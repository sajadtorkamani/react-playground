import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPage from './components/ErrorPage'
import React from 'react'
import { AppRoutes, ROUTES } from './lib/routes'

export const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: AppRoutes,
  },
])
