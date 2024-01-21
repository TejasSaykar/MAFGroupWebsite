import React from "react";
import Layout from "../components/Layout";

const CS7 = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[70%] m-auto flex flex-col gap-8 pt-5">
          {/* <h1 className="text-4xl font-bold text-[#071b52]">
            Successful migration for a successful digital transformation
          </h1> */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Problem Statement:
            </h2>
            <p className="text-xl font-light">
              Our client, a Bangalore-based company, wanted to optimize the way
              their current search infrastructure worked and wanted to establish
              a robust system in place to enhance user experience and improve
              their existing functionality.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-medium text-[#071b52]">
              Our Solution:
            </h2>
            <p className="text-xl font-light">
              We started off with identifying the deficiencies in their current
              infrastructure and proposed establishing an Elastic Search system.
              This search system has the reputation of being the most scalable
              and efficient when handling large datasets.
            </p>
            <p className="text-xl font-light">
            Through these changes we aimed to achieve immense improvement in the search functionality of the website and ensure that the right information is delivered to the query swiftly and accurately. This consecutively boosted customer experience and satisfaction.
            </p>

            <p className="text-xl font-light">
            Simultaneously, we had dived into Attribution Modelling to understand the crucial aspects of customer journey, delving deep into the effectiveness of each touchpoint and allocating resources based on the impact of each channel.
            </p>
            <p className="text-xl font-light">
            We achieved this by generating a Multi-Channel Funnel (MCF) report that collects data from 10 different applications, compiles them and provides a comprehensive view of customer behavior. This provided us with valuable information about the conversion pathways and touchpoints that had the most impact. 
            </p>
            <p className="text-xl font-light">
            By leveraging this data, we built a Search Data Lake that is tailored for Augmented search. We leveraged Artificial Intelligence and this database to enhance the search experience of users based on their intent and context. This not only helped us address the gaps in their search infrastructure but also ensured that their systems were redefined to provide a more personalized experience to their users.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS7;
