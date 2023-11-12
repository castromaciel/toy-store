import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '@/interfaces/userInfo.interface'

export interface SessionInfo extends UserInfo {
  token: string
}

const useInitUserProvider = () => {
  const userSession = JSON.parse(localStorage.getItem('user')!) as UserInfo
  const userToken = localStorage.getItem('token')! as string

  const sessionInfo: SessionInfo = {
    ...userSession,
    token: userToken
  }

  const initialState: SessionInfo = React.useMemo(() => ({
    email: '',
    id: '',
    createdAt: '',
    fullName: '',
    token: ''
  }), [])

  const userState: SessionInfo = sessionInfo ?? initialState
  
  const [userAuthenticated, setUserAuthenticated] = React.useState<SessionInfo>(userState)
  const navigate = useNavigate()

  const logout = React.useCallback(() => {
    setUserAuthenticated(initialState)
    localStorage.removeItem('user')

    navigate('/loginUser')
  }, [initialState, navigate])

  const userContextValue = React.useMemo(() => ({
    userAuthenticated,
    setUserAuthenticated,
    logout
  }), [userAuthenticated, setUserAuthenticated, logout])

  return {
    userContextValue
  }
}

export default useInitUserProvider
