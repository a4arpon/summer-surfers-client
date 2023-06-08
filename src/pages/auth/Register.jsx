import axios from 'axios'
import { useState } from 'react'
import { Google } from 'react-bootstrap-icons'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import loadingBar from '../../assets/svgs/clockLoader.svg'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'
const Register = () => {
  useTitle('Register')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { registerUser, user, updateUser, signInGoogle } = useAuth()
  const [loading, setLoading] = useState(false)
  // imgbb url
  const imgBBUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`
  if (user) {
    return <Navigate to="/" replace />
  }
  const handleFormSubmit = (data) => {
    setLoading(true)
    if (data) {
      const regx = /^(?=.*[a-z]).{6,20}$/
      if (data.password === data.confirmPassword) {
        if (regx.test(data.password)) {
          const imgData = new FormData()
          imgData.append('image', data.photo[0])
          axios.post(imgBBUrl, imgData).then((imageData) => {
            registerUser(data?.email, data?.password)
              .then((usr) => {
                updateUser(data?.name, imageData?.data?.data?.display_url)
                  .then((res) => {
                    const tmpUser = {
                      name: data?.name,
                      email: data?.email,
                      photo: imageData?.data?.data?.display_url,
                    }
                    axios
                      .post(`${import.meta.env.VITE_SERVER_URL}/users`, tmpUser)
                      .then((res) => {
                        console.log(res)
                        setLoading(false)
                      })
                  })
                  .catch((err) => {
                    setLoading(false)
                    console.log(err)
                  })
              })
              .catch((err) => {
                setLoading(false)
                console.log(err)
              })
          })
        } else {
          setLoading(false)
          toast.error(
            'Password must contain at last one numerical digit and one alphabetical letter more than 6 characters.'
          )
        }
      } else {
        setLoading(false)
        toast.warning('Password should be matched.')
      }
    }
  }
  const handleSocialSignIn = () => {
    setLoading(true)
    signInGoogle().then((res) => {
      const tmpUser = {
        name: res?.user?.displayName,
        email: res?.user?.email,
        photo: res?.user?.photoURL,
      }
      axios
        .post(`${import.meta.env.VITE_SERVER_URL}/users`, tmpUser)
        .then((res) => {
          console.log(res)
          setLoading(false)
        })
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <div className="card bg-base-200 lg:w-[30rem] my-20">
        <div className="card-body">
          <h1 className="text-end text-3xl border-b-2 pb-2 border-base-300 mb-2 font-semibold">
            Register Now
          </h1>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="mb-3">
              <label>Your Name</label>
              <input
                type="text"
                className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 mt-1 block">
                  Name is required.
                </span>
              )}
            </div>
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
              <label>Your Photo</label>
              <input
                type="file"
                className="w-full file-input focus:outline-none mt-2"
                {...register('photo', { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500 mt-1 block">
                  Profile photo is required.
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
            <div className="mb-3">
              <label>Retype Password</label>
              <input
                type="password"
                className="w-full input input-bordered focus:outline-none mt-2 input-secondary focus:border-2"
                {...register('confirmPassword', { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 mt-1 block">
                  Confirm Password is required
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-secondary w-full my-2"
                disabled={loading}
              >
                {loading ? (
                  <img src={loadingBar} className="h-10" />
                ) : (
                  'Register'
                )}
              </button>
              <label>
                Already have an account?
                <Link className="link ml-1 hover:link-primary" to="/login">
                  Login Now
                </Link>
              </label>
            </div>
          </form>
          <div className="divider">Or</div>
          <div>
            <button
              className="btn btn-primary w-full text-white"
              onClick={handleSocialSignIn}
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

export default Register
