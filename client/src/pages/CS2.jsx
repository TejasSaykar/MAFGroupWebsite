import React from "react";
import Layout from "../components/Layout";

const CS2 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[70%] m-auto flex flex-col gap-8 pt-5">
          <h1 className="text-4xl font-bold text-[#071b52]">
            Boosting Marketing Efficiency by strategic transition
          </h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Problem Statement:
            </h2>
            <p className="text-xl font-light">
              Our client wanted to keep pace with digital evolution and to
              optimize their marketing efficiency while cutting down expenses.
              They wanted to move their data to a common platform to facilitate
              better reporting in the future.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Our Solution:
            </h2>
            <p className="text-xl font-light">
              We helped them migrate from Adobe Analytics to Google Analytics as
              a cost-saving measure and to provide them with a strategic shift
              towards a more efficient marketing platform.
            </p>
            <p className="text-xl font-light">
              Parallel to our analytics transition, we shifted the raw data from
              Adobe into a single powerful data warehouse and constructed
              pipelines to make sure the information stays updated.
            </p>

            <p className="text-xl font-light">
              This transformative journey repurposed the way John Lewis
              conducted their digital marketing approach, and it yielded stellar
              results. Our endeavors{" "}
              <span className="font-medium text-[#071b52]">
                cut down the marketing expenditure by 112K{" "}
              </span>{" "}
              pounds while simultaneously{" "}
              <span className="font-medium text-[#071b52]">
                improving efficiency by 110%.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS2;
