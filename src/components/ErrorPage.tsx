import React from 'react'
import { ROUTES } from '../lib/routes'

const ErrorPage: React.FC = () => (
  <div className="mt-6 p-4 max-w-sm mx-auto text-center">
    <p className="mb-1">There was an error.</p>
    <a href={ROUTES.root} className="text-blue-800 underline">
      Return to home
    </a>
  </div>
)

export default ErrorPage
