import React from "react";
import Layout from "../components/Layout";

const CS5 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-4 pt-5">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            Successful migration for a successful digital transformation
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Problem Statement:
            </h2>
            <p className="font-light">
              Our client wanted to expand their possibilities and migrate to a
              platform that was more dynamic and suited their changing
              requirements. We did an in-depth analysis of their needs and
              suggested migrating to Salesforce and this is how the
              transformation process unfolded.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Our Solution:
            </h2>
            <div className="flex flex-col gap-2 md:flex-row items-center">
              <div className="w-full order-2 md:order-1">
                <p className="font-light">
                  We helped them navigate through uncharted territory by
                  carefully migrating from Magento 2 to Salesforce Commerce
                  Cloud (SFCC) and Salesforce Marketing Cloud (SFMC) to embrace
                  the dynamic capabilities of Salesforce.
                </p>
                <p className="font-light">
                  In addition to managing the Salesforce platform, we
                  additionally crafted bespoke applications that catered to
                  their organizational needs while working in perfect harmony
                  between the SFCC and SFMC.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/success.png"
                  className="aspect-video object-cover md:w-2/3 mx-auto"
                  alt=""
                />
              </div>
            </div>

            <p className="font-light">
              We additionally ventured into data convergence, by connecting
              their disparate data sources into the BigQuery and intricately
              feeding them into S3 to create a robust data infrastructure. The
              data was then fed into Power BI to curate reports that helped our
              client analyse trends and prepare for opportunities.
            </p>
            <p className="font-light">
              This harmonious transformation involving migration, bespoke
              applications and cohesive datasets paved the way for our client’s
              digital future.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS5;
