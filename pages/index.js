import Image from "next/image";
import Slider from "../components/slider";
import Link from "next/link";
import Clients from "../components/client";
import Testimonials from "../components/testimonial";
import KnowledgeCard from "../components/knowledgecard";
import Projectscard from "../components/projectscard";
import Blognew from "../components/blognew";

import {
  FaAccessibleIcon,
  FaAddressBook,
  FaAdjust,
  FaBeer,
  FaDownload,
  FaSalesforce,
  FaVideo,
} from "react-icons/fa";
import Footprint from "../components/footprint";
import Itservicescard from "../components/itservicescard";

export default function Home() {
  const Itservice = [
    {
      name: "Accessibility",
      icon: <FaAccessibleIcon size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 1,
    },
    {
      name: "Design",
      icon: <FaAddressBook size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 2,
    },
    {
      name: "Development",
      icon: <FaAdjust size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 3,
    },
    {
      name: "Marketing",
      icon: <FaBeer size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 4,
    },
    {
      name: "Sales",
      icon: <FaDownload size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 5,
    },
    {
      name: "Video",
      icon: <FaVideo size={40} color="white" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 6,
    },
  ];
  const Knowledge = [
    {
      name: "Accessibility",
      icon: <FaAccessibleIcon size={40} color="black" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 1,
    },
    {
      name: "Design",
      icon: <FaAddressBook size={40} color="black" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 2,
    },
    {
      name: "Development",
      icon: <FaAdjust size={40} color="black" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 3,
    },
    {
      name: "Marketing",
      icon: <FaBeer size={40} color="black" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 4,
    },
    {
      name: "Sales",
      icon: <FaDownload size={40} color="black" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 5,
    },
    {
      name: "Video",
      icon: <FaVideo size={40} color="black" />,
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      id: 6,
    },
  ];

  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

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
  const whyworkwithus = [
    {
      id: 1,
      text: "Cost-effective and just-in-time staffing through a strong network of technology professionals.",
    },
    {
      id: 2,
      text: "  Right-sized partner for all your talent transformation needs. Build your future-ready workforce.",
    },
    {
      id: 3,
      text: " Deep expertise in digital transformations that can add disproportionate value for your business.",
    },
    {
      id: 4,
      text: "  Specialists in Enterprise IT Strategy, Consulting, and Managed services via SAP and Oracle.",
    },
    {
      id: 5,
      text: "   A strong portfolio of capabilities and a proven track record across 8 industries across the globe.",
    },
    {
      id: 6,
      text: "   An organization driven by empathy, integrity, expertise and focused on delivering consistent value.",
    },
  ];
  const offerings = [
    {
      id: 1,
      name1: "Energy ",
      name2: "Efficiency ",
      images: "/ouroffering/energy.png",
      links: "/solutions/knowledge",
    },
    {
      id: 2,
      name1: "Water",
      name2: "Management",
      images: "/ouroffering/water.png",
      links: "/solutions/staffing",
    },
    {
      id: 3,
      name1: "Renewable  ",
      name2: "Energy",
      images: "/ouroffering/solar.png",
      links: "/solutions/itservices",
    },

    {
      id: 4,
      name1: "Carbon ",
      name2: "Trading",
      images: "/ouroffering/carbon.png",
      links: "/solutions/itservices",
    },
  ];


  return (
    <>
      <section>
        <Slider />
      </section>
      <section className="bg-lightgray">
        <div className=" md:container p-4 mx-auto md:py-20 text-black">
          <div className="grid grid-col-1 md:grid-cols-2 md:gap-16 gap-4">
            <div className="w-auto">
              <h1 className="text-4xl tracking-wide  text-black">About Us</h1>
              <p className="prose pt-8"></p>

              <p className="prose pt-8">
                Established in 1991, Zenith is a leading sustainability
                solutions provider specialized in Energy Savings, Solar Energy,
                Water Management and Carbon Trading. Zenith is empaneled with
                the Bureau of Energy Efficiency (BEE) and Govt of India as an
                Energy Auditing consultancy and an ESCO (Energy Services
                Company). With hundreds of energy audits, investments, solar
                installations and CDM projects under its belt, Zenith is the
                chosen partner for several businesses across India for
                transitioning into a green economy.
              </p>
              <div className="flex justify-center mt-4">
                        <Link href={"/blog/blogs"}>
                          <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                            Read More
                          </p>
                        </Link>
                      </div>

              {/* <Link href="/about">
                <button className="mt-8 bg-yellow text-black font-bold text-xs hover:text-zinc-700 hover:bg-yellow-800 p-3 rounded-sm transition-all">
                  READ MORE
                </button>
              </Link> */}
            </div>
            <div className="w-auto h-96  md:h-auto relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/ourvison/ov.png"
              />
              <div className="absolute left-0 top-0 bottom-0 w-full lg:w-full p-12 flex justify-center items-center flex-col">
                <p className="text-white text-xl text-center">Our Vision</p>
                <p className="pt-4 text-lg text-white leading-loose">
                  To be a leader in providing effective and innovative pathways
                  towards water and energy sustainability for businesses and
                  communities around the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="md:pt-8 md:pb-10  text-zinc-90 bg-blue">
        <div className="lg:container p-4 mx-auto mb-8">
          <div className="flex gap-4 justify-center mb-10">
          
            <h1 className="text-3xl  capitalize lg:text-4xl text-black  text-center">
              Our Offerings
            </h1>
          
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-12 gap-4 pt-4 lg:pt-8">
            {offerings.map(({ name1, name2, images, id, links }) => (
              <Link key={id} href={links}>
                <div className="w-auto relative">
                  <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                    <Image
                      layout="fill"
                      alt=""
                      objectFit="cover"
                      src={images}
                    />
                    <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                    <div className="flex items-center justify-between z-40 w-full p-4 ">
                      <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                        {name1} <br /> {name2}
                      </h1>
                      {rightIcon}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>




      <section className=" bg-white">
        <div className="md:container p-4 mx-auto md:py-20 text-black">
          <div className="grid grid-col-1 md:grid-cols-2 md:gap-16 gap-4">
            <div className="w-auto h-96  md:h- relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/netzero2.png"
              />
              <div className="absolute left-0 top-0 bottom-0 w-full lg:w-2/3 p-12 flex justify-center items-start flex-col text-white">
                {/* <p className="text-3xl pb-4">NetZero</p>
                <p className="pt-4 leading-loose">
                  To be a world-class manufacturer of personal wellness products
                  that are a hallmark of trust for our customers and consumers
                </p> */}
              </div>
            </div>
            <div className="w-auto flex flex-row lg:w-[600px] p-10 ">
              <div>
                <h1 className="text-4xl tracking-wide  ">NetZero</h1>
                <p className="prose pt-8 ">
                  Join our flagship net zero program and drive your business
                  infrastructure towards a sustainable and profitable green
                  future. Go beyond saving costs and reducing carbon footprint.
                  Produce what you consume. Become a Prosumer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* whyworkwithus/////////////////////////////////////////////////// */}
      <section
        className="text-black bg-green body-font  overflow-hidden lg:py-12"
        style={{
          backgroundImage: `url(${"wwwus.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" container mx-auto  lg:rounded-lg text-left">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-col ">
            <div className="lg:w-full w-full lg:mr-9  mt-6 lg:mt-0 ">
              <div className="w-full flex gap-4 lg:justify-center ">
                <h1 className=" capitalize text-3xl lg:text-4xl  text-white text-center ">
                  Why Work With Us
                </h1>
              </div>
            </div>
            <div className="p-10">
              <ul className="grid lg:grid-cols-3 grid-cols-1 lg: lg:gap-14 ">
                {whyworkwithus.map(({ text, id }) => {
                  return (
                    <li
                      key={id}
                      className="mt-4 text-lg lg:w-[350px] text-center lg:p-0 p-5 leading-relaxed text-white "
                    >
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* achievements */}
      <section>
        <Footprint />
      </section>
      
      
      <section>
        <Projectscard />
      </section>
     
      <section>
        <Clients />
      </section>

      <section>
        <Testimonials />
      </section>


      {/* blogs */}

      <Blognew/>
    </>
  );
}
