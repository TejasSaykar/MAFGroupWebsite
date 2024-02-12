import Layout from "@/components/Layout";
import React from "react";
import { BsDatabaseFill } from "react-icons/bs";
import { TbBrandDatabricks } from "react-icons/tb";
import { LuSunrise } from "react-icons/lu";
import { GrDatabase } from "react-icons/gr";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiTimerFlashLine } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { PiDatabaseFill } from "react-icons/pi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { LuGalleryVerticalEnd } from "react-icons/lu";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { SiThealgorithms } from "react-icons/si";
import { GiLifeSupport } from "react-icons/gi";
import { CgDatabase } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FiAperture } from "react-icons/fi";
import { RiDatabaseFill } from "react-icons/ri";

const Blog1 = () => {
  return (
    <Layout title="Data Analytics | MAF">
      <div className="w-full mt-[4rem]">
        <div className="w-full px-5 md:w-[90%] md:px-0 mx-auto pt-5 md:pt-10">
          <div className="text-2xl md:text-4xl pb-4 font-bold px-2 md:px-6">
            <h2 className="text-2xl font-semibold my-4 text-[#071b52] text-justify">
              18 intriguing facts about Data analytics that you cannot afford to
              miss
            </h2>
          </div>

          <div className="one flex w-full flex-col md:flex-row gap-4 md:mt-5">
            <div className="w-full flex flex-col md:flex-row gap-4 px-2 pb-4">
              <div className="w-full">
                <img
                  src="/img/data2.png"
                  className="aspect-video bg-cover object-cover md:w-2/3 mx-auto"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p
                  className="text-lg font-light"
                  style={{ textAlign: "justify" }}
                >
                  In this fast-paced world, data analytics has played an
                  indispensable role in creating order out of chaos. Oceans of
                  data at our disposal and humans have found ways to leverage
                  this and create something that not only benefits us but also
                  improves our way of life, all with the help of data analysis.{" "}
                  <br />
                  If this itself is not fascinating enough for you, let us give
                  you 18 more amazing facts on how data analytics is truly
                  awe-inspiring and intriguing!
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-5 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 md:gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <RiDatabaseFill className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Dawn of data
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Did you know that the practice of analyzing data goes back to
                  the 19th century? <br /> Florence Nightingale utilized
                  statistical graphics and proved conclusively that maintaining
                  hygiene in healthcare is paramount!
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <BsDatabaseFill className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Data Explosion
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Can you guess the amount of data that gets generated each day?
                  It's 2.5 quintillion bytes, every single day! This is an
                  unprecedented amount of data that no one anticipated. Imagine
                  the potential of this data if we have proper analytical
                  workflows in place!
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <LuSunrise className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Rise of predictive analytics
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Historical legacy data have given rise to predictive
                  analytics, a subset of data analytics. Corporations leverage
                  this new form of analytics to predict future trends and
                  outcomes thus aiding in strategic decision making and risk
                  management.
                </p>
              </div>
            </div>

            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <GrDatabase className="w-0 hidden md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Data scientists
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Coined by Harvard Business Review, the term ‘data scientists’
                  are gaining prominence, and these professionals are playing
                  the crucial role of interpreting complex data sets and
                  deriving insights that are actionable and strategic.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <GiArtificialIntelligence className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Synergy of cutting-edge technologies
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  The seamless integration of Artificial Intelligence (AI) and
                  Machine Learning (ML) have revolutionized the way we conduct
                  analysis by enhancing our prescriptive and predictive
                  analytical capabilities thus driving efficiency across
                  industries.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <RiTimerFlashLine className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Real-time analytics
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  In this era where we want instant gratification and swift
                  responses are the key for success, real-time analytics are a
                  god send. With analysis getting generated as data comes in,
                  precise and accurate decision-making and responding to
                  emerging trends can be achieved with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdPrivacyTip className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Privacy concerns
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  One of the crucial problems for data professionals to this day
                  is managing privacy concerns. With the sheer volume of data
                  generated daily, leveraging them for analytics while
                  maintaining their security has become a paramount worry.
                </p>
              </div>
            </div>

            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <PiDatabaseFill className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">Dark Data</h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  As the name implies, a lot of organizations have ‘Dark Data’,
                  Data that lies in the dark, dormant and unutilized thus
                  waiting to be effectively harnessed. This acts as an untapped
                  opportunity that once unlocked can produce significant results
                  for the companies.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <BsFillArrowUpRightCircleFill className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Quality over Quantity
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Ensuring the quality of data is vital through and through
                  since insights derived from accurate and reliable raw
                  materials yield high-quality output that can have major
                  positive impact.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <LuGalleryVerticalEnd className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Story telling
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Contrary to common belief, Data analytics is not just
                  interpreting data and graphs into insights. It is a delicate
                  art of storytelling where strategic outlooks are presented in
                  compelling narratives that persuade the reader to act.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdOutlineSettingsApplications className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Cross-industry applications
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  From finance to entertainment, healthcare to hospitality, the
                  applications of data analytics transcend industries and
                  showcases its relevance by accumulating myriads of
                  applications.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <SiThealgorithms className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Ethical considerations
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  With the rise of data analytics, the concerns about ethical
                  usage have also risen. With issues stacking up like bias in
                  algorithms, responsible AI use, equitable data representation
                  and privacy problems, data engineers have challenging days
                  ahead.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <GiLifeSupport className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Life Savior
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Data analytics is revolutionizing the healthcare industry and
                  enabling personalized medicine and optimizing patient care
                  pathways by understanding their unique genetic makeup and
                  predicting disease outbreaks.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <CgDatabase className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Data democratization
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Democratizing data ensures that individuals within the
                  organization can access and analyze data independently based
                  on their levels, thus improving safety and security while also
                  restricting access thus fostering a data-driven
                  decision-making process.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <GiShoppingCart className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  E-commerce giant
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Ever wondered how e-commerce sites display ads for the same
                  product you wished to buy? Data analytics is the answer to
                  that! These companies further leverage this data to curate
                  your customer experience, optimize pricing strategies, cater
                  to the marketing trends and boost consumerism.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdOutlineErrorOutline className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Adoption challenges
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Even though analytics adoption can be mighty helpful,
                  effective adoption does not come without its challenges. From
                  resistance to change, skill gaps and budget for appropriate
                  training and technology there are many hurdles to navigate
                  before the benefits are reaped.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-3 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <FiAperture className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Quantum Leap
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  The future of data analytics is introducing exciting
                  possibilities with the emergence of quantum computing that
                  promises a paradigm shift to unparalleled processing power and
                  opening new frontiers for development.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <TbBrandDatabricks className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Big Data vs Small Data
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Just because we stress about large amounts of data, doesn’t
                  mean that small portions cannot be a game changer. Simple and
                  easy to interpret bite sized data has changed the trajectory
                  of many small businesses, especially in niche markets.
                </p>
              </div>
            </div>
          </div>

          <div className="md:mx-10 mx-2">
            <p style={{ textAlign: "justify" }}>
              Analysis of data transcends time – with applications from the
              past, the unlimited opportunities it produces in the present and
              untapped potential for the future. Understanding the nuances of
              data analytics is impervious in staying ahead of the competition
              in this changing dynamic, digital landscape.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog1;
