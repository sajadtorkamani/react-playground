import React from 'react'
import { Link } from 'react-router-dom'
import { AppRoutes, ROUTES } from '../lib/routes'

const Navigation: React.FC = () => {
  return (
    <ul>
      {AppRoutes.map((route) => (
        <li key={route.name} className="mb-1">
          <Link to={route.path} className="text-blue-800 underline text-sm">
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
