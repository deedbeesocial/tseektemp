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
      <section className="text-black md:pt-14 pt-7 pb-6  md:pb-10   bg-white">
        <div className=" container  lg:h-full h-1/2 mx-auto ">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={40}
            slidesPerGroup={1}
            // breakpoints={{
            //   768: {
            //     slidesPerView: "auto",
            //   },
            //   1024: {},
            // }}
            autoplay={true}
            loop={true}
            speed={800}
          >
            <SwiperSlide>
              <div className="flex gap-5 justify-center m">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
                <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
                  Footprint
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2 mt-14 mb-10 gap-5 justify-center   items-center">
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
                      50+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">Clients</p>
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
                      20+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">Fortune 100 Clients</p>
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
                      15000+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">IT Placements</p>
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
                      200+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">CXOs Placed</p>
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
                      30000+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">SAP Professionals</p>
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
                      10000+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">Oracle Professionals</p>
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
                      5000+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">Trainers</p>
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
                      1000+ 
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="lg:w-full w-[70px] lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      <p className="leading-relaxed">SMEs</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ////////////////////////////////////// */}
            </SwiperSlide>
            <SwiperSlide>
            <div className="flex gap-5  mb-10 justify-center ">
                <span className="inline-block w-20 h-[2px] mt-5 rounded-full bg-black"></span>
                <h1 className="text-3xl lg:w-[250px]  capitalize lg:text-4xl text-black  text-center">
                 Industries
                </h1>
                <span className="inline-block w-20 h-[2px] rounded-full mt-5 bg-black"></span>
              </div>
              <div className="grid  lg:grid-cols-4 grid-cols-2 mb-10 lg:mt-6 h-fit gap-5 justify-center  items-center">
                <div className=" w-full items-start">
                  <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1 text-center   lg:text-3xl text-black">
                        Manufacturing
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start   ">
                  <div className="container rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1 lg:text-3xl text-center   text-black">
                       BFSI
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start">
                  <div className=" rounded-lg flex lg:flex-row flex-col gap-4 lg:items-start lg:justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1  lg:text-3xl text-center text-black">
                        Travel &<br />
                        Transportation
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className="w-full items-start ">
                  <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1  text-center lg:text-3xl text-black">
                        Media
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed"></p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1  text-center lg:text-3xl text-black">
                       Healthcare
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1  text-center lg:text-3xl text-black">
                     Energy &<br /> Utilities
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px] flex-1  text-center lg:text-3xl text-gray-900">
                      Consumer Goods
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
                    </div>
                  </div>
                </div>

                <div className=" w-full items-start  ">
                  <div className=" rounded-lg flex flex-col lg:flex-row gap-4 lg:items-start justify-center">
                    <div className="flex justify-center">
                      <FaVideo
                        size={39}
                        color="gray"
                        alignmentBaseline="middle"
                      />
                    </div>
                    <div>
                      <h2 className="title-font lg:w-[250px]  flex-1  text-center lg:text-3xl text-black">
                       Retail
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="w-full lg:ml-0  h-[3px] bg-orange"></h1>
                      </div>

                      {/* <p className="leading-relaxed">lorem ip</p> */}
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
