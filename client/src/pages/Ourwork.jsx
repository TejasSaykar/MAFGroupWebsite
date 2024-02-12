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

            <h2 className="px-2 text-xl font-bold mt-3 text-[#072b52]">
              Leveraging the power of a data to deliver business excellence
            </h2>
            <p className="px-2 font-normal mt-1 dark:text-rose-600">
              Our team uncovered untapped potential and orchestrated a
              comprehensive and detailed...
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
            <h3 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Boosting Marketing Efficiency by strategic transition
            </h3>
            <p className="px-2 font-normal mt-1">
              {" "}
              We helped them migrate from Adobe Analytics to Google Analytics as
              a cost-saving...{" "}
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
            <h2 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Ensuring GDPR compliance and a risk-free strategy implementation
            </h2>
            <p className="px-2 font-normal mt-1">
              We started our project by meticulously mapping out the...
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
            <h2 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Uplift revenue and implement real-time targeting in marketing
            </h2>
            <p className="px-2 font-normal mt-1">
              We initiated the project by systematically deploying Tealium
              Audience Stream (TAS) and...
              <Link className="text-sky-700 pl-1 underline" to={"/case4"}>
                more
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-5 md:mt-16 w-full flex flex-col md:flex-row px-2 gap-8 h-full pt-6 md:w-[90vw] mx-auto">
          <div className="one w-full h-full mt-5 sm:w-full">
            <img
              src="/img/success.png"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />

            <h2 className="px-2 text-xl font-bold mt-3 text-[#072b52]">
              Successful migration for a successful digital transformation
            </h2>
            <p className="px-2 font-normal mt-1 dark:text-rose-600">
              We helped them navigate through uncharted territory by carefully
              migrating from Magento...
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
            <h3 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Optimize Marketing Strategy
            </h3>
            <p className="px-2 font-normal mt-1">
              {" "}
              We, at MAF Group undertook this project and reached their
              objectives by a phase-by-phase approach to their...{" "}
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
            <h2 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Enhance User Experience
            </h2>
            <p className="px-2 font-normal mt-1">
              We started off with identifying the deficiencies in their current
              infrastructure and proposed establishing an Elastic...
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
            <h2 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
              Curating a Single Customer View (SCV) for boosting customer
              satisfaction
            </h2>
            <p className="px-2 font-normal mt-1">
              A Consumer Products Company struggled with fragmented customer ...
              <Link to={"/case8"} className="text-sky-700 pl-1 underline">
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
