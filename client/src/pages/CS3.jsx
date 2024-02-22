import React from "react";
import Layout from "../components/Layout";

const CS3 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/cs3.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Ensuring GDPR Compliance and Risk-Free Strategy Implementation
                in the FMCG Industry
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Ensuring GDPR Compliance and Risk-Free Strategy Implementation
                in the FMCG Industry
              </span>
            </div> */}
            <div className="w-full px-5 py-4 md:px-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-[#071b52]">
                  Industry
                </h2>
                <span className="w-full">FMCG</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-[#071b52]">
                  Location
                </h2>
                <span className="w-full">London</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-[#071b52]">
                  Solution
                </h2>
                <span className="w-full md:ml-0">
                  GDPR Compliance, Digital Analytics, Data Pipelining
                </span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-[#071b52]">
                  Result
                </h2>
                <div className="flex w-full flex-col gap-1">
                  <h3>• Achieved GDPR Compliance</h3>
                  <h3>
                    • Streamlined Data Analysis and improvement in Efficiency
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex px-5 py-4 md:px-32 bg-gray-50 flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background
              </h2>
              <p className="text-justify md:text-start mt-3">
                Our esteemed client, a London-based multinational beverage
                company, has 132 sites worldwide in their network. They are one
                of the prominent players in the FMCG industry with a
                considerable market share.
              </p>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="text-justify md:text-start mt-3">
                Our client was confronted with a two-faced challenge where they
                wanted to ensure they were GDPR compliant while also ensuring
                that their current implementation was flawless.
              </p>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32 gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="text-justify md:text-start mt-3">
                  Like every project, we started this with a comprehensive
                  assessment of our client’s digital ecosystem and did a
                  thorough groundwork. We meticulously mapped out their tools
                  and identified potential vulnerabilities.
                </p>
                <p className="text-justify md:text-start mt-2 md:mt-1">
                  Armed with this insights, we delved deep and curated a
                  detailed blueprint that addressed compliance issues while also
                  drawing out a thorough roadmap for their resolution. We
                  further implemented these rectification strategies and weeded
                  out and double verified their compliance status.
                </p>
                <p className="text-justify md:text-start mt-2 md:mt-1">
                  We additionally integrated all their disparate data sources
                  into a unified warehouse and constructed sophisticated global
                  data pipelines that ensured real-time data transfer. This
                  cohesive infrastructure not only ensured a unified view and
                  granular insights but also served as a robust mechanism for
                  mitigating compliance risks.
                </p>
              </div>
            </div>

            <div className="px-5 py-4 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
                  </h2>
                  <p className="mb-2 text-justify md:text-start md:ml-0">
                    Seamless compliance and data infrastructure fortification
                    was ensured because of our clear strategy and roadmap. We
                    ensured that the client was GDPR compliant and was immune to
                    any potential risks in the future.
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
                  <p className="font-medium text-gray-500">
                    Achieved GDPR Compliance
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="font-medium text-gray-500">
                    Streamlined Data Analysis and improvement in Efficiency
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 py-4 md:px-32">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-3 text-justify md:text-start md:ml-0">
                By making cutting-edge digital analytics and GDPR compliance
                strategies work in synergy, we safeguarded them from regulatory
                pitfalls and unlocked opportunities for enhanced operational
                efficiency and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS3;
