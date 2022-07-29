import Image from "next/image";

function Pagenotfound(){
    return(
        <>
        <div className="w-screen h-screen  flex justify-center lg:flex-row flex-col  bg-blue ">
            <div className="relative w-1/2 h-[600px] rounded-lg">
                <Image
                    layout="fill"
                    src={'/404/404.jpg'}
                    alt="404"
                    objectFit="cover"


                />
            </div>

            <div className="lg:mt-[10%]">
                <p className="text-6xl text-white font-extrabold items-center font-mono">Page Not Found 404</p>
            </div>

        </div>
        </>
    )
}
export default Pagenotfound;