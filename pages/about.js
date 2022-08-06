import Image from "next/image";
function About() {
  const team = [
    {
      name: "Dr A Mohan Reddy ",
      image: "/about/.jpg",
      role: "Founder & MD",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Dr. Chandrashekar Hariharan",
      image: "/about/.jpg",
      role: "Sustainability Expert & Advisor",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Dr. U. V. Krishna Rao",
      image: "/about/.jpg",
      role: "Sustainability Expert & Advisor",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Sindhu Jannareddy",
      image: "/about/.jpg",
      role: "Director",

      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "Seshan Ranganathan",
      image: "/about/seshan.png",
      role: "CDM Expert",
      description:
        "Seshan Ranganathan holds a Bachelor's Degree in Chemical Engineering, Industrial Engineering and a Post-Graduate Diploma in Management. He has over 25 years of experience in chemical process industries (fertilizer & petrochemical manufacturing) covering production, technical services, energy /safety audits and efficiency studies. He has 8 years of experience in certifying organizations and is involved in the validation/verification/technical review of over 150 projects under various GHG schemes.  He is also a Lead Auditor for ISO systems on Quality, Environment, Energy, Safety, Food and Sustainability.",
    },
    {
      name: "Ravi Kumar Prabhu S",
      image: "/about/ravi.png",
      role: "CDM Expert",
      description:
        "Ravi holds a Bachelor's Degree in Chemical Engineering and a Post Graduate Diploma in Management.  He has an overall experience of 23 years in the operations of Chemical industry, where he was involved in day-to-day operations of large fertilizer plants, process design, development of process flow diagrams, P&IDs, equipment design, EIA and HAZOP studies, procurement and commissioning activities etc. Thereafter, he worked for seven years in DNV-GL Climate Change Services in validation, verification and technical Review of CDM, VCS and GS projects. During this period, he was involved in nearly 200 GHG projects.",
    },
    {
      name: "Krishnan Namboodiri  K C",
      image: "/about/krishnan.png",
      role: "CDM Expert",
      description:
        "Krishnan holds a Bachelor's Degree in Chemical Engineering and a Post Graduate Diploma in Management. He has an overall experience of 38 years in the functional areas of Project Management, Technical Services & Environmental Management, Process Design, Engineering and Consultancy. Thereafter, he worked for seven years in DNV-GL Climate Change Services in validation and verification of GHG emission reduction projects in accordance with UNFCCC Clean Development Mechanism (CDM), Voluntary Carbon Standard (VCS) and Gold Standard (GS).",
    },
    {
      name: "james",
      image: "",
      role: "Head of Research",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];

  return (
    <>
      <section className="md:pt-14 text-black bg-blue " id="WhoWe-Are">
        <div className="p-4 md:container flex flex-wrap gap-10 mx-auto">
          <div className="w-auto lg:min-w-[700px] flex-1 pb-10">
            <h1 className="text-4xl text-center tracking-wide  text-black">
              About Us
            </h1>
            <p className="prose pt-8 p-5">
              Established in 1991, Zenith is a leading sustainability solutions
              provider specialized in Energy Savings, Solar Energy, Water
              Management and Carbon Trading. Zenith is empaneled with the Bureau
              of Energy Efficiency (BEE) and Govt of India as an Energy Auditing
              consultancy and an ESCO (Energy Services Company). With hundreds
              of energy audits, investments, solar installations and CDM
              projects under its belt, Zenith is the chosen partner for several
              businesses across India for transitioning into a green economy.
            </p>
          </div>

          <div className="w-full flex lg:flex-row   mb-8 flex-1 lg:w-full md:h-fit lg:gap-0 gap-10 items-center  md:flex-col flex-col   ">
            <div className="lg:w-full  flex   lg:min-w-[357px]   lg:h-full  md:h-[400px]  h-[300px] relative">
              <Image
                className=" "
                layout="fill"
                alt=""
                objectFit=" cover "
                src="/ourvison/ov.png"
              />

              <div className="w-full h-full text-white    lg:p-20    flex flex-col justify-center items-center relative ">
                <p className="text-center text-2xl mb-2 font-semibold ">
                  Our Vision
                </p>
                <p className="pt-4 text-xl text-white text-center leading-loose">
                To be a leader in providing effective and innovative pathways towards water and energy sustainability for businesses and communities around the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[100px]" id="Core-values"></div>

      <section className=" lg:container mx-auto   text-black">
        <h1 className="text-4xl tracking-wide mb-10 text-center  text-black">
          Core Values
        </h1>

        <div className="lg:container mb-10  mx-auto">
          <div className="flex lg:flex-row  flex-col gap-5 justify-center items-center">
            <div className="p-4 lg:w-[400px] ">
              <div className="h-full flex flex-col-reverse rounded-lg ">
                <div className="h-60 w-full flex justify-center relative">
                  <div className="w-[300px] h-full relative">
                    <Image
                      className="absolute brightness-50  inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/sdge/expertise2.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-black p-8 flex items-center justify-center">
                    <p className=" text-2xl font-bold text-white">
                      Expertise
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    Expertise is at the core of Zenith, with 3 decades of track
                    record cutting across 10+ sectors, backed by strong
                    leadership, mentors and SMEs.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-[400px] ">
              <div className="h-full flex flex-col rounded-lg ">
                <div className="h-60 w-full flex justify-center relative">
                  <div className="w-[300px]  h-full relative">
                    <Image
                      className="absolute brightness-50  inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/sdge/commitment.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-black p-8 flex items-center justify-center">
                    <p className=" text-2xl font-bold text-white">
                      Commitment
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    Committed to achieving the sustainability goals for
                    businesses through efficient water and energy management
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-[400px] ">
              <div className="h-full rounded-lg flex flex-col-reverse ">
                <div className="h-60 w-full flex justify-center  relative">
                  <div className="w-[300px] h-full relative ">
                    <Image
                      className="absolute   brightness-50  inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/sdge/transparency.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0 text-black p-8 flex items-center justify-center">
                    <p className=" text-2xl font-bold text-white">
                      Transparency
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    Transparency in assessment, design and execution.
                    Co-creation of solutions and real-time monitoring of assets
                    through modern technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 lg:w-[400px] ">
              <div className="h-full rounded-lg ">
                <div className="h-60 w-full  flex justify-center relative">
                  <div
                    className="w-[300px] brightness-50 
                     h-full relative"
                  >
                    <Image
                      className="absolute  inset-0 object-cover"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                      src="/sdge/accountability.png"
                    />
                  </div>
                  <div className="absolute inset-0 "></div>
                  <div className="absolute inset-0   p-8 flex items-center justify-center">
                    <p className=" text-2xl font-bold  text-white">
                      Accountability
                    </p>
                  </div>
                </div>
                <div className="mt-5 text-center ">
                  <p className="leading-relaxed md:px-5 mb-3">
                    End-End Accountability on deployment and maintenance of
                    infrastructure. A reliable long-term partner on the path to
                    sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* core teaaaaaaaaaaaaaaaaaaaaaaam */}
      <div className="w-full h-[50px]" id="MeetOur-Team"></div>
      <section className="bg-lightgray md:pt-24 md:pb-10 ">
        <div className="container px-6  mx-auto">
          <h1 className="text-3xl text-center text-black capitalize lg:text-4xl ">
            Meet Our Team
          </h1>

          <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {team.map(({ name, image, role, description, id }) => {
              return (
                <div key={id} className="flex   flex-col items-center p-5">
                  <div className="relative lg:w-[300px] lg:h-[300px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
                    <Image
                      className="rounded-full"
                      alt="profle"
                      src={image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <h1 className="mt-4  text-xl h-[40px]  text-black text-center capitalize font-bold ">
                    {name}
                  </h1>
                <p className="mt-5">{role}</p>
                  <h1 className="w-[255px] h-[2px]  bg-blue mb-5"></h1>
                  <p className="text-center  text-sm ">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
