import Layout from "@/components/Layout";
import React from "react";

const CS9 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case9-min.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Driving Hyper-Personalization for Enhanced Customer Engagement
                in Retail
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Driving Hyper-Personalization for Enhanced Customer Engagement
                in Retail
              </span>
            </div> */}
            <div className="w-full px-5 flex flex-col gap-4 py-10 bg-red-600 text-white md:px-[5rem] md:grid md:grid-cols-12">
              <div className="flex w-full flex-row md:flex-col md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">Retail</span>
              </div>
              <div className="flex w-full flex-row md:flex-col md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">London, UK</span>
              </div>
              <div className="flex flex-row md:flex-col md:col-span-3 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full">
                  CRM, Azure Blob, Adobe Target, Adobe Optimize
                </span>
              </div>
              <div className="flex flex-col gap-2 col-span-5">
                <h2 className="text-lg font-bold text-gray-900">Result : </h2>
                <div className="flex flex-col gap-1">
                  <h3>• 53% Uplift in Total Revenue</h3>
                  <h3>• 15% Increase in Repeat Subscriptions</h3>
                  <h3>
                    • 45% Increase in Average Revenue and Profit per Customer
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-10 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Our client, a British multinational company specializing in
                nicotine products, stands as the largest tobacco company
                globally based on net sales. With headquarters in London and
                over three decades of industry experience, they boast a customer
                base of 150 million spanning 180 markets worldwide.
              </p>
            </div>

            <div className="h-[100vh] w-full">
              <img
                src="/img/case99-min.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            <div className="flex bg-gray-50 px-5 py-4 md:px-32 flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                In pursuit of enhancing customer engagement and driving revenue
                growth, our client aimed to develop hyper-personalized customer
                journeys tailored to individual preferences. Leveraging the
                power of data analytics, our objective was to engage customers
                effectively, upsell products, retain users, and recapture those
                who had paused their engagement.
              </p>
            </div>

            <div className="flex flex-col px-5 bg-gray-50 py-4 md:px-32 gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="text-justify md:text-start">
                  Harnessing the power of data analytics, our team embarked on a
                  comprehensive analysis of churn data to identify prospective
                  pain points and customer attributes. Leveraging Azure Blob
                  storage for data processing and formatting, we seamlessly
                  integrated with Adobe Target and Adobe Optimize to execute
                  personalized campaigns tailored to each customer segment.
                </p>
                <p className="mt-2 md:mt-4 text-justify md:text-start">
                  Drawing insights from previous customer interactions, we
                  categorized customers into distinct segments and devised
                  personalized campaigns spanning website banners, email
                  marketing, and targeted communications. From long-time users
                  to first-time customers and those who had lapsed in their
                  engagement, we crafted tailored experiences to drive
                  engagement and conversion.
                </p>
                <p className="mt-2 md:mt-4 text-justify md:text-start">
                  Furthermore, we proposed call center and service email
                  initiatives to augment the reach of our hyper-personalization
                  program, furthering our efforts to engage customers across
                  multiple touchpoints.
                </p>
              </div>
            </div>

            <div className="px-5 py-4 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
                  </h2>
                  <p className="mt-1 mb-2 text-justify md:text-start">
                    The implementation of hyper-personalized CRM strategies
                    yielded remarkable results, driving customer satisfaction,
                    reducing churn rates, mitigating cancellation attempts, and
                    ultimately boosting revenue. The tailored UI experiences and
                    dynamic content contributed to a significant 53% uplift in
                    total revenue, alongside a 15% increase in repeat
                    subscriptions and a substantial 45% enhancement in average
                    revenue and profit per customer.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI)
              </h2>

              <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">53%</h2>
                  <p className="font-medium text-center text-gray-500">
                    Uplift in Total Revenue
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">15%</h2>
                  <p className="font-medium text-center text-gray-500">
                    Increase in Repeat Subscriptions
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">45%</h2>
                  <p className="font-medium text-center text-gray-500">
                    Increase in Average Revenue and Profit per Customer
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32 pb-8">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Through strategic deployment of hyper-personalization techniques
                and leveraging advanced data analytics, we empowered our client
                to unlock new avenues for customer engagement and revenue
                growth. The success of this initiative underscores our
                commitment to delivering impactful solutions tailored to meet
                the evolving needs of the retail industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS9;
