import { createContext, useState, useEffect, ReactNode } from "react"
import { User } from "../types/type"
import { getUserDetails } from "../requests/user"

type UserContextType = {
  userDetails: User
}

const initialUserContext: UserContextType = {
  userDetails: {
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    registerDate: "",
    role: "user"
  }
}

const UserContext = createContext<UserContextType>(initialUserContext)

type UserProviderProps = {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userDetails, setUserDetails] = useState<User>(initialUserContext.userDetails)

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("Authorization")
      if (token) {
        setUserDetails(await getUserDetails(token))
      } else {
        setUserDetails({} as User)
      }
    }
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{userDetails}}>
      {children}
    </UserContext.Provider>
  )

}

export default UserContext