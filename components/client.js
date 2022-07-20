import Image from 'next/image'
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Clients() {

  const logos = [
  
   "/clients/client1.png",
   "/clients/client2.png",
   "/clients/client3.png",
   "/clients/client4.png",
   "/clients/client5.png",
   "/clients/client6.png",
   "/clients/client7.png",
   "/clients/client8.png",
   "/clients/client9.png",
   "/clients/client10.png",
   "/clients/client11.png",
   "/clients/client12.png",
   "/clients/client13.png",
   "/clients/client14.png",
   "/clients/client15.png",
   "/clients/client16.png",
   "/clients/client17.png",

  ]

  return (
    <section className="p-4 md:pt-12 relative ">
      <h1 className="md:container mx-auto pb-12 text-4xl font-light tracking-wide text-green-900">OUR CUSTOMERS</h1>

      <div className="md:container  mx-auto pt-12 pb-24">
        <Swiper
            modules={[Autoplay]}
            slidesPerView={4}
            spaceBetween={40}
            slidesPerGroup={4}
            breakpoints={{
              768: {
                slidesPerView: 'auto',
              },
              1024: {
               
              },
            }}
            autoplay={true}
            loop={true}
            speed={800}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className='h-36 w-auto relative cursor-pointer'>
                <Image layout='fill' alt="" src={x} className='absolute inset-0 object-contain'/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}




