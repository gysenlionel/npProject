import React, { useContext } from 'react'

import { Navigate, useLocation, Outlet } from 'react-router-dom'

import { AuthContext } from '../context/auth'

const RequireAuth = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth
