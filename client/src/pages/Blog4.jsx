import Layout from "@/components/Layout";
import React from "react";

import { FaRegFileWord } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { HiChartPie } from "react-icons/hi";
import { RiFocus3Line } from "react-icons/ri";
import { SiCyberdefenders } from "react-icons/si";
import { IoCloudOffline } from "react-icons/io5";

const Blog4 = () => {
  const openwebsite = (url) => {
    window.open(url, "_blanck");
  };

  return (
    <Layout title={"Digital Transformation | MAF"}>
      <div className="w-full mt-[4rem]">
        <div className="w-full px-5 md:w-[90%] md:px-0 mx-auto pt-10">
          <div className="text-xl md:text-2xl pb-4 font-bold px-2 md:px-6">
            <h1 className="text-[#071b52] text-center dark:text-rose-600">
              Exciting Digital Transformation Trends You Can't Ignore
            </h1>
            <p className="text-center text-sm font-medium my-3">
              27 July, 2022
            </p>
          </div>

          <div className="one flex w-full flex-col md:flex-row gap-4 mt-2 md:mt-0">
            <div className="w-full flex flex-col md:flex-row gap-4 px-2 pb-4">
              <div className="w-full my-auto">
                <img
                  src="/img/dt1.png"
                  className="aspect-video bg-cover object-cover"
                  alt=""
                />
              </div>
              <div className="w-full my-auto">
                <p className="font-light" style={{ textAlign: "justify" }}>
                  Digital transformation has been on many companies' to-do
                  lists, especially since the onset of the COVID-19 pandemic. If
                  you own or manage a company, you need to know about the
                  exciting digital transformation trends you can't ignore.
                </p>
                <h2 className="mt-5 text-xl text-[#071b52] font-semibold">
                  But first, what is Digital Transformation?
                </h2>
                <p style={{ textAlign: "justify" }}>
                  If you aren’t aware of it, digital transformation simply
                  refers to how well an organization has adopted new digital
                  technologies in its operations to accelerate growth, boost
                  profits and simplify processes. It’s also an ongoing process,
                  not a one-off event. It helps organizations get an edge over
                  competitors and optimally enhance their operations.
                </p>
              </div>
            </div>
          </div>

          <div className="md:mx-7 mx-2">
            <p className="text-xl font-semibold text-[#071b52]">
              What are the Exciting Digital Transformation Trends You Can’t
              Ignore?
            </p>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-10">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <SlSocialDropbox className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Creation of New Digital Business Models
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  A business must focus on the creation of a unique model that
                  suits the specifics of the business. Customers want a smooth
                  digital experience from every brand. So, you need to deliver
                  that if you hope to retain your customers. Combine your
                  expertise with online technologies to meet your customer needs
                  flawlessly.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <HiChartPie className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Investment in Predictive Analytics
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  The use of predictive analytics to make reliable prognoses for
                  the future is rising. It helps in foreseeing upcoming trends,
                  preparing for the future by viable strategy creation, and
                  responding to market needs quickly. AI and machine learning
                  can support predictive analysis. Soon, small and mid-size
                  businesses will seek such technologies. You should, too, if
                  you are after business growth and a safer future.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-2">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <RiFocus3Line className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Focus on Data
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Data is everywhere around us. A business seeking digital
                  transformation must access relevant and useful data to gain
                  valuable business insights. Hire the service of data
                  professionals who simplify the bulk of data in simple words
                  and allow you to make decisions quickly. Encourage
                  data-centric work culture whenever possible.
                </p>
              </div>
            </div>

            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <SiCyberdefenders className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Attention to Cybersecurity
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  To retain customer trust, businesses must ensure that their
                  data is safe. For that, the businesses need to pay attention
                  to and reserve funds for cybersecurity. The vital data must be
                  encrypted, and employees and customers should know about
                  proper data management. Businesses must also prepare for and
                  have action plans for cyber-attacks or data breach attempts.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col md:flex-row gap-4 mt-2">
            <div className="w-full md:w-1/2 flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <IoCloudOffline className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Trusting Multi-Cloud Solutions
                </h2>
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Companies and their clients should be able to access the work
                  via the internet. It is done via cloud computing, which
                  reduces the need to purchase and maintain onsite hardware.
                  Cloud solutions let a business enhance collaboration, be more
                  flexible, and accelerate digital transformation. Most
                  forward-thinking businesses are not depending on a single
                  cloud solution. Instead, they are utilizing multiple clouds.
                  Hybrid-cloud solutions are also gaining a lot of popularity.
                  They ensure a business gets better security of data, easier
                  migrations from one provider to the other, and a more
                  competitive marketplace.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 bg-gray-50">
            <div className="w-full md:w-1/2 mx-auto flex flex-col px-2 md:px-4 pb-4 mt-5 gap-2">
              <div className="hidden md:flex gap-3 items-center justify-center">
                <FaRegFileWord className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
                <h2 className="text-xl text-[#071b52] font-bold">
                  Final Words
                </h2>
              </div>
              <div className="w-full text-xl font-light">
                <p
                  className="mt-2 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Digital transformation is an evolving process all businesses
                  must focus on. Keeping up with the latest tools, technologies,
                  and trends is essential for successful digital transformation.
                  If your business needs help with digital transformation or
                  wants a partner who will make the journey easier, trust MAF
                  Group. Get in touch today to know more.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mx-auto mb-5">
            <h2 className="text-[#071b52] font-semibold mt-1">
              - Shruti Bhandari. <br />
            </h2>
          </div>

          <div className="md:mx-10 mx-2">
            <h2>Reference:</h2>
            <p
              style={{ textAlign: "justify" }}
              onClick={() =>
                openwebsite(
                  "https://devrix.com/tutorial/10-exciting-digital-transformation-trends-2022/"
                )
              }
              className="text-sky-700 underline cursor-pointer"
            >
              https://devrix.com/tutorial/10-exciting-digital-transformation-trends-2022/
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog4;
