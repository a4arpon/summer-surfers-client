import { useState } from 'react'
import { Google } from 'react-bootstrap-icons'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import loadingBar from '../../assets/svgs/clockLoader.svg'
import useTitle from '../../hooks/useTitle'
const Login = () => {
  useTitle('Login')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)
  const handleFormSubmit = (data) => {
    setLoading(true)
    console.log(data)
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
              <input
                type="password"
                className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
                {...register('password', { required: true })}
              />
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
                disabled={loading}
              >
                {loading ? <img src={loadingBar} className="h-10" /> : 'Login'}
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
              onClick={() => setLoading(true)}
              disabled={loading}
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
