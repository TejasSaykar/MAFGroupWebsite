import Layout from "@/components/Layout";
import React from "react";

const CS10 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case10.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Enhancing Marketing Efficiency through Digital Transformation in
                Retail
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Enhancing Marketing Efficiency through Digital Transformation in
                Retail
              </span>
            </div> */}
            <div className="w-full px-5 py-10 bg-red-600 text-white md:px-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">Retail</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">UK</span>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full">Adobe, GA4, AWS S3</span>
              </div>
              <div className="flex w-full flex-col md:flex-col gap-2 lg:ml-7">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Result
                </h2>
                <div className="flex w-full flex-col gap-1">
                  <h3>
                    • Achieved cost savings of £200,000 in marketing and
                    implementation expenses.
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Our client sought to transition from Adobe to GA Server Side,
                migrating all marketing activities to server-side operations to
                enhance marketing efficiency and achieve cost savings.
                Additionally, they aimed to migrate data from Adobe to a data
                warehouse for future reporting purposes.
              </p>
            </div>

            <div>
              <div className="flex px-5 py-4 md:px-32 bg-gray-50 flex-col">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="mt-1 text-justify md:text-start">
                  Our digital transformation initiative focused on migrating
                  from Adobe to GA4 server side across all sites. Key components
                  of our solution included:
                </p>
              </div>
              <div className="w-full px-5 py-4 md:px-32 bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                  <img
                    src="/img/case101.jpg"
                    className="aspect-video rounded-lg object-cover bg-cover"
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
                    className="aspect-video rounded-lg object-cover bg-cover"
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
                    className="aspect-video rounded-lg object-cover bg-cover"
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

            <div className="flex flex-col gap-2 px-5 py-4 md:px-32 bg-gray-50">
              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results
                    </h2>
                    <span className="text-justify md:text-start">
                      Through our digital transformation efforts realized
                      significant benefits:
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
            </div>

            <div className="mt-5 px-5 py-4 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI)
              </h2>

              <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">£200,000</h2>
                  <p className="font-medium text-center text-gray-500">
                    Cost savings achieved in marketing and implementation
                    expenses.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32 pb-8">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="text-justify md:text-start">
                The successful execution of the digital transformation
                initiative underscores our commitment to delivering impactful
                solutions that drive business growth and efficiency. By
                leveraging advanced technologies and strategic migration
                strategies, we empowered our client to optimize their marketing
                operations and pave the way for future success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS10;
