import Image from "next/image";
function About() {
  const team = [
    {
      name: "tom",
      image: "/about/team1.jpg",
      role: "Founder & Managing Director",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "jerry",
      image: "/about/team2.jpg",
      role: "CEO",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team3.jpg",
      role: "General Manager",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team4.jpg",
      role: "Head of Sourcing",

      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team5.jpg",
      role: "Head of Quality",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team6.jpg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team7.jpg",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  return (
    <>
      <section className="md:pt-14 text-white bg-blue "  id="WhoWe-Are">
        <div className="p-4 md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12 gap-4 md:gap-16">
            <div className="w-auto  pb-10">
              <h1 className="text-4xl text-center tracking-wide  text-green-900">
                Who We Are
              </h1>
              <p className="prose pt-8">
                Founded in 2011, SFJ Business Solutions has been a trusted
                knowledge and talent services partner for several multi-national
                organizations. Driven by a core team with a wealth of passion
                and expertise, we have built long-lasting relationships with
                customers all over the globe, helping them scale their
                businesses with just-in-time and cost-effective talent
                transformation services and IT services.
              </p>
              <p className="pt-8">
                We have an exceptional track record in workforce training,
                staffing, consulting and implementations on several key
                technical capabilities including SAP and Oracle. Over the last
                decade, we have created tremendous value for our customers
                through our strong network of staff, consultants, trainers and
                partners.
              </p>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/aboutus/company.png"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[100px]" id="Core-values"></div>
      <section className=" md:container mx-auto  text-black">
        <h1 className="text-4xl tracking-wide mb-10 text-center  text-green-900">
          Core Values
        </h1>

        <div className="container mb-10  mx-auto">
          <div className="flex md:flex-row flex-col gap-5 justify-center items-center">
            <div className="p-4 md:w-[400px] ">
              <div className="h-full rounded-lg ">
                <div className="h-60 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative">
                 
                    <Image
                      className="absolute inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/aboutus/passion.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                    <p className=" text-3xl text-white">Passion</p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    A driving force behind our continuous innovation and value
                    creation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-[400px] ">
              <div className="h-full flex flex-col-reverse rounded-lg ">
                <div className="h-60 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative">
                  
                    <Image
                      className="absolute inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/aboutus/expertise.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                    <p className=" text-3xl text-white">Expertise</p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    A blend of experiences from the past and thought leadership
                    focused on future
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-[400px] ">
              <div className="h-full rounded-lg ">
                <div className="h-60 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative">
                 
                    <Image
                      className="absolute inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/aboutus/empathy.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                    <p className=" text-3xl text-white">Empathy</p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    A customer-first approach that enables us to understand
                    businesses and people better than most
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </section>
      {/* core teaaaaaaaaaaaaaaaaaaaaaaam */}
      <div className="w-full h-[50px]" id="MeetOur-Team"></div>
      <section className="bg-coustom1 md:pt-24 md:pb-10 ">
        <div className="container px-6  mx-auto">
          <h1 className="text-3xl text-center text-black capitalize lg:text-4xl ">
            Meet Our Team
          </h1>

          <divs className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {team.map(({ name, image, role, description, id }) => {
              return (
                <div key={id} className="flex flex-col items-center p-5">
                  <div className="relative lg:w-[300px] lg:h-[300px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                    <Image
                      className="rounded-full"
                      alt="profle"
                      src={image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <h1 className="mt-4 text-2xl  text-black capitalize font-bold ">
                    {name}
                  </h1>
                  <div className="flex flex-col gap-5 justify-center">
                    <p className=" text-black capitalize text-center  ">
                      {role}
                    </p>
                    <h1 className="md:w-[255px] h-[2px]  bg-blue mb-5"></h1>
                  </div>
                  <p className="text-center">{description}</p>
                </div>
              );
            })}
          </divs>
        </div>
      </section>
    </>
  );
}
export default About;
