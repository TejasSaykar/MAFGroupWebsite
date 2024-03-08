import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

const DigitalTrans = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Digital Transformation"}>
      <div className="mt-[4rem] w-full">
        <div className="top h-screen w-full">
          <div className="relative w-full flex h-full">
            <div className="hidden md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl mx-5 p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-10 md:top-32 px-3 md:left-20">
              <h2 className="text-3xl font-semibold">Digital Transformation</h2>
              <h3 className="text-xl font-medium">
                Embracing the Digital Age with Digital Transformation
              </h3>
              <p className="text-lg">
                With most of the population using the Internet, business of all
                sizes must be digitally adept and build an online presence to be
                seen.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center bg-gray-800 w-[max-content] px-4 py-2 rounded-lg text-white font-semibold"
              >
                Talk to us
                <span>
                  <BiRightArrowAlt className="text-xl font-semibold" />
                </span>
              </button>
            </div>
            <div className="bg-cyan-200/40 w-full">
              <img
                src="/img/digitalBanner.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full py-12 ">
          <div className="w-[90%] mx-auto">
            <div>
              <h2 className="text-2xl py-6 font-bold">Our approach </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-12">
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/maturity.png" alt="" />
                <div>
                  <h1>Assess digital maturity</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img
                  className="w-1/3 mx-auto"
                  src="/img/digital-strategy.png"
                  alt=""
                />
                <div>
                  <h2>Develop digital strategy</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/focus.png" alt="" />
                <div>
                  <h2>Focus on innovation</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img
                  className="w-1/3 mx-auto"
                  src="/img/business-model.png"
                  alt=""
                />
                <div>
                  <h2>Build a robust business model</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold pt-4">Our Solution</h2>
            <div className="pt-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/implement.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">
                    Flawless Implementation
                  </h2>
                  <p>
                    A successful implementation of a new venture or making your
                    business digital-friendly requires you to meticulously plan
                    and execute it. But with MAF Group, you can let us handle
                    the complex process so you can sit back and enjoy the
                    results.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/swot.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">SWOT Analysis</h2>
                  <p>
                    We understand your business requirements and concurrently
                    analyze your digital maturity level. Equipped with a
                    detailed assessment of your strengths and weaknesses we will
                    create an approach that fits your needs.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/succession.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">Roadmap to success</h2>
                  <p>
                    We deliver tangible results by aligning your requirements
                    and aspirations to our digital strategy, ensuring
                    adaptability and efficiency.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/business-model.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">
                    Creating a New Business Model
                  </h2>
                  <p>
                    We utilize digital technologies and cutting-edge tools to
                    create a robust business model that scales with your
                    business.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/study.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">Covering all bases</h2>
                  <p>
                    Our strategy is formulated to be customer-centric depending
                    on data-driven decisions that equip your organization to be
                    agile, efficient and innovative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-bold py-6 w-[90%] mx-auto">Benefits</h1>
          <div className="md:w-1/2 mx-auto p-5 pb-10">
            <div className="border-l-[3px] border-rose-500">
              <ul className="list-disc pl-7">
                <li>Future-ready business that is resilient and adaptable</li>
                <li>Accelerated Time-to-Market</li>
                <li>Transforms customer and employee experience</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalTrans;
