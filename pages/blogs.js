import Image from "next/image";
function blogs() {
  return (
    <>
      <div classNameName="w-screen h-screen flex justify-center">
        <section className="text-black bg-slate-100 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                AI and blockchain
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
                AI and blockchain are proving to be quite a powerful
                combination, improving virtually every industry in which they&nbsp;’re
                implemented. Blockchain and artificial intelligence are
                combining to upgrade everything from food supply chain logistics
                and healthcare record sharing to media royalties and financial
                security. The integration of AI and Blockchain affects many
                aspects, including Security –&nbsp;AI and blockchain will offer a
                double shield against cyber-attacks. AI can effectively mine
                through a huge dataset and create newer scenarios and discover
                patterns based on data behavior. Blockchain helps to effectively
                remove bugs and fraudulent data sets. New classifiers and
                patterns created by AI can be verified on a decentralized
                blockchain infrastructure and verify their authenticity. This
                can be used in any consumer-facing business, such as retail
                transactions. Data acquired from the customers through
                blockchain infrastructure can be used to create marketing
                automation through AI.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div className="relative w-full h-[600px]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/wtwedo5.jpg"
                  alt="content"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-black body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <div className="relative w-full h-[600px]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/aiandml.jpg"
                  alt="content"
                />
              </div>
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                AI and machine learning
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
                Computational advances have enabled the deployment of
                increasingly complex models, which are applied now to a
                broad-ranging set of fields. This editorial showcase aims at
                providing a snapshot of the current tools and challenges that
                are currently holding the promise to change lives in several
                ways. Herein, we also highlight research on the underlying
                pursuit of developing the concept of Artificial Intelligence.
              </p>
            </div>
          </div>
        </section>



        <section className="text-black bg-slate-100 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              How Machine Learning can be used with 
                <br className="hidden lg:inline-block" />
                Blockchain Technology
              </h1>
              <p className="mb-8 leading-relaxed">
               Blockchain technology has been trending in recent years. This technology allows a secure way for individuals to deal directly with each other through a highly secure and decentralized system, without an intermediary. In addition to its own capabilities, machine learning can help in handling many limitations that blockchain-based systems have. The combination of these two technologies (Machine Learning and Blockchain Technology) can provide high-performing and useful results. In this article, we will understand blockchain technology and explore how machine learning capabilities can be integrated with a blockchain technology-based system. We will also discuss some popular applications and use cases of this integrated approach
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <div className="relative w-full h-[600px]">
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/wtwedo5.jpg"
                  alt="content"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default blogs;
