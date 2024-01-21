import React from "react";
import Layout from "../components/Layout";
import { FaArrowRight } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { SlClock } from "react-icons/sl";
import { LiaClipboardListSolid } from "react-icons/lia";

const About = () => {
  return (
    <Layout title={"About | MAF"} description={"This is the about page"}>
      <div className="mt-[4rem] w-full">
        <div className="relative top gradiant w-full">
          <img src="/img/aboutBg.png" alt="" />
          <div className="absolute top-[7rem] px-16 text-white flex justify-between items-center gap-28">
            <div className="left w-full">
              <h2 className="text-5xl font-bold capitalize">
                We are your transformation journey partner
              </h2>
              <p className="text-2xl font-thin mt-4">
                We analyze, digitize and automate your business through smart
                data-driven decisions by leveraging our decades long experience
                to boost productivity and achieve organizational excellence.
              </p>
            </div>
            <div className="right w-1/2">
              <p className="text-xl font-light text-md">
                "The ‘new normal’ is yet to be defined; creativity has the power
                to ensure that what comes next is better than what came before"
              </p>
              <span>
                <h3 className="text-xl font-semibold mt-6">Mark Read CBE</h3>
                <h4 className="text-lg font-light">Chief Executive Officer</h4>
              </span>
            </div>
          </div>
        </div>

        {/* First */}

        <div className="first w-full mt-10">
          <div className="w-[80%] m-auto">
            <img src="/img/aboutBg.png" className="" alt="" />
          </div>

          <div className="w-1/2 m-auto my-6">
            <h2 className="text-3xl font-semibold">
              <span className="text-2xl text-purple-500 font-bold">"</span>{" "}
              Setup your business for unparalleled success by navigating complex
              data landscapes with precision. We are experts in formulating
              clear, actionable strategies that position your business
              strategically to achieve optimal outcomes.
              <span className="text-3xl text-purple-500 font-bold">"</span>
            </h2>
            <h4 className="text-xl mt-3 font-medium">ROB REILLY --</h4>
            <p className="text-md font-thin">
              Global Chief Creative Officer, WPP --
            </p>
          </div>
        </div>

        {/* Second */}

        <div className="second w-full mt-10">
          <div className="w-full flex px-14 items-start justify-center gap-20">
            <div className="left h-auto my-auto">
              <img src="/img/homeImg4.jpg" alt="" className="object-cover" />
            </div>
            <div className="right flex flex-col gap-8 w-full my-auto">
              <h1 className="text-4xl font-bold text-[#071b52]">
                Building Digitization Dynamics
              </h1>
              <p className="text-xl font-thin">
                Revolutionize your business with expert digitization services
                that foster sustainable growth in the dynamic digital landscape.
                Create a pathway for operational excellence in the ever-evolving
                marketplace by implementing solutions that drive major impact.
              </p>
              <span className="flex gap-2 items-center text-sm font-thin">
                <FaArrowRight />
                <h4>
                  Find out more about our approach to people and culture --
                </h4>
              </span>
            </div>
          </div>
        </div>

        {/* Third */}

        <div className="third w-full mt-20">
          <div className="w-[90%] mx-28 flex gap-5 items-start justify-center">
            <div className="one w-full">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678]">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
            <div className="four w-full px-10">
              <div className="flex gap-3 items-center text-3xl font-bold text-[#2c0678] mb-3">
                <LiaClipboardListSolid />
                <h2>33,000+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold w-1/2 ml-10">
                Technology accreditations earned by our people
              </h2>
            </div>
          </div>
        </div>

        {/* Fourth */}

        <div className="second w-full mt-20 bg-green-50">
          <div className="w-full flex px-14 items-start justify-center gap-20">
            <div className="right flex flex-col gap-8 my-auto">
              <h1 className="text-4xl font-bold text-[#071b52]">
                Automation mastery
              </h1>
              <p className="text-xl font-thin">
                Our automation mastery helps unlock seamless operations and
                systems that require little to no attention. Meticulously
                orchestrate processes, reduce manual intervention and facilitate
                your business to operate with maximum efficiency and precision.
              </p>
              <span className="flex gap-2 items-center text-sm font-thin">
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
            <div className="left w-full h-auto">
              <img src="/img/homeImg3.jpg" alt="" className="aspect-square object-cover" />
            </div>
          </div>
        </div>

        {/* Fifth */}

        <div className="third w-full mt-20">
          <div className="w-[80%] m-auto flex gap-5 items-start justify-center">
            <div className="one w-full">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678]">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sixth */}

        <div className="second w-full mt-10">
          <div className="w-full flex px-14 items-start justify-center gap-20">
            <div className="left w-full h-auto my-auto">
              <img src="/img/homeImg4.jpg" alt="" className="aspect-square object-cover" />
            </div>
            <div className="right flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-[#071b52]">
                Data analytics
              </h1>
              <p className="text-xl font-thin">
                We reveal the narrative behind the numbers – creating order out
                of chaos! Empower yourself with informed decision-making and
                strategic planning that is guided by data analysis.
              </p>
              <h1 className="text-4xl font-bold text-[#071b52]">
                Cloud solutions
              </h1>
              <p className="text-xl font-thin">
                We make technological marvels become everyday realities by
                unleashing the power of Cloud! Build scalable and flexible
                infrastructure to support and boost your development towards
                your business objectives by harnessing Cloud solutions.
              </p>
              <span className="flex gap-2 items-center text-sm font-thin">
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
          </div>
        </div>

        {/* Seventh */}

        <div className="third w-full mt-20">
          <div className="w-[80%] m-auto flex gap-5 items-start justify-center">
            <div className="one w-full">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678]">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Eighth */}

        <div className="second w-full mt-20 bg-green-50">
          <div className="w-full flex px-14 items-start justify-center gap-20">
            <div className="right flex flex-col gap-8">
              <h1 className="text-4xl font-bold text-[#071b52]">
                Marketing automation
              </h1>
              <p className="text-xl font-thin">
                We automate success in every marketing venture from clicks to
                conversions! Improve efficiency and effectiveness by
                streamlining, automating and capitalizing on your marketing
                processes.
              </p>
              <h1 className="text-4xl font-bold text-[#071b52]">
                Digital transformation
              </h1>
              <p className="text-xl font-thin">
                Reign the digital age by reimagining and reshaping the way you
                conduct business! Our expert team can guide you to embrace
                innovation, adapt to change and stay ahead of the competition in
                today’s competitive business landscape.
              </p>
              <span className="flex gap-2 items-center text-sm font-thin">
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
            <div className="left w-full h-full my-auto">
              <img src="/img/homeImg3.jpg" className="aspect-square object-cover" alt="" />
            </div>
          </div>
        </div>

        {/* Ninth */}

        <div className="third w-full mt-20">
          <div className="w-[90%] mx-28 flex gap-5 items-start justify-center">
            <div className="one w-full">
              <div className="flex gap-3 items-center text-3xl text-[#2c0678] font-bold">
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-12 mt-4">
                People
              </h2>
            </div>
            <div className="two w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678]">
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                Countries
              </h2>
            </div>
            <div className="three w-full">
              <div className="flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3">
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className="text-xl text-[#2c0678] font-bold ml-10 mt-4">
                  Women in executive leadership roles
                </h2>
                <span className="text-xl font-light text-[#2c0678] ml-10 mt-4">
                  (2021: 39%)
                </span>
              </div>
            </div>
            <div className="four w-full px-10">
              <div className="flex gap-3 items-center text-3xl font-bold text-[#2c0678] mb-3">
                <LiaClipboardListSolid />
                <h2>33,000+</h2>
              </div>
              <h2 className="text-xl text-[#2c0678] font-bold w-1/2 ml-10">
                Technology accreditations earned by our people
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
