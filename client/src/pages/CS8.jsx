import Layout from "@/components/Layout";
import React from "react";

const CS8 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Elevating Customer Satisfaction Through Single Customer View
                (SCV) in Retail
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
                Adobe Analytics, SCV, Power BI, ML
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1 md:ml-8">
                <h3>
                  • 7x Reduction in Time for Adobe Targeting & Other Marketing
                  Efforts
                </h3>
                <h3>
                  • Consolidation of 70+ Marketing & Sales Data Sources into
                  Single Source of Truth
                </h3>
                <h3>
                  • Saving of 3000+ Hours per Month in Manual Marketing Across
                  All Teams
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
                Facing challenges stemming from fragmented customer data across
                multiple channels, our client sought to enhance customer
                engagement and offer customization to drive satisfaction and
                loyalty in a fiercely competitive market. The objective was to
                integrate disparate data sources to facilitate a holistic view
                of customer interactions and preferences.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="md:ml-8 text-justify md:text-start">
                  In response to our client's objectives, we proposed the
                  creation of a Single Customer View (SCV) to consolidate and
                  analyze customer data efficiently. Commencing with data
                  integration from diverse sources including Google, Adobe
                  Analytics, Qualtrics, Magento, Shopify, and subscription data,
                  we established a unified system to house comprehensive
                  customer profiles. Leveraging data warehousing and matching
                  algorithms, we curated enriched customer profiles encompassing
                  holistic information.
                </p>
                <p className="md:ml-8 mt-2 md:mt-1 text-justify md:text-start">
                  An SCV application was developed utilizing Power BI, offering
                  real-time updates and predictive analytics capabilities.
                  Employing advanced machine learning techniques, we segmented
                  customer data and conducted extensive behavior analysis. The
                  system was further augmented to enable automatic targeting of
                  users across multiple channels, including Adobe.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
                    </h2>
                    <p className="mb-2 text-justify md:text-start">
                      The implementation of SCV yielded significant improvements
                      in customer engagement and satisfaction through targeted
                      marketing strategies. Automation of business processes
                      reduced manual intervention, driving efficiency and
                      fostering sustainable business growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1 md:ml-4">
                  <p>
                    • 7x Reduction in Time for Adobe Targeting & Other Marketing
                    Efforts
                  </p>
                  <p>
                    • Consolidation of 70+ Marketing & Sales Data Sources into
                    Single Source of Truth
                  </p>
                  <p>
                    • Saving of 3000+ Hours per Month in Manual Marketing Across
                    All Teams
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start">
                  Through the strategic deployment of SCV coupled with advanced
                  analytics and automation, we empowered our client to unlock
                  new opportunities for customer engagement and satisfaction.
                  The success of this initiative underscores our commitment to
                  delivering transformative solutions tailored to meet the
                  evolving needs of the retail industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS8;
