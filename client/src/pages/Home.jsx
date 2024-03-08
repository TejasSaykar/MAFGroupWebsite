import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Layout from "../components/Layout";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 400, // Adjust the speed for smooth scrolling
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Disable autoplay
    prevArrow: null, // Hides the previous arrow
    nextArrow: null, // Hides the next arrow
    // autoplaySpeed: 80,
    responsive: [
      {
        breakpoint: 500, // Adjust the breakpoint according to your design
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint according to your design
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show on larger screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const imgStyle = {
  //   transform: `translateY(-${scrollY}px)`,
  //   transition: "transform 0.3s ease-out",
  // };

  // const imgStyle1 = {
  //   transform: `translateY(${10}px)`,
  //   transition: "transform 0.3s ease-out",
  // };

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
          <div className="hidden md:block relative w-full h-screen">
            <img
              src="/img/home-background2-min.jpg"
              className="w-full object-cover h-screen"
              alt=""
            />
          </div>
          <div className="md:hidden relative w-full h-screen">
            <img
              src="/img/mobilebg.jpg"
              className="w-full object-cover h-screen"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bottom-"></div>
          <div className="absolute md:bottom-10 top-[15rem] md:top-[16rem] md:right-[16rem] flex flex-col items-center justify-center w-full">
            {/* <div className="flex flex-col gap-0 lg:gap-3 text-4xl md:text-6xl text-white font-bold">
              <h1
                className="text-center outline"
                style={{
                  fontFamily: "sans-serif",
                  textShadow: "1px 1px black",
                }}
              >
                We Are{" "}
                <span
                  className="text-white"
                  style={{ textShadow: "1px 1px black" }}
                >
                  Your Transformation
                </span>
              </h1>
              <h1
                className="text-center outline"
                style={{
                  fontFamily: "sans-serif",
                  textShadow: "1px 1px black",
                }}
              >
                <span
                  className="text-white"
                  style={{ textShadow: "1px 1px black" }}
                >
                  Journey
                </span>{" "}
                Partner
              </h1>
            </div> */}
            {/* <div className="w-full px-5 md:w-1/3 text-white text-center mt-10 text-lg lg:text-xl">
              <h3 style={{ textShadow: "1px 1px black" }}>
                Using the power of creativity to build better futures for our
                people, planet, clients and communities
              </h3>
            </div> */}
            <div className="flex flex-row md:flex-col gap-2 items-center md:gap-2">
              <div className="text-sm md:text-xl flex flex-col justify-center items-center cursor-pointer font-thin text-white">
                <Link
                  to={"/request"}
                  className="text-sm md:text-xl text-white font-medium ring-1 bg-[#e91a1f] py-4 md:px-16 px-3 rounded-full hover:text-black hover:bg-transparent hover:ring-[#e91a1f] hover:ring-2"
                >
                  Request a Demo
                </Link>
              </div>
              <div className="my-5 md:my-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="md:px-6 px-3 text-sm md:text-lg py-3 ring-2 ring-[#e91a1f] rounded-full text-black hover:underline font-medium"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle One */}

        <div className="w-full md:h-[100%] sm:h-[100%] lg:h-[80vh] mt-5 py-10 md:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 md:px-0 h-full w-full md:w-[90vw] md:flex-row lg:w-[80vw] mx-auto gap-4 md:items-start">
            {/* <h2 className="hidden md:block absolute -left-12 md:-left-12 top-5 font-bold text-xl -rotate-90 text-[#071b52] dark:text-rose-600">
              WORK
            </h2>
            <h2 className="absolute underline underline-offset-8 md:hidden top-0 left-[40%] font-bold text-xl text-[#071b52] dark:text-rose-600">
              WORK
            </h2> */}
            <div className="one h-full align-top m-auto sm:w-full  md:mt-0">
              <img
                src="/img/case1.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover rounded-lg aspect-video sm:aspect-square"
                alt=""
              />

              <h2
                onClick={() => navigate("/case1")}
                className="px-2 hover:underline cursor-pointer text-base font-bold mt-3 text-[#072b52]"
              >
                Transforming Digital Landscape: A Comprehensive Case Study in
                Retail Industry
              </h2>
              {/* <p className="px-2 font-normal mt-1 dark:text-rose-600">
                Google Marketing Platform, Adobe Marketing Platform,...
                <Link to={"/case1"} className="text-sky-700 pl-1 underline">
                  more
                </Link>
              </p> */}
            </div>
            <div className="two h-full align-top md:mt-0 sm:w-full">
              <img
                src="/img/case2.jpg"
                className="h-auto sm:w-full bg-cover bg-center object-cover rounded-lg aspect-video sm:aspect-square"
                alt=""
              />
              <h3
                onClick={() => navigate("/case2")}
                className="px-2 text-base font-bold mt-3 hover:underline cursor-pointer text-[#071b52] dark:text-rose-600"
              >
                Strategic Transition to Enhance Marketing Efficiency in the
                Banking Sector
              </h3>
              {/* <p className="px-2 font-normal mt-1">
                {" "}
                Keeping their goals in mind, we strategized to seamlessly
                transfer their data ...{" "}
                <Link className="text-sky-700 pl-1 underline" to={"/case2"}>
                  more
                </Link>
              </p> */}
            </div>
            <div className="three h-full mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/case3.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-lg bg-center aspect-video sm:aspect-square"
                alt=""
              />
              <h2
                onClick={() => navigate("/case3")}
                className="px-2 text-base font-bold mt-3 hover:underline cursor-pointer text-[#071b52] dark:text-rose-600"
              >
                Ensuring GDPR compliance and a risk-free strategy implementation
              </h2>
              {/* <p className="px-2 font-normal mt-1">
                Like every project, we started this with a comprehensive
                assessment of our...
                <Link to={"/case3"} className="text-sky-700 pl-1 underline">
                  more
                </Link>
              </p> */}
            </div>
            <div className="four h-full mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/case4.jpg"
                className="h-auto sm:w-full bg-contain object-cover rounded-lg bg-center aspect-video sm:aspect-square"
                alt=""
              />
              <h2
                onClick={() => navigate("/case4")}
                className="px-2 text-base font-bold mt-3 hover:underline cursor-pointer text-[#071b52] dark:text-rose-600"
              >
                Driving Revenue Uplift and Real-Time Targeting in Banking
                Industry
              </h2>
              {/* <p className="px-2 mt-1">
                As an initial step, we strategically deployed Tealium
                Audience...
                <Link className="text-sky-700 pl-1 underline" to={"/case4"}>
                  more
                </Link>
              </p> */}
            </div>
          </div>
        </div>

        <div className="w-[90%] h-[200px] sm:mb-20 mx-auto">
          <h2 className="text-center text-[#071b52] pb-6 text-3xl font-semibold">
            Our Clients
          </h2>
          <Slider {...settings}>
            <div className="pl-4 w-full">
              <img
                src="/img/ITC.png"
                className="aspect-video h-[100px]"
                alt=""
              />
            </div>
            <div className="pl-4 w-full">
              <img
                src="/img/bourne.png"
                className="aspect-video h-[100px]"
                alt=""
              />
            </div>
            {/* <div className="pl-4 w-full">
              <img
                src="/img/hsbc1.png"
                className="aspect-video h-[100px]"
                alt=""
              />
            </div> */}
            <div className="pl-4 w-full">
              <img
                src="/img/dia.png"
                className="aspect-video h-[100px]"
                alt=""
              />
            </div>
            <div className="pl-4 w-full">
              <img
                src="/img/lakeland.png"
                className="object-cover aspect-video h-[100px]"
                alt=""
              />
            </div>
            {/* <div className="pl-4 w-full">
              <img
                src="/img/mphasis.jpg"
                className="aspect-video md:h-[150px]"
                alt=""
              />
            </div> */}
            <div className="pl-4 w-full">
              <img src="/img/bat.png" className="px-4 h-1/2" alt="" />
            </div>
            <div className="pl-4 w-full">
              <img
                src="/img/levis.png"
                className="aspect-video h-[100px]"
                alt=""
              />
            </div>
          </Slider>
        </div>

        {/* <div className="w-full md:h-[45vh] mt-10 md:mt-20">
          <div className="relative h-full w-full flex-col sm:flex-row md:w-[90vw] md:flex-row lg:w-[80vw] m-auto px-4 flex gap-4 justify-center md:items-start">
            <h2 className="hidden md:block absolute -left-12 md:-left-13 top-16 font-bold text-base -rotate-90 text-[#071b52] dark:text-rose-600">
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
              <h2
                onClick={() => navigate("/data_analytics")}
                className="px-2 text-xl cursor-pointer font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600"
              >
                18 Intriguing Facts About Data Analytics That You Cannot Afford
                To Miss
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
              <h2
                onClick={() => navigate("/cloud_solution")}
                className="px-2 text-xl font-bold mt-4 cursor-pointer hover:underline text-[#071b52] dark:text-rose-600"
              >
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
              <h2
                onClick={() => navigate("/marketing_automation")}
                className="px-2 text-xl font-bold mt-4 cursor-pointer hover:underline text-[#071b52] dark:text-rose-600"
              >
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
              <h2
                onClick={() => navigate("/digital_transformation")}
                className="px-2 text-xl font-bold mt-4 cursor-pointer hover:underline text-[#071b52] dark:text-rose-600"
              >
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
        </div> */}

        {/* <div className="relative middle1 mt-16 md:mt-32">
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
                <h2
                  onClick={() =>
                    openWebsite(
                      "https://dma.org.uk/awards/winner/2023-gold-customer-programme"
                    )
                  }
                  className="text-xl hover:underline cursor-pointer font-semibold my-3 px-2 text-[#071b52] dark:text-rose-600"
                >
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
        </div> */}
      </Layout>
    </>
  );
};

export default Home;
