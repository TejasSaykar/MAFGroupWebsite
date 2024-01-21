import React from "react";
import Layout from "../components/Layout";
import { FaArrowRight } from "react-icons/fa6";

const ValueProposition = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[67vh] top">
          <img
            src="/img/about1.jpg"
            className="w-full h-full bg-center bg-cover object-cover"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div class="absolute w-full inset-0 bottom-0 flex items-center justify-between text-white px-16">
            <div className="left w-[50%]">
              <h2 className="text-5xl font-bold mt-40 cursor-pointer" style={{fontFamily: "sans-serif"}}>
                Our Unique Value Proposition
              </h2>
            </div>
            <div className="right w-[40%]">
              <p className="hover text-2xl font-light cursor-pointer hover:drop-shadow-xl drop-shadow-md" >
                We at MAF Group, seamlessly blend creativity with technology to
                reimagine a future where your business not only adapts but
                thrives. We bring forth the best services, talents and resources
                to unlock the gateway of limitless possibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-20">
          <div className="px-14 flex gap-5 w-full">
            <div className="left w-full">
              <img src="/img/about_1.webp" alt="" className="w-full aspect-video object-cover" />
            </div>
            <div className="right w-full flex flex-col gap-5 h-auto my-auto">
              <h1 style={{fontFamily: "sans-serif"}} className="text-4xl text-[#071b52] font-bold">
                Diverse Footprint
              </h1>
              <p className="text-xl font-light">
                We boast a diverse portfolio catering to a wide range of
                customers and accumulate a global footprint that spans across 70
                countries. With dual headquarters in India and UK, we have
                ventured into various industries such as retail, ecommerce and
                have embarked on multiple challenging projects thus emerging
                successful.
              </p>
              <div className="flex items-center gap-2 text-sm font-thin text-gray-500">
                <FaArrowRight />
                <p className="hover:underline cursor-pointer">
                  See example of our work
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-24">
          <div className="px-14 flex gap-5 w-full">
            <div className="left w-full order-2">
              <img src="/img/about_2.webp" alt="" className="w-full aspect-video object-cover" />
            </div>
            <div className="right w-full flex flex-col gap-5 h-auto my-auto order-1">
              <h1 style={{fontFamily: "sans-serif"}} className="text-4xl text-[#071b52] font-bold">
                Agile Development
              </h1>
              <p className="text-xl font-light">
                We expediate your journey to success by adapting an iterative
                approach to ensure rapid results thus helping you stay ahead of
                the curve. We commit ourselves to achieving adaptability and
                efficiency in this dynamic business landscape.
              </p>
              <div className="flex items-center gap-2 text-sm font-thin text-gray-500">
                <FaArrowRight />
                <p className="hover:underline cursor-pointer">
                  See example of our work
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-24">
          <div className="px-14 flex gap-5 w-full">
            <div className="left w-full order-1">
              <img src="/img/about_3.jpg" alt="" className="w-full aspect-video object-cover" />
            </div>
            <div className="right w-full flex flex-col gap-5 h-auto my-auto order-2">
              <h1 style={{fontFamily: "sans-serif"}} className="text-4xl text-[#071b52] font-bold">
                Strategic Partnerships
              </h1>
              <p className="text-xl font-light">
                We guarantee continuous support, guidance and aid throughout the
                development lifecycle thus exhibiting our dedication to your
                project’s success. Our strategic partnerships are built on trust
                and faith ensuring a collaborative and fruitful completion of
                every project while ensuring long-term growth.
              </p>
              <div className="flex items-center gap-2 text-sm font-thin text-gray-500">
                <FaArrowRight />
                <p className="hover:underline cursor-pointer">
                  See example of our work
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-24">
          <div className="px-14 flex gap-5 w-full">
            <div className="left w-full order-2">
              <img src="/img/about_4.jpg" alt="" className="w-full aspect-video object-cover" />
            </div>
            <div className="right w-full flex flex-col gap-5 h-auto my-auto order-1">
              <h1 style={{fontFamily: "sans-serif"}} className="text-4xl text-[#071b52] font-bold">
                Sustainable Growth
              </h1>
              <p className="text-xl font-light">
                We delve deep and decipher narratives, analyze business
                requirements and craft business plans that assure sustained
                growth and resilience in the face of changing objectives. Our
                solutions are effective in the test of time as it is crafted by
                understanding your unique needs.
              </p>
              <div className="flex items-center gap-2 text-sm font-thin text-gray-500">
                <FaArrowRight />
                <p className="hover:underline cursor-pointer">
                  See example of our work
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
