import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import groovyWalkAnimation from '../../assets/error-404.json'
const ErrorPage = () => {
  return (
    <div className="h-screen flex  flex-col items-center">
      <Lottie
        animationData={groovyWalkAnimation}
        loop={true}
        className="h-[calc(100vh-30vh)]"
      />
      <Link to={'/'} className="btn btn-error">
        Back To Home
      </Link>
    </div>
  )
}

export default ErrorPage
