import React from "react";
import Layout from "../components/Layout";

const Partners = () => {
  return (
    <Layout title={"MAF | Partners"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full md:h-[70vh]">
          <img
            src="/img/logos.jpg"
            className="w-full md:h-full bg-cover object-contain"
            alt=""
          />
        </div>
        <div className="w-[90%] lg:w-[60%] m-auto flex h-[90%] flex-col justify-center items-start gap-2">
          <h1 className="text-3xl text-center pt-5 font-bold text-[#071b52] dark:text-rose-600">
            Our Partners
          </h1>
          <p className="font-light">
            We work with Adobe and ObservePoint in addition we are also deft at
            using Microsoft Azure, Google Cloud, Google Marketing Platform,
            Amazon Web Services, Tealium, Salesforce and Magento.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
