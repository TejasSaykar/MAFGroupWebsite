import React from "react";
import Layout from "../components/Layout";

const CS2 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case2.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2
                style={{ textShadow: "1px 1px black" }}
                className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold"
              >
                Strategic Transition to Enhance Marketing Efficiency in the
                Banking Sector
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <div className="grid px-5 bg-red-600 py-6 text-white gap-3 md:px-32 w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {/* <div className="flex gap-2 items-center">
                <span className="text-2xl font-semibold text-[#071b52]">
                  Strategic Transition to Enhance Marketing Efficiency in the
                  Banking Sector
                </span>
              </div> */}
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">Banking</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">London</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full">
                  Transition from Adobe Analytics to GA4
                </span>
              </div>
              <div className="flex w-full lg:ml-8">
                <div className="w-full flex flex-row md:flex-col gap-2">
                  <h2 className="text-lg w-2/3 font-bold text-gray-900">
                    Result
                  </h2>
                  <div className="flex w-full flex-col gap-1">
                    <h3>• £110,000 Saved in Marketing Expenditure</h3>
                    <h3>• 112% Increase in Marketing Efficiency</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex px-5 py-10 md:px-32 bg-gray-50 flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background
              </h2>
              <p className="mt-3 text-justify md:text-start">
                Our respectable client is the foremost employee-owned enterprise
                in the UK within the banking and retail sectors and has a
                history that spans over 150 countries. To keep up with their
                unwavering commitment to deliver excellence to their clients,
                they entrusted us with their digital advancement journey that
                optimizes their marketing strategies and reduces operational
                costs.
              </p>
            </div>
            <div>
              <img src="/img/case22.jpg" alt="" />
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-3 text-justify md:text-start">
                The client wanted to have a holistic view of their customer data
                by bringing it into a unified platform thus simplifying the
                reporting processes and bringing in cost effective measures.
              </p>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32 gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="mt-3 text-justify md:text-start">
                  Keeping their goals in mind, we strategized to seamlessly
                  transfer their data from Adobe analytics to Google Analytics
                  (GA4), a bold move aimed at improving marketing efficiency and
                  driving cost savings.
                </p>
                <p className="mt-3 text-justify md:text-start">
                  Concurrently, we spearheaded the migration of raw data from
                  Adobe to a robust data warehousing solution by implementing
                  sophisticated pipelines that facilitated real-time flow of
                  data.
                </p>
              </div>
            </div>

            <div>
              <img src="" alt="" />
            </div>

            <div className="px-5 py-4 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
                  </h2>
                  <p className="mb-2  md:ml-0 text-justify md:text-start">
                    The shift to a different analytics platform provided
                    exemplary results with a notable £110,000 reduction in
                    marketing expenditure. Their marketing efficiency also
                    showed an increase in an impressive 112% improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 py-4 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI):{" "}
              </h2>
              <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">£110,000</h2>
                  <p className="font-medium text-gray-500">
                    Saved in Marketing Expenditure
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">112%</h2>
                  <p className="font-medium text-gray-500">
                    Increase in Marketing Efficiency
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 py-4 md:mx-[6.6rem]">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-3 text-justify md:text-start">
                With a thorough plan and flawless execution, we empowered them
                to navigate the digital landscape and achieve their business
                objectives. We achieved tangible cost savings while elevating
                their marketing performance to unprecedented levels. This
                project was an indication of our unwavering commitment to
                delivering impactful solutions that are tailored to your
                requirements and objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS2;
