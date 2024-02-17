import React from "react";
import Layout from "../components/Layout";

const CS2 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Strategic Transition to Enhance Marketing Efficiency in the
                Banking Sector
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">Banking</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">London</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]">
                Transition from Adobe Analytics to GA4
              </span>
            </div>
            <div className="flex flex-col md:flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1  md:ml-8">
                <h3>• £110,000 Saved in Marketing Expenditure</h3>
                <h3>• 112% Increase in Marketing Efficiency</h3>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className=" md:ml-8 text-justify md:text-start">
                Our respectable client is the foremost employee-owned enterprise
                in the UK within the banking and retail sectors and has a
                history that spans over 150 countries. To keep up with their
                unwavering commitment to deliver excellence to their clients,
                they entrusted us with their digital advancement journey that
                optimizes their marketing strategies and reduces operational
                costs.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className=" md:ml-8 text-justify md:text-start">
                The client wanted to have a holistic view of their customer data
                by bringing it into a unified platform thus simplifying the
                reporting processes and bringing in cost effective measures.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className=" md:ml-8 text-justify md:text-start">
                  Keeping their goals in mind, we strategized to seamlessly
                  transfer their data from Adobe analytics to Google Analytics
                  (GA4), a bold move aimed at improving marketing efficiency and
                  driving cost savings.
                </p>
                <p className=" md:ml-8 mt-1 text-justify md:text-start">
                  Concurrently, we spearheaded the migration of raw data from
                  Adobe to a robust data warehousing solution by implementing
                  sophisticated pipelines that facilitated real-time flow of
                  data.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
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

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1  md:ml-4">
                  <p>• £110,000 Saved in Marketing Expenditure</p>
                  <p>• 112% Increase in Marketing Efficiency</p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className=" md:ml-0 text-justify md:text-start">
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
      </div>
    </Layout>
  );
};

export default CS2;
