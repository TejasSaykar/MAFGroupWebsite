import React from "react";
import Layout from "../components/Layout";

const Partners = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full h-[70vh]">
        <div className="w-[60%] m-auto flex h-[90%] flex-col justify-center items-center gap-5">
          <h1 className="text-4xl text-center pt-5 font-bold text-[#071b52]">
            Our Partners
          </h1>
          <p className="text-xl font-light">
            We work with Adobe and ObservePoint in addition we are also deft at
            using Microsoft Azure, Google Cloud, Google Marketing Platform,
            Amazon Web Services, Tealium, Salesforce and Magento.
          </p>
          <p className="text-xl font-light">
            (Insert Logos for Adobe, ObservePoint, Microsoft Azure, Google
            Cloud, Google Marketing Platform, Amazon Web Services, Tealium,
            Salesforce and Magento.)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
