import React from "react";
import Layout from "../components/Layout";

const CS5 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case5.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Seamless Migration for Successful Digital Transformation in the
                IT Industry
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Seamless Migration for Successful Digital Transformation in the
                IT Industry
              </span>
            </div> */}
            <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-5 py-10 bg-red-600 text-white md:px-32 gap-3">
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">IT</span>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">Kolkata, India</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full md:ml-0">
                  Salesforce Commerce Cloud (SFCC), Salesforce Marketing Cloud
                  (SFMC), Magento, AWS S3, Power BI, BigQuery
                </span>
              </div>
              <div className="flex w-full flex-row md:flex-col lg:ml-7 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Result :{" "}
                </h2>
                <div className="flex w-full flex-col gap-1">
                  <h3>
                    • Successful Implementation and Utilization of Solutions
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-10 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Our esteemed client, an Indian conglomerate with a market cap of
                63 Billion USD and a diversified presence across various
                industries, is one of the largest companies in India. They were
                focused on aligning with their growing requirement and expanding
                their possibilities for success. To unlock these requirements,
                they understood that Digital transformation was the way to go.
              </p>
            </div>

            <div className="h-[100vh] w-full">
              <img
                src="/img/case55.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Their business was scaling and they wanted to migrate to a
                platform that could accommodate their growing demands. We
                understood their objectives and requirements and facilitated a
                smooth transition to Salesforce, curating a journey that
                unfolded without any glitches.
              </p>
            </div>

            <div className="flex flex-col px-5 py-4 md:px-32 bg-gray-50 gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="mt-1 text-justify md:text-start">
                  We meticulously migrated their data from Magento 2 to
                  Salesforce Commerce Cloud (SFCC) and Salesforce Marketing
                  Cloud (SFMC). The robust capabilities of the Salesforce
                  platform facilitated the applications their evolving
                  organisation required to move with agility and responsiveness
                  to market demands.
                </p>
                <p className="mt-3 text-justify md:text-start">
                  We additionally crafted bespoke applications tailored to their
                  unique requirements and seamlessly integrated them with SFCC
                  and SFMC. All facets of their business experienced an
                  improvement in their efficiency because of streamlined
                  operations.
                </p>
                <p className="mt-3 text-justify md:text-start">
                  We further orchestrated the integration of disparate data
                  sources and consolidated them in Big Query and utilized the
                  power of AWS S3 to establish a robust data infrastructure. The
                  interconnected ecosystem facilitated real-time analysis that
                  helped them seize strategic opportunities.
                </p>
              </div>
            </div>

            <div className="px-5 py-2 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
                  </h2>
                  <p className="mb-2  md:ml-0 text-justify md:text-start">
                    The combination of an efficient migration, with bespoke
                    applications and a cohesive data management system was a
                    winning combo. With this strong foundation, our client was
                    well able to adapt to the digital future of their industy,
                    improve agility and thrive in the ever evolving digital
                    economy landscape.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI)
              </h2>
              <div className="flex flex-col gap-1 text-center text-gray-500">
                <p>• Successful Implementation and Utilization of Solutions</p>
              </div>
            </div>

            <div className="mt-5 px-5 pb-8 md:px-32">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion:
              </h2>
              <p className="mt-1 text-justify md:text-start">
                We aided and supported our client in their transformative
                journey towards digital maturity by leveraging cutting-edge
                technologies. Our seamless integration and strategic
                applications helped the client unlock new avenues of innovation
                and growth thus propelling them towards business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS5;
