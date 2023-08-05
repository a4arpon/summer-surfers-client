import useTitle from '../../hooks/useTitle'
import AboutUs from './AboutUs'
import BeAInstructor from './BeAInstructor'
import PopularCourses from './PopularCourses'
import PopularInstructors from './PopularInstructors'
import Subscribe from './Subscribe'
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
        <Subscribe />
        <BeAInstructor />
      </div>
    </div>
  )
}

export default LandingPage
