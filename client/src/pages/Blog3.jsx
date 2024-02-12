import Layout from "@/components/Layout";
import React from "react";

import { MdContentPaste } from "react-icons/md";
import { MdOutlinePolicy } from "react-icons/md";
import { FaBacterium } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaRegFileWord } from "react-icons/fa";

const Blog3 = () => {
  const openwebsite = (url) => {
    window.open(url, "_blanck");
  };

  return (
    <Layout title={"Marketing Automation | MAF"}>
      <div className="w-full mt-[4rem]">
        <div className="w-full px-5 md:w-[90%] md:px-0 mx-auto pt-10">
          <div className="text-2xl md:text-2xl pb-4 font-bold px-2 md:px-6">
            <h1 className="text-[#071b52] dark:text-rose-600 text-justify">
              Marketing Automation Trends No Forward-Thinking Organization
              Should Ignore!
            </h1>
            <h2 className="text-[#071b52] mt-1">- Shruti Bhandari</h2>
          </div>

          <div className="one flex w-full flex-col md:flex-row mt-0">
            <div className="w-full flex flex-col md:flex-row px-2 pb-4">
              <div className="w-full my-auto">
                <img
                  src="/img/ma2.png"
                  className="aspect-video bg-cover object-cover w-2/3"
                  alt=""
                />
              </div>
              <div className="w-full my-auto mx-auto">
                <p className="font-light text-justify">
                  The marketing automation industry has grown in the last few
                  years despite the COVID-19 pandemic because businesses were
                  eager to automate the marketing workflows and retain
                  customers. If you also own or manage an organization, read on
                  to know about the top marketing automation trends no
                  forward-thinking organization should ignore.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdContentPaste className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Personalized Content Will Rule
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  The need and demand for personalized content will continue to
                  rise as customers want the brands to know their likes and
                  preferences. They also expect intelligent product
                  recommendations, rather than general ones, to be worth their
                  time. Marketers need to focus on social listening, on-site
                  behavioral attributes, user attributes, and past purchase data
                  to create personalized content that catches customers'
                  attention.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <FaBacterium className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Machine Learning and AI Adoption Will Rise
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  The use of AI and machine learning to create personalized
                  experiences is on the rise. Data and ML will work together to
                  enhance the efficiency of customer engagement. AI platforms
                  will also proliferate. Even technologies like Deep Learning
                  and Natural Language Processing (NLP) will automate user
                  behavior and activity. They might also understand language and
                  speech patterns to enable the creation of hyper-personalized
                  user personas.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <SiChatbot className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Chatbot Use to Increase
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Chatbots are already quite common now. They will become
                  smarter than ever and will offer behavioral recommendations
                  shortly. They will also be able to hold meaningful
                  conversations with multiple users in one go. Most business
                  decision-makers are already using or planning to use chatbots
                  soon. So, marketers would be wise to remember chatbots as a
                  plausible engagement solution.
                </p>
              </div>
            </div>

            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <SiGooglemarketingplatform className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Social Media Marketing Will be Automated
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  In 2019, the time spent on social media rose to 142 minutes
                  from 135 minutes. It proves that social media can be a way to
                  win customers for brands. So, now brands are focused on
                  automating social media marketing to ensure they reach the
                  right audience with the right message at the right time.
                  Social media ad targeting would be more specific, and social
                  media strategies would be customized according to the targeted
                  audience, like generation Z. Video content would continue to
                  rise and engage audiences widely.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdOutlinePolicy className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Mobile 1st Policy Will be Adopted
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Many marketers and brands will also follow the mobile 1st
                  policy. They will target mobile users more as this device is
                  most people's primary device for communication with the online
                  world. Hence, tools like SMS, mobile wallet, push and web
                  notifications, and in-app notifications will be used
                  extensively. Marketing Automation will focus on mobile
                  campaigns more than ever.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <FaRegFileWord className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Final Words
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  A user will not wait for brands to meet their expectations.
                  They will simply switch to another brand. So, brands need to
                  leverage marketing automation to keep the users engaged and
                  create a more targeted and personalized experience if they
                  want to retain existing customers and gain new ones. <br />
                </p>
              </div>
            </div>
          </div>
          <p className="pt-6 px-2 md:w-1/2 mx-auto">
            {" "}
            Looking for help with Marketing Automation? Contact MAF Group.
          </p>

          <div className="mt-5 px-2 md:w-1/2 mx-auto">
            <h2>Reference:</h2>
            <p
              style={{ textAlign: "justify" }}
              onClick={() =>
                openwebsite(
                  "https://webengage.com/blog/top-marketing-automation-trends/"
                )
              }
              className="text-sky-700 underline cursor-pointer"
            >
              https://webengage.com/blog/top-marketing-automation-trends/
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog3;
