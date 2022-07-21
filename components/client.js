import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Clients() {
  const logos = [
    "/clients/dodsal.png",
    "/clients/Accenture.png",
    "/clients/capgemini.png",
    "/clients/HCL.png",
    "/clients/wipro.png",
    "/clients/futt.png",
    "/clients/DIFCL.png",
    "/clients/arqaam.png",
    "/clients/zafco.png",
    "/clients/cremica.png",
    "/clients/perfect.png",
    "/clients/mandiesel.png",
    "/clients/Atos.png",
    "/clients/laxmi1.png",
    "/clients/alseer.png",
    "/clients/sap.png",
  ];

  return (
    <section className="p-2 lg:pt- relative  border">
      <h1 className="lg:container mx-auto text-center text-4xl  tracking-wide text-black">
        OUR CUSTOMERS
      </h1>

      <div className="lg:container  mx-auto pt-8 pb-16">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={40}
          slidesPerGroup={4}
          breakpoints={{
            768: {
              slidesPerView: "auto",
            },
            1024: {},
          }}
          autoplay={true}
          loop={true}
          speed={800}
        >
          {logos.map((x, index) => (
            <SwiperSlide key={index}>
              <div className="h-36 w-auto relative cursor-pointer">
                <Image
                  layout="fill"
                  alt=""
                  src={x}
                  className="absolute inset-0 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
