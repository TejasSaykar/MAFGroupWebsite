import React from "react";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";

const Ourwork = () => {
  const openwebsite = (url) => {
    window.open(url, "_blanck");
  };

  const navigate = useNavigate();

  return (
    <Layout title={"MAF | Our Work"}>
      {/* <div className="w-full mt-[4rem]">
        <div className="text-center text-3xl text-[#071b52] font-bold pt-4">
          <h2>Our Work</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row px-4 gap-5 h-full pt-6 md:w-[90vw] mx-auto">
          <div className="one h-full mt-5 sm:w-full">
            <img
              src="/img/case1.jpg"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />

            <h2
              onClick={() => navigate("/case1")}
              className="px-2 text-lg hover:underline cursor-pointer font-bold mt-3 text-[#072b52]"
            >
              Transforming Digital Landscape
            </h2>
            <p className="px-2 font-normal mt-1 dark:text-rose-700">
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
              src="/img/case2.jpg"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />
            <h3
              onClick={() => navigate("/case2")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case3.jpg"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2
              onClick={() => navigate("/case3")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case4.jpg"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2
              onClick={() => navigate("/case4")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case5.jpg"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />

            <h2
              onClick={() => navigate("/case5")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 text-[#072b52]"
            >
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
              src="/img/case6.jpg"
              className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
              alt=""
            />
            <h3
              onClick={() => navigate("/case6")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case7.jpg"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2
              onClick={() => navigate("/case7")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case8.jpg"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2
              onClick={() => navigate("/case8")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case9.jpg"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2
              onClick={() => navigate("/case9")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
              src="/img/case10.jpg"
              className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
              alt=""
            />
            <h2
              onClick={() => navigate("/case10")}
              className="px-2 cursor-pointer text-lg font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600"
            >
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
      </div> */}

      <div className="wfull mt-[4rem]">
        <div className="w-[90vw] mx-auto py-9 flex flex-col gap-8">
          <div className="grid w-full md:grid-cols-3 gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="relative">
                <img
                  src="/img/case1.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2
                    className="text-base p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    CASE STUDY
                  </h2>
                  <p
                    className="p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    A Comprehensive Case Study in Retail Industry
                  </p>
                  <button
                    onClick={() => navigate("/case1")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/img/case2.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2
                    className="text-lg p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    CASE STUDY
                  </h2>
                  <p
                    className="p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Strategic Transition to Enhance Marketing Efficiency in the
                    Banking Sector
                  </p>
                  <button
                    onClick={() => navigate("/case2")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full hidden md:block h-full relative">
              <img
                src="/img/case8.jpg"
                className="h-full object-cover"
                alt=""
              />
              <div className="bg-green-300"></div>
              {/*  */}
              <div className="absolute h-full inset-0 bg-black opacity-65 bottom-0"></div>
              <div className="absolute text-white bottom-0">
                <h2
                  className="text-base p-5 font-semibold"
                  // style={{ textShadow: "1px 1px black" }}
                >
                  CASE STUDY
                </h2>
                <p
                  className="p-5 text-base font-semibold"
                  // style={{ textShadow: "1px 1px black" }}
                >
                  Ensuring GDPR Compliance and Risk-Free Strategy Implementation
                  in the FMCG Industry
                </p>
                <button
                  onClick={() => navigate("/case3")}
                  className="text-lg flex gap-1 items-center font-semibold p-5"
                  style={{ textShadow: "1px 1px black" }}
                >
                  Read More
                  <span className="text-xl font-bold">
                    <BiRightArrowAlt className="text-xl font-bold" />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="relative">
                <img
                  src="/img/case4.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2
                    className="text-lg p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    CASE STUDY
                  </h2>
                  <p
                    className="p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Driving Revenue Uplift and Real-Time Targeting in Banking
                    Industry
                  </p>
                  <button
                    onClick={() => navigate("/case4")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative h-full">
                <img
                  src="/img/case5.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2
                    className="text-lg p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    CASE STUDY
                  </h2>
                  <p
                    className="p-5 font-semibold"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Seamless Migration for Successful Digital Transformation in
                    the IT Industry
                  </p>
                  <button
                    onClick={() => navigate("/case5")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="relative">
                <img
                  src="/img/case6.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2 className="text-lg p-5 font-semibold">CASE STUDY</h2>
                  <p className="p-5 font-semibold">
                    Streamlining Marketing Strategy for Enhanced Performance in
                    the Hospitality Industry
                  </p>
                  <button
                    onClick={() => navigate("/case6")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/img/case7.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2 className="text-lg p-5 font-semibold">CASE STUDY</h2>
                  <p className="p-5 font-semibold">
                    Revolutionizing User Experience in the IT Sector
                  </p>
                  <button
                    onClick={() => navigate("/case7")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-full relative">
              <div className="absolute h-full inset-0 bottom-0 bg-[#a5cb94]"></div>
              <div className="absolute h-full text-black md:top-[8rem]">
                <h2 className="text-base p-5 font-semibold">CASE STUDY</h2>
                <p className="p-5 font-semibold">
                  Elevating Customer Satisfaction Through Single Customer View
                  (SCV) in Retail
                </p>
                <button
                  onClick={() => navigate("/case8")}
                  className="text-lg flex gap-1 items-center font-semibold p-5"
                >
                  Read More
                  <span className="text-xl font-bold">
                    <BiRightArrowAlt className="text-xl font-bold" />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="relative">
                <img
                  src="/img/case9.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2 className="text-lg p-5 font-semibold">CASE STUDY</h2>
                  <p className="p-5 font-semibold">
                    Driving Hyper-Personalization for Enhanced Customer
                    Engagement in Retail
                  </p>
                  <button
                    onClick={() => navigate("/case9")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative h-full">
                <img
                  src="/img/case10.jpg"
                  className="w-full h-full aspect-square md:aspect-auto"
                  alt=""
                />
                <div className="absolute inset-0 bottom-0 bg-black opacity-65"></div>
                <div className="text-white absolute top-0">
                  <h2 className="text-lg p-5 font-semibold">CASE STUDY</h2>
                  <p className="p-5 font-semibold">
                    Enhancing Marketing Efficiency through Digital
                    Transformation in Retail
                  </p>
                  <button
                    onClick={() => navigate("/case10")}
                    className="text-lg flex gap-1 items-center font-semibold p-5"
                    style={{ textShadow: "1px 1px black" }}
                  >
                    Read More
                    <span className="text-xl font-bold">
                      <BiRightArrowAlt className="text-xl font-bold" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ourwork;
