import React from 'react'
import { useInitUserProvider } from '@/hooks'
import { SessionInfo } from '@/hooks/useInitUserProvider'

interface IUserContextValue {
  userAuthenticated: SessionInfo
  setUserAuthenticated: React.Dispatch<React.SetStateAction<SessionInfo>>
  logout: () => void
}

export const UserContext = React.createContext({} as IUserContextValue)

interface IUserContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

const UserProvider: React.FC<IUserContextProviderProps> = ({ children }) => {
  const { userContextValue } = useInitUserProvider()

  return (
    <UserContext.Provider value={userContextValue} key="UserContext">
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
