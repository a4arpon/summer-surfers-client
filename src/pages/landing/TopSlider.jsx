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
      img: 'https://images.unsplash.com/photo-1580892047528-7dfd384dce65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=360&q=80',
      subTitle: '12 May 2023',
    },
    {
      id: 2,
      title:
        'At one time, people were doing photography only as a hobby, but with the change of era, there has been a change in peoples thinking.',
      img: 'https://images.unsplash.com/photo-1602445470458-d67e1c9ae852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&h=360&q=80',
      subTitle: '12 May 2023',
    },
    {
      id: 3,
      title: 'explore the art of photography with your creativity',
      img: 'https://images.unsplash.com/photo-1431068799455-80bae0caf685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=360&q=80',
      subTitle: '12 May 2023',
    },
    {
      id: 4,
      title: 'Now many people have chosen photography as a profession.',
      img: 'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=360&q=80',
      subTitle: '12 May 2023',
    },
    {
      id: 5,
      title:
        'So SummerSurfers is for those who want to learn photography as a hobby or as a profession',
      img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&h=360&q=80',
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
            <div className="w-full h-96 lg:rounded-lg bg-black bg-opacity-30 flex flex-col lg:flex-row p-5 text-white items-center justify-center">
              <div className="w-full text-3xl lg:text-7xl flex items-center bg-black bg-opacity-30 rounded-3xl p-5 text-center h-full justify-center">
                <h1 style={{ fontFamily: 'Satisfy, cursive' }}>{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopSlider
