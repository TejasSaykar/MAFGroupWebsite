import Layout from "@/components/Layout";
import React from "react";

const CS1 = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case1-min.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Transforming Digital Landscape: A Comprehensive Case Study in
                Retail Industry
              </h2>
            </div>
          </div>
        </div>

        {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Transforming Digital Landscape: A Comprehensive Case Study in
                Retail Industry
              </span>
          </div> */}

        <div className="m-auto flex flex-col">
          <div className="w-full flex flex-col">
            <div
              className="md:grid flex flex-col
             px-5 md:px-32  text-white items-center md:items-start bg-red-600 py-10 w-full md:grid-cols-12 gap-3 md:gap-0 "
            >
              <div className="flex w-full flex-row md:flex-col  md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry{" "}
                </h2>
                <span className="w-full">Retail</span>
              </div>
              <div className="flex w-full flex-row md:flex-col  md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">London</span>
              </div>
              <div className="flex w-full flex-col md:flex-col col-span-4 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution/Tools
                </h2>
                <span className="md:w-[80%] w-full text-justify md:text-start  md:ml-0">
                  Google Marketing Platform, Adobe Marketing Platform,
                  Snowflake, GA4, GA360, GCP, NLP, Sprinklr, Adobe Target, Adobe
                  Analytics, Optimize, Shopify, Magneto.
                </span>
              </div>
              <div className="flex w-full flex-col col-span-4 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Result
                </h2>
                <div className="flex w-full flex-col gap-1">
                  <h3>• 5.5% increase in website conversions</h3>
                  <h3>
                    • Approximately 20K Pound revenue increase in each website
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex py-4 mt-5 px-5 md:px-32 flex-col bg-gray-50">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Introduction
              </h2>
              <p className="mt-1 text-justify md:text-start">
                In the competitive landscape of business, digital transformation
                is a necessity for sustainable growth. This case study is an
                example of a holistic digital overhaul that we undertook for a
                leading British Multinational company specializing in
                manufacturing and retail of nicotine products. Our client
                recognized the importance of revamping their digital
                infrastructure, maximizing their online potential and furthering
                their already extensive global presence.
              </p>
            </div>

            <div className="flex py-2 px-5 md:px-32 bg-gray-50 flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Client Background
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Our client, a major player in the tobacco industry, has a
                significant reach across 180 markets worldwide and has amassed
                three years of experience in the industry. Their customer base
                spans across multiple countries exceeding 150 million, which
                created the demand for them to modernize their systems and cater
                to the evolving consumer behavior and industry dynamics.
              </p>
            </div>

            <div className="flex px-5 py-2 md:px-32 flex-col bg-gray-50">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                The primary objective and problem statement was laid out clearly
                for us. The root of their problem was fragmented data sources
                and suboptimal digital integration that was hindering their
                ability to unlock latent potential. Our goal was to streamline
                operations, enhance user experience, improve revenue generation
                and drive conversion rates.
              </p>
            </div>

            <div className="flex px-5 py-4 md:px-32 flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="mt-1 text-justify md:text-start">
                  Once our plan was laid out, we underwent a comprehensive
                  digital transformation journey, custom designed to suit the
                  requirements of the client. Some of the cutting-edge
                  technologies we employed to address their multifaceted
                  challenges are as follows:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 px-3 py-5 md:px-32 gap-9 bg-[#FBF8F1]">
              <div className="mb-8 bg-white rounded-t-lg">
                <div className="flex mx-auto flex-col gap-2">
                  <img
                    src="/img/case111-min.jpg"
                    className="object-cover rounded-t-lg bg-cover aspect-video"
                    alt=""
                  />
                  <div className="flex flex-col p-2">
                    <h2 className="text-lg text-[#071b52] font-semibold">
                      Marketing Platform Integration
                    </h2>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <p className="text-justify">
                          <b className="pr-1 text-lg">1.</b> Deployed Google
                          Marketing Platform and Adobe Marketing Platform across
                          70 countries to centralize and streamline marketing
                          efforts.
                        </p>
                      </li>
                      <li>
                        <p className="text-justify">
                          <b className="pr-1 text-lg">2.</b> A suite of tools
                          like GA4, GA360, Optimize, Adobe Analytics (AA), Adobe
                          Experience Manager (AEM), Adobe Target (AT) and Adobe
                          Audience Manager (AAM) was integrated to create a
                          seamless and uniform user experience across online
                          platforms.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 
                <div className="grid grid-cols-1 w-2/3 mx-auto gap-5 md:gap-10 mt-4"> */}
              <div className="flex flex-col gap-2 h-[max-content] pb-6 bg-white rounded-t-lg">
                <img
                  src="/img/wp-min.jpg"
                  alt=""
                  className="aspect-video bg-cover object-cover rounded-lg"
                />
                <div className="flex flex-col p-2">
                  <h2 className="text-lg text-[#071b52] font-semibold">
                    Website Performance Optimization
                  </h2>
                  <p className="text-justify pb-2">
                    <b className="pr-1 text-lg">1.</b> Adobe Target and Optimize
                    was implemented across 60 markets that helped in identifying
                    opportunities for website optimization.
                  </p>
                  <p className="text-justify">
                    <b className="pr-1 text-lg">2.</b> To achieve enhanced user
                    engagement, advanced analytics was employed to track
                    interactions, behavior and preferences of customers. This
                    enabled data-driven decision making that facilitated
                    continuous improvement.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-t-lg">
                <img
                  src="/img/dp-min.jpg"
                  alt=""
                  className="aspect-video bg-cover object-cover rounded-t-lg"
                />
                <div className="flex flex-col p-2">
                  <h2 className="text-lg font-semibold text-[#071b52]">
                    Data processing
                  </h2>
                  <p className="text-justify pb-2">
                    <b className="text-lg pr-1">1.</b> Data was consolidated in
                    Big Query and a unified view was created to facilitate
                    advanced analytics.
                  </p>
                  <p>
                    <b className="text-lg pr-1">2.</b> Established a Single
                    Customer View with Snowflake to enable hyper-personalization
                    and targeted, dynamic advertising.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-t-lg">
                <img
                  src="/img/NLP1-min.jpg"
                  alt=""
                  className="aspect-video bg-cover object-cover rounded-t-lg"
                />
                <div className="flex flex-col p-2">
                  <h2 className="text-lg font-semibold text-[#071b52]">
                    Harness the Power of AI and NLP
                  </h2>
                  <p className="text-justify pb-2">
                    <b className="text-lg pr-1">1.</b> Google Cloud Platform
                    (GCP) and Natural Language Processing (NLP) was utilized to
                    conduct sentiment analysis and derive actionable insights.
                  </p>
                  <p className="text-justify">
                    <b className="text-lg pr-1">2.</b> This social analytics
                    data was leveraged to develop a personalized product
                    recommendation engine that enhances user experience and
                    improvement in conversion.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 bg-white rounded-t-lg">
                <img
                  src="/img/ecom-min.jpg"
                  alt=""
                  className="aspect-video bg-cover object-cover rounded-t-lg"
                />
                <div className="flex flex-col p-2">
                  <h2 className="text-lg font-semibold text-[#071b52]">
                    E-commerce Platform Elevation
                  </h2>
                  <p className="text-justify">
                    Shopify and Magneto platforms were supplemented with
                    innovative features and efficient functionalities that
                    supported the overall digital strategy while maintaining the
                    user experience.
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>

            <div className="mt-8">
              <div className="md:w-[80%] mx-3 md:mx-auto">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results
                    </h2>
                    <p className="mb-2">
                      We set out to achieve a set of KPIs that yielded
                      significant result which are as follows:
                    </p>
                  </div>
                  <div className="flex flex-col gap-2  md:ml-5">
                    <p>
                      <span className="text-md font-semibold text-[#071b52]">
                        • Website conversions:
                      </span>{" "}
                      A remarkable 3% increase to 5.5% increase in conversions,
                      indicative of optimized digital experience.
                    </p>
                    <p>
                      <span className="text-md font-semibold text-[#071b52]">
                        • Revenue Uplift:
                      </span>{" "}
                      An approximate increase in £20,000 revenue in each website
                      which was a result of our fruitful intervention.
                    </p>
                    <p>
                      <span className="text-md font-semibold text-[#071b52]">
                        • Hyper-personalization:
                      </span>{" "}
                      Data sources consolidation and application of advanced
                      AI-driven personalization techniques resulted in a boost
                      in customer satisfaction.
                    </p>
                    <p>
                      <span className="text-md font-semibold text-[#071b52]">
                        • E-commerce experience:
                      </span>{" "}
                      Their e-commerce platforms like Shopify and Magneto were
                      supplemented with additional functionalities that
                      augmented their digital strategy and provided stellar user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 w-full">
              <div className="md:w-[80%] px-3 md:mx-auto">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start">
                  Through strategic planning, employing cutting-edge tech and
                  data-driven decisions, we were able to exemplify their power
                  in the retail landscape. From website optimization to
                  E-commerce enhancement, every aspect of the project was aimed
                  at driving tangible results and achieving customer
                  satisfaction. The resounding success that we achieved was
                  because of our ability to align our strategies with their
                  business objectives.
                </p>
              </div>
            </div>

            <div className="mt-5 w-full pb-4">
              <div className="md:w-[80%] md:mx-auto px-3">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  KPI
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-2xl font-medium">5.5% </h2>
                    <p className="font-medium text-gray-500">
                      increase in website conversions
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-2xl font-medium">20K</h2>
                    <p className="font-medium text-gray-500">
                      Pound revenue increase in each website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS1;
