import React from "react";
import Layout from "../components/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        {/* TOP SECTION */}

        <div className="relative w-full h-[70vh] top">
          <img
            src="/img/analytics.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-40"></div>
          <div class="absolute w-full inset-0 bottom-0 flex flex-col items-center justify-center text-white px-16">
            <h1 className="pb-10 text-5xl font-bold text-[#f054f5]" style={{fontFamily: "sans-serif"}}>
              Data Analytics
            </h1>
            <p className="text-2xl font-thin text-gray-300">
              Companies have more data than before but less time to utilize it
              They need help in using data and analytics to transform how they
              use data MAF Group helps with data assets, data governance and
              even gets data out of silos We develop strategic, technical, and
              human capabilities that help make your organization truly
              data-driven From Data Source Evaluation to Quality Assessment,
              Integration, and Modelling to choosing Platform and Technology and
              even Data Reporting enhancement, we can handle it all
            </p>
          </div>
        </div>

        {/* HERO SECTION */}

        <div className="w-full mt-8">
          <div className="w-[80vw] m-auto px-20 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-5 text-[#071b52]">
              Our Expertise
            </h1>
            <div className="w-full flex justify-center items-start gap-5">
              <div className="left w-full flex flex-col gap-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img
                  src="/img/dataImg.jpg"
                  className="aspect-video object-cover"
                  alt="Data Analytics"
                />
                <h2 className="text-2xl px-2 text-[#071b52] font-semibold">
                  Data Analytics
                </h2>
                <p className="text-lg px-2 font-thin">
                  To automate data analytics, we will pick the right automation
                  platform that suits your business needs, create a strategy
                  that works and build an actionable plan. We also set up the
                  needed software and ensure its smooth implementation, along
                  with creating automated workflows that work for your
                  organization. You can also trust us to train your team to
                  ensure effective operations without outside assistance.
                </p>
              </div>
              <div className="right w-full flex flex-col gap-4 transition-transform hover:-translate-y-2 hover:shadow-md">
                <img
                  src="/img/realTimeData.jpg"
                  className="h-auto aspect-video object-cover"
                  alt="Real Time Data Analytics"
                />
                <h2 className="text-2xl p-2 text-[#071b52] font-semibold">
                  Real-Time Analytics
                </h2>
                <p className="text-lg p-2 font-light">
                  Our data analytics service helps turn data into insights
                  quickly to help save time and effort. Also known as
                  operational intelligence, real-time analytics can predict
                  failures and make your teams aware of the issue to rectify the
                  situation. For instance, real-time analytics can help detect
                  credit card fraud before a transaction is completed and help
                  save the end-users' money.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="w-full flex justify-center items-start gap-5">
                <div className="left w-full flex flex-col gap-4 transition-transform hover:-translate-y-2 hover:shadow-lg">
                  <img
                    src="/img/NLP.webp"
                    className="aspect-video object-cover"
                    alt="Natural Language Processing"
                  />
                  <h2 className="text-2xl px-2 text-[#071b52] font-semibold">
                    NLP- Natural Language Processing
                  </h2>
                  <p className="text-lg px-2 font-thin">
                    By using Natural language Processing or NLP, we help you
                    foster human and computer interaction. We integrate the
                    business with intelligent systems to ensure the perpetual
                    growth of your business. <br />
                    <br /> Some of the NLP techniques we follow are Information
                    Extraction via machine learning, text classification to
                    provide insights and reduce errors, Named Entity Recognition
                    which helps improvise entity extraction by classifying
                    specific words with unstructured data, and Intent
                    Classification in which text is classified into various
                    datasets. You can also trust us for Relationship Extraction,
                    Content Clustering, Fact Extraction, Text Generation, and
                    Summarization.
                  </p>
                </div>
                <div className="right w-full flex flex-col gap-4 transition-transform hover:-translate-y-2 hover:shadow-md">
                  <img
                    src="/img/machineLearning.jpg"
                    className="h-auto aspect-video object-cover"
                    alt="Machine Learning"
                  />
                  <h2 className="text-2xl p-2 text-[#071b52] font-semibold">
                    Machine Learning
                  </h2>
                  <p className="text-lg p-2 font-thin">
                    As an independent consultancy that loves data science, we
                    use machine learning and statistics to help organizations
                    make the most of data and unleash its full potential. We use
                    the latest data science and technology to ensure your
                    organization benefits from it and explores its potential.
                    <br /><br />
                    Earlier, organizations were limited to predictive analysis
                    to make the most of data. Predictive analysis meant making
                    assumptions and testing using past data to predict the
                    future or consider what/if scenarios. We use AI Machine
                    Learning to extend the concepts around predictive analytics
                    so that the AI system can make assumptions, test, and learn
                    autonomously and save human time and effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
