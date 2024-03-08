import React from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Data Analytics"}>
      <div className="w-full mt-[4rem] pb-10 bg-[#e9ebeb]">
        <div className="text-3xl font-bold pt-4 text-center text-[#071b52]">
          <h2>Services</h2>
        </div>
        <div className="w-full md:h-[screen] md:pt-8">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full w-full gap-8 md:w-[90vw] md:flex-row lg:w-[80vw] m-auto px-4 justify-center sm:items-start mt-8">
            <div className="h-full one m-auto sm:w-full md:mt-0">
              <img
                src="/img/da.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover rounded-xl aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/data-analytics")}
                className="px-2 text-xl cursor-pointer font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Data Analytics
              </h2>
              <Link to={"/data-analytics"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  To automate data analytics, we will pick the right automation
                  platform that suits your business needs...
                </p>
              </Link>
            </div>
            <div className="h-full two m-auto md:mt-0 sm:w-full">
              <img
                src="/img/cloudBanner.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover rounded-xl aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/cloud-solution")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Cloud Solution
              </h2>
              <Link to={"/cloud-solution"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Organizations need to transform their IT environment with
                  cloud solutions to improve productivity...{" "}
                </p>
              </Link>
            </div>
            <div className="h-full three m-auto mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/marketingBanner.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/marketing-automation")}
                className="px-2 text-xl font-bold mt-4 hover:underline cursor-pointer text-[#071b52] dark:text-rose-600"
              >
                Marketing Automation
              </h2>
              <Link to={"/marketing-automation"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  The marketing automation industry has grown in the last...
                </p>
              </Link>
            </div>
            <div className="h-full four mt-8 md:mt-0 w-full">
              <img
                src="/img/digitalBanner.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-xl bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2
                onClick={() => navigate("/digital-transformation")}
                className="px-2 cursor-pointer text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                Digital Transformation
              </h2>
              <Link to={"/digital-transformation"} className="text-gray-600 ">
                <p className="px-2 font-normal mt-1">
                  Digital transformation is a business's way of saying bye to
                  the old and...
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
