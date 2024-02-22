import React from "react";
import Layout from "../components/Layout";

const Manufacturing = () => {
  return (
    <Layout title={"MAF | Manufacturing"}>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[70vh]">
          <img
            src="/img/manufacturing.jpeg"
            className="w-full h-full bg-cover object-cover"
            alt=""
          />
          <div className="absolute w-full inset-0 bottom-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 w-full flex justify-center items-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              Manufacturing
            </h1>
          </div>
        </div>

        <div className="w-full mt-10">
          <div
            className="w-[90%] lg:w-[80%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
           gap-5"
          >
            <div className="flex w-full flex-col items-center gap-4">
              <div className="w-full">
                <img
                  src="/img/man.jpg"
                  className="aspect-video md:aspect-square object-cover bg-cover shadow-lg"
                  alt=""
                />
              </div>
              <div
                className="w-full order-2 md:order-1"
                style={{ textAlign: "justify" }}
              >
                <p>
                  MAF Group has been a seasoned ally for one too many companies
                  guiding them through the intricacies of this digital era and
                  the manufacturing industry has been one of them as well. We
                  have been a reliable partner in this ever-evolving domain by
                  bringing to the table our knowledge of problems unique to this
                  industry and our need to deeply understand our client’s
                  problems.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full">
                <img
                  src="/img/manufacture.png"
                  className="aspect-video md:aspect-square object-cover bg-cover shadow-lg"
                  alt=""
                />
              </div>
              <div>
                <p>
                  With tailored solutions that have the most impact for business,
                  crafted by analyzing your stand and objectives, we promise to
                  empower you with everything you need to build a thriving
                  business.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4">
              <div>
                <img
                  src="/img/man1.jpg"
                  className="aspect-video md:aspect-square object-cover bg-cover shadow-lg"
                  alt=""
                />
              </div>
              <div>
                <p>
                  By integrating the latest technologies, streamlining
                  workflows, digitizing your business and automating your
                  systems, we help you stay ahead of competition and redefine
                  the future of consumerism in the manufacturing industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manufacturing;
