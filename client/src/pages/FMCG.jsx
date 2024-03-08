import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const FMCG = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | FMCG"}>
      <div className="w-full mt-[4rem]">
        {/* <div className="relative w-full h-[50%] md:h-[74vh]">
          <img
            src="/img/fmcg1.jpg"
            className="w-full h-full bg-cover object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-30"></div>
          <div className="absolute w-full inset-0 bottom-0 flex items-center justify-center text-white ">
            <h2 className="mx-2 md:mx-0 text-4xl font-bold">
              Fast Moving Consumer Goods
            </h2>
          </div>
        </div>

        <div className="w-full mt-10 pb-8">
          <div className="w-full px-4 md:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="w-full">
                <img
                  src="/img/fmcg11.jpg"
                  className="aspect-video shadow-sm rounded-md object-cover bg-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="font-light mt-1 text-justify">
                  The world of retail and e-commerce is changing thanks to the
                  rise in trends like borderless business, cross-border
                  commerce, and international online retail growth rapidly. Two
                  years back, the sales from online purchases were 13.6 per cent
                  only. But it has seen a tremendous improvement in the past
                  couple of years.
                </p>{" "}
              </div>
            </div>

            <div>
              <div>
                <img
                  src="/img/fmcg12.webp"
                  className="aspect-video shadow-sm rounded-md object-cover bg-cover"
                  alt=""
                />
              </div>
              <div>
                <br />
                <p className="font-light">
                  All this means is that an e-commerce company needs to make
                  itself stand out if it wants to stay ahead of the competition
                  and make the most of the rapid growth in the industry.
                </p>{" "}
              </div>
            </div>
            <div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/fmcg13.jpg"
                  className="aspect-video shadow-sm rounded-md object-cover bg-cover"
                  alt=""
                />
              </div>
              <div>
                <br />
                <p className="font-light text-justify">
                  One of the things that can help greatly is personalization and
                  leveraging the content to target specific customers. Mobile
                  App integration, Digital Transformation, Cloud NLP, and Data
                  Migration also help greatly. MAF Group can handle it all for
                  you and lets you leverage advanced technologies to play a
                  vital role in the future of consumerism.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="top h-[90vh] w-full">
          <div className="relative w-full flex h-full">
            <div className="md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-16 md:top-28 mx-5 md:left-20">
              <h2 className="md:text-3xl text-xl font-semibold">
                Unveiling FMCG’s new era
              </h2>
              <h3 className="md:text-lg text-base font-light">
                With increasing consumer demand and cross-border commerce, the
                retail business has grown in multiple magnitudes. With stellar
                market growth comes increasing competition and responsibility
                which can be fulfilled by building resilient systems.
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
                src="/img/fmcg1-min.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full pt-12">
          <div className="w-[90%] mx-auto pb-10">
            <p className="text-base text-justify font-medium">
              We have been a reliable partner in this ever-evolving domain by
              bringing to the table our knowledge of problems unique to this
              industry and our need to deeply understand our client’s problems.
              With tailored solutions that brought the most impact for business
              by analyzing your stand and objectives, we promise to empower you
              with everything you need to build a thriving business.
            </p>
            <div>
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
            </div>
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

          <div className="my-10">
            <div className="w-[90%] mx-auto">
              <h2 className="text-lg font-semibold">Case Study Links : </h2>
              <div className="flex flex-col gap-2 mt-4">
                <ul className="list-disc flex flex-col mx-4 gap-2">
                  <li>
                    <Link
                      to={"/case1"}
                      className="text-base text-sky-500 underline"
                    >
                      Transforming Digital Landscape: A Comprehensive Case Study
                      in Retail Industry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/case3"}
                      className="text-base text-sky-500 underline"
                    >
                      Ensuring GDPR Compliance and Risk-Free Strategy
                      Implementation in the FMCG Industry
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/case8"}
                      className="text-base text-sky-500 underline"
                    >
                      Elevating Customer Satisfaction Through Single Customer
                      View (SCV) in Retail
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/case9"}
                      className="text-base text-sky-500 underline"
                    >
                      Driving Hyper-Personalization for Enhanced Customer
                      Engagement in Retail
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/case10"}
                      className="text-base text-sky-500 underline"
                    >
                      Enhancing Marketing Efficiency through Digital
                      Transformation in Retail
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/case3"}
                      className="text-base text-sky-500 underline"
                    >
                      Ensuring GDPR Compliance and Risk-Free Strategy
                      Implementation in the FMCG Industry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FMCG;
