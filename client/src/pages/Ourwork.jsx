import React from "react";
import Layout from "../components/Layout";

const Ourwork = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="w-[70%] m-auto flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-[#071b52] mt-5">
            Leveraging the power of a data to deliver business excellence
          </h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              The problem statement :{" "}
            </h2>
            <p className="text-xl font-light">
              Our client, a British multinational company faced a multifaceted
              challenge in navigating and making the most of their digital
              landscape. Their digital infrastructure lacked integration with
              data sources dispersed across various platforms thus hindering any
              optimization initiatives. They were unable to reap the benefits of
              their online presence.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Our solution:
            </h2>
            <p className="text-xl font-light">
              Our team uncovered untapped potential and orchestrated a
              comprehensive and detailed digital transformation plan that could
              help them make the most out of their online platforms.
            </p>
            <p className="text-xl font-light">
              As a first step, we deployed Google Marketing Platform and Adobe
              Marketing Platform across 70 countries. We also addressed the
              fragmented mobile app landscapes by integrating a suite of tools
              including GA4, GA 360, Optimize, AA, AEM, AT, and AA that led to a
              seamless user experience.
            </p>
            <p className="text-xl font-light">
              We proceeded to{" "}
              <span className="font-medium text-[#071b52]">
                optimize their website performance
              </span>
              &nbsp; and identified opportunities from user interactions by
              implementing Adobe Target and Optimize across 60 markets. This
              move boosted the website conversions from{" "}
              <span className="font-medium text-[#071b52]">
                +3% to +5.5%, that{" "}
              </span>
              equals to a{" "}
              <span className="font-medium text-[#071b52]">
                20,000 pound uplift on each website.{" "}
              </span>
            </p>

            <p className="text-xl font-light">
              We{" "}
              <span className="font-medium text-[#071b52]">
                consolidated disparate data sources{" "}
              </span>{" "}
              by using BigQuery and implemented a Single Customer View using
              Snowflake. We also conducted extensive sentiment analysis by
              harnessing the capabilities of Google Cloud Platform (GCP) and
              Natural Language Processing (NLP) to decipher social analytics
              data. This approach helped us pinpoint user preferences and
              behaviors.
            </p>

            <p className="text-xl font-light">
              By leveraging customer data, we created a personal{" "}
              <span className="font-medium text-[#071b52]">
                product recommendation engine
              </span>{" "}
              that boosted user interactions and conversions. We also enhanced
              their Shopify and Magneto with novel features thus elevating their
              digital strategy and user experience.
            </p>

            <p className="text-xl font-light">
              We were awarded{" "}
              <span className="font-medium text-[#071b52]">
                the Gold Award for Data Intelligence and Predictive AI by Data &
                Marketing Association (DMA) for reducing customer churn by 32%.
              </span>
            </p>

            <p className="text-xl font-light">
              In conclusion, our efforts were focused on exemplifying the power
              of data and achieving business excellence while boosting
              productivity. From strategically deploying to optimizing existing
              processes, every step of our roadmap was aimed at seamlessly
              connecting their digital presence and driving tangible results.
              The accolades and appreciation we received were a testament to the
              outcomes we helped them achieve and how we aligned their
              objectives with our strategies and emerged victorious.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
};

export default Ourwork;
