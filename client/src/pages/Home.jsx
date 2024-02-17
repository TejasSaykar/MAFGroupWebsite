import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Layout from "../components/Layout";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imgStyle = {
    transform: `translateY(-${scrollY}px)`,
    transition: "transform 0.3s ease-out",
  };

  const imgStyle1 = {
    transform: `translateY(${10}px)`,
    transition: "transform 0.3s ease-out",
  };

  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Layout
        title={"Home | MAF"}
        description={"This is the home page"}
        className="w-full h-screen"
      >
        <div className="relative top w-full">
          <div className="relative w-full h-screen">
            <img
              src="/img/home0.jpg"
              className="w-full object-cover h-screen"
              alt=""
            />
          </div>

          <div className="absolute top-36 flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-0 lg:gap-3 text-4xl md:text-6xl text-white font-bold">
              <h1
                className="text-center outline"
                style={{ fontFamily: "sans-serif" }}
              >
                We Are <span className="text-white">Your Transformation</span>
              </h1>
              <h1
                className="text-center outline"
                style={{ fontFamily: "sans-serif" }}
              >
                <span className="text-white">Journey</span> Partner
              </h1>
            </div>
            <div className="w-full px-5 md:w-1/3 text-white text-center mt-10 text-lg lg:text-xl">
              <h3>
                Using the power of creativity to build better futures for our
                people, planet, clients and communities
              </h3>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-4">
              <div className="my-5 md:my-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 ring-2 ring-sky-600 rounded-full text-white hover:underline"
                >
                  Contact Us
                </button>
              </div>
              <div className="text-xl flex flex-col justify-center items-center cursor-pointer font-thin text-white">
                <Link
                  to={"/request"}
                  className="text-base text-black border-2 bg-white py-3 px-4 rounded-full hover:text-white hover:bg-transparent hover:border-2"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle One */}

        <div className="w-full md:h-[60vh] mt-5 md:mt-20">
          <div className="relative px-3 md:px-0 flex h-full w-full flex-col sm:flex-row md:w-[90vw] md:flex-row lg:w-[80vw] mx-auto gap-4 justify-start md:items-start">
            <h2 className="hidden md:block absolute -left-12 md:-left-12 top-5 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
              WORK
            </h2>
            <h2 className="absolute underline underline-offset-8 md:hidden top-0 left-[40%] font-bold text-xl text-[#071b52] dark:text-rose-600">
              WORK
            </h2>
            <div className="one h-full align-top m-auto sm:w-full mt-20 md:mt-0">
              <img
                src="/img/be.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video rounded-sm"
                alt=""
              />

              <h2 className="px-2 text-xl font-bold mt-3 text-[#072b52]">
                Leveraging the power of a data to deliver business excellence
              </h2>
              <p className="px-2 font-normal mt-1 dark:text-rose-600">
                Our team uncovered untapped potential and orchestrated a
                comprehensive...
                <Link to={"/case1"} className="text-sky-700 pl-1 underline">
                  more
                </Link>
              </p>
            </div>
            <div className="two h-full align-top mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/wm.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <h3 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
                Boosting Marketing Efficiency by strategic transition
              </h3>
              <p className="px-2 font-normal mt-1">
                {" "}
                We helped them migrate from Adobe Analytics to Google Analytics
                as a cost-saving...{" "}
                <Link className="text-sky-700 pl-1 underline" to={"/case2"}>
                  more
                </Link>
              </p>
            </div>
            <div className="three h-full mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/wg.jpg"
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
            <div className="four h-full mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/wr.jpg"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-3 hover:underline text-[#071b52] dark:text-rose-600">
                Uplift revenue and implement real-time targeting in marketing
              </h2>
              <p className="px-2 mt-1">
                We initiated the project by systematically deploying Tealium
                Audience Stream (TAS) and...
                <Link className="text-sky-700 pl-1 underline" to={"/case4"}>
                  more
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:h-[45vh] mt-10 md:mt-20">
          <div className="relative h-full w-full flex-col sm:flex-row md:w-[90vw] md:flex-row lg:w-[80vw] m-auto px-4 flex gap-4 justify-center md:items-start">
            <h2 className="hidden md:block absolute -left-12 md:-left-13 top-16 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
              BLOGS
            </h2>
            <h2 className="absolute underline underline-offset-8 md:hidden top-0 left-[40%] font-bold text-xl text-[#071b52] dark:text-rose-600">
              BLOGS
            </h2>
            <div className="h-full one md:mt-0 sm:w-full mt-20">
              <img
                src="/img/ba.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                18 intriguing facts about Data analytics that you cannot afford
                to miss
              </h2>
              <p className="px-2 font-normal mt-1">
                In this fast-paced world, data analytics has played an...{" "}
                <Link to={"/data_analytics"} className="text-sky-600 underline">
                  more
                </Link>
              </p>
            </div>
            <div className="h-full two mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/bc.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Advantages of Using Google Cloud Hosting
              </h2>
              <p className="px-2 font-normal mt-1">
                Cloud Hosting offered by Google is called Google Cloud Hosting.
                The tech giant provides it for free for the...{" "}
                <Link to={"/cloud_solution"} className="text-sky-600 underline">
                  more
                </Link>
              </p>
            </div>
            <div className="h-full three mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/marketing.jpg"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Marketing Automation Trends No Forward-Thinking Organization
                Should Ignore!
              </h2>
              <p className="px-2 font-normal mt-1">
                The marketing automation industry has grown in the last...
                <Link
                  to={"/marketing_automation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div>
            <div className="h-full four mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/Digitization.jpg"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Exciting Digital Transformation Trends You Can't Ignore
              </h2>
              <p className="px-2 font-normal mt-1">
                Digital Dransformation simply refers to how well an organization
                has adopted...
                <Link
                  to={"/digital_transformation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="relative middle1 mt-16 md:mt-32">
          <h2 className="hidden md:block absolute md:left-5 top-16 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
            LATEST NEWS
          </h2>
          <h2 className="absolute underline underline-offset-8 md:hidden -top-10 bottom-20 left-[30%] font-bold text-xl text-[#071b52] dark:text-rose-600">
            LATEST NEWS
          </h2>
          <div className="w-full px-3 flex-col md:flex-row flex md:px-10 gap-10">
            <div className="left max-sm:mt-5 flex justify-center w-full sm:w-[50vw] mx-auto sm:ml-20 md:w-[60vw] lg:w-1/4">
              <div className="flex flex-col items-start w-full shadow-xl pb-3">
                <img
                  src="/img/bai.jpg"
                  className="w-full h-auto bg-cover object-cover bg-center"
                  alt=""
                />
                <h2 className="text-xl font-semibold my-3 px-2 text-[#071b52] dark:text-rose-600">
                  Using predictive-AI to reduce churn
                </h2>
                <p className="text-justify px-2">
                  We used data intelligence and predictive AI to keep more
                  customers on board with rigorously tested brands, reducing
                  risk of them switching to potentially poorer-quality
                  alternatives.... <br />{" "}
                  <a
                    className="text-sky-600 underline cursor-pointer"
                    onClick={() =>
                      openWebsite(
                        "https://dma.org.uk/awards/winner/2023-gold-customer-programme"
                      )
                    }
                  >
                    read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
