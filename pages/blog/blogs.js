import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog1.jpg",
      links:"/blog/blog1",
    },
    {
      id: 2,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog2.jpg",
      links:"/blog/blog1",
    },
    {
      id: 3,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog3.jpg",
      links:"/blog/blog1",
    },
    {
      id: 4,
      title: " Machine learning models can use the data stored in the blockchain network for making the prediction or for the analysis of data purposes...................",
      heading: "How is ml related to block chain",
      image: "/blogimage/blog1.jpg",
      links:"/blog/blog1",
    },
    {
      id: 5,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog2.jpg",
      links:"/blog/blog2",
    },
    {
      id: 6,
      title: "How to build a successful business",
      heading: "How to build a successful business",
      image: "/blogimage/blog3.jpg",
      links:"/blog/blog3",
    },
  ];

  return (
    <>
      <section className="pt-12 pb-24 text-zinc-900 bg-coustom1">
        <div className="md:container p-4 mx-auto">
          <h1 className="text-4xl tracking-wide font-light text-green-900">
            Blogs
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 pt-12">
            {blogs.map(({ id, title, image,heading,links }) => {
              return (
                <div key={id} className="w-auto relative shadow-lg p-2">
                  <div className="relative w-full h-64 flex justify-start items-end shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                    <Image
                      layout="fill"
                      alt=""
                      src={image}
                      className="h-64 w-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <h1 className="md:text-3xl text-xl tracking-wide drop-shadow-lg   text-white z-10 w-full p-4">
                      {heading}
                    </h1>
                  </div>
                  <p className="pt-8 pb-4">{title}</p>
                  <Link href={links} >
                  <div className="flex  justify-center  align-middle pb-2">
                    <button className="w-fit  bg-orange   p-1">Read more</button>
                  </div>
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
