import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from "react";
import { isServerAwake } from "../requests/connection";

type AuthContextType = {
  isLoggedIn: boolean,
  isAwake: boolean,
  setIsLoggedIn?: Dispatch<SetStateAction<boolean>>
}

const initialAuthContext: AuthContextType = {
  isLoggedIn: false,
  isAwake: false
}

const AuthContext = createContext<AuthContextType>(initialAuthContext)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAwake, setIsAwake] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    async function testConnection() {
      const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve("Server is restarting");
        }, 5000);
      });
    
      const isAwakePromise = isServerAwake();
    
      const result = await Promise.race([isAwakePromise, timeoutPromise]);
      setIsAwake(true)

      // result is true if isAwakePromise ran first
      if (result === true && localStorage.getItem("Authorization")) {
        setIsLoggedIn(true); 
      } else {
        localStorage.clear()
      }
    
    }
    testConnection()
  }, [])

  const authContextValues: AuthContextType = {
    isLoggedIn, 
    isAwake,
    setIsLoggedIn
  }

  return (
    <AuthContext.Provider value={authContextValues}>
      {children} 
    </AuthContext.Provider>
  )
}

export default AuthContext