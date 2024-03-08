import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Pharma = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Pharmaceuticals"}>
      <div className="w-full mt-[4rem]">
        {/* <div className="relative w-full h-[50vh] md:h-[70vh]">
          <img
            src="/img/pharmaBanner.jpg"
            className="w-full h-full object-cover bg-center"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute w-full inset-0 bottom-0 flex items-center justify-center text-white ">
            <h1
              className="text-4xl md:text-6xl font-bold text-center"
              style={{ fontFamily: "sans-serif" }}
            >
              Pharmaceuticals
            </h1>
          </div>
        </div>

        <div className="w-full mt-[4rem]">
          <div className="flex-col px-5 md:px-0 md:flex-row gap-5 sm:w-[70%] md:w-[90%] xl:w-[80%] m-auto flex md:gap-3">
            <div className="one w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
              <img
                src="/img/pharma11.jpg"
                className="aspect-video bg-center bg-cover rounded-t-lg object-cover"
                alt=""
              />
              <p className="text-md text-justify font-light p-2 mt-2">
                In the dynamic landscape of the pharmaceutical industry,
                disruptions and unpredicted changes are quite the norm. In an
                era where digital services are on the rise and novel industry
                players are redefining the market, it is vital to embrace
                emerging technologies and be prepared to fortify your positions.{" "}
              </p>
            </div>
            <div className="two w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
              <img
                src="/img/pharma12.jpg"
                className="aspect-video bg-center bg-cover rounded-t-lg object-cover"
                alt=""
              />
              <p className="text-md font-light text-justify p-2 mt-2">
                In this era of transformation, it is not only essential to
                embrace digitization and enhancing online services but also
                striving to continually adapt and strive for excellence. Failing
                to do so may risk falling behind and becoming irrelevant in this
                competitive landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-col md:flex-row w-[90%] pb-8 md:w-[80%] mx-auto mt-5">
          <div className="three  w-full shadow-lg hover:rounded-md transition-transform hover:translate-y-4">
            <img
              src="/img/pharma13.jpg"
              className="aspect-video bg-center bg-cover rounded-t-lg object-cover"
              alt=""
            />
            <p className="text-md font-light text-justify p-2 mt-2">
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
              src="/img/pharma14.jpg"
              className="aspect-video bg-center bg-cover rounded-t-lg object-cover"
              alt=""
            />
            <p className="text-md font-light text-justify p-2 mt-2">
              Whether it is catering to your current requirements or building
              cutting-edge technological solutions that cater to your future
              requirements, we do it all. We not only create solutions, but we
              also build systems that scale and grow with your business and help
              you propel forward in the face of roadblocks.
            </p>
          </div>
        </div> */}

        <div className="top h-[100vh] md:h-[90vh] w-full">
          <div className="relative w-full flex h-full">
            <div className="hidden md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto bg-white flex flex-col top-28 mx-5 md:left-20">
              <h2 className="md:text-3xl text-xl font-semibold">
                Shaping the modern medicine landscape
              </h2>
              <h3 className="md:text-lg text-base py-2 font-light">
                Create a patient-centric journey for your customers by utilizing
                our custom applications and strategies. We combine domain
                expertise with technology and deliver high-quality, personalized
                solutions that focus on the patient.
              </h3>

              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-0 bg-gray-800 w-[max-content] px-4 py-2 md:text-base rounded-lg text-white font-semibold"
              >
                Talk to us
                <span>
                  <BiRightArrowAlt className="text-2xl" />
                </span>
              </button>
            </div>
            <div className="w-full">
              <img
                src="/img/pharmaBanner.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full">
          <div className="w-[90%] mx-auto py-10">
            <p className="text-base text-justify py-2 md:text-base font-medium">
              With a proven track record of assisting numerous clients in this
              domain, we are aware of the obstacles in your journey and come
              prepared with a strategic roadmap. We understand your unique
              requirements and assist you with a solution that not only empowers
              you to keep up with the pace, but also puts you in the forefront
              of your industry.
            </p>
            {/* <div>
              <h2 className="text-2xl py-6 font-bold">Our Solution</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex p-5 shadow-xl flex-col gap-4 text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/maturity.png" alt="" />
                <div>
                  <h1 className="text-base">
                    Data warehousing with real-time flow of data
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/digital-strategy.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Curating a unified platform to view customer data
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/focus.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Simplifying reporting process through single view
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/business-model.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Establishing marketing segments for user engagement
                  </h2>
                </div>
              </div>
            </div> */}
          </div>

          <div className="w-full bg-[#eb1c26] py-10">
            <div className="w-[90%] flex flex-col gap-3 items-center mx-auto">
              <h2 className="text-center text-xl text-white">
                Embark on your business transformation journey!
              </h2>
              <button
                onClick={() => navigate("/contact")}
                className="text-center text-lg font-semibold text-white ring-2 ring-gray-200 hover:underline px-3 py-2 rounded-lg"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full my-10">
            <div className="w-[90%] mx-auto">
              <p>
                With a proven track record of assisting numerous clients in this
                domain, we are aware of the obstacles in your journey and come
                prepared with a strategic roadmap. We understand your unique
                requirements and assist you with a solution that not only
                empowers you to keep up with the pace, but also puts you in the
                forefront of your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pharma;
