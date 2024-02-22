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
import { TargetIcon } from "@radix-ui/react-icons";

/*

*/

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
                Cloud Solutions
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
        <div className="one flex w-full flex-col md:flex-row gap-4 mt-4">
          <div className="w-full flex flex-col md:flex-row gap-2 md:px-4 pb-4">
            <div className="w-full">
              <img
                src="/img/cloud2.png"
                className="aspect-video bg-cover object-cover md:w-1/2 mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="md:w-[70%] mx-3 md:mx-auto gap-9 mt-2 md:mt-5">
          <div className="w-full">
            <div className="flex gap-2 items-center mb-3">
              <TargetIcon className="hidden md:block h-12 w-12 text-white p-3 bg-[#071b52] rounded-full" />
              <h2 className="text-2xl font-semibold text-[#071b52]">
                Cloud Solutions for Every Organization
              </h2>
            </div>
            <div className="ml-4">
              <p className="text-justify">
                MAF Group helps organizations transform their IT environment by
                using top-notch cloud solutions. Our team of experts will
                deliver reliable and affordable solutions that help your
                organization get a competitive edge, boost productivity and
                lower costs.{" "}
              </p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex gap-2 items-center mb-3">
              <BsFileWord className="hidden md:block h-12 w-12 text-white p-3 bg-[#071b52] rounded-full" />
              <h2 className="text-2xl font-semibold text-[#071b52]">
                Become More Agile and Resourceful
              </h2>
            </div>
            <div className="ml-4">
              <p className="text-justify">
                We offer a wide array of on-demand computing solutions like
                servers, databases, storage, networking, apps, software, and
                more. It makes your organization more agile, enhances
                decision-making, and allows you to get the best ROI (Return On
                Investment).
              </p>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex gap-2 items-center mb-3">
              <RiDatabaseFill className="hidden md:block h-12 w-12 text-white p-3 bg-[#071b52] rounded-full" />
              <h2 className="text-2xl font-semibold text-[#071b52]">
                The Methodology
              </h2>
            </div>
            <div className="ml-4">
              <p className="text-justify">
                Strategy is essential to implementing cloud solutions. We follow
                a four-step process for the same- Assessment, Planning,
                Deployment, and Optimization.
              </p>
            </div>

            <div className="px-5 md:px-16 mt-3">
              <div className="text-xl font-semibold text-[#071b52]">
                <h2>- Cloud Strategy Services</h2>
              </div>
              <div>
                <p className="text-justify">
                  With us, you get access to a wide array of cloud strategy
                  services like cloud readiness assessment, architecture audit,
                  fitment analysis, strategy formation (including multi-cloud
                  strategy if required), and cloud roadmap.
                </p>
              </div>
            </div>
            <div className="px-5 md:px-16 mt-3">
              <div className="text-xl font-semibold text-[#071b52]">
                <h2>- Application Development Services</h2>
              </div>
              <div>
                <p className="text-justify">
                  We excel at developing, customizing, and migrating
                  applications. This service can also include a roadmap for
                  infrastructure management.
                </p>
              </div>
            </div>
            <div className="px-5 md:px-16 mt-3">
              <div className="text-xl font-semibold text-[#071b52]">
                <h2>- Maintenance and Security Services</h2>
              </div>
              <div>
                <p className="text-justify">
                  Implementing cloud solutions is not enough in most cases. So,
                  we also help with continuous monitoring, performance
                  optimization, security and risk assessment, and data
                  protection.
                </p>
              </div>
            </div>
            <div className="px-5 md:px-16 mt-3">
              <div className="text-xl font-semibold text-[#071b52]">
                <h2>- Cloud Migration Services</h2>
              </div>
              <div>
                <p className="text-justify">
                  Our cloud migration services include SWOT Analysis, readiness
                  assessment, Cloud-to-cloud movement, migration of workloads,
                  and validation, performance testing and disaster recovery
                  management services.
                </p>
              </div>
            </div>
            <div className="px-5 md:px-16 mt-3">
              <div className="text-xl font-semibold text-[#071b52]">
                <h2>- Managed Services</h2>
              </div>
              <div>
                <p className="text-justify">
                  We meticulously plan, strategize and implement a governance
                  plan for cloud infrastructure and modernization services.
                </p>
              </div>
            </div>
            <div className="px-5 md:px-16 mt-3">
              <div className="text-xl font-semibold text-[#071b52]">
                <h2>- Knowledge Transfer</h2>
              </div>
              <div>
                <p className="text-justify">
                  After delivering the right cloud solutions, MAF Group can
                  offer your IT team guidance on cloud transformation and
                  knowledge transfer.
                </p>
              </div>
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
