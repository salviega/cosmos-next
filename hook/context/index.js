import Link from 'next/link'
import React from 'react'
import { useAuthContext } from './useAuthContext'

const CosmosContext = React.createContext()

export function CosmosProvider ({ children }) {
  const { user, login, logout } = useAuthContext()

  return (
    <CosmosContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </CosmosContext.Provider>
  )
}

export function AuthRoute (props) {
  const auth = useAuth()

  if (!auth.user.walletAddress === 'Connect wallet') {
    return <Link to='/' />
  }

  return props.children
}

export function useAuth () {
  const { user, login, logout } = React.useContext(CosmosContext)
  const auth = { user, login, logout }
  return auth
}

