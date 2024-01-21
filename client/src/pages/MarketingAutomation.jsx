import React from "react";
import Layout from "../components/Layout";
import { FaCheck } from "react-icons/fa";

const MarketingAutomation = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[70vh] top">
          <img
            src="/img/automation.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-45"></div>
          <div class="absolute w-full inset-0 bottom-0 flex flex-col items-center pt-20  justify-start text-white">
            <h1 className="text-5xl font-bold" style={{fontFamily: "sans-serif"}}>Marketing Automation</h1>
            <p className="px-16 py-6 text-lg font-light">
              With time, organizations are learning the importance of using
              technology to market their business, explore new markets and
              ensure minimal manual intervention. <br /> More than 55% of B2B
              companies and 49% of companies use marketing automation and
              benefit by identifying potential leads, streamlining their
              marketing processes, creating personalized content and nurturing
              their leads. Additionally, we can help you cut down on lead
              conversion time while boosting your revenue and sales numbers.
            </p>
          </div>
        </div>

        <div className="mt-14 w-full">
          <h2 className="text-center text-2xl font-bold text-[#071b52] mb-8" style={{fontFamily: "sans-serif"}}>
            What Marketing Automation Services Do We Offer?
          </h2>
          <div className="w-full flex gap-3 px-6">
            <div className="one hover:shadow-lg w-full flex flex-col">
              <img src="/img/seo.jpg" alt="" />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Search Engine Optimization – SEO Services
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                We offer on-page and off-page SEO strategies and services to
                boost organic traffic to your website.
              </p>
            </div>

            <div className="two hover:shadow-lg w-full">
              <img src="/img/google.jpg" alt="" />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Google Ads Management – PPC Services
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                Pay per click is a crucial aspect of marketing a business
                online. We can help you create and manage successful ad
                campaigns on Google and other social media platforms like
                Facebook.
              </p>
            </div>

            <div className="three hover:shadow-lg w-full">
              <img src="/img/socialMedia.jpg" alt="" />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Social Media Marketing
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                Create a social presence of your brand by availing of our social
                media marketing services to ensure your brand gets a suitable
                image across different social media platforms.
              </p>
            </div>

            <div className="four hover:shadow-lg w-full">
              <img src="/img/email.png" alt="" />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Email Marketing
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                We help you create and implement successful email marketing
                strategies that bring real and measurable results.
              </p>
            </div>
          </div>

          <div className="w-full flex gap-3 px-6 mt-14">
            <div className="one hover:shadow-lg w-full flex flex-col">
              <img src="/img/advertising.jpg" className="aspect-video" alt="" />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Targeted Online Advertising & Remarketing
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                We help you target potential customers who have already visited
                your website or shown interest in your products/services.
                Converting these into leads is simpler with the right approach.
              </p>
            </div>

            <div className="two hover:shadow-lg w-full">
              <img
                src="/img/contentMarketing.jpg"
                className="aspect-video"
                alt=""
              />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Content Marketing
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                Our team will create and distribute relevant and valuable
                content consistently to attract customer attention and drive
                conversions.
              </p>
            </div>

            <div className="three hover:shadow-lg w-full">
              <img
                src="/img/inboundMarketing.webp"
                className="aspect-video"
                alt=""
              />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Inbound Marketing
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                In this service, we will utilize different forms of pull
                marketing like content marketing, SEO, blogs, social media,
                etc., to create brand awareness and attract new business
                opportunities.
              </p>
            </div>

            <div className="four hover:shadow-lg w-full">
              <img src="/img/marketing.jpg" className="aspect-video" alt="" />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Marketing Strategy
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                After studying and analyzing your business, our experts create a
                customized marketing strategy that suits your business needs and
                appeals to your target audience.
              </p>
            </div>
          </div>

          <div className="w-full flex gap-6 px-6 mt-14">
            <div className="one hover:shadow-lg w-full flex flex-col">
              <img
                src="/img/automation.jpg"
                className="aspect-video object-cover"
                alt=""
              />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Marketing Automation
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                We select the right marketing automation path for you and help
                you make it a success.
              </p>
            </div>

            <div className="two hover:shadow-lg w-full">
              <img
                src="/img/sales.jpg"
                className="aspect-video object-cover"
                alt=""
              />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                Sales Strategy & Training
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                Rely on us to create a successful sales strategy to boost the
                sales figures and let us train your internal teams on the same.
              </p>
            </div>

            <div className="three hover:shadow-lg w-full">
              <img
                src="/img/crm.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h2 className="text-xl mt-1 p-1 font-semibold text-[#071b52]">
                CRM Set Up, Training &Optimization
              </h2>
              <p className="my-1 p-1 text-lg font-thin">
                We set up, implement, and optimize a CRM solution that matches
                your business needs. We undertake extensive training forseamless
                change management.
              </p>
            </div>
          </div>

          <div className="flex w-[50%] m-auto items-start justify-center flex-col gap-4 mt-14 pl-[10%]">
            <h2 className="text-2xl font-bold text-[#071b52]">
              What Will We Set Up for You?
            </h2>
            <h4 className="text-xl">We automate the following for you : </h4>
            <ol>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Nurturing of prospects and leads
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Upselling
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Cross-selling
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Follow-up of leads or prospects
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Reminders for your sales team
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Lead scoring
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck className="text-green-600" /> Prioritizing the most valuable prospects
              </li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarketingAutomation;
