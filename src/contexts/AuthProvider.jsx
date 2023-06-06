import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import firebaseApp from '../_firebase/Firebase.conf'
export const AuthContext = createContext(null)
const fAuth = getAuth(firebaseApp)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  // Create user with email and password
  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(fAuth, email, password)
  }
  // Login user using email and password
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(fAuth, email, password)
  }
  // user logout
  const logout = () => {
    setLoading(true)
    return signOut(fAuth)
  }
  // continue With Google
  const signInGoogle = () => {
    const provider = new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(fAuth, provider)
  }
  // Watch user state changes.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(fAuth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [user])
  const auth = {
    user,
    loading,
    setLoading,
    loginUser,
    signInGoogle,
    registerUser,
    logout,
  }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
