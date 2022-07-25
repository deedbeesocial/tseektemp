import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAdjust,
  FaBeer,
  FaDownload,
  FaSalesforce,
  FaVideo,
} from "react-icons/fa";
function Footprint() {
  return (
    <>
      <section className="text-black  bg-coustom1">
        <div className=" container  py-16 mx-auto ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            slidesPerGroup={1}
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
            <SwiperSlide>
              <div className="flex gap-4 justify-center mb-16">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black  text-center">
                  Foot print
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2 gap-10 justify-center   items-center">
                <div className=" w-full items-start">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        5+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">lorem ip</p>
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start   ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        5+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">lorem ip</p>
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        5+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">lorem ip</p>
                    </div>
                  </div>
                </div>

                <div className="w-full items-start ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        5+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">lorem ip</p>
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        5+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">lorem ip</p>
                    </div>
                  </div>
                </div>
                <div className=" w-full items-start  ">
                  <div className="rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        5+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">lorem ip</p>
                    </div>
                  </div>
                </div>

                <div className="   w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaDownload
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        2.7K+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">Lorem ip</p>
                    </div>
                  </div>
                </div>

                <div className="  w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaSalesforce
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font flex-1 font-medium text-3xl text-gray-900">
                        2.7K+
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">Lor ips</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ////////////////////////////////////// */}
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex gap-4 justify-center mb-16">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black  text-center">
                  Industries
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2 gap-10 justify-center   items-center">
                <div className=" w-full items-start">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1   text-black">
                      Manufacturing

                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start   ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1   text-black">
                        BFSI

                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1  text-black">
                      Travel And <br /> Transportation 

                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className="w-full items-start ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1   text-black">
                        Media
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1  text-black">
                        Health care
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>
                <div className=" w-full items-start  ">
                  <div className="rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1  text-black">
                        Energy And <br /> Utilities
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className="   w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaDownload
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className=" flex-1   text-black">
                        Consumer Goods
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">Lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className="  w-full items-start  ">
                  <div className=" rounded-lg flex flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaSalesforce
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="flex-1 text-black">
                       Retail
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">Lor ips</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
export default Footprint;
