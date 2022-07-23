import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";

import useCollapse from "react-collapsed";
import { useState } from "react";
import Careercard from "../components/careercard";
export default function Career() {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded1, setExpanded1] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  useCollapse({ isExpanded1 });

  const careerdata = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 2,
      title: "Backend Developer",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  return (
    <>
      {/* <section>
        <div className="w-full h-32 ">
          <p className="text-center text-4xl p-6 ">Careers</p>
        </div>
      </section> */}
      <section className="bg-coustom1 lg:py-9 lg:p-20">
        <div className="w-full h-[900px] lg:h-[500px] flex lg:flex-row lg:py-5 py-16 flex-col justify-around  ">
          <div className="p-4 lg:w-1/2 w-full h-full flex-1 md:w-full">
            <div className="flex  rounded-lg  lg:p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <h2 className="text-black text-2xl   mb-3">Career</h2>
                <p className="leading-relaxed text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  asperiores illum beatae atque distinctio, maiores odio
                  reprehenderit tenetur velit voluptas ad deleniti sint hic
                  animi ullam nisi culpa? Esse minus corporis hic, eos aperiam
                  adipisci, quae eaque quod nihil non possimus beatae ullam
                  provident enim deserunt rerum sapiente! Nobis, sint?
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 flex-1 w-full border group relative  lg:h-full   ">
            <Image
              src="/careers.jpg"
              objectFit="cover"
              alt="career"
              layout="fill"
            />

            <div className="absolute text-black top-0 left-0 w-full h-0 flex flex-col justify-center bg-opacity-70 bg-white items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-700 ">
              <p className="text-4xl text-center">
                If opportunity doesnt knock, build a door.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black ">
        <div className=" container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-black mb-4">
              Current Openings
            </h1>
          </div>
          <div className="flex  flex-row  w-full  gap-7 flex-wrap ">
            <div className=" flex flex-col gap-4  flex-1">
              {careerdata.map(({ id, description, title }) => {
                return (
                  <Careercard
                    key={id}
                    description={description}
                    title={title}
                  />
                );
              })}
            </div>
            <div className=" flex gap-4 flex-col flex-1">
              {careerdata.map(({ id, description, title }) => {
                return (
                  <Careercard
                    key={id}
                    description={description}
                    title={title}
                  />
                );
              })}
            </div>
          </div>

          {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </>
  );
}
