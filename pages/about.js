import Image from "next/image";
function About() {
  const team = [
    {
      name: "tom",
      image: "/about/team1.jpg",
      role: "Founder & Managing Director",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",

    },
    {
      name: "jerry",
      image: "/about/team2.jpg",
      role: "CEO",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team3.jpg",
      role: "General Manager",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",  
    },
    {
      name: "james",
      image: "/about/team4.jpg",
      role: "Head of Sourcing",
        
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team5.jpg",
      role: "Head of Quality",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team6.jpg",
      role: "Head of Research",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
    {
      name: "james",
      image: "/about/team7.jpg",
      role: "Head of Research",
      description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    },
  ];
  return (
    <>
      <section className="md:py-12 text-white bg-blue" id="the-company">
        <div className="p-4 md:container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
            <div className="w-auto pb-8">
              <h1 className="text-4xl text-center tracking-wide  text-green-900">
                The Company
              </h1>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus aperiam maxime pariatur impedit necessitatibus
                blanditiis facilis, at, accusamus soluta ducimus non nisi
                molestias minus quos expedita, mollitia dolorem laborum?
                Adipisci.
              </p>
              <p className="prose pt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                atque porro aliquam omnis unde obcaecati dignissimos ipsum rerum
                illum maxime cumque saepe hic maiores nam amet perspiciatis quae
                et, sed ex illo placeat. Inventore voluptatum minus voluptas
                perspiciatis fugit vel amet quisquam. Nostrum voluptatum neque
                aliquam amet omnis, harum impedit!
              </p>
            </div>
            <div className="w-auto h-48 md:h-auto relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/about/abt1.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="p-4 md:container mx-auto md:pt-12 text-zinc-900"
        id="core-values"
      >
        <h1 className="text-4xl tracking-wide text-center  text-green-900">
          Core Values
        </h1>
        <p className="md:pt-8 pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
          doloremque. Accusantium quasi iste animi doloremque aperiam quos
          accusamus illo, distinctio perferendis molestiae consequatur, harum
          quis? Perferendis voluptas nam aut ex reiciendis sequi eius excepturi.
          Asperiores quasi officia impedit maiores iste mollitia, quos
          voluptatem obcaecati, molestiae quod veniam aut rerum repudiandae.
        </p>

        <div className="md:pt-8 pt-4 grid md:grid-cols-5 grid-cols-1 md:gap-8 gap-4">
          <div className="flex flex-col">
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/about/abt2.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className=" text-3xl text-white">Lorem</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 flex items-start justify-center">
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex vel
                modi debitis officia explicabo. Ullam!
              </p>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="md:h-40 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-end justify-center">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                reprehenderit.
              </p>
            </div>
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/about/abt2.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className=" text-3xl text-white">Lorem</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/about/abt3.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className=" text-3xl text-white">FOOBar</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-start justify-center">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quasi blanditiis aliquam et laboriosam. Vitae.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="md:h-40 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-end justify-center">
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, nihil.
              </p>
            </div>
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/about/abt4.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className=" text-3xl text-white">Foobar</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-64 w-full bg-zinc-200 relative">
              <Image
                className="absolute inset-0 object-cover"
                layout="fill"
                alt=""
                src="/about/abt5.jpg"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 text-white p-8 flex items-center justify-center">
                <p className=" text-3xl text-white">Foobar</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 flex items-start justify-center">
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis distinctio expedita quas fuga repellendus, voluptatum
                amet laboriosam adipisci id quae, doloremque tempora, recusandae
                asperiores. Voluptatem!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* core teaaaaaaaaaaaaaaaaaaaaaaam */}

      <section className="bg-coustom1 " id="core-team">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-black capitalize lg:text-4xl ">
            Our Team
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <divs className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            
            { team.map(({name,image,role,description}) => {
              return (
            <div className="flex flex-col items-center p-5">
              <div className="relative lg:w-[400px] lg:h-[400px]  md:w-[300px] md:h-[300px] w-[200px]  h-[200px]  rounded-full">
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
              <p className=" text-black capitalize font-bold ">
                {role}
              </p>
              <h1 className="w-full h-[2px]  bg-red-600 mb-5"></h1>
              </div>
              <p className="text-center">
                {description}
              </p>
            </div>
             )}) }

          </divs>
        </div>
      </section>
    </>
  );
}
export default About;
