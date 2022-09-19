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

    <main className="md:flex md:flex-row">
      <div className="p-4 mb-4 text-[12px]">
        <Navigation />
      </div>

      <div className="px-4 md:min-w-[500px]">
        <Outlet />
      </div>
    </main>
  </div>
)

export default Layout
