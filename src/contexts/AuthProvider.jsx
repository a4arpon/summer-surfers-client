import axios from 'axios'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import firebaseApp from '../_firebase/Firebase.conf'
export const AuthContext = createContext(null)
const fAuth = getAuth(firebaseApp)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // Create user with email and password
  const registerUser = (email, password) => {
    setLoading(true)
    console.log(email, password)
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
  // upgrade profile and photo
  const updateUser = (name, photo) => {
    setLoading(true)
    return updateProfile(fAuth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
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
      if (currentUser && currentUser.email) {
        axios
          .post(`${import.meta.env.VITE_SERVER_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((res) => {
            localStorage.setItem('access-token', res.data)
            setUser(currentUser)
            setLoading(false)
          })
      } else {
        setUser(null)
        setLoading(false)
      }
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
    updateUser,
  }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
