import React from "react";
import Layout from "../components/Layout";

const CS3 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[70%] m-auto flex flex-col gap-8 pt-5">
          <h1 className="text-4xl font-bold text-[#071b52]">
            Ensuring GDPR Compliance
          </h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Problem Statement:
            </h2>
            <p className="text-xl font-light">
              Our client was facing a two-fold challenge where they wanted to
              identify gaps in their existing implementations and ensure they
              were GDPR compliant.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Our Solution:
            </h2>
            <p className="text-xl font-light">
              We started our project by meticulously mapping out the tools in
              their digital estate, potential risks and gaps in their
              implementation. Then, we proceeded to provide them with a detailed
              blueprint on the compliance issues they were facing and our
              roadmap for rectifying these issues.
            </p>
            <p className="text-xl font-light">
              Parallel to our analytics transition, we shifted the raw data from
              Adobe into a single powerful data warehouse and constructed
              pipelines to make sure the information stays updated.
            </p>

            <p className="text-xl font-light">
              With a digital strategy in place, their data sources connected to
              one another facilitating easy analysis and GDPR compliance issues
              successfully rectified, their transformative journey was
              successfully completed.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS3;