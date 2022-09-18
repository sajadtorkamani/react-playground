import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import { ROUTES } from '../lib/routes'

const Layout: React.FC = () => (
  <div className="max-w-6xl mx-auto my-4">
    <header className="px-4 mb-6">
      <Link to={ROUTES.root} className="font-bold text-lg">
        React playground
      </Link>
    </header>

    <main className="flex-col md:flex-row">
      <div className="px-4 mb-4 text-sm md:border-r md:border-r-gray-300">
        <Navigation />
      </div>

      <div className="p-4">
        <Outlet />
      </div>
    </main>
  </div>
)

export default Layout
