import React from "react";
import Layout from "../components/Layout";

const CS3 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Ensuring GDPR Compliance and Risk-Free Strategy Implementation
                in the FMCG Industry
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">FMCG</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">London</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]  md:ml-0">
                GDPR Compliance, Digital Analytics, Data Pipelining
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1  md:ml-8">
                <h3>• Achieved GDPR Compliance</h3>
                <h3>
                  • Streamlined Data Analysis and improvement in Efficiency
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className="text-justify md:text-start md:ml-8">
                Our esteemed client, a London-based multinational beverage
                company, has 132 sites worldwide in their network. They are one
                of the prominent players in the FMCG industry with a
                considerable market share.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className="text-justify md:text-start md:ml-8">
                Our client was confronted with a two-faced challenge where they
                wanted to ensure they were GDPR compliant while also ensuring
                that their current implementation was flawless.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="text-justify md:text-start md:ml-8">
                  Like every project, we started this with a comprehensive
                  assessment of our client’s digital ecosystem and did a
                  thorough groundwork. We meticulously mapped out their tools
                  and identified potential vulnerabilities.
                </p>
                <p className="text-justify md:text-start md:ml-8 mt-2 md:mt-1">
                  Armed with this insights, we delved deep and curated a
                  detailed blueprint that addressed compliance issues while also
                  drawing out a thorough roadmap for their resolution. We
                  further implemented these rectification strategies and weeded
                  out and double verified their compliance status.
                </p>
                <p className="text-justify md:text-start md:ml-8 mt-2 md:mt-1">
                  We additionally integrated all their disparate data sources
                  into a unified warehouse and constructed sophisticated global
                  data pipelines that ensured real-time data transfer. This
                  cohesive infrastructure not only ensured a unified view and
                  granular insights but also served as a robust mechanism for
                  mitigating compliance risks.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
                    </h2>
                    <p className="mb-2 text-justify md:text-start md:ml-0">
                      Seamless compliance and data infrastructure fortification
                      was ensured because of our clear strategy and roadmap. We
                      ensured that the client was GDPR compliant and was immune
                      to any potential risks in the future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1  md:ml-4">
                  <p>• Achieved GDPR Compliance</p>
                  <p>
                    • Streamlined Data Analysis and improvement in Efficiency
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start md:ml-0">
                  By making cutting-edge digital analytics and GDPR compliance
                  strategies work in synergy, we safeguarded them from
                  regulatory pitfalls and unlocked opportunities for enhanced
                  operational efficiency and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS3;
