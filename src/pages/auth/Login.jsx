import axios from 'axios'
import { useState } from 'react'
import { EyeFill, EyeSlashFill, Google } from 'react-bootstrap-icons'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loadingBar from '../../assets/svgs/clockLoader.svg'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'
const Login = () => {
  useTitle('Login')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { user, signInGoogle, loginUser } = useAuth()
  const [actionLoading, setActionLoading] = useState(false)
  const [passwordField, setPasswordField] = useState('password')
  const handleFormSubmit = (data) => {
    setActionLoading(true)
    if (data) {
      loginUser(data?.email, data?.password)
        .then((res) => {
          setActionLoading(true)
          console.log(res)
        })
        .catch((err) => {
          setActionLoading(false)
          toast.error(err.message)
        })
    }
  }
  const handleSocialSignIn = () => {
    setActionLoading(true)
    signInGoogle()
      .then((res) => {
        const tmpUser = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL,
        }
        axios
          .post(`${import.meta.env.VITE_SERVER_URL}/users`, tmpUser)
          .then((res) => {
            console.log(res)
            setActionLoading(false)
          })
      })
      .catch((err) => {
        setActionLoading(false)
        toast.error(err.message)
      })
  }
  if (user) {
    return <Navigate to="/" replace />
  }
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <div className="card bg-base-200 lg:w-[30rem] my-20">
        <div className="card-body">
          <h1 className="text-end text-3xl border-b-2 pb-2 border-base-300 mb-2 font-semibold">
            Login Now
          </h1>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-3">
              <label>Your Email</label>
              <input
                type="email"
                className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 mt-1 block">
                  Email address is required.
                </span>
              )}
            </div>

            <div className="mb-3">
              <label>Your Password</label>
              <div className="input-group mt-2 items-center gap-2">
                <input
                  type={passwordField}
                  className="w-full input input-bordered focus:outline-none input-secondary focus:border-2"
                  {...register('password', { required: true })}
                />
                {passwordField === 'password' ? (
                  <EyeFill size={28} onClick={() => setPasswordField('text')} />
                ) : (
                  <EyeSlashFill
                    size={28}
                    onClick={() => setPasswordField('password')}
                  />
                )}
              </div>
              {errors.password && (
                <span className="text-red-500 mt-1 block">
                  Password is required
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-secondary w-full my-2"
                disabled={actionLoading}
              >
                {actionLoading ? (
                  <img src={loadingBar} className="h-10" />
                ) : (
                  'Login'
                )}
              </button>
              <label>
                Don&rsquo;t have any account?
                <Link className="link ml-1 hover:link-primary" to="/register">
                  Register Now
                </Link>
              </label>
            </div>
          </form>
          <div className="divider">Or</div>
          <div>
            <button
              className="btn btn-primary w-full text-white"
              onClick={handleSocialSignIn}
              disabled={actionLoading}
            >
              <Google /> Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
