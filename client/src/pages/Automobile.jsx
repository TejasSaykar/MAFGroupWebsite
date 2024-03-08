import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Automobile = () => {
  const navigate = useNavigate();

  return (
    <Layout title={"MAF | Automobile"}>
      <div className="mt-[4rem] w-full">
        <div className="top h-[90vh] w-full">
          <div className="relative w-full flex h-full">
            <div className="md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-10 md:top-28 mx-5 md:left-20">
              <h2 className="md:text-3xl text-xl font-semibold">
                Shaping the next generation of automobiles
              </h2>
              <h3 className="md:text-lg text-base font-light">
                With automotive industry evolving at an incredible rate,
                businesses are pushed to change too. While EV and autonomous
                vehicles are gaining popularity on one side, software-driven
                transformations are speeding up on the other. The solution to
                keep up with both? Collaboration!
              </h3>

              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-0 bg-gray-800 w-[max-content] px-4 py-2 rounded-lg text-white font-semibold"
              >
                Talk to us
                <span>
                  <BiRightArrowAlt className="text-2xl" />
                </span>
              </button>
            </div>
            <div className="w-full">
              <img
                src="/img/automobile3-min.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full">
          <div className="w-[90%] mx-auto py-10">
            <p className="text-base font-medium">
              As the automobile industry embraces and adapts to the digital
              future, we help you stay in pace with the technological
              transformation by inviting you to join us as your reliable
              partner. Let's equip your business with the technology to thrive
              and soar in this competitive environment.
            </p>
            {/* <div>
              <h2 className="text-2xl py-6 font-bold">Our Solution</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex p-5 shadow-xl flex-col gap-4 text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/gdpr1.png" alt="" />
                <div>
                  <h1 className="text-base">
                    Ensuring GDPR compliance through thorough assessment and
                    custom solutions
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img
                  className="w-16 h-16"
                  src="/img/data-warehouse.png"
                  alt=""
                />
                <div>
                  <h2 className="text-base">
                    Unified data warehouse and pipelines for real-time data
                    transfer
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/focus.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Streamlining marketing efforts through platform integration
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/advertising.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Hyper-personalization for dynamic advertising
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
                    Development of personalized product recommendation engine
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/ecomm.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Ecommerce site optimization to support overall digital
                    strategy
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/application.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Single Customer View application for viewing predictive
                    capabilities and customer profile
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-5 shadow-xl text-start text-xl font-medium">
                <img className="w-16 h-16" src="/img/market.png" alt="" />
                <div>
                  <h2 className="text-base">
                    Personalized marketing campaigns to upsell, cross sell and
                    improve ROI
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

export default Automobile;
