import Layout from "@/components/Layout";
import React from "react";

const CS8 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case8.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Elevating Customer Satisfaction Through Single Customer View
                (SCV) in Retail
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Elevating Customer Satisfaction Through Single Customer View
                (SCV) in Retail
              </span>
            </div> */}
            <div className="w-full md:grid md:grid-cols-12 flex flex-col gap-4 px-5 py-10 bg-red-600 text-white md:px-32">
              <div className="flex w-full flex-row md:flex-col md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">Retail</span>
              </div>
              <div className="flex flex-row md:flex-col md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">London, UK</span>
              </div>
              <div className="flex flex-row md:flex-col md:col-span-2 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full">
                  Adobe Analytics, SCV, Power BI, ML
                </span>
              </div>
              <div className="flex md:ml-7 w-full flex-col md:flex-col md:col-span-6 gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Result
                </h2>
                <div className="flex w-full flex-col gap-1">
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
            </div>

            <div className="flex bg-gray-50 px-5 py-10 md:px-32 flex-col">
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
                src="/img/case88.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col px-5 py-4 md:px-32 bg-gray-50">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Facing challenges stemming from fragmented customer data across
                multiple channels, our client sought to enhance customer
                engagement and offer customization to drive satisfaction and
                loyalty in a fiercely competitive market. The objective was to
                integrate disparate data sources to facilitate a holistic view
                of customer interactions and preferences.
              </p>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32 gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="mt-1 text-justify md:text-start">
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
                <p className="mt-2 md:mt-3 text-justify md:text-start">
                  An SCV application was developed utilizing Power BI, offering
                  real-time updates and predictive analytics capabilities.
                  Employing advanced machine learning techniques, we segmented
                  customer data and conducted extensive behavior analysis. The
                  system was further augmented to enable automatic targeting of
                  users across multiple channels, including Adobe.
                </p>
              </div>
            </div>

            <div className="px-5 py-4 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
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

            <div className="mt-5 px-5 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI)
              </h2>

              <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">7x</h2>
                  <p className="font-medium text-center text-gray-500">
                    Reduction in Time for Adobe Targeting & Other Marketing
                    Efforts
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">70+</h2>
                  <p className="font-medium text-center text-gray-500">
                    Consolidation Marketing & Sales Data Sources into Single
                    Source of Truth
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">3000+</h2>
                  <p className="font-medium text-center text-gray-500">
                    Hours saving per Month in Manual Marketing Across All Teams
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32 pb-8">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Through the strategic deployment of SCV coupled with advanced
                analytics and automation, we empowered our client to unlock new
                opportunities for customer engagement and satisfaction. The
                success of this initiative underscores our commitment to
                delivering transformative solutions tailored to meet the
                evolving needs of the retail industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS8;
