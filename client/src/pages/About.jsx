import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title={"About | MAF"} description={"This is the about page"}>
      <div className="mt-[4rem] w-full">
        <div className="relative top gradiant w-full h-[80vh] sm:h-[90vh]">
          <img
            src="/img/about.jpg"
            className="w-full object-cover bg-center bg-cover h-full"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute flex-col inset-0 top-[2rem] px-5 md:px-16 text-white flex lg:flex-row lg:justify-between items-center gap-10 lg:gap-28">
            <div className="left w-full">
              <h2 className="text-4xl lg:text-5xl text-start font-bold capitalize">
                We are your transformation journey partner
              </h2>
              <p className="text-lg lg:text-2xl font-thin mt-14 md:mt-4">
                We analyze, digitize and automate your business through smart
                data-driven decisions by leveraging our decades long experience
                to boost productivity and achieve organizational excellence.
              </p>
            </div>
            <div className="hidden md:block right w-full lg:w-1/2">
              <p className="text-xl font-light text-md">
                "The ‘new normal’ is yet to be defined; creativity has the power
                to ensure that what comes next is better than what came before"
              </p>
              <span className="hidden md:block">
                <h3 className="text-xl font-semibold mt-6">Manohar Anumolu</h3>
                <h4 className="text-lg font-light">Director</h4>
              </span>
            </div>
          </div>
        </div>

        {/* First */}

        <div className="first w-full mt-10">
          <div className="w-full">
            {/* <img src="/img/aboutBg.png" className="object-cover" alt="" /> */}
          </div>

          <div className="w-full px-5 text-center sm:text-start md:px-0 sm:w-1/2 m-auto my-16">
            <h2 className="text-xl sm:text-3xl font-semibold">
              <span className="text-2xl text-purple-500 font-bold">"</span>{" "}
              Setup your business for unparalleled success by navigating complex
              data landscapes with precision. We are experts in formulating
              clear, actionable strategies that position your business
              strategically to achieve optimal outcomes.
              <span className="text-3xl text-purple-500 font-bold">"</span>
            </h2>
            {/* <h4 className="text-xl mt-3 font-medium">ROB REILLY --</h4>
            <p className="text-md font-thin">
              Global Chief Creative Officer, mafgroup --
            </p> */}
          </div>
        </div>

        {/* Second */}

        <div className="second w-full mt-14">
          <div className="w-full flex-col md:flex-row flex px-5 md:px-14 items-start justify-center gap-3 sm:gap-10 md:gap-20">
            <div className="left h-auto md:my-auto">
              <img src="/img/about1.png" alt="" className="object-cover" />
            </div>
            <div className="right flex flex-col gap-2 lg:gap-5 md:gap-8 w-full my-auto">
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#071b52] dark:text-rose-600">
                Building Digitization Dynamics
              </h1>
              <p className="text-lg md:text-xl font-thin">
                Revolutionize your business with expert digitization services
                that foster sustainable growth in the dynamic digital landscape.
                Create a pathway for operational excellence in the ever-evolving
                marketplace by implementing solutions that drive major impact.
              </p>
            </div>
          </div>
        </div>

        {/* Third */}

        {/* <div className="hidden md:block third w-full mt-20">
          <div className="w-full flex-col md:flex-row mx-5 md:w-[90%] md:mx-28 flex gap-5 items-start justify-center">
            <div className="one w-full flex items-center pl-10 md:flex-col md:pl-0">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] dark:text-rose-600 font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two flex md:flex-col pl-10 items-center md:pl-0 w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600 mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className="text-lg text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] dark:text-rose-600 ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
            <div className="four flex flex-wrap md:flex-col w-full px-10">
              <div className="flex gap-3 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600 mb-3">
                <LiaClipboardListSolid />
                <h2>33,000+</h2>
              </div>
              <h2 className="text-lg md:text-xl text-[#2c0678] dark:text-rose-600 font-bold w-full md:w-1/2 ml-10">
                Technology accreditations earned by our people
              </h2>
            </div>
          </div>
        </div> */}

        {/* Fourth */}

        <div className="second w-full mt-10">
          <div className="w-full flex-col flex gap-5 lg:flex-row px-4 md:px-14 items-start justify-center lg:gap-20">
            <div className="right order-2 lg:order-1 flex flex-col gap-3 lg:gap-8 my-auto w-full">
              <h1 className="text-2xl md:text-4xl font-bold text-[#071b52] dark:text-rose-600">
                Automation mastery
              </h1>
              <p className="text-lg md:text-xl font-thin">
                Our automation mastery helps unlock seamless operations and
                systems that require little to no attention. Meticulously
                orchestrate processes, reduce manual intervention and facilitate
                your business to operate with maximum efficiency and precision.
              </p>
            </div>
            <div className="left order-1 lg:order-2 w-full h-auto my-auto">
              <img src="/img/about2.png" alt="" className="object-cover" />
            </div>
          </div>
        </div>

        {/* Fifth */}

        {/* <div className="third w-full mt-20">
          <div className="flex-col w-full pl-10 md:w-[80%] md:flex-row m-auto flex gap-5 items-start justify-center">
            <div className="one flex md:flex-col items-center w-full">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] dark:text-rose-600 font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two flex md:flex-col items-center w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600 mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] dark:text-rose-600 ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Sixth */}

        <div className="second w-full mt-5">
          <div className="w-full flex-col flex px-5 lg:flex-row md:px-14 items-center justify-center gap-3 lg:gap-20">
            <div className="left w-full h-auto my-auto">
              <img src="/img/cs3.png" alt="" className="object-cover" />
            </div>
            <div className="right flex flex-col gap-3 lg:gap-8 w-full">
              <h1 className="text-2xl md:text-4xl font-bold text-[#071b52] dark:text-rose-600">
                Data analytics
              </h1>
              <p className="text-lg md:text-xl font-thin">
                We reveal the narrative behind the numbers – creating order out
                of chaos! Empower yourself with informed decision-making and
                strategic planning that is guided by data analysis.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 px-5 md:px-0 md:w-[90%] mx-auto mt-5">
          <div className="w-full order-2 md:order-1">
            <h1 className="text-2xl md:text-4xl font-bold text-[#071b52] dark:text-rose-600">
              Cloud solutions
            </h1>
            <p className="text-lg md:text-xl font-thin py-3">
              We make technological marvels become everyday realities by
              unleashing the power of Cloud! Build scalable and flexible
              infrastructure to support and boost your development towards your
              business objectives by harnessing Cloud solutions.
            </p>
          </div>
          <div className="w-full order-1 md:order-2">
            <img src="/img/cs1.png" alt="" />
          </div>
        </div>

        {/* Seventh */}

        {/* <div className="third w-full mt-20">
          <div className="w-[80%] m-auto flex-col md:flex-row mb-10 flex gap-5 items-start justify-center">
            <div className="one w-full flex items-center md:flex-row">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] dark:text-rose-600 font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two w-full flex items-center md:flex-row">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600 mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] dark:text-rose-600 ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Eighth */}

        <div className="second w-full mt-10 md:mt-5">
          <div className="w-full flex-col lg:flex-row flex px-4 md:px-14 items-start justify-center gap-4 md:gap-20">
            <div className="right w-full flex flex-col gap-4 lg:gap-8 order-2">
              <h1 className="text-2xl md:text-4xl font-bold text-[#071b52] dark:text-rose-600">
                Digital transformation
              </h1>
              <p className="text-xl font-thin">
                Reign the digital age by reimagining and reshaping the way you
                conduct business! Our expert team can guide you to embrace
                innovation, adapt to change and stay ahead of the competition in
                today’s competitive business landscape.
              </p>
            </div>
            <div className="left w-full h-full my-auto order-1">
              <img src="/img/ma2.png" className="object-cover" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 md:mt-5 md:flex-row items-center px-5 md:px-0 gap-4 md:w-[90%] mx-auto">
          <div className="w-full order-2 md:order-1">
            <h1 className="text-2xl md:text-4xl font-bold text-[#071b52] dark:text-rose-600">
              Marketing automation
            </h1>
            <p className="text-xl font-thin py-3">
              We automate success in every marketing venture from clicks to
              conversions! Improve efficiency and effectiveness by streamlining,
              automating and capitalizing on your marketing processes.
            </p>
          </div>
          <div className="w-full order-1 md:order-2">
            <img src="/img/ma3.png" alt="" />
          </div>
        </div>

        {/* Ninth */}

        {/* <div className="third w-full mt-20">
          <div className="w-[80%] m-auto flex-col md:flex-row mb-10 flex gap-5 items-start justify-center">
            <div className="one w-full flex md:flex-row items-center">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] dark:text-rose-600 font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two w-full flex items-center md:flex-row">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] dark:text-rose-600 mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl text-[#2c0678] dark:text-rose-600 font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] dark:text-rose-600 ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default About;
