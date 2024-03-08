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

import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CloudSolution = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"MAF | Cloud Solution"}>
      <div className="mt-[4rem]">
        <div className="top h-screen w-full">
          <div className="relative w-full flex h-full">
            <div className="hidden md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-10 md:top-32 mx-5 md:left-20">
              <h2 className="text-3xl font-semibold">Cloud solutions</h2>
              <h3 className="text-xl font-medium">
                Unlock Unlimited Possibilities with Cloud Solutions!
              </h3>
              <p className="text-lg">
                Optimize your business process and achieve greater productivity
                by utilizing cloud solutions to transform your IT environment.
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
                src="/img/cloudBanner-min.jpg"
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
                <img className="w-1/3 mx-auto" src="/img/cloud.png" alt="" />
                <div>
                  <h1>Conduct comprehensive cloud readiness assessment</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img
                  className="w-1/3 mx-auto"
                  src="/img/application.png"
                  alt=""
                />
                <div>
                  <h2>Custom application implementation</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/growth.png" alt="" />
                <div>
                  <h2>Performance optimization</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/risk.png" alt="" />
                <div>
                  <h2>Risk assessment and knowledge transfer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold pt-4">Our Solution</h2>
            <p className="py-3">
              We strategically implement cloud solutions by implementing a
              four-step deployment process. Here’s how we do it:
            </p>
            <div className="pt-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/cloud.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-semibold">Cloud Strategy</h2>
                  <p>
                    We do various assessments including cloud readiness,
                    architecture audit, fitment analysis to frame a cloud
                    strategy and cloud adoption roadmap.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/application.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-semibold">
                    Application Development
                  </h2>
                  <p>
                    We analyze, develop and migrate custom applications thus
                    creating a detailed infrastructure management plan.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/data-security.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-semibold">
                    Maintenance and Security
                  </h2>
                  <p>
                    Post-deployment, we continuously monitor its performance and
                    optimize their security while also ensuring their
                    efficiency.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/cloud-data.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-semibold">Cloud Migration</h2>
                  <p>
                    We conduct end-to-end cloud migration services that include
                    SWOT Analysis, readiness assessment, cloud-to-cloud
                    movement, workload migration, validation, performance
                    testing, and disaster recovery management
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/technical-support.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">Managed Services</h2>
                  <p>
                    We strategically plan and implement governance measures for
                    cloud infrastructure and modernization services.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/experience-transfer.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">Knowledge Transfer</h2>
                  <p>
                    We ensure seamless change management by offering guidance
                    and knowledge transfer to your IT team thus facilitating
                    smooth operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-2xl w-[90%] mx-auto font-bold py-6">Benefits</h1>
          <div className="md:w-1/2 mx-auto p-5">
            <div className="border-l-[3px] border-rose-500">
              <ul className="list-disc pl-7">
                <li>
                  Accelerate growth potential by discovering new possibilities
                </li>
                <li>Embrace solutions that scale with your business</li>
                <li>Adapt to new technologies swiftly</li>
              </ul>
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
        </div>

        <div className="w-full mt-5">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold py-6">Tool Landscape </h2>
            <div className="grid md:grid-cols-3 gap-4 my-6 w-full">
              {/* <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/Snowflake.svg"
                  className="w-[200px] object-cover"
                  alt=""
                />
                <h2 className="text-xl italic">snowflake</h2>
              </div> */}
              {/* <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/redshift.png"
                  className="w-[100px] object-cover"
                  alt=""
                />
                <h2 className="text-xl italic mt-4">AWS Redshift</h2>
              </div> */}

              <div className="w-full shadow-lg p-5  items-center flex justify-center">
                <img
                  src="/img/s3.png"
                  className="w-[200px] object-cover  bg-cover"
                  alt=""
                />
              </div>
              <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/redshift.png"
                  className="w-[200px] object-cover aspect-video bg-cover"
                  alt=""
                />
                <h2 className="text-xl italic">AWS Redshift </h2>
              </div>
              <div className="w-full shadow-lg p-5  items-center flex justify-center flex-col">
                <img
                  src="/img/gcp.webp"
                  className="w-[200px] object-cover aspect-video bg-cover"
                  alt=""
                />
                <h2 className="text-xl italic">GCP NLP</h2>
              </div>
              <div className="w-full shadow-lg p-5  items-center flex justify-center flex-col">
                <img
                  src="/img/elastic.png"
                  className="object-cover bg-cover pt-10"
                  alt=""
                />
                <h2 className="text-xl italic aspect-video pt-3">
                  Elastic Search
                </h2>
                {/* <h2 className="text-xl italic">Power BI</h2> */}
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
