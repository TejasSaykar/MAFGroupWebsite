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
        <div className="gradiant relative top w-full">
          <div className="relative w-full h-screen">
            <img
              src="/img/home0.jpg"
              className="w-full object-cover h-screen"
              alt=""
            />
            {/* <img
              className="absolute hidden xl:block top-36 h-[400px] left-28 text-sky-600"
              style={imgStyle}
              src="/img/ball.png"
              alt=""
            />
            <img
              className="absolute hidden xl:block top-[8rem] lg:top-[2rem] right-60"
              src="/img/ball1.png"
              alt=""
              style={imgStyle}
            />
            <img
              className="absolute hidden xl:block top-[7rem] h-[500px] -left-10"
              style={imgStyle}
              src="/img/ball2.png"
              alt=""
            /> */}
            {/* <img
              className="absolute top-[30rem] h-[150px] right-[20rem]"
              style={imgStyle}
              src="/img/homeBg3.png"
              alt=""
            />
            <img
              className="absolute top-[20rem] left-10"
              style={imgStyle1}
              src="/img/homeBg4.png"
              alt=""
            />
            <img
              className="absolute top-[10rem] right-5"
              style={imgStyle1}
              src="/img/homeBg5.png"
              alt=""
            />
            <img
              className="absolute top-[30rem] right-40"
              src="/img/homeBg6.png"
              alt=""
            /> */}
          </div>

          <div className="absolute top-36 flex flex-col items-center justify-center w-full">
            <div className="flex flex-col gap-0 lg:gap-5 text-4xl md:text-6xl text-white font-bold">
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
            <div className="my-8">
              <button
                onClick={() => navigate("/about")}
                className="px-6 py-3 ring-2 ring-sky-600 rounded-full text-white hover:underline"
              >
                Read more about MAF Group
              </button>
            </div>
            <div className="text-xl cursor-pointer font-thin text-white">
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Middle One */}

        <div className="w-full md:h-[45vh] mt-20">
          <div className="relative px-3 md:px-0 flex h-full w-full flex-col sm:flex-row md:w-[90vw] md:flex-row lg:w-[80vw] mx-auto gap-4 justify-start md:items-start">
            <h2 className="hidden md:block absolute -left-12 md:-left-12 top-5 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
              WORK
            </h2>
            <h2 className="absolute underline underline-offset-8 md:hidden top-0 left-[40%] font-bold text-xl text-[#071b52] dark:text-rose-600">
              WORK
            </h2>
            <div className="one h-full shadow-lg align-top m-auto sm:w-full mt-20 md:mt-0">
              <img
                src="/img/w1.png"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <Link to="/blog1">
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Leveraging the power of a data to deliver business excellence
                </h2>
              </Link>
            </div>
            <div className="two h-full shadow-lg align-top m-auto sm:w-full">
              <img
                src="/img/w2.png"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <Link to={"/blog2"}>
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Boosting Marketing Efficiency by strategic transition
                </h2>
              </Link>
            </div>
            <div className="three h-full shadow-lg m-auto sm:w-full">
              <img
                src="/img/w3.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <Link to={"/blog3"}>
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Ensuring GDPR Compliance
                </h2>
              </Link>
            </div>
            <div className="four h-full shadow-lg m-auto sm:w-full">
              <img
                src="/img/revenue.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <Link to={"/blog4"}>
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Uplift revenue and implement real-time targeting in marketing
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:h-[45vh] mt-20">
          <div className="relative h-full w-full flex-col sm:flex-row md:w-[90vw] md:flex-row lg:w-[80vw] m-auto px-4 flex gap-4 justify-center md:items-start">
            <h2 className="hidden md:block absolute -left-12 md:-left-10 top-16 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
              BLOGS
            </h2>
            <h2 className="absolute underline underline-offset-8 md:hidden top-0 left-[40%] font-bold text-xl text-[#071b52] dark:text-rose-600">
              BLOGS
            </h2>
            <div className="shadow-lg h-full one m-auto sm:w-full mt-20 md:mt-0">
              <img
                src="/img/science.png"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <Link to="/blog1">
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Blog on Data Analytics
                </h2>
              </Link>
            </div>
            <div className="shadow-lg h-full two m-auto sm:w-full">
              <img
                src="/img/cloud4.png"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <Link to={"/blog2"}>
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  The Basics of Google Cloud
                </h2>
              </Link>
            </div>
            <div className="shadow-lg h-full three m-auto sm:w-full">
              <img
                src="/img/machine.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <Link to={"/blog3"}>
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Blogs on Marketing Automation
                </h2>
              </Link>
            </div>
            <div className="shadow-lg h-full four m-auto sm:w-full">
              <img
                src="/img/finalWord.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <Link to={"/blog4"}>
                <h2 className="px-2 text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Blogs on Digital Transformation
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative middle1 mt-16 md:mt-10">
          <h2 className="hidden md:block absolute md:left-10 top-16 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
            LATEST NEWS
          </h2>
          <h2 className="absolute underline underline-offset-8 md:hidden -top-10 bottom-20 left-[30%] font-bold text-xl text-[#071b52] dark:text-rose-600">
            LATEST NEWS
          </h2>
          <div className="w-full px-3 flex-col md:flex-row md:w-[70%] m-auto flex md:px-10 gap-10">
            <div className="left sm:w-[70%] sm:m-auto md:w-[60vw] lg:w-1/2 cursor-pointer">
              <div className="flex flex-col items-start w-full shadow-xl px-2 pb-3">
                <img
                  src="/img/work1.png"
                  className="w-full h-auto bg-cover object-cover bg-center"
                  alt=""
                />
                <h2 className="text-xl font-bold my-3 hover:underline text-[#071b52] dark:text-rose-600">
                  Using predictive-AI to reduce churn
                </h2>
                <p className="text-xl font-light">
                  The company used data intelligence and predictive AI to keep
                  more customers on board with rigorously tested brands,
                  reducing risk of them switching to potentially poorer-quality
                  alternatives....{" "}
                  <a
                    className="text-sky-600 underline"
                    onClick={() =>
                      openWebsite(
                        "https://dma.org.uk/awards/winner/2023-gold-customer-programme"
                      )
                    }
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Share */}

        {/* <div className="w-full mt-20 gradiant text-white py-10">
          <div className="relative flex-col items-center w-[70%] m-auto flex gap-5 sm:flex-row sm:gap-4 justify-center sm:items-start">
            <h2 className="absolute -rotate-90 -left-20 sm:-left-24 top-14 text-xl font-bold">
              INVESTORS
            </h2>
            <div className="left w-full flex flex-col gap-3 sm:gap-8">
              <h1 className="text-3xl sm:text-xl font-semibold">SHARE PRICE</h1>
              <div>
                <h3 className="text-gray-400 font-semibold">LSE</h3>
                <div className="flex gap-4 mt-1 items-center">
                  <h2 className="text-2xl font-normal">730.12 p</h2>
                  <h4 className="text-gray-400">-2.48</h4>
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 font-semibold">NYSE</h3>
                <div className="flex gap-4 mt-1 items-center">
                  <h2 className="text-2xl font-normal">$46.31</h2>
                  <h4 className="text-gray-400">-0.19</h4>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Data is deployed by 15 minutes
                </h2>
              </div>

              <div className="flex gap-2 items-center">
                <FaArrowRight className="text-gray-200" />
                <p className="text-gray-300 hover:underline cursor-pointer">
                  See full share price
                </p>
              </div>
            </div>
            <div className="middle w-full flex flex-col gap-5 sm:gap-8">
              <h1 className="text-3xl sm:text-xl font-semibold">RESOURCES</h1>
              <div>
                <h2 className="text-xl font-semibold">
                  Annual Reports & Accounts 2024
                </h2>
                <div className="mt-2 flex gap-1 items-center text-gray-400">
                  <FaLongArrowAltDown className="" />
                  <h3>PDF</h3>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  Sustainability Report 2022
                </h2>
                <div className="mt-2 flex gap-1 items-center text-gray-400">
                  <FaLongArrowAltDown className="" />
                  <h3>PDF</h3>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-0 sm:mt-[3.7rem]">
                <FaArrowRight className="text-gray-200" />
                <p className="text-gray-300 hover:underline cursor-pointer">
                  See more resources
                </p>
              </div>
            </div>
            <div className="right w-full flex flex-col gap-5 sm:gap-8">
              <h1 className="text-3xl sm:text-xl font-semibold">
                REGULATORY NEWS
              </h1>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400">12 jan 2024 - 12:45</span>
                <h2 className="text-xl font-semibold">
                  Notification of CMD and 2023 Preliminary Results
                </h2>
                <div className="flex gap-5 items-center">
                  <span className="flex gap-2 items-center">
                    <FaTags />
                    <h1 className="text-gray-400">Results</h1>
                  </span>
                  <span className="mt-2 flex gap-1 items-center text-gray-400">
                    <FaLongArrowAltDown className="" />
                    <h3>PDF</h3>
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-400">12 jan 2024 - 15:03</span>
                <h2 className="text-xl font-semibold">
                  Total Voting Rights and Capital
                </h2>
                <div className="flex gap-5 items-center">
                  <span className="flex gap-2 items-center">
                    <FaTags />
                    <h1 className="text-gray-400">Capital structure</h1>
                  </span>
                  <span className="mt-2 flex gap-1 items-center text-gray-400">
                    <FaLongArrowAltDown className="" />
                    <h3>PDF</h3>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FaArrowRight className="text-gray-200" />
                <p className="text-gray-300 hover:underline cursor-pointer">
                  See the latest investor news
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default Home;
