import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Banking = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Banking"}>
      <div className="w-full mt-[4rem]">
        <div className="top h-[90vh] w-full">
          <div className="relative w-full flex h-full">
            <div className="md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-32 mx-5 md:left-20">
              <h2 className="md:text-3xl text-xl font-semibold">
                Banking, Simplified and Smarter
              </h2>
              <h3 className="md:text-lg text-base font-light">
                Financial and banking landscapes are changing what with the
                uprising of digital only banks and cryptocurrencies.
                <span className="md:block">
                  Stay ahead of the times by leveraging our digital
                  transformation strategy that is made to fit your objectives.
                </span>
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
                src="/img/bankingBanner-min.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full pt-12">
          <div className="w-[90%] mx-auto pb-10">
            <p className="text-base text-justify font-medium">
              Whether you want to adopt conversational AI, dynamic targeting ads
              or implement intelligent automation, MAF group does it all! We
              come equipped with the tools and support you throughout your
              digital journey thus making the process easier and faster.
            </p>
            <div>
              <h2 className="text-2xl py-6 font-bold">Our Solution</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex p-5 shadow-xl flex-col gap-4 text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/maturity.png" alt="" />
                <div>
                  <h1 className="text-base">
                    Data warehousing with real-time flow of data
                  </h1>
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
                    Curating a unified platform to view customer data
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/focus.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Simplifying reporting process through single view
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/business-model.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Establishing marketing segments for user engagement
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
                      to={"/case2"}
                      className="text-base text-sky-500 underline"
                    >
                      Strategic Transition to Enhance Marketing Efficiency in
                      the Banking Sector
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/case4"}
                      className="text-base text-sky-500 underline"
                    >
                      Driving Revenue Uplift and Real-Time Targeting in Banking
                      Industry
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

export default Banking;
