import Image from "next/image";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Testimonials() {
  const blog = [
    {
      id: 1,
      name: "   how is ml related to block chain",
      logo: "/aiml2.jpg",
      desc: "  using AI and Big Data in Blockchain Technology: A step closer to the futureThere has been a number of changes in the IT world recently......",
    },
    {
      id: 2,
      name: "   how is ml related to block chain",
      logo: "/aiml2.jpg",
      desc: "  Building solutions using artificial intelligence, machine learning and blockchain technologies. Artificial intelligence and machine learning ....",
    },
    {
      id: 3,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data ........... ",
    },
    {
      id: 4,
      name: "   how is ml related to block chain",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis ...........",
    },
  ];
  const blog1 = [
    {
      id: 1,
      name: "  Lecture 36 Energy Efficiency - I",
      name2: "  EFFICIENT USE OF ENERGY",
      
      desc:<iframe width="300" height="300" src="https://www.youtube.com/embed/2zWt-pBCU2I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    },
    {
      id: 2,
      name: " MSW to Power - Waste to Energy",
      name2: "  Waste to Energy! Indian Railways converting solid waste into Biogas YouTube 480p",
      
      desc: <iframe width="300" height="300" src="https://www.youtube.com/embed/Am1yjwG4BKo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    },
    {
      id: 3,
      name: "   What is net zero? | The Economist",
      name2: "  What is Net Zero and why is it difficult for India to achieve it?",
      
      desc:  <iframe width="300" height="300" src="https://www.youtube.com/embed/LgWqCM7IqYE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> ,
    },
    {
      id: 4,
      name: " Concept of Carbon Credit from Indian Perspective | What is Carbon Credit and Carbon Trading?",

      name2: "Carbon trading",
      
      desc: <iframe width="300" height="300" src="https://www.youtube.com/embed/Fgno9-NbtEM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
    },
  ];
  

  const blog2 = [
    {
      id: 1,
      name: "Horizontal Clarifiers for Coal-Fired Plant ",
      logo: "/news/1.jpg",
      desc: "  A coal fired power plant and its engineers turned to Monroe Environmental for emergency implementation of a stormwater treatment system upgrade. ",
    },
    {
      id: 2,
      name: "   How Does An Activated Carbon Filter Work?",
      logo: "/news/2.jpg",
      desc: " Building solutions using artificial intelligence, machine learning and blockchain technologies. Artificial intelligence and machine learning ....",
    
    
    },
    {
      id: 3,
      name: "   RAINWATER HARVESTING",
      logo: "/news/3.jpg",
      desc: " Rainwater harvesting is a simple strategy by which rainfall is gathered and stored for future usage. The process involves collection and storage  ",
    },
    {
      id: 4,
      name: "   CARBON PRICING: A GLOBAL OPPORTUNITY",
      logo: "/news/4.jpg",
      desc: "Forced contraception in exchange for aid is the solution.The problem is that there are too many of us.COVID-19 is natures way of dealing with the situation",
    },

    
  ];



  return (
    <>
      <section className="text-black bg-lightgray body-font md:pt-14 md:pb-10 pt-7 pb-5">
        <div className="container px-5  mx-auto">
          

          
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              slidesPerGroup={1}
              breakpoints={{
                769: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
                1024: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 20,
                  Autoplay: true,
                  loop: true,
                  speed: 800,

                  pagination: {},
                },
              }}
              autoplay={true}
              pagination={{ clickable: true }}
              loop={true}
              speed={800}
            >
              <SwiperSlide>
                <p className="text-center text-3xl  capitalize lg:text-4xl text-black  mb-10 ">News</p>
              <div className="flex  flex-wrap gap-1 mb-4 ">
                {blog2.map(({ name, logo, id, desc }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                            src={logo}
                            width={400}
                            height={300}
                            alt=""
                          ></Image>
                         
                        </div>

                        <h1 className="title-font sm:text-2xl text-xl text-left font-medium text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="leading-relaxed mt-10 text-left ">
                          {desc}
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                       
                        <Link href={"/blog/blogs"}>
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
                </div>
              </SwiperSlide>



              <SwiperSlide>
              <p className="text-3xl  capitalize lg:text-4xl text-black  text-center mb-7 ">Opinions</p>
              <div className="flex  flex-wrap gap-1 ">
                {blog.map(({ name, logo, id, desc }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full transition duration-150 ease-out hover:ease-in hover:opacity-50">
                          <Image
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                            src={logo}
                            width={400}
                            height={300}
                            alt=""
                          ></Image>
                        </div>

                        <h1 className="title-font sm:text-2xl text-xl text-left font-medium text-gray-900 mb-3">
                          {name}
                        </h1>
                        <p className="leading-relaxed mt-10 text-left ">
                          {desc}
                        </p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <Link href={"/blog/blogs"}>
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1  flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
                </div>
              </SwiperSlide>



              <SwiperSlide>
              <p className="text-3xl  capitalize lg:text-4xl text-black  text-center mb-7">Media</p>
              <div className="flex  flex-wrap gap-1 ">
                {blog1.map(({ name, id, desc,name2 }) => {
                  return (
                    <div
                      key={id}
                      className="w-fit flex flex-col lg:flex-1 py-4 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                    >
                      <div>
                        <div className=" w-full ">
                          {/* <Image
                            className=" flex-shrink-0 object-cover xl:w-[100%] xl:h-[34rem]"
                            src={logo}
                            width={400}
                            height={300}
                            alt=""
                          ></Image> */}
                           <div className="flex-shrink-0 object-cover xl:w-[100%] ">
                         {desc}
                          </div>
                        </div>

                        <h1 className=" text-xl font-medium  text-black mb-3">
                          {name}
                        </h1>
                          <p>{name2}</p>
                      </div>

                      <div className="flex justify-center mt-4">
                        <Link href={"/blog/blogs"}>
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1  flex justify-center items-center text-left hover:cursor-pointer">
                          Watch video
                          </p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
                </div>
              </SwiperSlide>



              

             


            </Swiper>
         
        </div>
      </section>
    </>
  );
}
