import Image from 'next/image'
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Clients() {

  const logos = [
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    "/icon.png",
    
   
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




{/* <div className="xl:w-1/4 md:w-1/2 p-4">
<div className="bg-gray-100 p-6 rounded-lg">
  <div className="relative border w-full h-24">
    <Image
      className=""
      objectFit="cover"
      layout="fill"
      width={200}
      height={200}
      src="/wtwedo5.jpg"
      alt="content"
    />
  </div>
  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
    SUBTITLE
  </h3>
  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
    Chichen Itza
  </h2>
  <p className="leading-relaxed text-base">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
    quae perspiciatis qui, officiis quidem dignissimos aliquid
    reprehenderit esse eos odio nisi laboriosam totam ab itaque
    minima, assumenda accusamus tempora iure! Quidem totam
    voluptatum ea nam dignissimos atque aliquam repudiandae, quae
    nihil consectetur perspiciatis eum ipsa at consequuntur
    similique ipsum. Asperiores.
  </p>
</div>
</div> */}




{/* <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="relative border w-full h-24">
                <Image
                  className=""
                  objectFit="cover"
                  layout="fill"
                  width={200}
                  height={200}
                  src="/wtwedo5.jpg"
                  alt="content"
                />
              </div>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                quae perspiciatis qui, officiis quidem dignissimos aliquid
                reprehenderit esse eos odio nisi laboriosam totam ab itaque
                minima, assumenda accusamus tempora iure! Quidem totam
                voluptatum ea nam dignissimos atque aliquam repudiandae, quae
                nihil consectetur perspiciatis eum ipsa at consequuntur
                similique ipsum. Asperiores.
              </p>
            </div>
          </div> */}