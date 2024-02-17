import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Ourwork = () => {
  const openwebsite = (url) => {
    window.open(url, "_blanck");
  };

  return (
    <Layout title={"MAF | Our Work"}>
      <div className="w-full mt-[4rem]">
        <div className="text-center text-3xl text-[#071b52] font-bold pt-4">
          <h2>Our Work</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row px-4 gap-5 h-full pt-6 md:w-[90vw] mx-auto">
          <div className="one h-full mt-5 sm:w-full">
            <img
              src="/img/w1.png"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />

            <h2 className="px-2 text-lg font-bold mt-3 text-[#072b52]">
              Transforming Digital Landscape
            </h2>
            <p className="px-2 font-normal mt-1 dark:text-rose-600">
              Once our plan was laid out, we underwent a comprehensive digital
              transformation is a necessity for sustainable growth. This case
              study...
              <Link to={"/case1"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
          <div className="two h-full mt-5 sm:w-full">
            <img
              src="/img/w2.png"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />
            <h3 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Strategic Transition to Enhance Marketing Efficiency in the
              Banking Sector
            </h3>
            <p className="px-2 font-normal mt-1">
              {" "}
              Concurrently, we spearheaded the migration of raw data from Adobe
              to a ...{" "}
              <Link className="text-sky-700 pl-1 underline" to={"/case2"}>
                more
              </Link>
            </p>
          </div>
          <div className="three h-full mt-5 sm:w-full">
            <img
              src="/img/w3.png"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Ensuring GDPR Compliance and Risk-Free Strategy Implementation in
              the FMCG Industry
            </h2>
            <p className="px-2 font-normal mt-1">
              Like every project, we started this with a comprehensive
              assessment...
              <Link to={"/case3"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
          <div className="four h-full mt-5 sm:w-full">
            <img
              src="/img/revenue.png"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Driving Revenue Uplift and Real-Time Targeting in Banking Industry
            </h2>
            <p className="px-2 font-normal mt-1">
              As an initial step, we strategically deployed Tealium
              AudienceStream (TAS) to integrate the...
              <Link className="text-sky-700 pl-1 underline" to={"/case4"}>
                more
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-5 md:mt-16 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-2 gap-8 h-full pt-6 md:w-[90vw] mx-auto">
          <div className="one w-full h-full mt-5 sm:w-full">
            <img
              src="/img/success.png"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />

            <h2 className="px-2 text-lg font-bold mt-3 text-[#072b52]">
              Seamless Migration for Successful Digital Transformation in the IT
              Industry
            </h2>
            <p className="px-2 font-normal mt-1 dark:text-rose-600">
              We meticulously migrated their data from Magento 2 to
              Salesforce...
              <Link to={"/case5"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
          <div className="two h-full sm:w-full mt-5">
            <img
              src="/img/strategy.png"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />
            <h3 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Streamlining Marketing Strategy for Enhanced Performance in the
              Hospitality Industry
            </h3>
            <p className="px-2 font-normal mt-1">
              {" "}
              We employed a phased strategy to address our client’s...{" "}
              <Link className="text-sky-700 pl-1 underline" to={"/case6"}>
                more
              </Link>
            </p>
          </div>
          <div className="three h-full mt-5 sm:w-full">
            <img
              src="/img/robust.png"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Revolutionizing User Experience in the IT Sector
            </h2>
            <p className="px-2 font-normal mt-1">
              We concurrently worked on Attribution Modeling that...
              <Link to={"/case7"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
          <div className="three h-full mt-5 sm:w-full">
            <img
              src="/img/career.png"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Elevating Customer Satisfaction Through Single Customer View (SCV)
              in Retail
            </h2>
            <p className="px-2 font-normal mt-1">
              An SCV application was developed utilizing Power BI,...
              <Link to={"/case8"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
          <div className="three h-full mt-5 sm:w-full">
            <img
              src="/img/ma2.png"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Driving Hyper-Personalization for Enhanced Customer Engagement in
              Retail
            </h2>
            <p className="px-2 font-normal mt-1">
              Harnessing the power of data analytics, our team embarked ...
              <Link to={"/case9"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
          <div className="three h-full mt-5 sm:w-full">
            <img
              src="/img/ma3.png"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2 className="px-2 text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Enhancing Marketing Efficiency through Digital Transformation in
              Retail
            </h2>
            <p className="px-2 font-normal mt-1">
              Our digital transformation initiative focused on migrating from
              Adobe...
              <Link to={"/case10"} className="text-sky-700 pl-1 underline">
                more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ourwork;
