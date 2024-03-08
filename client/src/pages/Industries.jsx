import React from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";

const Industries = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Data Analytics"}>
      <div className="w-full mt-[4rem] pb-10 bg-[#e9ebeb]">
        <div className="text-3xl font-bold pt-4 text-center text-[#071b52]">
          <h2>Industries</h2>
        </div>
        <div className="w-full md:h-[screen] md:pt-8">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full w-full gap-8 md:w-[90vw] md:flex-row lg:w-[80vw] m-auto px-4 justify-center sm:items-start mt-8">
            <div className="h-full one m-auto sm:w-full md:mt-0">
              <img
                src="/img/bankingBanner-min.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover rounded-xl aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/banking")}
                className="px-2 text-xl cursor-pointer font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Banking, Simplified and Smarter
              </h2>
              <Link to={"/banking"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Financial and banking landscapes are changing what with the
                  uprising of digital only banks and cryptocurrencies....
                </p>
              </Link>
            </div>
            <div className="h-full two m-auto md:mt-0 sm:w-full">
              <img
                src="/img/pharmaBanner-min.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover rounded-xl aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/pharmaceuticals")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Shaping the modern medicine landscape
              </h2>
              <Link to={"/pharmaceuticals"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Create a patient-centric journey for your customers by
                  utilizing our custom applications and strategies...{" "}
                </p>
              </Link>
            </div>
            <div className="h-full three m-auto mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/fmcg1-min.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/fmcg")}
                className="px-2 text-xl font-bold mt-4 hover:underline cursor-pointer text-[#071b52] dark:text-rose-600"
              >
                Unveiling FMCG’s new era
              </h2>
              <Link to={"/fmcg"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  With increasing consumer demand and cross-border commerce, the
                  retail business has grown in multiple magnitudes...
                </p>
              </Link>
            </div>
            <div className="h-full four mt-8 md:mt-0 w-full">
              <img
                src="/img/automobile3-min.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/automobile")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Shaping the next generation of automobiles
              </h2>
              <Link to={"/automobile"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  With automotive industry evolving at an incredible rate,
                  businesses are pushed to change too...
                </p>
              </Link>
            </div>
            <div className="h-full four mt-8 md:mt-0 w-full">
              <img
                src="/img/hospitality2-min.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/hospitality")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Redefining memorable stays for the modern Traveller
              </h2>
              <Link to={"/hospitality"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Build systems that redefines experience for the digital-savvy
                  consumer...
                </p>
              </Link>
            </div>
            <div className="h-full four mt-8 md:mt-0 w-full">
              <img
                src="/img/manufacturing-min.jpeg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/manufacturing")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Production Innovation Inspired
              </h2>
              <Link to={"/manufacturing"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Establish an intelligent manufacturing system that connects
                  digital technology...
                </p>
              </Link>
            </div>
            <div className="h-full four mt-8 md:mt-0 w-full">
              <img
                src="/img/infoService-min.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/information-service")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Driving Tomorrow’s IT Evolutions
              </h2>
              <Link to={"/information-service"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Streamline and automate your business to stay ahead of the
                  technological landscape ...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Industries;
