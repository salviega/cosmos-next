import Link from 'next/link'
import React from 'react'

const adminWallets = ['0x70a792ad975aa0977c6e9d55a14f5f2228bbc685', '0xa3542355604cFD6531AAf020DDAB3bDFFf4d1809', '0x91DC541109033C060779Aad8a578E34223e694cb']

export function useAuthContext () {
  let initialState = ''
  if (typeof window !== 'undefined') {
    initialState = JSON.parse(localStorage.getItem('wallet')) || { walletAddress: 'Connect wallet' }
  }
  const [user, setUser] = React.useState(initialState)

  const login = ({ walletAddress }) => {
    let isAdmin = false
    let adminWallet = adminWallets.find(wallet => wallet.toLowerCase() === walletAddress)
    try {
      adminWallet = adminWallet.toLowerCase()
      if (adminWallet.toLowerCase() === walletAddress) isAdmin = true
      const stringifiedUser = JSON.stringify({ walletAddress, isAdmin })
      localStorage.setItem('wallet', stringifiedUser)
      setUser({ walletAddress, isAdmin })
    } catch {
      const stringifiedUser = JSON.stringify({ walletAddress, isAdmin })
      localStorage.setItem('wallet', stringifiedUser)
      setUser({ walletAddress, isAdmin })
    }
  }

  const logout = () => {
    localStorage.clear()
    setUser({ walletAddress: 'Connect wallet' })
    return <Link href="/" />
  }

  return { user, login, logout }
}
