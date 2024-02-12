import React from "react";
import Layout from "../components/Layout";

const CS3 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-4 pt-5">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            Ensuring GDPR compliance and a risk-free strategy implementation
          </h1>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Problem Statement:
            </h2>
            <p className="font-light">
              Our client was facing a two-fold challenge where they wanted to
              identify gaps in their existing implementations and ensure they
              were GDPR compliant.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Our Solution:
            </h2>
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <div className="w-full order-2 md:order-1">
                <p className="font-light">
                  We started our project by meticulously mapping out the tools
                  in their digital estate, potential risks and gaps in their
                  implementation. Then, we proceeded to provide them with a
                  detailed blueprint on the compliance issues they were facing
                  and our roadmap for rectifying these issues.
                </p>
                <p className="font-light">
                  We created global data pipelines and connected their disparate
                  data sources and created a cohesive warehouse that provided
                  access to detailed insights and analysis. We further mitigated
                  their compliance issues and troubleshooted their potential
                  risks.
                </p>
                <p className="font-light mt-1">
                  With a digital strategy in place, their data sources connected
                  to one another facilitating easy analysis and GDPR compliance
                  issues successfully rectified, their transformative journey
                  was successfully completed.
                </p>
              </div>
              <div className="w-full order-1 md:order-2 my-auto">
                <img
                  src="/img/gdpr.png"
                  className="aspect-video object-cover md:w-2/3 mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS3;
