import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title={"About | MAF"} description={"This is the about page"}>
      <div className="mt-[4rem] w-full">
        <div className="relative top w-full h-[90vh] sm:h-[80vh]">
          <img
            src="/img/about.jpg"
            className="w-full object-cover bg-center bg-cover h-full"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute flex-col inset-0 top-[2rem] md:top-0 px-5 md:px-16 text-white flex lg:flex-row lg:justify-between items-center gap-4 lg:gap-28">
            <div className="left w-full">
              <h2 className="text-3xl lg:text-5xl text-start font-bold capitalize">
                We are your transformation journey partner !
              </h2>
              <p className="text-lg text-justify lg:text-xl font-thin mt-2">
                We analyze, digitize and automate your business through smart
                data-driven decision by leveraging our decades long experience
                to boost productivity and achieve organizational excellence.
              </p>
            </div>
            <div className="right w-full lg:w-1/2">
              <p className="text-justify hidden md:block text-xl font-light text-md">
                "The ‘new normal’ is yet to be defined; creativity has the power
                to ensure that what comes next is better than what came before"
              </p>
              <span className="">
                <h3 className="text-xl font-semibold mt-6">Manohar Anumolu</h3>
                <h4 className="text-lg font-light">Director</h4>
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-[90%] mx-auto">
          <div className="second w-full mt-10 mb-4">
            <div className="w-full flex-col md:flex-row flex px-5 md:px-14 items-center justify-start gap-3">
              <div className="left h-auto md:my-auto order-1 md:order-2">
                <img
                  src="/img/data2.png"
                  alt=""
                  className="object-cover aspect-video md:w-2/3 mx-auto"
                />
              </div>
              <div className="w-full right flex flex-col order-2 md:order-1">
                <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                  Precision analytics
                </h1>
                <p className="text-justify font-thin mx-auto mt-2">
                  Setup your business for unparalleled success by navigating
                  complex data landscapes with precision. We are experts in
                  formulating clear, actionable strategies that position your
                  business strategically to achieve optimal outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="second w-full mt-5 md:mt-12">
            <div className="w-full flex-col md:flex-row flex px-5 md:px-14 items-start justify-start gap-3">
              <div className="left h-auto md:my-auto">
                <img
                  src="/img/about1.png"
                  alt=""
                  className="object-cover aspect-video md:w-2/3 mx-auto"
                />
              </div>
              <div className="w-full right flex flex-col">
                <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                  Building Digitization Dynamics
                </h1>
                <p className="text-justify font-thin mx-auto mt-2">
                  Revolutionize your business with expert digitization services
                  that foster sustainable growth in the dynamic digital
                  landscape. Create a pathway for operational excellence in the
                  ever-evolving marketplace by implementing solutions that drive
                  major impact.
                </p>
              </div>
            </div>
          </div>

          {/* Third */}

          <div className="second w-full mt-12 md:mt-8">
            <div className="w-full flex-col flex gap-5 lg:flex-row px-4 md:px-14 items-start justify-start">
              <div className="right order-2 lg:order-1 flex flex-col  w-full">
                <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                  Automation mastery
                </h1>
                <p className="text-justify font-thin mt-2">
                  Our automation mastery helps unlock seamless operations and
                  systems that require little to no attention. Meticulously
                  orchestrate processes, reduce manual intervention and
                  facilitate your business to operate with maximum efficiency
                  and precision.
                </p>
              </div>
              <div className="left order-1 lg:order-2 w-full h-auto my-auto">
                <img
                  src="/img/about2.png"
                  alt=""
                  className="object-cover aspect-video md:w-2/3 mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Fifth */}

          <div className="second w-full mt-12 md:mt-5">
            <div className="w-full flex-col flex px-5 lg:flex-row md:px-14 items-center justify-center gap-3">
              <div className="left w-full h-auto">
                <img
                  src="/img/cs3.png"
                  alt=""
                  className="object-cover aspect-video md:w-2/3 mx-auto"
                />
              </div>
              <div className="right flex flex-col w-full">
                <h2 className="mt-5 text-3xl text-center font-bold text-[#071b52]">
                  Our Services
                </h2>

                <h1 className="text-xl mt-2 font-bold text-[#071b52] dark:text-rose-600">
                  Data analytics
                </h1>
                <p className="text-justify font-thin">
                  We reveal the narrative behind the numbers – creating order
                  out of chaos! Empower yourself with informed decision-making
                  and strategic planning that is guided by data analysis.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 px-5 md:px-0 md:w-[90%] mx-auto mt-12 md:mt-5">
            <div className="w-full order-2 md:order-1">
              <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                Cloud solutions
              </h1>
              <p className="text-justify font-thin">
                We make technological marvels become everyday realities by
                unleashing the power of Cloud! Build scalable and flexible
                infrastructure to support and boost your development towards
                your business objectives by harnessing Cloud solutions.
              </p>
            </div>
            <div className="w-full order-1 md:order-2">
              <img src="/img/cs1.png" className="md:w-1/2 mx-auto" alt="" />
            </div>
          </div>

          {/* Seventh */}

          <div className="second w-full mt-12 md:mt-5">
            <div className="w-full flex-col lg:flex-row flex px-4 md:px-14 items-start justify-start gap-4 md:gap-20">
              <div className="right w-full flex flex-col order-2">
                <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                  Digital transformation
                </h1>
                <p className="text-justify font-thin mt-2">
                  Reign the digital age by reimagining and reshaping the way you
                  conduct business! Our expert team can guide you to embrace
                  innovation, adapt to change and stay ahead of the competition
                  in today’s competitive business landscape.
                </p>
              </div>
              <div className="left w-full order-1">
                <img
                  src="/img/ma2.png"
                  className="object-cover aspect-video md:w-2/3 mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-12 md:mt-5 md:flex-row items-center px-5 md:px-0 gap-4 md:w-[90%] mx-auto">
            <div className="w-full order-2 md:order-1">
              <h1 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                Marketing automation
              </h1>
              <p className="text-justify font-thin mt-2">
                We automate success in every marketing venture from clicks to
                conversions! Improve efficiency and effectiveness by
                streamlining, automating and capitalizing on your marketing
                processes.
              </p>
            </div>
            <div className="w-full order-1 md:order-2">
              <img
                src="/img/ma3.png"
                className="object-cover aspect-video md:w-1/2 mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
