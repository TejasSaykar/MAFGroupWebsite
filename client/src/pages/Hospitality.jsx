import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Hospitality = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Hospitality"}>
      <div className="mt-[4rem] w-full">
        <div className="top h-[90vh] w-full">
          <div className="relative w-full flex h-full">
            <div className="md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-20 md:top-28 mx-5 md:left-20">
              <h2 className="md:text-3xl text-xl font-semibold">
                Redefining memorable stays for the modern Traveller
              </h2>
              <h3 className="md:text-lg text-base font-light">
                Build systems that redefines experience for the digital-savvy
                consumer. Leverage advanced technologies to predict, prepare and
                satisfy the end users thus building customer-focused solutions.
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
                src="/img/hospitality2-min.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full">
          <div className="w-[90%] mx-auto py-10">
            <p className="text-base font-medium">
              By leveraging our comprehensive suite of services and decades of
              expertise in dabbling with the Hospitality industry, we aid you in
              creating a personalized experience for all your customers by
              incorporating cutting-edge tech.
            </p>
            <div>
              <h2 className="text-2xl py-6 font-bold">Our Solution</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex p-5 shadow-xl flex-col gap-4 text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/market.png" alt="" />
                <div>
                  <h1 className="text-base">
                    Automated marketing campaign to boost site visits
                  </h1>
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
                    Personalized product recommendation engine built by using AI
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/analytics.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Data consolidation to facilitate real-time analysis and
                    report generation
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
                      to={"/case6"}
                      className="text-base text-sky-500 underline"
                    >
                      Streamlining Marketing Strategy for Enhanced Performance
                      in the Hospitality Industry
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

export default Hospitality;
