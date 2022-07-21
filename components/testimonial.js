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
      logo: "/clients/Wipro.png",
      id: 1,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Megha Kapur",
      position: "President",
      company: "Prima USA, LLC",
      logo: "/clients/dodsal.png",
      id: 2,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/mandieselicon.png",
      id: 3,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/Capgemini.png",
      id: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/hcl.png",
      id: 5,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae explicabo corrupti saepe repudiandae, consequuntur facilis, excepturi esse obcaecati eaque exercitationem facere! Repellat, quo. Nostrum molestias magni iste itaque dicta placeat incidunt temporibus quis in, distinctio quas minus voluptatibus similique, possimus aliquam, odit officiis voluptatem soluta maiores. Nam, nostrum voluptatibus?",
      name: "Mangesh Gawande",
      position: "Founder & CEO",
      company: "EarthyBlend Pvt Ltd",
      logo: "/clients/Accenture.png",
      id: 6,
    },
  ];

  return (
    <section className="text-black  bg-green body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-full w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white text-center">
              Testimonial
            </h1>
            <div className="h-1 w-20 bg-bla rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 shadow-md ">
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
            {stuff.map(({ text, id, logo }) => (
              <SwiperSlide key={id}>
                <div className="w-full p-4  shadow-md">
                  <div className="bg-green-50 p-6 rounded-lg ">
                    <div className="h-36 w-auto relative cursor-pointer">
                      <Image
                        layout="fill"
                        alt=""
                        src={logo}
                        className="absolute inset-0 object-contain"
                      />
                    </div>

                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      nulll
                    </h2>
                    <p className="text-white  ">{text}</p>
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
