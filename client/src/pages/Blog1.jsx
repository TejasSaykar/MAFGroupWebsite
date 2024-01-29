import Layout from "@/components/Layout";
import React from "react";

const Blog1 = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="w-full px-5 md:w-[90%] md:px-0 mx-auto pt-10">
          <div className="text-2xl md:text-4xl pb-4 font-bold text-center">
            <h1 className="text-[#071b52] dark:text-rose-600">
              Blog on Data Analytics
            </h1>
          </div>

          <div className="one flex w-full flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/data2.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Dawn of data
              </h2>
              <p className="text-xl font-light">
                Did you know that the practice of analyzing data goes back to
                the 19th century? Florence Nightingale utilized statistical
                graphics and proved conclusively that maintaining hygiene in
                healthcare is paramount!
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/data3.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Data explosion
              </h2>
              <p className="text-xl font-light">
                Can you guess the amount of data that gets generated each day?
                It's 2.5 quintillion bytes, every single day! This is an
                unprecedented amount of data that no one anticipated. Imagine
                the potential of this data if we have proper analytical
                workflows in place!
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/data4.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Big data vs small data
              </h2>
              <p className="text-xl font-light">
                Just because we stress about large amounts of data, doesn’t mean
                that small portions cannot be a game changer. Simple and easy to
                interpret bite sized data has changed the trajectory of many
                small businesses, especially in niche markets.
              </p>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-20">
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/science.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Data scientists: The most prominent job of the 21st century
              </h2>
              <p className="text-xl font-light">
                Coined by Harvard Business Review, the term ‘data scientists’
                are gaining prominence, and these professionals are playing the
                crucial role of interpreting complex data sets and deriving
                insights that are actionable and strategic.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/strategy.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Synergy of cutting-edge technologies
              </h2>
              <p className="text-xl font-light">
                The seamless integration of Artificial Intelligence (AI) and
                Machine Learning (ML) have revolutionized the way we conduct
                analysis by enhancing our prescriptive and predictive analytical
                capabilities thus driving efficiency across industries.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/w3.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Real-time analytics
              </h2>
              <p className="text-xl font-light">
                In this era where we want instant gratification and swift
                responses are the key for success, real-time analytics are a god
                send. With analysis getting generated as data comes in, precise
                and accurate decision-making and responding to emerging trends
                can be achieved with ease.
              </p>
            </div>
          </div>

          <div className="three flex w-full flex-col md:flex-row gap-4 mt-20">
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/darkData.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Dark Data
              </h2>
              <p className="text-xl font-light">
                As the name implies, a lot of organizations have ‘Dark Data’,
                Data that lies in the dark, dormant and unutilized thus waiting
                to be effectively harnessed. This acts as an untapped
                opportunity that once unlocked can produce significant results
                for the companies.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/work1.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Quality over Quantity
              </h2>
              <p className="text-xl font-light">
                Ensuring the quality of data is vital through and through since
                insights derived from accurate and reliable raw materials yield
                high-quality output that can have major positive impact.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/story.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Story telling
              </h2>
              <p className="text-xl font-light">
                Contrary to common belief, Data analytics is not just
                interpreting data and graphs into insights. It is a delicate art
                of storytelling where strategic outlooks are presented in
                compelling narratives that persuade the reader to act.
              </p>
            </div>
          </div>

          <div className="three flex w-full flex-col md:flex-row gap-4 mt-20">
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/ma4.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Cross-industry applications
              </h2>
              <p className="text-xl font-light">
                From finance to entertainment, healthcare to hospitality, the
                applications of data analytics transcend industries and
                showcases its relevance by accumulating myriads of applications.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/privacy.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Privacy concerns
              </h2>
              <p className="text-xl font-light">
                One of the crucial problems for data professionals to this day
                is managing privacy concerns. With the sheer volume of data
                generated daily, leveraging them for analytics while maintaining
                their security has become a paramount worry.
              </p>
            </div>
            <div className="w-full flex flex-col gap-4 px-2 shadow-lg pb-4">
              <img
                src="/img/cloud6.png"
                className="aspect-video bg-cover object-cover"
                alt=""
              />
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Rise of predictive analytics
              </h2>
              <p className="text-xl font-light">
                Historical legacy data have given rise to predictive analytics,
                a subset of data analytics. Corporations leverage this new form
                of analytics to predict future trends and outcomes thus aiding
                in strategic decision making and risk management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog1;
