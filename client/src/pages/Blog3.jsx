import Layout from "@/components/Layout";
import React from "react";

const Blog3 = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="w-full md:w-[90%] mx-auto">
          <div className="flex flex-col gap-4 pt-4 px-3">
            <h2 className="font-bold text-center text-[#071b52] dark:text-rose-600 text-3xl pb-8">
              Blogs on Marketing Automation
            </h2>
            {/* <h3 className="font-light text-lg">30 July, 2022 | by Shruti Bhandari</h3> */}
            {/* <p className="font-light text-lg">
              Cloud Hosting offered by Google is called Google Cloud Hosting.
              The tech giant provides it for free for the first 12 months if you
              opt for the free trial plan. After that, you can pick from
              different Google Cloud Hosting Pricing plans. If you are not
              looking to pay instantly, you can also select Google Cloud Free
              version, i.e., Google Cloud Platform Free Tier, which provides the
              prospect to use and learn Google Cloud Free services.
            </p> */}
          </div>
          {/* <h2 className="py-10 text-2xl px-2 md:px-0 font-bold text-[#071b52] dark:text-rose-600">
            What are the Top Advantages of Using Google Cloud Hosting?
          </h2> */}

          <div className="w-full flex flex-col md:flex-row gap-6 px-3 md:px-0">
            <div className="flex flex-col w-full shadow-lg px-2 pb-4 gap-3">
              <img
                src="/img/ma8.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h3 className="text-xl font-bold text-[#071b52] dark:text-rose-600">
                Personalized Content Will Rule
              </h3>
              <p className="text-lg font-light">
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
            <div className="flex flex-col w-full shadow-lg px-2 pb-4 gap-3">
              <img
                src="/img/machine.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h3 className="text-xl font-bold text-[#071b52] dark:text-rose-600">
                Machine Learning and AI Adoption Will Rise
              </h3>
              <p className="text-lg font-light">
                The use of AI and machine learning to create personalized
                experiences is on the rise. Data and ML will work together to
                enhance the efficiency of customer engagement. AI platforms will
                also proliferate. Even technologies like Deep Learning and
                Natural Language Processing (NLP) will automate user behavior
                and activity. They might also understand language and speech
                patterns to enable the creation of hyper-personalized user
                personas.
              </p>
            </div>
            <div className="flex flex-col w-full shadow-lg px-2 pb-4 gap-3">
              <img
                src="/img/chatbot.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h3 className="text-xl font-bold text-[#071b52] dark:text-rose-600">
                Chatbot Use to Increase
              </h3>
              <p className="text-lg font-light">
                Chatbots are already quite common now. They will become smarter
                than ever and will offer behavioral recommendations shortly.
                They will also be able to hold meaningful conversations with
                multiple users in one go. Most business decision-makers are
                already using or planning to use chatbots soon. So, marketers
                would be wise to remember chatbots as a plausible engagement
                solution.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6 mt-8 px-3 md:px-0 md:mt-20">
            <div className="flex flex-col w-full shadow-lg px-2 pb-4 gap-3">
              <img
                src="/img/ma2.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h3 className="text-xl font-bold text-[#071b52] dark:text-rose-600">
                Social Media Marketing Will be Automated
              </h3>
              <p className="text-lg font-light">
                In 2019, the time spent on social media rose to 142 minutes from
                135 minutes. It proves that social media can be a way to win
                customers for brands. So, now brands are focused on automating
                social media marketing to ensure they reach the right audience
                with the right message at the right time. Social media ad
                targeting would be more specific, and social media strategies
                would be customized according to the targeted audience, like
                generation Z.
              </p>
            </div>
            <div className="flex flex-col w-full shadow-lg px-2 pb-4 gap-3">
              <img
                src="/img/privacy.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h3 className="text-xl font-bold text-[#071b52] dark:text-rose-600">
                Mobile 1st Policy Will be Adopted
              </h3>
              <p className="text-lg font-light">
                Many marketers and brands will also follow the mobile 1st
                policy. They will target mobile users more as this device is
                most people's primary device for communication with the online
                world. Hence, tools like SMS, mobile wallet, push and web
                notifications, and in-app notifications will be used
                extensively. Marketing Automation will focus on mobile campaigns
                more than ever.
              </p>
            </div>
            <div className="flex flex-col w-full shadow-lg px-2 pb-4 gap-3">
              <img
                src="/img/finalWord.png"
                className="aspect-video object-cover"
                alt=""
              />
              <h3 className="text-xl font-bold text-[#071b52] dark:text-rose-600">
                Final Words
              </h3>
              <p className="text-lg font-light">
                A user will not wait for brands to meet their expectations. They
                will simply switch to another brand. So, brands need to leverage
                marketing automation to keep the users engaged and create a more
                targeted and personalized experience if they want to retain
                existing customers and gain new ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog3;
