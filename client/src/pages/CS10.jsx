import Layout from "@/components/Layout";
import React from "react";

const CS10 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Enhancing Marketing Efficiency through Digital Transformation in
                Retail
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">Retail</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">UK</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]">Adobe, GA4, AWS S3</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1 md:ml-8">
                <h3>
                  • Achieved cost savings of £200,000 in marketing and
                  implementation expenses.
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className="md:ml-8 text-justify md:text-start">
                Our client sought to transition from Adobe to GA Server Side,
                migrating all marketing activities toserver-side operations to
                enhance marketing efficiency and achieve cost savings.
                Additionally, they aimed to migrate data from Adobe to a data
                warehouse for future reporting purposes.
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-2">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Solution :
                </h2>
                <p className="md:w-2/3 text-justify md:text-start">
                  Our digital transformation initiative focused on migrating
                  from Adobe to GA4 server side across all sites. Key components
                  of our solution included:
                </p>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="/img/mAct.jpg"
                    className="aspect-video object-cover bg-cover"
                    alt=""
                  />
                  <div className="w-full">
                    <h2 className="mb-2 text-lg text-[#071b52] font-semibold">
                      Migrating All Marketing Activities to Server Side
                    </h2>
                    <p className="text-justify md:text-start">
                      Transitioning approximately 10 types of marketing
                      activities to server side operations to streamline
                      processes and improve efficiency.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <img
                    src="/img/dataImg.jpg"
                    className="aspect-video object-cover bg-cover"
                    alt=""
                  />
                  <div className="w-full">
                    <h2 className="text-lg mb-2 font-semibold text-[#071b52]">
                      Building Data Pipelines between AWS S3 and BigQuery
                    </h2>
                    <p className="text-justify md:text-start">
                      Establishing robust data pipelines between AWS S3 and
                      BigQuery to seamlessly integrate data from various digital
                      tools, ensuring accurate and comprehensive data analysis.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <img
                    src="/img/dash.jpg"
                    className="aspect-video object-cover bg-cover"
                    alt=""
                  />
                  <div className="w-full">
                    <h2 className="mb-2 text-lg text-[#071b52] font-semibold">
                      Migrating Dashboards
                    </h2>
                    <p className="text-justify md:text-start">
                      Migrating existing dashboards from one platform to another
                      to maintain continuity in reporting and analytics
                      processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
                    </h2>
                    <span className="text-justify md:text-start">
                      Through our digital transformation efforts, Lakeland
                      realized significant benefits:
                    </span>
                    <div>
                      <p className="text-justify md:text-start">
                        • Achieved cost savings of £200,000 in marketing and
                        implementation expenses.
                      </p>
                      <p className="text-justify md:text-start">
                        • Streamlined marketing operations and improved
                        efficiency by migrating all marketing activities to
                        server side.
                      </p>
                      <p className="text-justify md:text-start">
                        • Established a robust data infrastructure with seamless
                        data pipelines between AWS S3 and BigQuery, facilitating
                        comprehensive data analysis and reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1 md:ml-4">
                  <p>
                    • Achieved cost savings of £200,000 in marketing and
                    implementation expenses.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start">
                  The successful execution of the digital transformation
                  initiative underscores our commitment to delivering impactful
                  solutions that drive business growth and efficiency. By
                  leveraging advanced technologies and strategic migration
                  strategies, we empowered our client to optimize their
                  marketing operations and pave the way for future success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS10;
