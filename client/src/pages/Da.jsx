import React from "react";
import Layout from "../components/Layout";

const Da = () => {
  return (
    <Layout title={"MAF | Data Analytics"}>
      <div className="mt-[4rem] w-full">
        {/* TOP SECTION */}

        <div className="relative h-[90vh] w-full sm:h-[70vh] top">
          <img
            src="/img/data1.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
          <div className="absolute w-full inset-0 bottom-0 flex flex-col md:items-center md:justify-center pt-12 gap-5 text-white px-5 lg:px-16">
            <h3 className="text-4xl font-bold text-center">Data Analytics</h3>
            <p
              className="md:text-start lg:text-2xl font-light text-justify"
              style={{ textShadow: "1px 1px black" }}
            >
              Companies have more data than before but less time to utilize it.
              They require advanced analytical tools to properly utilize and
              transform the way they use data. MAF Group comes equipped with the
              data assets, governance and infrastructure to bring data out of it
              siloes, categorize, order and relate it in a comprehensive manner.
              We provide you with the technology, team and tools required to
              make your organization data-oriented and agile. From source
              evaluation to quality assessment, Integration and Modelling we
              have everything to deliver an exhaustive, end-to-end service that
              covers all your requirements.
            </p>
          </div>
        </div>

        {/* HERO SECTION */}

        <div className="w-full mt-8">
          <div className="w-full md:w-[80vw] m-auto px-5 md:px-20 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-[#071b52] dark:text-rose-600">
              Our Expertise
            </h1>
            <div className="w-full flex-col md:flex-row flex justify-center items-start gap-10">
              <div className="left w-full flex flex-col transition-transform hover:-translate-y-2 hover:shadow-lg dark:shadow-slate-700">
                <img
                  src="/img/data2.png"
                  className="aspect-video object-cover"
                  alt="Data Analytics"
                />
                <h2 className="text-2xl pt-4 px-2 text-[#071b52] dark:text-rose-600 font-semibold">
                  Data Analytics
                </h2>
                <p className="px-2 text-justify">
                  To automate data analytics, we will pick the right automation
                  platform that suits your business needs, create a strategy
                  that works and build an actionable plan. We also set up the
                  needed software and ensure its smooth implementation, along
                  with creating automated workflows that work for your
                  organization. You can also trust us to train your team to
                  ensure effective operations without outside assistance.
                </p>
              </div>
              <div className="right w-full flex flex-col transition-transform hover:-translate-y-2 hover:shadow-md dark:shadow-slate-700">
                <img
                  src="/img/data3.png"
                  className="h-auto aspect-video object-cover"
                  alt="Real Time Data Analytics"
                />
                <h2 className="text-2xl mt-4 px-2 text-[#071b52] dark:text-rose-600 font-semibold">
                  Real-Time Analytics
                </h2>
                <p className="px-2 text-justify">
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
              <div className="w-full flex-col md:flex-row flex justify-center items-start gap-10">
                <div className="left w-full flex flex-col transition-transform hover:-translate-y-2 hover:shadow-lg dark:shadow-slate-700">
                  <img
                    src="/img/data4.png"
                    className="aspect-video object-cover"
                    alt="Natural Language Processing"
                  />
                  <h2 className="text-2xl mt-4 px-2 text-[#071b52] dark:text-rose-600 font-semibold">
                    NLP- Natural Language Processing
                  </h2>
                  <p className="px-2 font-thin text-justify">
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
                <div className="right w-full flex flex-col  transition-transform hover:-translate-y-2 hover:shadow-md dark:shadow-slate-700">
                  <img
                    src="/img/data5.png"
                    className="h-auto aspect-video object-cover"
                    alt="Machine Learning"
                  />
                  <h2 className="text-2xl mt-4 px-2 text-[#071b52] dark:text-rose-600 font-semibold">
                    Machine Learning
                  </h2>
                  <p className="px-2 font-thin text-justify">
                    As an independent consultancy that loves data science, we
                    use machine learning and statistics to help organizations
                    make the most of data and unleash its full potential. We use
                    the latest data science and technology to ensure your
                    organization benefits from it and explores its potential.
                    <br />
                    <br />
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

export default Da;
