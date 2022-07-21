import Image from "next/image";
import Slider from "../components/slider";
import Link from "next/link";
import Clients from "../components/client";
import Testimonials from "../components/testimonial";
import { FaBeer, FaDownload } from "react-icons/fa";

export default function Home() {
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
      name: "   how is ml related to block chai",
      logo: "/aiml2.jpg",
      desc: "  using AI and Big Data in Blockchain Technology: A step closer to the futureThere has been a number of changes in the IT world recently. One of the most talked-about collaborations that can possibly change the entire landscape of the online world is the usage of AI technology in blockchain technology. Additionally, Big Data can contribute to this change quite significantly......",
    },
    {
      name: "   how is ml related to block chai",
      logo: "/aiml.jpg",
      desc: "  Building solutions using artificial intelligence, machine learning and blockchain technologies. Artificial intelligence and machine learning can automate important, but manual andtime-consuming tasks, allowing employees to focus on higher-value work.",
    },
    {
      name: "   how is ml related to block chai",
      logo: "/aiandml.jpg",
      desc: "  Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data purposes.Blockchain technology has been trending in recent years. This technology allows a secure way for individuals to deal directly with each other through a highly secure and decentralized system, without an intermediary. In addition to its own capabilities, machinelearning can help in handling many limitations that blockchain-based systems have.  ",
    },
  ];

  return (
    <>
      <section>
        <Slider />
      </section>
      <section className="md:pt-24 md:pb-32 text-zinc-90 bg-blue">
        <div className="lg:container p-4 mx-auto">
          <h1 className="text-4xl text-white tracking-wide  ">OUR OFFERINGS</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-4 pt-4 lg:pt-8">
            <Link href="/services#turnkey-projects">
              <div className="w-auto relative">
                <div className="relative w-full lg:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-150 hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    objectFit="cover"
                    src="/services1.jpg"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4 ">
                    <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                      KNOWLEDGE SERVICES
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#product-development">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm ease-in duration-300 hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/knowledgeserv.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md  text-white z-10 w-full">
                      STAFFING <br /> SERVICES
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services#contract-manufacturing">
              <div className="w-auto relative">
                <div className="relative w-full md:h-96 h-72 flex justify-start items-end shadow-sm ease-linear duration-300 hover:scale-[1.02] transition-all cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/itserv.jpg"
                    className="absolute inset-0 object-cover"
                  />
                  <div className="w-full h-1/2 absolute bottom-0 left-0 right-0 from-transparent bg-gradient-to-b to-black opacity-60"></div>

                  <div className="flex items-center justify-between z-50 w-full p-4">
                    <h1 className="text-4xl tracking-wide drop-shadow-md   text-white z-10 w-full">
                      IT <br /> SERVICES
                    </h1>
                    {rightIcon}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* clints data */}
      <section>
        <Clients />
      </section>

      <section className="text-black bg-green body-font  overflow-hidden lg:py-12">
        <div className="container  px-5  py-10 mx-auto  lg:rounded-lg">
          <div className="lg:w-full mx-auto flex flex-col lg:flex-row lg:gap-80 ">
            <div className="relative  h-[650px]  w-full lg:w-1/2 ">
              <Image
                alt="ecommerce"
                objectFit="cover"
                layout="fill"
                src="/whyworkwithus.jpg"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
              <h1 className="text-white text-3xl title-font text-center font-medium mb-1 ">
                Why work with us
              </h1>

              <p className="mt-4 text-justify leading-relaxed text-white ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                adipisci beatae expedita iusto alias nostrum ipsam asperiores
                labore commodi delectus aut, vitae maxime similique accusantium
                voluptate. Rem reprehenderit, veritatis vel vitae delectus
                ullam. Odio veritatis, voluptatum natus cumque doloribus
                eligendi neque dolorum ea reiciendis sequi, nobis, inventore
                alias iste nam optio excepturi? Voluptas cumque obcaecati magnam
                cupiditate. Unde laboriosam distinctio eaque adipisci ut
                exercitationem amet tempora, cupiditate aspernatur hic
                doloremque non, dolorem debitis autem impedit explicabo optio
                neque itaque? Tempore numquam in, quidem tempora dignissimos
                assumenda blanditiis a repellat fuga voluptas mollitia labore
                quisquam est sit maiores fugit reprehenderit ipsa?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* achievements */}
      <section className="text-black ">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
              Our Achievements
            </h1>
          </div>
          <div className="flex flex-wrap justify-center -m-4 text-center">
            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full hover:w-1/4 ease-in duration-300">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <FaDownload size={50} color="red" />
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">our clients</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full hover:w-1/4 ease-in duration-300 ">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full hover:w-1/4 ease-in duration-300">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/5 sm:w-1/2 w-full hover:w-1/4 ease-in duration-300">
              <div className="border-2 border-red-600 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  46
                </h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-blue">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex gap-6 justify-center">
            <span className="inline-block w-32 h-[4px] mt-5 rounded-full bg-white"></span>
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white  text-center">
              Knowledge Services
            </h1>
            <span className="inline-block w-32 h-[4px] rounded-full mt-5 bg-white"></span>
          </div>
          <div className="mt-2"></div>

          <div className="mt-8 xl:mt-12 lg:flex gap-56  lg:items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold capitalize text-white">
                  New Components
                </h1>

                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold capitalize text-white">
                  New Components
                </h1>

                <p className=" text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-white capitalize ">
                  New Components
                </h1>

                <p className="text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-white capitalize ">
                  New Components
                </h1>

                <p className="text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>

            <div className="hidden ml-52 lg:flex lg:w-1/2 lg:justify-center">
              <Image
                className=" flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] "
                src={"/profile.jpg"}
                width={480}
                height={480}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-green-50">
        <div className="container px-6 py-10 mx-auto">
          <div className="flex gap-6 justify-center">
            <span className="inline-block w-32 h-[4px] mt-5 rounded-full bg-blue"></span>
            <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-black  text-center">
              IT Services
            </h1>
            <span className="inline-block w-32 h-[4px] rounded-full mt-5 bg-blue"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex gap-56 lg:items-center">
            <div className="hidden mr-52 lg:flex lg:w-1/2 lg:justify-center">
              <Image
                className=" flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem]"
                src={"/profile.jpg"}
                width={480}
                height={480}
                alt=""
              ></Image>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-black capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl font-semibold  capitalize ">
                  New Components
                </h1>

                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident ab nulla quod dignissimos vel non corrupti doloribus
                  voluptatum eveniet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>
      {/* blogs */}

      <section className="text-black body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col flex-wrap text-center w-full mb-20 ">
            <h2 className="text-xs text-black tracking-widest font-medium title-font mb-1">
              any heading
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              Blogs
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              iusto quisquam quasi assumenda ad. Natus consectetur voluptate
              dolorem, quisquam ea voluptatem odio fugiat cumque, error alias
              fuga autem harum cupiditate necessitatibus qui inventore,
              explicabo dicta! Et ab odit assumenda, quas ratione eveniet
              laboriosam alias labore temporibus adipisci eius. Distinctio,
              accusantium.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 border">
            {blog.map(({ name, logo, id, desc }) => {
              return (
                <div
                  key={id}
                  className=" bg-gray-400 flex flex-col lg:flex-1 py-7 justify-between bg-opacity-75 px-8   rounded-lg overflow-hidden text-center relative"
                >
                  <div>
                    <div className=" transition duration-150 ease-out hover:ease-in hover:opacity-50">
                      <Image
                        className=" flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem]"
                        src={logo}
                        width={200}
                        height={200}
                        alt=""
                      ></Image>
                    </div>

                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {name}
                    </h1>
                    <p className="leading-relaxed mb-3 text-justify ">{desc}</p>
                  </div>
                  <Link href={"/blogs"}>
                    <p className="text-blue ease-in duration-300 hover:bg-orange hover:text-white  flex justify-center items-center text-center hover:cursor-pointer">
                      Read More
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
