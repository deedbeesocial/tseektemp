import Image from "next/image";
function About() {
    const team = [
        {
            name: "tom",
            image: "/about/team1.jpg",
            role: "Founder & Managing Director"
        },
        {
            name: "jerry",
            image: "/about/team2.jpg",
            role: "CEO"
        },
        {
            name: "james",
            image: "/about/team3.jpg",
            role: "General Manager"
        },
        {

            name: "james",
            image: "/about/team4.jpg",
            role: "Head of Sourcing"
        },
        {

            name: "james",
            image: "/about/team5.jpg",
            role: "Head of Quality"
        },
        {

            name: "james",
            image: "/about/team6.jpg",
            role: "Head of Research"
        },
        {

            name: "james",
            image: "/about/team7.jpg",
            role: "Head of Research"
        }


        
        
    ]
  return (
    <>
      <section
        className="md:py-12 text-white bg-blue"
        id="the-company"
      >
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
                <p className=" text-3xl text-white">Innovation</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 flex items-start justify-center">
              <p className="text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex vel modi debitis officia explicabo. Ullam!
              </p>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="md:h-40 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-end justify-center">
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, reprehenderit.
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
                <p className=" text-3xl text-white">Expertise</p>
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
                <p className=" text-3xl text-white">Honesty</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-start justify-center">
              <p className="text-base">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi blanditiis aliquam et laboriosam. Vitae.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col flex-col-reverse">
            <div className="md:h-40 w-full text-zinc-900 pt-4 pb-2 md:pb-4 flex items-end justify-center">
              <p className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nihil. 
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
                <p className=" text-3xl text-white">Integrity</p>
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
                <p className=" text-3xl text-white">Safety</p>
              </div>
            </div>
            <div className="md:h-64 w-full text-zinc-900 pt-4 pb-2 flex items-start justify-center">
              <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis distinctio expedita quas fuga repellendus, voluptatum amet laboriosam adipisci id quae, doloremque tempora, recusandae asperiores. Voluptatem!
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* core teaaaaaaaaaaaaaaaaaaaaaaam */}
      <section className="pt-12 pb-24 text-zinc-900 bg-coustom1" id="core-teams">
      <div className='md:container p-4 mx-auto'>
        <h1 className="text-4xl tracking-wide  text-green-900">MEET THE TEAM</h1>
        
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:py-12 py-6">
            {team.map(({name, image, role}, index) => (
            <div key={index} className="flex flex-col justify-start items-start rounded-sm pb-2 md:pb-0">
              <div className="w-full h-52 bg-zinc-100 shadow-sm relative">
                <Image layout='fill' className="absolute inset-0 object-cover" alt="" src={image}/>
              </div>
              
              <p className="text-lg pt-2">{name}</p>
              <p className="text-md text-black leading-tight">{role}</p>
            </div>
          ))}
        </div>
          
        <p className=" text-zinc-900">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita laborum esse ducimus in deserunt eveniet vel commodi aspernatur animi cum, exercitationem beatae impedit asperiores a necessitatibus minima eligendi corporis facere, ab delectus libero, eius aliquam deleniti sit. Praesentium officia minus alias sapiente molestiae. Totam consequuntur amet fugit tempore? Libero earum possimus nemo culpa pariatur reprehenderit ab non quas reiciendis consectetur.
        </p>
          
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 pt-12'>
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/about/group1.jpg"/>
            </div>  
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/about/group2.jpg"/>
            </div>  
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/about/group3.jpg"/>
            </div>  
            <div className='w-auto h-72 bg-gray-100 relative'>
              <Image layout='fill' className="absolute inset-0 object-cover" alt="" src="/about/group3.jpg"/>
            </div>  
        </div>
          
      </div>
      </section>



    </>
  );
}
export default About;
