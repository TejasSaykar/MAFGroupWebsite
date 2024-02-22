import React from "react";
import Layout from "../components/Layout";

const Carrier = () => {
  return (
    <Layout title={"MAAF | Carrier"}>
      <div className="w-full mt-[4rem]">
        <div className="w-[90%] lg:w-[70%] m-auto py-5 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            Career Avenues
          </h1>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <div className="w-full order-2 md:order-1">
              <p className="font-light text-justify md:text-start">
                Embark on a transformative journey where your abilities are
                nurtured, talents are celebrated, and goals are realized. At
                MAF, we bring together top-notch resources, cutting-edge
                technology and a creative environment that encourages you to
                pave your own path to professional success.
              </p>
              <div className="flex flex-col mt-4">
                <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
                  Why Choose MAF Group?
                </h2>
                <p className="font-light text-justify md:text-start">
                  Choosing MAF is not about opting for just a job, it is about
                  paving the way for a fulfilling career that promises unlimited
                  opportunities, collaborating with innovative thinkers and
                  challenging yourself to global problems. Here we encourage you
                  to push yourself beyond your capabilities and act as catalyst
                  for your professional and personal growth. Here, Sky is the
                  limit!
                </p>
              </div>
            </div>
            <div className="w-full order-1 md:order-2 my-auto">
              <img src="/img/career.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              Crafting Extraordinary Careers
            </h2>
            <p className="font-light text-justify md:text-start">
              At our organization we realize that excellence is not a
              destination but a continuous journey that we embark on. We make
              that journey more fruitful and enjoyable by meticulously crafting
              an environment where we encourage you to bring your unique
              perspective to the table, experiment across various disciplines
              and empower you to enlarge your skill sets to create a career path
              that instills pride and confidence in you!
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              Unleash Your Potential
            </h2>
            <p className="font-light text-justify md:text-start">
              Your career at MAF Group is not a predetermined path, it is a
              canvas waiting for you to create something extraordinary. Unlock
              your full potential by exploring the wide array of roles that
              align with your passion, skills and become a valued member of the
              dynamic community. <br />
              Thrive, explore, excel and exceed expectations by reshaping your
              career path and your professional future and become a beacon of
              success!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Carrier;
