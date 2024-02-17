import React from "react";
import Layout from "../components/Layout";

import { MdPriceCheck } from "react-icons/md";
import { PiTargetLight } from "react-icons/pi";
import { GiPathDistance } from "react-icons/gi";
import { MdNetworkWifi } from "react-icons/md";
import { SiGamedeveloper } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineBackup } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";
import { FiAperture } from "react-icons/fi";
import { RiDatabaseFill } from "react-icons/ri";
import { BsFileWord } from "react-icons/bs";

const CloudSolution = () => {
  return (
    <Layout title={"MAF | Cloud Solution"}>
      <div className="mt-[4rem]">
        <div className="relative w-full h-[100vh] md:h-[70vh]">
          <img
            src="/img/cloud-solution.jpeg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
          <div className="absolute w-full inset-0 mt-8 md:top-20">
            <div className="w-full my-auto flex md:justify-center items-center">
              <h3
                className="text-3xl md:text-4xl md:my-3 font-bold pl-4 md:text-center text-white dark:text-rose-600"
                style={{
                  fontFamily: "sans-serif",
                  textShadow: "1px 1px black",
                }}
              >
                Cloud Solution
              </h3>
            </div>
            <div className="text-white mx-4 text-justify md:mx-8">
              <h3
                className="text-xl mt-5 md:my-5"
                style={{ textShadow: "1px 1px black" }}
              >
                Organizations need to transform their IT environment with cloud
                solutions to improve productivity, lower costs, cut down on
                resources and reduce time to market.{" "}
                <span className="md:block">
                  Partner with us to get access to computing services, tools and
                  applications your organization requires to be more agile and
                  responsive to changing market dynamics. We cater to your
                  end-to-end requirements from assessment to planning to
                  deployment and optimization seamlessly.
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* <h2>The Methodology</h2> */}
        <div className="one flex w-full flex-col md:flex-row gap-4 mt-4">
          <div className="w-full flex flex-col md:flex-row gap-2 md:px-4 pb-4">
            <div className="w-full">
              <img
                src="/img/cloud2.png"
                className="aspect-video bg-cover object-cover md:w-2/3 mx-auto"
                alt=""
              />
            </div>
            <div className="w-full mt-3 md:mt-10">
              <div className="mx-7 md:mx-0">
                <h2 className="mt-3 text-xl font-semibold text-[#071b52]">
                  The Methodology
                </h2>
                <p className="text-justify">
                  Strategy is essential to implementing cloud solutions. We
                  follow a four-step process for the same - Assessment,
                  Planning, Deployment, and Optimization.
                </p>
              </div>
              <div className="two px-4 md:px-0 flex w-full mx-auto flex-col md:flex-row gap-4 mt-5 md:mt-12">
                <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
                  <div className="hidden md:w-14 md:flex items-start">
                    <PiTargetLight className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
                  </div>
                  <div className="w-full text-xl font-light">
                    <h2 className="text-xl text-[#071b52] font-bold">
                      Cloud Solutions for Every Organization
                    </h2>
                    <p
                      className="mt-2 text-base text-black font-medium"
                      style={{ textAlign: "justify" }}
                    >
                      MAF Group helps organizations transform their IT
                      environment by using top-notch cloud solutions. Our team
                      of experts will deliver reliable and affordable solutions
                      that help your organization get a competitive edge, boost
                      productivity and lower costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="two flex w-[90%] mx-auto flex-col md:flex-row gap-4 mt-2 md:mt-5">
          <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
            <div className="hidden md:w-14 md:flex items-start">
              <BsFileWord className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="w-full text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Become More Agile and Resourceful
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                We offer a wide array of on-demand computing solutions like
                servers, databases, storage, networking, apps, software, and
                more. It makes your organization more agile, enhances
                decision-making, and allows you to get the best ROI (Return On
                Investment).
              </p>
            </div>
          </div>

          <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
            <div className="hidden md:w-14 md:flex items-start">
              <SiGamedeveloper className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="w-full text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Cloud Strategy Services
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                With us, you get access to a wide array of cloud strategy
                services like cloud readiness assessment, architecture audit,
                fitment analysis, strategy formation (including multi-cloud
                strategy if required), and cloud roadmap.
              </p>
            </div>
          </div>
        </div>

        <div className="two flex w-[90%] mx-auto flex-col md:flex-row gap-4 mt-5">
          <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
            <div className="hidden md:w-14 md:flex items-start">
              <MdOutlineSecurity className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="w-full text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Application Development Services
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                We excel at developing, customizing, and migrating applications.
                This service can also include a roadmap for infrastructure
                management.
              </p>
            </div>
          </div>

          <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
            <div className="hidden md:w-14 md:flex items-start">
              <MdOutlineBackup className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="w-full text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Maintenance and Security Services
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                Implementing cloud solutions is not enough in most cases. So, we
                also help with continuous monitoring, performance optimization,
                security and risk assessment, and data protection.
              </p>
            </div>
          </div>
        </div>

        <div className="two flex w-[90%] mx-auto flex-col md:flex-row gap-4 mt-5">
          <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
            <div className="hidden md:w-14 md:flex items-start">
              <GiPathDistance className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="w-full text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Cloud Migration Services
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                Our cloud migration services include SWOT Analysis, readiness
                assessment, Cloud-to-cloud movement, migration of workloads, and
                validation, performance testing and disaster recovery management
                services.
              </p>
            </div>
          </div>

          <div className="w-full flex md:mx-4 gap-4 px-2">
            <div className="hidden md:w-14 md:flex items-start">
              <FiAperture className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Managed Services
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                We meticulously plan, strategize and implement a governance plan
                for cloud infrastructure and modernization services.
              </p>
            </div>
          </div>
        </div>

        <div className="two flex w-[90%] mx-auto flex-col md:flex-row gap-4 mt-5">
          <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
            <div className="hidden md:w-14 md:flex items-start">
              <RiDatabaseFill className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
            </div>
            <div className="w-full text-xl font-light">
              <h2 className="text-xl text-[#071b52] font-bold">
                Knowledge Transfer
              </h2>
              <p
                className="mt-2 text-base text-black font-medium"
                style={{ textAlign: "justify" }}
              >
                After delivering the right cloud solutions, MAF Group can offer
                your IT team guidance on cloud transformation and knowledge
                transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CloudSolution;

/*


*/

/*


*/
