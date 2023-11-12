import { useContext } from 'react'
import { UserContext } from '@/providers/UserProvider'

const useConsumerUserProvider = () => useContext(UserContext)

export default useConsumerUserProvider
