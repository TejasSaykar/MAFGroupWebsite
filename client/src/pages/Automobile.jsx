import React from "react";
import Layout from "../components/Layout";

const Automobile = () => {
  return (
    <Layout title={"MAF | Automobile"}>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[70vh]">
          <img
            src="/img/automobile1.jpg"
            className="w-full h-full object-cover bg-cover"
            alt=""
          />
          <div className="absolute w-full inset-0 bottom-0 bg-black opacity-60"></div>
          <div className="absolute w-full inset-0 flex items-center justify-center">
            <h2 className="text-5xl sm:text-6xl font-bold text-white">
              Automobile
            </h2>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="w-[80%] m-auto flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full">
                <p className="text-xl font-light">
                  The landscape of the automobile industry is evolving, fuelled
                  by the changing circumstances which include technological
                  advancements, customer preference changes and emergence of
                  innovative trends. Keeping yourself in pace with this dynamic
                  world is next to impossible on top of building a business.
                  Despite all of this, staying ahead of the competition and
                  distinguishing yourself is a non-negotiable factor.{" "}
                </p>
                <p className="text-xl font-light">
                  Aligning with the industry trends alone cannot guarantee you
                  standing out in the industry, personalization and trend
                  setting strategies are what will assure your unparalleled
                  success.
                </p>
              </div>
              <div className="w-full">
                <img src="/img/auto1.png" alt="" />
              </div>
            </div>
            <p className="text-xl font-light">
              And MAF Group can help you achieve that goal by leveraging our
              comprehensive suite of services and decades of expertise in
              dabbling with the automobile industry. We aid you in curating a
              personalized experience for all your customers by incorporating
              cutting-edge tech like AI, NLP and Big Data thus playing a pivotal
              role in your business improvement.
            </p>
            <p className="text-xl font-light">
              As the automobile industry embraces and adapts to the digital
              future, we help you stay in pace with the transformation by
              inviting you to join us as your reliable partner. Let's equip your
              business with the technology to thrive and soar in this
              competitive environment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Automobile;
