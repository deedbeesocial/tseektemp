import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Testimonials() {
  const stuff = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Palash Pandey",
      position: "Co-Founder",
      company: "Renaura Wellness Pvt Ltd",
      logo: "/icon.png",
      id: 1,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Megha Kapur",
      position: "President",
      company: "Prima USA, LLC",
      logo: "/icon.png",
      id: 2,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/icon.png",
      id: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/icon.png",
      id: 5,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/icon.png",
      id: 6,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/icon.png",
      id: 7,
    },
  ];

  return (
    <section className="text-black  bg-slate-300 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              testimonial
            </h1>
            <div className="h-1 w-20 bg-bla rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 ">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            slidesPerGroup={4}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={true}
            loop={true}
            speed={800}
          >
            {stuff.map(({ text, id }) => (
              <SwiperSlide key={id}>
                <div className="w-full p-4">
                  <div className="bg-green-50 p-6 rounded-lg ">
                    <div className="relative w-full h-32">
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
                    <h2 className="text-lg text-black font-medium title-font mb-4">
                      nulll
                    </h2>
                    <p className="text-black">{text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
