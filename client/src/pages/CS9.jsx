import Layout from "@/components/Layout";
import React from "react";

const CS9 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Driving Hyper-Personalization for Enhanced Customer Engagement
                in Retail
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">Retail</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">London, UK</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]">
                CRM, Azure Blob, Adobe Target, Adobe Optimize
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1 md:ml-8">
                <h3>• 53% Uplift in Total Revenue</h3>
                <h3>• 15% Increase in Repeat Subscriptions</h3>
                <h3>
                  • 45% Increase in Average Revenue and Profit per Customer
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className="md:ml-8 text-justify md:text-start">
                Our client, a British multinational company specializing in
                nicotine products, stands as the largest tobacco company
                globally based on net sales. With headquarters in London and
                over three decades of industry experience, they boast a customer
                base of 150 million spanning 180 markets worldwide.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className="md:ml-8 text-justify md:text-start">
                In pursuit of enhancing customer engagement and driving revenue
                growth, our client aimed to develop hyper-personalized customer
                journeys tailored to individual preferences. Leveraging the
                power of data analytics, our objective was to engage customers
                effectively, upsell products, retain users, and recapture those
                who had paused their engagement.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="md:ml-8 text-justify md:text-start">
                  Harnessing the power of data analytics, our team embarked on a
                  comprehensive analysis of churn data to identify prospective
                  pain points and customer attributes. Leveraging Azure Blob
                  storage for data processing and formatting, we seamlessly
                  integrated with Adobe Target and Adobe Optimize to execute
                  personalized campaigns tailored to each customer segment.
                </p>
                <p className="md:ml-8 mt-2 md:mt-1 text-justify md:text-start">
                  Drawing insights from previous customer interactions, we
                  categorized customers into distinct segments and devised
                  personalized campaigns spanning website banners, email
                  marketing, and targeted communications. From long-time users
                  to first-time customers and those who had lapsed in their
                  engagement, we crafted tailored experiences to drive
                  engagement and conversion.
                </p>
                <p className="md:ml-8 mt-2 md:mt-1 text-justify md:text-start">
                  Furthermore, we proposed call center and service email
                  initiatives to augment the reach of our hyper-personalization
                  program, furthering our efforts to engage customers across
                  multiple touchpoints.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
                    </h2>
                    <p className="mb-2 text-justify md:text-start">
                      The implementation of hyper-personalized CRM strategies
                      yielded remarkable results, driving customer satisfaction,
                      reducing churn rates, mitigating cancellation attempts,
                      and ultimately boosting revenue. The tailored UI
                      experiences and dynamic content contributed to a
                      significant 53% uplift in total revenue, alongside a 15%
                      increase in repeat subscriptions and a substantial 45%
                      enhancement in average revenue and profit per customer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1 md:ml-4">
                  <p>• 53% Uplift in Total Revenue</p>
                  <p>• 15% Increase in Repeat Subscriptions</p>
                  <p>
                    • 45% Increase in Average Revenue and Profit per Customer
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start">
                  Through strategic deployment of hyper-personalization
                  techniques and leveraging advanced data analytics, we
                  empowered our client to unlock new avenues for customer
                  engagement and revenue growth. The success of this initiative
                  underscores our commitment to delivering impactful solutions
                  tailored to meet the evolving needs of the retail industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS9;
