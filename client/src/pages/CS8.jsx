import Layout from "@/components/Layout";
import React from "react";

const CS8 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-4 pt-5">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            Curating a Single Customer View (SCV) for boosting customer
            satisfaction
          </h1>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Problem Statement:
            </h2>
            <p className="font-light">
              A Consumer Products Company struggled with fragmented customer
              data across multiple channels, impeding effective customer
              engagement and offer customizations. The aim was to integrate
              these disparate data sources which are crucial for enhancing
              customer satisfaction and loyalty in a competitive market.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Our Solution:
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full order-2 md:order-1">
                <p className="font-light">
                  To create a comprehensive pool of customer data, we proposed
                  to create a Single Customer View (SCV) that aids in efficient
                  analysis. As an initial step in this process, we integrated
                  data from multiple sources including Google, Adobe Analytics,
                  Qualtrics, Magento, Shopify and subscription data into a
                  unified system. We also employed data warehousing and matching
                  algorithms to create customer profiles with their holistic
                  information.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/career.png"
                  className="aspect-video object-cover md:w-2/3 mx-auto"
                  alt=""
                />
              </div>
            </div>

            <p className="font-light">
              An SCV application was developed in Power BI with real-time
              updates and predictive analytics. With advanced machine learning
              techniques, customer data was segmented, and extensive behavior
              analysis was performed. The system was further programmed to
              facilitate automatic targeting of users with multiple channels
              like Adobe.
            </p>

            <p className="font-light">
              As a result of this implementation, we were able to greatly boost
              customer engagement and satisfaction by utilizing efficient
              targeted marketing strategies. Overall business process was
              automated and made into systems that required minimal manual
              intervention while achieving sustainable business growth.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS8;
