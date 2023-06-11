import useTitle from '../../hooks/useTitle'
import AboutUs from './AboutUs'
import PopularCourses from './PopularCourses'
import PopularInstructors from './PopularInstructors'
import TopSlider from './TopSlider'
const LandingPage = () => {
  useTitle('Home')
  return (
    <div className="container mx-auto lg:py-10">
      <TopSlider />
      <div className="px-3 lg:px-0 py-10">
        <PopularCourses />
        <PopularInstructors />
        <AboutUs />
      </div>
    </div>
  )
}

export default LandingPage
