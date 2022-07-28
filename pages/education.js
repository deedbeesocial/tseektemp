import Image from "next/image"
import CoursesCard from "../components/coursescard";

function  Education(){
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
    
    return(
        <div className="bg-coustom1">
 <div className="w-full h-80 relative ">
        <Image
          layout="fill"
          alt="ser"
          src="/solutions/courses.jpg"
          objectFit="cover "
        />
        <div className="w-full    h-full  flex  justify-center">
          <div className="text-white relative   max-auto  h-full flex justify-center items-center">
            <h1 className=" text-4xl   text-bold  w-full     text-white   ">
              Courses
            </h1>
          </div>
        </div>
      </div>
      <section className="text-black py-10 ">
        <div className="container px-5 py-11 mx-auto">
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

      <section className="text-black ">
        <div className=" container px-5 py-4 mx-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl  text-center title-font text-black mb-4">
            Courses Available
            </h1>
          </div>
          <div className="flex  lg:flex-row flex-col  w-full mb-8  gap-7 flex-wrap ">
            <div className=" flex flex-col gap-4  flex-1">
              {careerdata.map(({ id, description, title }) => {
                return (
                  <CoursesCard
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
                  <CoursesCard
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
    )
}
export default  Education;





 