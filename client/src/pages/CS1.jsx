import Layout from "@/components/Layout";
import React from "react";

const CS1 = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600 mt-5">
            Leveraging the power of a data to deliver business excellence
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              The problem statement :{" "}
            </h2>
            <p className="font-light">
              Our client, a British multinational company faced a multifaceted
              challenge in navigating and making the most of their digital
              landscape. Their digital infrastructure lacked integration with
              data sources dispersed across various platforms thus hindering any
              optimization initiatives. They were unable to reap the benefits of
              their online presence.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Our solution:
            </h2>
            <div className="flex flex-col md:flex-row gap-0 items-center">
              <div className="w-full order-2 md:order-1">
                <p className="font-light">
                  Our team uncovered untapped potential and orchestrated a
                  comprehensive and detailed digital transformation plan that
                  could help them make the most out of their online platforms.
                </p>
                <p className="font-light">
                  As a first step, we deployed Google Marketing Platform and
                  Adobe Marketing Platform across 70 countries. We also
                  addressed the fragmented mobile app landscapes by integrating
                  a suite of tools including GA4, GA 360, Optimize, AA, AEM, AT,
                  and AA that led to a seamless user experience.
                </p>
              </div>
              <div className="w-full order1 md:order-2">
                <img
                  src="/img/w1.png"
                  className="aspect-video object-cover md:w-2/3 mx-auto"
                  alt=""
                />
              </div>
            </div>
            <p className="font-light">
              We proceeded to{" "}
              <span className="font-semibold text-[#071b52] dark:text-rose-600">
                optimize their website performance
              </span>
              &nbsp; and identified opportunities from user interactions by
              implementing Adobe Target and Optimize across 60 markets. This
              move boosted the website conversions from{" "}
              <span className="font-semibold text-[#071b52] dark:text-rose-600">
                +3% to +5.5%, that{" "}
              </span>
              equals to a{" "}
              <span className="font-semibold text-[#071b52] dark:text-rose-600">
                20,000 pound uplift on each website.{" "}
              </span>
            </p>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full order-2">
                <p className="font-light">
                  We{" "}
                  <span className="font-semibold text-[#071b52] dark:text-rose-600">
                    consolidated disparate data sources{" "}
                  </span>{" "}
                  by using BigQuery and implemented a Single Customer View using
                  Snowflake. We also conducted extensive sentiment analysis by
                  harnessing the capabilities of Google Cloud Platform (GCP) and
                  Natural Language Processing (NLP) to decipher social analytics
                  data. This approach helped us pinpoint user preferences and
                  behaviors.
                </p>

                <p className="font-light">
                  By leveraging customer data, we created a personal{" "}
                  <span className="font-semibold text-[#071b52] dark:text-rose-600">
                    product recommendation engine
                  </span>{" "}
                  that boosted user interactions and conversions. We also
                  enhanced their Shopify and Magneto with novel features thus
                  elevating their digital strategy and user experience.
                </p>
              </div>
              <div className="w-full order-1">
                <img src="/img/w2.png" className="md:w-2/3 mx-auto" alt="" />
              </div>
            </div>

            <p className="font-light">
              We were awarded{" "}
              <span
                onClick={() =>
                  openwebsite(
                    "https://dma.org.uk/awards/winner/2023-gold-customer-programme"
                  )
                }
                className="font-semibold cursor-pointer text-[#071b52] dark:text-rose-600"
              >
                the Gold Award for Data Intelligence and Predictive AI by Data &
                Marketing Association (DMA) for reducing customer churn by 32%.
              </span>
            </p>

            <p className="font-light">
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

export default CS1;
