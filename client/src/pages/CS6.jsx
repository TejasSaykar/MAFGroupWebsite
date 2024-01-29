import React from "react";
import Layout from "../components/Layout";

const CS6 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-8 pt-5">
          <h1 className="text-4xl font-bold text-[#071b52] dark:text-rose-600">
            Optimize Marketing Strategy
          </h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52] dark:text-rose-600">
              Problem Statement:
            </h2>
            <p className="text-xl font-light">
              Our client, a British Private Limited company faced a
              multi-faceted challenge. They wanted to optimize their marketing
              strategy to promote site visits to their company website while
              also cutting down their marketing budget. They additionally wanted
              to measure the effectiveness of their marketing campaign and
              streamline it for better results.
            </p>
            <p className="text-xl font-light">
              We, at MAF Group undertook this project and reached their
              objectives by a phase-by-phase approach to their problem.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52] dark:text-rose-600">
              Our Solution:
            </h2>
            <div className="flex flex-col gap-4 md:flex-row items-center">
              <div className="w-full order-2 md:order-1">
                <p className="text-xl font-light">
                  To solve this issue, we understood the need to seamlessly
                  integrate various big tools such as Big Query, Optimize and
                  Seaware while also ensuring that they were streamlined.
                </p>
                <p className="text-xl font-light">
                  As a first step, we implemented marketing automation to
                  optimize their campaigns and make sure that their strategies
                  reap benefits by improving their site visits.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img src="/img/strategy.png" alt="" />
              </div>
            </div>

            <p className="text-xl font-light">
              Simultaneously, we worked on creating a personalized product
              recommendation engine that will tailor product suggestions based
              on behavior and analytics data by leveraging Cloud-AI technologies
              to ensure that users stay longer on their site.
            </p>
            <p className="text-xl font-light">
              Our successful integration of Big Query, Optimize and Seaware
              facilitated an efficient process and combined with the product
              recommendation engine, significantly increased upsell. Their sales
              soared up by a 500K increase within 3 months.
            </p>
            <p className="text-xl font-light">
              On the other hand, we also implemented centralized analytics
              through all their sites by using the Google Marketing Platform to
              establish a standardized analytics framework. In an attempt to
              leverage this data, we centralized and harnessed its power by
              creating a data hub in Big Query which will consolidate data from
              third-party sources and campaign data and provide a unified view
              for informed decision-making.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS6;
