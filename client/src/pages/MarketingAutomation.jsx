import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MarketingAutomation = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Marketing Automation"}>
      <div className="mt-[4rem] w-full">
        <div className="top h-screen w-full">
          <div className="relative w-full flex h-full">
            <div className="hidden md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-10 md:top-32 mx-5 md:left-20">
              <h2 className="text-3xl font-semibold">Marketing Automation</h2>
              <h3 className="text-xl font-medium">
                Explore Offbeat Business Avenues with Marketing Automation
              </h3>
              <p className="text-lg">
                Expand your market reach and provide personalized customer
                service by capitalizing on automated marketing strategies.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center bg-gray-800 w-[max-content] px-4 py-2 rounded-lg text-white font-semibold"
              >
                Talk to us
                <span>
                  <BiRightArrowAlt className="text-xl font-semibold" />
                </span>
              </button>
            </div>
            <div className="bg-cyan-200/40 w-full">
              <img
                src="/img/marketingBanner-min.jpg"
                className="h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="aproach w-full py-12 ">
          <div className="w-[90%] mx-auto">
            <div>
              <h2 className="text-2xl py-6 font-bold">Our approach </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-12">
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/employee.png" alt="" />
                <div>
                  <h1>Drive Hyper-personalization</h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/market.png" alt="" />
                <div>
                  <h2>Reach new markets </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/process.png" alt="" />
                <div>
                  <h2>Automate your marketing efforts</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img
                  className="w-1/3 mx-auto"
                  src="/img/convesion.png"
                  alt=""
                />
                <div>
                  <h2>Improve conversion rates</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold pt-4">Our Solution</h2>
            {/* <p className="py-3">
              We strategically implement cloud solutions by implementing a
              four-step deployment process. Here’s how we do it:
            </p> */}
            <div className="pt-5">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/seo.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">
                    Search Engine Optimization (SEO) Services
                  </h2>
                  <p>
                    mprove your website traffic by utilizing our SEO strategies.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/googleads.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">
                    Google Ads Management (PPC Services)
                  </h2>
                  <p>
                    Maximize ROI and achieve your campaign goals through our
                    expertly crafted pay-per-click services.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/social-media.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">
                    Social Media Marketing
                  </h2>
                  <p>
                    Establish a strong brand presence across social media
                    platforms by leveraging our time-tested strategies.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/email.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">Email Marketing</h2>
                  <p>
                    From audience segmentation to dynamic email strategies, we
                    deliver measurable results and achieve your KPIs.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/advertising.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">
                    Targeted Online Advertising & Remarketing
                  </h2>
                  <p>
                    Optimize your lead conversion campaign and attract customers
                    by targeted advertising.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/content.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">Content Marketing</h2>
                  <p>
                    Consistently deliver and address your customer pain points
                    to drive engagement thus boosting your online presence.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/inbound-marketing.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">Inbound Marketing</h2>
                  <p>
                    Improve brand awareness and venture into new markets by
                    attracting your audience via pull marketing techniques.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/presentation.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">Marketing Strategy</h2>
                  <p>
                    Custom made strategies that are tailored to fit your
                    business goals and objectives with your target audience in
                    mind.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/machine-learning.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">Marketing Automation</h2>
                  <p>
                    Selecting and integrating the right automation platforms
                    that will scale with your business.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/sales.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">
                    Sales Strategy & Training
                  </h2>
                  <p>
                    Equip your team with strategies to boost their performance
                    and hit the organization’s sales goals.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img
                    src="/img/presentation.png"
                    className="h-16 w-16"
                    alt=""
                  />
                  <h2 className="text-lg font-medium">
                    CRM Set Up, Training & Optimization
                  </h2>
                  <p>
                    End-to-end adoption of CRM solutions accompanied by seamless
                    knowledge transfer to your internal team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-bold py-6 w-[90%] mx-auto ">Benefits</h1>
          <div className="md:w-1/2 mx-auto p-5">
            <div className="border-l-[3px] border-rose-500">
              <ul className="list-disc pl-7">
                <li>Boost conversions with personalized customer journeys</li>
                <li>Dynamic targeted advertising</li>
                <li>Reduce time and effort requirement through automation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mt-5">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold py-6">Tool Landscape </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6 w-full">
              <div className="w-full shadow-lg p-5  items-center flex justify-center flex-col">
                <img
                  src="/img/gmp.png"
                  className="w-[200px] object-cover aspect-video"
                  alt=""
                />
                <h2 className="text-xl italic">Google Marketing Platform</h2>
              </div>
              <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/amp.svg"
                  className="w-[100px] h-[100px] object-cover aspect-video"
                  alt=""
                />
                <h2 className="text-xl italic">Adobe Marketing Platform</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarketingAutomation;
