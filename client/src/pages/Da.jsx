import React from "react";
import Layout from "../components/Layout";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Da = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"MAF | Data Analytics"}>
      <div className="mt-[4rem] w-full">
        {/* TOP SECTION */}

        {/* <div className="relative h-[90vh] w-full sm:h-[70vh] top">
          <img
            src="/img/servicesBanner.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute w-full inset-0 bottom-0 flex flex-col md:items-center md:justify-center pt-12 gap-5 text-white px-5 lg:px-16">
            <h3
              style={{ textShadow: "1px 1px black" }}
              className="text-4xl md:text-5xl font-bold text-center"
            >
              Data Analytics
            </h3>
            <p
              className="md:text-start lg:text-xl font-light text-justify"
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
        </div> */}

        {/* HERO SECTION */}

        {/* <div className="w-full pb-10 mt-8">
          <div className="w-full md:w-[90vw] m-auto px-5 md:px-20 flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-5 text-[#071b52] dark:text-rose-600">
              Our Expertise
            </h1>
            <div className="w-full flex-col md:flex-row flex justify-center items-start gap-10">
              <div className="left w-full flex flex-col transition-transform hover:-translate-y-2 hover:shadow-lg items-center flex justify-center dark:shadow-slate-700">
                <img
                  src="/img/service1.jpg"
                  className="aspect-video rounded-t-xl object-cover"
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
                  src="/img/service2.jpg"
                  className="h-auto aspect-video rounded-t-xl object-cover"
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

            <div className="mt-14">
              <div className="w-full flex-col md:flex-row flex justify-center items-start gap-10">
                <div className="left w-full flex flex-col transition-transform hover:-translate-y-2 hover:shadow-lg dark:shadow-slate-700">
                  <img
                    src="/img/nlp.jpg"
                    className="aspect-video rounded-t-xl object-cover"
                    alt="Natural Language Processing"
                  />
                  <h2 className="text-2xl mt-4 px-2 text-[#071b52] dark:text-rose-600 font-semibold">
                    NLP- Natural Language Processing
                  </h2>
                  <p className="px-2 font-light text-justify">
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
                    src="/img/machine.jpg"
                    className="h-auto aspect-video rounded-t-xl object-cover"
                    alt="Machine Learning"
                  />
                  <h2 className="text-2xl mt-4 px-2 text-[#071b52] dark:text-rose-600 font-semibold">
                    Machine Learning
                  </h2>
                  <p className="px-2 font-light text-justify">
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
        </div> */}

        <div className="top h-screen w-full">
          <div className="relative w-full flex h-full">
            <div className="hidden md:block bg-gray-100/90 w-full"></div>
            <div className="absolute shadow-2xl p-5 md:w-1/2 md:mx-auto gap-3 bg-white flex flex-col top-10 md:top-32 mx-5 md:left-20">
              <h2 className="text-3xl font-semibold">Data Analytics</h2>
              <h3 className="text-xl font-medium">
                Achieve Agility with Advanced Data Analysis
              </h3>
              <p className="text-lg">
                We help you manage your data effectively, while ensuring you get
                real-time insights for agile decision making.{" "}
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
                src="/img/da-min.jpg"
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
                <img className="w-1/3 mx-auto" src="/img/app1.png" alt="" />
                <div>
                  <h1>Liberate data out of the siloes </h1>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/app2.png" alt="" />
                <div>
                  <h2>Systematic data organization </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/app3.png" alt="" />
                <div>
                  <h2>Deriving data-driven insights</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center text-xl font-medium">
                <img className="w-1/3 mx-auto" src="/img/app4.png" alt="" />
                <div>
                  <h2>Amplify business agility </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold pt-4">Our Solution</h2>
            <p className="py-3">
              Transform your data into actionable insights by leveraging our
              end-to-end data analytics service.
            </p>
            <div className="pt-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/analytics.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">Data Analytics</h2>
                  <p>
                    From selecting the right automation platform to devising
                    actionable strategy, we ensure a smooth implementation that
                    requires little to no intervention. Our team diligently
                    designs workflows and equip your team with the training to
                    facilitate seamless transition.
                  </p>
                </div>
                <div className="flex flex-col shadow-lg p-5 gap-2">
                  <img src="/img/realtime1.png" className="h-16 w-16" alt="" />
                  <h2 className="text-lg font-medium">Real-Time Analytics</h2>
                  <p>
                    We equip you with everything you need to swiftly transform
                    data into actionable insights. Predict failures and prepare
                    for the future by taking advantage of real-time analytics,
                    thus saving time and effort.
                  </p>
                </div>
              </div>
              <div className="w-full mt-5 p-5 shadow-lg flex flex-col gap-3">
                <img src="/img/nlp.png" className="h-16 w-16" alt="" />
                <h2 className="text-lg font-medium">
                  NLP - Natural Language Processing
                </h2>
                <p>
                  Seamless communication between humans and computers is the
                  need of the hour what with the uprising of automation and
                  chatbots. Adapt NLP in your business strategy by capitalizing
                  on our techniques such as:
                </p>
                <div className="flex md:flex-row flex-col justify-around">
                  <div>
                    <ul className="list-disc px-5">
                      <li>Machine Learning-driven Information Extraction</li>
                      <li>
                        Text classification for Insights generation and error
                        reduction{" "}
                      </li>
                      <li>
                        Named Entity Recognition for refined entity extraction{" "}
                      </li>
                      <li>Intent Classification for dataset categorization </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 md:pl-0">
                      <li>Relationship Extraction </li>
                      <li>Content Clustering</li>
                      <li>Fact Extraction</li>
                      <li>Text Generation</li>
                      <li>Summarization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full mt-5 p-5 shadow-lg flex flex-col gap-3">
                <img
                  src="/img/machine-learning.png"
                  className="h-16 w-16"
                  alt=""
                />
                <h2 className="text-lg font-medium">Machine Learning</h2>
                <p>
                  Explore the boundless possibilities of data by not only
                  relying on traditional predictive analysis but also on
                  AI-driven Machine Learning solutions. We utilize ML to
                  autonomously learn, adapt and understand your organizational
                  data thereby coming up with accurate analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-bold py-6 w-[90%] mx-auto">Benefits</h1>
          <div className="md:w-1/2 mx-auto p-5">
            <div className="border-l-[3px] border-rose-500">
              <ul className="list-disc pl-7">
                <li>
                  Improve business decision making and organizational agility{" "}
                </li>
                <li>Real-time data processing for swift analysis </li>
                <li>Adapt quicker to changes by leveraging AI & ML </li>
              </ul>
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
        </div>

        <div className="w-full mt-5">
          <div className="w-[90%] mx-auto">
            <h2 className="text-2xl font-bold py-6">Tool Landscape </h2>
            <div className="grid md:grid-cols-3 gap-4 my-6 w-full">
              <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/Snowflake.svg"
                  className="w-[200px] object-cover"
                  alt=""
                />
                <h2 className="text-xl italic">Snowflake</h2>
              </div>
              <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/bigquery.svg"
                  className="w-[100px] object-cover"
                  alt=""
                />
                <h2 className="text-xl italic mt-4">BigQuery</h2>
              </div>
              <div className="w-full shadow-lg p-5 items-center flex justify-center flex-col">
                <img
                  src="/img/redshift.png"
                  className="w-[200px] object-cover"
                  alt=""
                />
                <h2 className="text-xl italic">AWS Redshift </h2>
              </div>
              <div className="w-full shadow-lg p-5  items-center flex justify-center">
                <img
                  src="/img/googleAna.webp"
                  className="w-[200px] object-cover"
                  alt=""
                />
              </div>
              <div className="w-full shadow-lg p-5  items-center flex justify-center flex-col">
                <img
                  src="/img/adobe.png"
                  className="w-[200px] object-cover"
                  alt=""
                />
                <h2 className="text-xl italic">Adobe Analytics</h2>
              </div>
              <div className="w-full shadow-lg p-5  items-center flex justify-center flex-col">
                <img
                  src="/img/pawerbi.png"
                  className="w-[200px] aspect-video object-cover"
                  alt=""
                />
                <h2 className="text-xl italic">Power BI</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Da;
