import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
const TopSlider = () => {
  const swipers = [
    {
      id: 1,
      title: 'Peoples hobby of keeping memories is very old.',
      img: 'https://colorfully.eu/wp-content/uploads/2012/09/autumn-fall-photography-dry-leaves-canon-eos-30d-facebook-cover.jpg',
      subTitle: '12 May 2023',
    },
    {
      id: 2,
      title:
        'At one time, people were doing photography only as a hobby, but with the change of era, there has been a change in peoples thinking.',
      img: 'https://colorfully.eu/wp-content/uploads/2012/12/big-camera-girl.jpg',
      subTitle: '12 May 2023',
    },
    {
      id: 3,
      title: 'explore the art of photography with your creativity',
      img: 'https://digitaldefynd.com/wp-content/uploads/2018/07/best-photography-course-tutorial-class-certification-training-online.webp',
      subTitle: '12 May 2023',
    },
    {
      id: 4,
      title: 'Now many people have chosen photography as a profession.',
      img: 'https://images.shiksha.com/mediadata/images/articles/1439545106phpuJSsZN.jpeg',
      subTitle: '12 May 2023',
    },
    {
      id: 5,
      title:
        'So SummerSurfers is for those who want to learn photography as a hobby or as a profession',
      img: 'https://resources.reed.co.uk/courses/coursemedia/365865/83808396-f20a-47d3-abe3-027284cedc82_cover.jpg',
      subTitle: '12 May 2023',
    },
  ]
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {swipers.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ backgroundImage: `url(${item.img})` }}
            className="bg-no-repeat bg-cover bg-center lg:rounded-lg"
          >
            <div className="w-full h-96 lg:rounded-lg bg-black bg-opacity-30 flex flex-col lg:flex-row p-5 text-white">
              <div className="w-full text-3xl lg:text-5xl flex items-center bg-black bg-opacity-30 rounded-3xl rounded-bl-none p-5 text-center">
                <h1 style={{ fontFamily: 'Satisfy, cursive' }}>{item.title}</h1>
              </div>
              <div className="w-full"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopSlider
