import Layout from "@/components/Layout";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const InformationService = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="top h-[90vh] w-full">
          <div className="relative w-full flex h-full">
            <div className="md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-28 md:top-32 mx-5 md:left-20">
              <h2 className="md:text-3xl text-xl font-semibold">
                Driving Tomorrow’s IT Evolution
              </h2>
              <h3 className="md:text-lg text-base font-light">
                Streamline and automate your business to stay ahead of the
                technological landscape by leveraging our industry experience
                and tailor-made strategies.
              </h3>

              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-0 bg-gray-800 w-[max-content] px-4 py-2 rounded-lg text-white font-semibold"
              >
                Talk to us
                <span>
                  <BiRightArrowAlt className="text-2xl" />
                </span>
              </button>
            </div>
            <div className="w-full">
              <img
                src="/img/infoService-min.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full">
          <div className="w-[90%] mx-auto pb-10">
            <p className="text-base font-medium">
              Whether it is catering to your current requirements or building
              cutting-edge technological solutions that cater to your future
              requirements, we do it all. We not only create solutions, but we
              also build systems that scale and grow with your business and help
              you propel forward in the face of roadblocks.
            </p>
            <div>
              <h2 className="text-2xl py-6 font-bold">Our Solution</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex p-5 shadow-xl flex-col gap-4 text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/application.png" alt="" />
                <div>
                  <h1 className="text-base">
                    Selecting the right platform that can scale with your
                    organization
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/data-security.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Data infrastructure establishment and consolidation
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/machine-learning.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Harnessing AI to build Augmented search for personalized
                    search results
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/digital-strategy.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Unravel customer interaction with each touchpoint by
                    Attribution modelling
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#eb1c26] py-10">
            <div className="w-[90%] flex flex-col gap-3 items-center mx-auto">
              <h2 className="text-center text-xl text-white">
                Embark on your business transformation journey!
              </h2>
              <button
                onClick={() => navigate("/contact")}
                className="text-center text-lg font-semibold text-white ring-2 ring-gray-200 hover:underline px-3 py-2 rounded-lg"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full my-10">
            <div className="w-[90%] mx-auto">
              <p>
                With a proven track record of assisting numerous clients in this
                domain, we are aware of the obstacles in your journey and come
                prepared with a strategic roadmap. We understand your unique
                requirements and assist you with a solution that not only
                empowers you to keep up with the pace, but also puts you in the
                forefront of your industry.
              </p>
            </div>
          </div>

          <div className="my-10">
            <div className="w-[90%] mx-auto">
              <h2 className="text-lg font-semibold">Case Study Links : </h2>
              <div className="flex flex-col gap-1 mt-4">
                <ul className="list-disc flex flex-col mx-4 gap-2">
                  <li className="">
                    <Link
                      to={"/case5"}
                      className="text-base text-sky-500 underline"
                    >
                      Seamless Migration for Successful Digital Transformation
                      in the IT Industry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InformationService;
