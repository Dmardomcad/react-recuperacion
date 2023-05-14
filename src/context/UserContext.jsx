import { createContext, useState } from 'react'

export const UserContext = createContext(true)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(true)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
