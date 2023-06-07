import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'

const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()

  const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
  })

  useEffect(() => {
    axiosSecure.interceptors.request.use((conf) => {
      const accessToken = localStorage.getItem('access-token')
      if (accessToken) {
        conf.headers.authorization = `Bearer ${accessToken}`
      }
      return conf
    })

    axiosSecure.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          await logOut()
          navigate('/login')
        }
        return Promise.reject(err)
      }
    )
  }, [logOut, navigate, axiosSecure])

  return { axiosSecure }
}

export default useAxiosSecure
