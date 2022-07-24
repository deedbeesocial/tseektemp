import Image from "next/image";
function Blogone() {
  return (
    <>
      <section className="bg-whit">
        <div className=" lg:px-6 py-10 lg:mx-auto">
          <h1 className="text-3xl text-center  text-black capitalize lg:text-4xl ">
            How Machine Learning can be used with <br /> Blockchain Technology?
          </h1>

          <div className="  flex flex-col  w-full lg:h-screen  lg:items-center lg:gap-5 mt-10 ">
            <div className="relative w-full  h-[400px] lg:w-3/4 lg:h-[600px] lg:justify-center">
              <Image
                src="/blogimage/blog1.jpg"
                objectFit="cover"
                alt="career"
                layout="fill"
              />
            </div>

            <div className=" flex justify-center mt-4 p-5">
              <div className="lg:w-3/4 w-full h-full text-center ">
                <p>
                  The basic idea behind blockchain technology is to decentralize
                  the storage of data so that it can not be owned or managed by
                  a particular actor. It can be updated by a transaction sheet
                  where once a transaction is noted in the sheet it can not be
                  modified. Subsequently, the upcoming transaction needs to be
                  verified before entering the sheet by a trusted party. The
                  only difference is that the new set of records is checked by
                  the decentralized architecture of nodes. There is not any
                  specific centralized party needed to verify the records.
                  Although the mechanism of blockchain technology is complex and
                  can be considered as the set of various blocks which are
                  linked together where the flow of data is maintained. In this
                  chain, the present block holds the hash of its previous block
                  and so on. Using this kind of system blockchain mechanism
                  makes itself traceable in terms of data and transactions.
                  Instead of this, they are resistant to changes where the older
                  blockchain cannot be changed and still there are any changes
                  performed in the block which means that the changes in their
                  hash. A blockchain consists of three important components in
                  it which are listed below
                </p>
                <br />
                <p>
                  Machine learning models can use the data stored in the
                  blockchain network for making the prediction or for the
                  analysis of data purposes. lets take an example of any smart
                  BT-based application where the data is collecting by different
                  sources such as sensors, smart devices, IoT devices and the
                  blockchain in this application works as an integral part of
                  the application where on the data the machine learning model
                  can be applied for real-time data analytics or predictions.
                  Storing the data in the network of blockchain helps reduce the
                  errors of the ML models because the data in the network will
                  not have missing values, duplicates, or noise in it which is a
                  primary requirement for the machine learning model for giving
                  the higher accuracy. The below image is a representation of
                  architecture for machine learning adaptation in a BT-based
                  application.
                </p>
                <br />
                <p>
                  In the article, we had an overview of blockchain technology
                  with its components and applications. After that, we explored
                  the opportunity of integrating block technology with machine
                  learning. There are several benefits and applications of this
                  integration where we can use both of them together to cover up
                  their drawbacks. There are many applications and use cases of
                  their integration that we covered in this article.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blogone;
