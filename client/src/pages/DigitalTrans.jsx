import React from "react";
import Layout from "../components/Layout";

const DigitalTrans = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[70vh] top">
          <img
            src="/img/digitalTrans.webp"
            className="w-full h-full bg-center bg-cover object-cover aspect-video"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-30"></div>
          <div class="absolute w-full inset-0 bottom-0 flex items-center justify-between text-white px-16">
            {/* <p className="text-4xl text-white font-thin">
              Digital transformation is a business's way of saying bye to the
              old and exploring the new by building, designing and scaling every
              part of your business while seamlessly integrating it with
              technology. From strategy to execution, you get the best partners
              every step of the way.
            </p> */}
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="m-auto py-9 bg-sky-50">
            <h5 className="text-xl font-light w-1/2 m-auto">
              Digital transformation is a business's way of saying bye to the
              old and exploring the new by building, designing and scaling every
              part of your business while seamlessly integrating it with
              technology. From strategy to execution, you get the best partners
              every step of the way.
            </h5>
          </div>

          <div className="w-full mt-10">
            <div className="w-[80%] m-auto flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">
                  Why Digital Transformation is Essential and How MAF Group
                  Helps?
                </h2>
                <p className="text-xl font-light">
                  About 5 billion people, or 63% of the world's population, use
                  the internet today. You need to make your business, no matter
                  how small or big, digitally deft for which you need bold
                  ambition and perfect execution. MAF Group can help with both.
                  We partner up with you to develop atransformative digital
                  business that keeps up with the trends.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">
                  Achieve Excellence at Every Step4
                </h2>
                <p className="text-xl font-light">
                  With MAF Group, you can achieve excellence at every step.
                  Whether you want to launch new digital ventures or make every
                  aspect of your business digital-friendly, you can count on us
                  to take care of everything from planning to execution.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">
                  Identify the Gaps
                </h2>
                <p className="text-xl font-light">
                  Using our advanced tools and technologies, we gauge the
                  current level of your organization's digital maturity and
                  understand the strong areas and the weak points.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">
                  Craft a Digital Strategy
                </h2>
                <p className="text-xl font-light">
                  You can trust our team to craft a digital strategy after
                  analysing your existing business and hope for the future. The
                  strategies we create can produce results today and make you
                  more flexible to adopt a truly digital future. We focus on
                  emerging innovations that will shape your industry even twenty
                  years from now.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">
                  A New Business Model
                </h2>
                <p className="text-xl font-light">
                  After crafting a digital strategy, we focus on exploiting
                  digital technologies and supporting capabilities to ensure the
                  creation of a robust new digital business model.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">Enablers</h2>
                <p className="text-xl font-light">
                  The focus then shifts to key enablers of digital
                  transformation. The ABCDE includes Agile Organizations,
                  Business Model Innovations, Consumer Centricity, Data-Driven,
                  and Exponential Bets.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 style={{fontFamily: "sans-serif"}} className="text-3xl font-bold text-[#071b52]">Delivery</h2>
                <p className="text-xl font-light">
                  The final stage of digital transformation is delivery. We
                  combine our expertise with tools, techniques, and third-party
                  capabilities that will turn the digital vision into reality.
                  Our experts, including designers, developers, engineers, data
                  scientists, and business gurus, will use their experience to
                  deliver exactly what you need and expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DigitalTrans;
