import React from "react";
import Layout from "../components/Layout";

const Pharma = () => {
  return (
    <Layout title={"MAAF | Pharmaceuticals"}>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[50vh] md:h-[70vh]">
          <img
            src="/img/Pharmaceuticals.jpg"
            className="w-full h-full object-cover bg-center"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div class="absolute w-full inset-0 bottom-0 flex items-center justify-center text-white ">
            <h1
              className="text-4xl md:text-6xl font-bold text-center"
              style={{ fontFamily: "sans-serif" }}
            >
              Pharmaceuticals
            </h1>
          </div>
        </div>

        <div className="w-full mt-[4rem]">
          <div className="flex-col px-5 md:px-0 md:flex-row ga20 sm:w-[70%] md:w-[90%] xl:w-[80%] m-auto flex md:gap-3">
            <div className="one w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
              <img
                src="/img/pharma1.png"
                className="aspect-video bg-center bg-cover object-cover"
                alt=""
              />
              <p className="text-md font-light p-2 mt-2">
                In the dynamic landscape of the pharmaceutical industry,
                disruptions and unpredicted changes are quite the norm. In an
                era where digital services are on the rise and novel industry
                players are redefining the market, it is vital to embrace
                emerging technologies and be prepared to fortify your positions.{" "}
              </p>
            </div>
            <div className="two w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
              <img
                src="/img/pharma2.png"
                className="aspect-video bg-center bg-cover object-cover"
                alt=""
              />
              <p className="text-md font-light p-2 mt-2">
                In this era of transformation, it is not only essential to
                embrace digitization and enhancing online services but also
                striving to continually adapt and strive for excellence. Failing
                to do so may risk falling behind and becoming irrelevant in this
                competitive landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row md:w-[80%] mx-auto mt-20">
          <div className="three w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
            <img
              src="/img/pharma3.png"
              className="aspect-video bg-center bg-cover object-cover"
              alt=""
            />
            <p className="text-md font-light p-2 mt-2">
              We at MAF Group, with a proven track record of assisting numerous
              clients in this domain, are aware of the obstacles in your journey
              and come prepared with a strategic roadmap that is most fruitful
              for you. We understand your unique requirements and assist you
              with a solution that not only empowers you to keep up with the
              pace, but also puts you in the forefront of your industry.
            </p>
          </div>
          <div className="four w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
            <img
              src="/img/pharma4.png"
              className="aspect-video bg-center bg-cover object-cover"
              alt=""
            />
            <p className="text-md font-light p-2 mt-2">
              Whether it is catering to your current requirements or building
              cutting-edge technological solutions that cater to your future
              requirements, we do it all. We not only create solutions, but we
              also build systems that scale and grow with your business and help
              you propel forward in the face of roadblocks.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pharma;
