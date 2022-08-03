import React from "react";
import Image from "next/image";
import Link from "next/link";
function Projectscard() {
  return (
    <>
      <section className="text-black bg-blue body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black   mb-4">
              Our Projects
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row sm:-m-4 -mx-4  -mb-10 -mt-4 gap-6">
          <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/projectfiles/projectimage4.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/projectfiles/projectimage1.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl ">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/projectfiles/projectimage2.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>

            <div className="w-full  flex flex-col bg-white  justify-around h-[550px]   shadow-xl">
              <div className=" rounded-lg ">
                <div className="h-48 w-full relative cursor-pointer">
                  <Image
                    layout="fill"
                    alt=""
                    src="/projectfiles/projectimage1.jpg"
                    className="absolute inset-0 object-contain"
                  />
                </div>

                <div>
                  <p className="text-2xl text-center mt-4">Title</p>
                  <p className="text-black text-center mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem adipisci beatae delectus quo, deleniti atque,
                    corrupti aliquid nam quis magni ipsum id facilis quia
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Link href={""}>
                  <p className="text-black  p-2 font-bold ease-in duration-300 rounded-md  hover:bg-orange1   flex justify-center items-center text-left hover:cursor-pointer">
                    Read More
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projectscard;
