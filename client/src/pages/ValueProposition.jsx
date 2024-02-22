import React from "react";
import Layout from "../components/Layout";

const ValueProposition = () => {
  return (
    <Layout title={"MAF | Value Proposition"}>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[75vh] md:h-[67vh] top">
          <img
            src="/img/proposition.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
          <div className="absolute flex-col mt-5 md:mt-20 gap-5 md:gap-8 px-5 w-full inset-0 bottom-0 flex md:flex-row items-center md:justify-between text-white md:px-16">
            <div className="left w-full text-center md:text-start md:w-[50%]">
              <h2
                className="text-3xl md:text-5xl text-start font-bold mt-5 md:mt-40 cursor-pointer"
                style={{ fontFamily: "sans-serif",textShadow: "1px 1px black" }}
              >
                Our Unique Value Proposition
              </h2>
            </div>
            <div className="right w-full text-center md:text-start md:w-[40%]">
              <p
                style={{ textShadow: "1px 1px black" }}
                className="hover text-lg md:text-2xl font-light cursor-pointer hover:drop-shadow-xl drop-shadow-md text-justify"
              >
                We at MAF Group, seamlessly blend creativity with technology to
                reimagine a future where your business not only adapts but
                thrives. We bring forth the best services, talents and resources
                to unlock the gateway of limitless possibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[90%] mx-auto">
          <div className="w-full mt-8 md:mt-10">
            <div className="flex-col px-5 md:px-14 md:flex-row flex w-full">
              <div className="left w-full">
                <img
                  src="/img/footprint.png"
                  alt=""
                  className="w-full aspect-video object-cover md:w-1/2 mx-auto"
                />
              </div>
              <div className="right w-full flex flex-col h-auto">
                <h1
                  style={{ fontFamily: "sans-serif" }}
                  className="text-2xl text-[#071b52] dark:text-rose-600 font-bold"
                >
                  Diverse Footprint
                </h1>
                <p className="text-justify font-light">
                  We boast a diverse portfolio catering to a wide range of
                  customers and accumulate a global footprint that spans across
                  70 countries. With dual headquarters in India and UK, we have
                  ventured into various industries such as Retail, Ecommerce and
                  have embarked on multiple challenging projects thus emerging
                  successful.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 md:mt-8">
            <div className="flex-col px-5 md:px-14 md:flex-row flex w-full">
              <div className="left w-full order-1 md:order-2">
                <img
                  src="/img/agile.png"
                  alt=""
                  className="w-full my-auto aspect-video object-cover md:w-1/2 mx-auto"
                />
              </div>
              <div className="right w-full flex flex-col h-auto order-2 md:order-1">
                <h1
                  style={{ fontFamily: "sans-serif" }}
                  className="text-2xl text-[#071b52] dark:text-rose-600 font-bold"
                >
                  Agile Development
                </h1>
                <p className="text-justify font-light">
                  We expediate your journey to success by adapting an iterative
                  approach to ensure rapid results thus helping you stay ahead
                  of the curve. We commit ourselves to achieving adaptability
                  and efficiency in this dynamic business landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-10 md:mt-8">
            <div className="flex-col px-5 md:px-14 md:flex-row flex gap-5 w-full">
              <div className="left w-full order-1">
                <img
                  src="/img/partner.png"
                  alt=""
                  className="w-full aspect-video object-cover md:w-1/2 mx-auto"
                />
              </div>
              <div className="right w-full flex flex-col h-auto order-2">
                <h1
                  style={{ fontFamily: "sans-serif" }}
                  className="text-2xl text-[#071b52] dark:text-rose-600 font-bold"
                >
                  Strategic Partnerships
                </h1>
                <p className="text-justify font-light">
                  We guarantee continuous support, guidance and aid throughout
                  the development lifecycle thus exhibiting our dedication to
                  your project’s success. Our strategic partnerships are built
                  on trust and faith ensuring a collaborative and fruitful
                  completion of every project while ensuring long-term growth.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 md:mt-8">
            <div className="flex-col px-5 md:px-14 md:flex-row flex w-full">
              <div className="left w-full order-1 md:order-2">
                <img
                  src="/img/growth.png"
                  alt=""
                  className="w-full aspect-video object-cover md:w-1/2 mx-auto"
                />
              </div>
              <div className="right w-full flex flex-col h-auto order-2 md:order-1">
                <h1
                  style={{ fontFamily: "sans-serif" }}
                  className="text-2xl text-[#071b52] dark:text-rose-600 font-bold"
                >
                  Sustainable Growth
                </h1>
                <p className="text-justify font-light">
                  We delve deep and decipher narratives, analyze business
                  requirements and craft business plans that assure sustained
                  growth and resilience in the face of changing objectives. Our
                  solutions are effective in the test of time as it is crafted
                  by understanding your unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ValueProposition;
