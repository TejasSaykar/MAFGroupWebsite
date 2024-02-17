import React from "react";
import Layout from "../components/Layout";

const CS5 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Seamless Migration for Successful Digital Transformation in the
                IT Industry
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">IT</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">Kolkata, India</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]  md:ml-0">
                Salesforce Commerce Cloud (SFCC), Salesforce Marketing Cloud
                (SFMC), Magento, AWS S3, Power BI, BigQuery
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1  md:ml-8">
                <h3>
                  • Successful Implementation and Utilization of Solutions
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className=" md:ml-8 text-justify md:text-start">
                Our esteemed client, an Indian conglomerate with a market cap of
                63 Billion USD and a diversified presence across various
                industries, is one of the largest companies in India. They were
                focused on aligning with their growing requirement and expanding
                their possibilities for success. To unlock these requirements,
                they understood that Digital transformation was the way to go.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className=" md:ml-8 text-justify md:text-start">
                Their business was scaling and they wanted to migrate to a
                platform that could accommodate their growing demands. We
                understood their objectives and requirements and facilitated a
                smooth transition to Salesforce, curating a journey that
                unfolded without any glitches.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className=" md:ml-8 text-justify md:text-start">
                  We meticulously migrated their data from Magento 2 to
                  Salesforce Commerce Cloud (SFCC) and Salesforce Marketing
                  Cloud (SFMC). The robust capabilities of the Salesforce
                  platform facilitated the applications their evolving
                  organisationrequired to move with agility and responsiveness
                  to market demands.
                </p>
                <p className=" md:ml-8 mt-1 text-justify md:text-start">
                  We additionally crafted bespoke applications tailored to their
                  unique requirements and seamlessly integrated them with SFCC
                  and SFMC. All facets of their business experienced an
                  improvement in their efficiency because of streamlined
                  operations.
                </p>
                <p className=" md:ml-8 mt-1 text-justify md:text-start">
                  We further orchestrated the integration of disparate data
                  sources and consolidated them in BigQuery and utilized the
                  power of AWS S3 to establish a robust data infrastructure. The
                  interconnected ecosystem facilitated real-time analysis that
                  helped them seize strategic opportunities.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
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

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1  md:ml-4">
                  <p>
                    • Successful Implementation and Utilization of Solutions
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className=" md:ml-0 text-justify md:text-start">
                  We aided and supported our client in their transformative
                  journey towards digital maturity by leveragingcutting-edge
                  technologies. Our seamless integration and strategic
                  applications helped the client unlock new avenues of
                  innovation and growth thus propelling them towards business
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS5;
