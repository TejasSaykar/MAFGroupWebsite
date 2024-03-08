import React from "react";
import Layout from "../components/Layout";

const CS6 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case6-min.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Streamlining Marketing Strategy for Enhanced Performance in the
                Hospitality Industry
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Streamlining Marketing Strategy for Enhanced Performance in the
                Hospitality Industry
              </span>
            </div> */}
            <div className="w-full px-5 py-10 bg-red-600 text-white md:px-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">Hospitality</span>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">London, UK</span>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full">
                  BigQuery, AI, Optimize, Seaware, Google Marketing Platform,
                  Marketing Data Hub, Cloud Solutions
                </span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2 lg:ml-7">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Result
                </h2>
                <div className="flex w-full flex-col gap-1">
                  <h3>• £500,000 Increase in Upsell within 3 Months</h3>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className="ml-8">
                Our esteemed client, an Indian conglomerate with a market cap of
                63 Billion USD and a diversified presence across various
                industries, is one of the largest companies in India. They were
                focused on aligning with their growing requirement and expanding
                their possibilities for success. To unlock these requirements,
                they understood that Digital transformation was the way to go.
              </p>
            </div> */}

            <div className="flex flex-col bg-gray-50 px-5 py-10 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                A British Private Limited company approached us with a
                multifaceted challenge where they wanted to measure the
                effectiveness of their marketing campaigns and streamline them
                for improved outcomes. They also wanted to optimize their
                marketing strategy and drive more conversions for their website
                while also cutting down on their expenditure.
              </p>
            </div>

            <div className="h-[100vh] w-full">
              <img
                src="/img/case66-min.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 bg-gray-50 px-5 py-4 md:px-32">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="text-justify md:text-start">
                  We employed a phased strategy to address our client’s
                  objectives with a thorough meticulous approach. We utilised a
                  whole suite of tools including BigQuery, Optimize and Seaware
                  that engineered a seamless integration to optimize their
                  marketing efforts while enhancing performance.
                </p>
                <p className="mt-3 md:mt-4 text-justify md:text-start">
                  On initiation of the transformation, we deployed marketing
                  automation which aimed at fine-tuning their campaign
                  strategies and maximized their engagement and conversion.
                </p>
                <p className="mt-3 md:mt-4 text-justify md:text-start">
                  Concurrently, we developed a personalized product
                  recommendation engine that leveraged Cloud-AI technologies.
                  This engine leveraged previous user behavior and analytics
                  data to tailor product recommendations and give customers
                  unique and targeted messaging that prolonged their site
                  engagement. This further promoted conversions and increased
                  their upsell rates.
                </p>
                <p className="mt-3 md:mt-4 text-justify md:text-start">
                  We also established a centralized analytics system across all
                  client sites utilizing their Google Marketing Platform thus
                  creating a standard framework for data analysis.
                  Centralization was carried out within BigQuery and created a
                  comprehensive data hub that consolidated information from
                  third-party sources and campaign data thus creating a unified
                  view.
                </p>
              </div>
            </div>

            <div className="px-5 py-4 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results :{" "}
                  </h2>
                  <p className="mb-2 text-justify md:text-start">
                    The successful integration of BigQuery, Optimize, and
                    Seaware facilitated streamlined processes and coupled with
                    the implementation of the product recommendation engine,
                    resulted in a significant increase in sales. Within a mere 3
                    months, our client experienced a remarkable £500,000 upsurge
                    in upsell revenue, underscoring the transformative impact of
                    our solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI)
              </h2>

              <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">£500,000</h2>
                  <p className="font-medium text-center text-gray-500">
                    Increase in Upsell Revenue within 3 Months
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32 pb-8">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Through strategic integration of advanced technologies and
                meticulous execution, we empowered our client to optimize their
                marketing strategy and drive substantial business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS6;
