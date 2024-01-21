import React from "react";
import Layout from "../components/Layout";

const CS5 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[70%] m-auto flex flex-col gap-8 pt-5">
          <h1 className="text-4xl font-bold text-[#071b52]">
            Successful migration for a successful digital transformation
          </h1>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Problem Statement:
            </h2>
            <p className="text-xl font-light">
              Our client wanted to expand their possibilities and migrate to a
              platform that was more dynamic and suited their changing
              requirements. We did an in-depth analysis of their needs and
              suggested migrating to Salesforce and this is how the
              transformation process unfolded.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Our Solution:
            </h2>
            <p className="text-xl font-light">
              We helped them navigate through uncharted territory by carefully
              migrating from Magento 2 to Salesforce Commerce Cloud (SFCC) and
              Salesforce Marketing Cloud (SFMC) to embrace the dynamic
              capabilities of Salesforce.
            </p>
            <p className="text-xl font-light">
              In addition to managing the Salesforce platform, we additionally
              crafted bespoke applications that catered to their organizational
              needs while working in perfect harmony between the SFCC and SFMC.
            </p>

            <p className="text-xl font-light">
              We additionally ventured into data convergence, by connecting
              their disparate data sources into the BigQuery and intricately
              feeding them into S3 to create a robust data infrastructure. The
              data was then fed into Power BI to curate reports that helped our
              client analyse trends and prepare for opportunities.
            </p>
            <p className="text-xl font-light">
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
