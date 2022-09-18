import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => (
  <div className='max-w-6xl mx-auto my-4'><Outlet /></div>
)

export default Layout