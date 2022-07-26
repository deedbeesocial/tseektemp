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
    <div className="bg-coustom1">
     
     <div className="w-full h-80 relative bg-coustom1 ">
        <Image
          layout="fill"
          alt="ser"
          src="/solutions/career.jpg"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative    h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white">
             Careers
            </h1>
          </div>
        </div>
      </div>
      <section className="text-black  ">
        <div className="container px-5 py-11 mx-auto bg-coustom1">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            error in asperiores tempore neque similique doloremque. Aut nesciunt
            repudiandae ipsa quia natus assumenda tenetur qui quos quo incidunt
            dolore corrupti, libero repellendus vitae nihil quisquam fuga nemo
            quasi id dolor consequuntur veniam? Odit quos porro natus atque,
            repellat architecto dolorem neque soluta necessitatibus a at fugiat
            suscipit temporibus ipsum quaerat. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eum omnis velit, delectus quam eius
            suscipit fugit aspernatur doloremque deleniti odio! Aspernatur non
            dignissimos ducimus aliquam incidunt reiciendis vero dicta quasi
            omnis aut voluptas hic quas tempora modi impedit voluptatem repellat
            quia, laborum rem. Cupiditate doloribus, illum cum amet
            reprehenderit consequuntur?
          </p>
        </div>
      </section>

      <section className="text-black bg-coustom1 ">
        <div className=" container px-5 md:pt-14 md:pb-10 pt-7 pb-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl  text-center title-font text-black mb-4">
              Current Openings
            </h1>
          </div>
          <div className="flex  lg:flex-row flex-col  mb-8  w-full  gap-7 flex-wrap ">
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
    </div>
  );
}
