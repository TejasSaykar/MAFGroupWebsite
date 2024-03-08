import Layout from "@/components/Layout";
import React from "react";

import { MdPriceCheck } from "react-icons/md";
import { PiTargetLight } from "react-icons/pi";
import { GiPathDistance } from "react-icons/gi";
import { MdNetworkWifi } from "react-icons/md";
import { SiGamedeveloper } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineBackup } from "react-icons/md";
import { FaRegFileWord } from "react-icons/fa";

const Blog2 = () => {
  const openwebsite = (url) => {
    window.open(url, "_blanck");
  };

  return (
    <Layout title={"Cloud Solution | MAF"}>
      <div className="w-full mt-[4rem]">
        <div className="w-full px-5 md:w-[90%] md:px-0 mx-auto pt-10">
          <div className="text-2xl md:text-2xl pb-4 font-bold px-2 md:px-7">
            <h1 className="text-[#071b52] text-center dark:text-rose-600">
              Advantages of Using Google Cloud Hosting
            </h1>
            <p className="text-center text-sm font-medium my-3">
              30 July, 2022{" "}
            </p>
          </div>

          <div className="one flex w-full flex-col md:flex-row gap-4 mt-2">
            <div className="w-full flex flex-col md:flex-row gap-4 px-2 pb-4">
              <div className="w-full">
                <img
                  src="/img/cloud2.png"
                  className="aspect-video bg-cover object-cover"
                  alt=""
                />
              </div>
              <div className="w-full">
                <p className="font-medium">
                  You might come across many options when considering cloud
                  hosting for a business and Google Cloud is one of the most
                  appealing options. Here we have listed the top advantages of
                  using Google Cloud Hosting that might help you make a better
                  decision.
                </p>
                <h2 className="mt-3 text-xl font-semibold text-[#071b52]">
                  The Basics of Google Cloud
                </h2>
                <p className="font-medium">
                  Cloud Hosting offered by Google is called Google Cloud
                  Hosting. The tech giant provides it for free for the first 12
                  months if you opt for the free trial plan. After that, you can
                  pick from different Google Cloud Hosting Pricing plans. If you
                  are not looking to pay instantly, you can also select Google
                  Cloud Free version, i.e., Google Cloud Platform Free Tier,
                  which provides the prospect to use and learn Google Cloud Free
                  services.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-semibold text-[#071b52] md:mx-5 mx-2">
              What are the Top Advantages of Using Google Cloud Hosting?
            </h1>
          </div>

          <div className="two flex w-full flex-col gap-4 mt-2">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdPriceCheck className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Pricing is Decent
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  The pricing of Google Cloud Hosting plans is decent as they
                  are cheaper than hosting plans offered by other platforms.
                  Google Cloud Hosting also offers per sec billing plans. The
                  subscription never binds a person as they can stop it anytime,
                  they want. In Google Cloud Hosting, no upfront cost is needed,
                  so you are never required to pre-pay. Google also offers a
                  lucrative discount on all its services.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <PiTargetLight className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Better Execution
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Google has boosted the performance of the Google Cloud Hosting
                  service. You can access data from anywhere on the planet
                  remotely. Google Cloud machines can also manage multiple
                  visitors at the same time. It can also execute numerous
                  complex operations with ease at its network.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col gap-4 mt-2 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <GiPathDistance className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Live Migration
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Live Migration is a key benefit that helps Google Cloud stand
                  apart from its competitors. It includes the migration of
                  virtual machines. As Google Cloud Hosting has a vast network,
                  users can easily migrate their machines.
                </p>
              </div>
            </div>

            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdNetworkWifi className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  A Private Network
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Google provides its network to each customer to allow them
                  more scalability and better control over the network. A
                  private network is always better for you as a user as it
                  offers maximum time and efficiency. Google also uses efficient
                  fiber optic cables to spread its network that can seamlessly
                  bear any amount of traffic.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col gap-4 mt-2 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <SiGamedeveloper className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Constant Development
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Google Cloud Hosting, which is a part of Google Cloud
                  Platform, has a huge infrastructure that is a public domain.
                  Google is focused on developing the infrastructure rapidly as
                  per customer requirements. It is constantly expanding to new
                  locations and will continue to do so in the future.
                </p>
              </div>
            </div>
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdOutlineSecurity className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Enhanced Security
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  There is no doubt about the fact that Google is focused on the
                  security of data. It has its security model and a team of
                  skilled and experienced security professionals who help the
                  company protect data on all servers. All the data on Cloud
                  Platform Services is encrypted and hence is safer. A strong
                  network of ISPs also helps Google to secure its network.
                </p>
              </div>
            </div>
          </div>

          <div className="two flex w-full flex-col gap-4 mt-2 md:mt-5">
            <div className="w-full flex px-2 md:px-4 pb-4 gap-4">
              <div className="hidden md:w-14 md:flex items-start">
                <MdOutlineBackup className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
              </div>
              <div className="w-full text-xl font-light">
                <h2 className="text-xl text-[#071b52] font-bold">
                  Strong Backups
                </h2>
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  Google has built-in redundant backups. If some part of a
                  component is not functioning, then Google will create its
                  backup. So, your data will be stored in various locations. In
                  case of a mishap, you won't lose your data. It not only helps
                  ensure data integrity but also ensures durability and
                  reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 bg-gray-50">
            <div className="w-full md:w-1/2 mx-auto flex flex-col px-2 md:px-4 pb-4 mt-5">
              <div className="hidden md:flex gap-5 items-center justify-center">
                <FaRegFileWord className="w-0 md:block bg-[#4f514e] text-white p-2 h-12 md:w-12 rounded-full" />
                <h2 className="text-xl text-[#071b52] font-bold">
                  Final Words
                </h2>
              </div>
              <div className="w-full text-xl font-light"></div>
              <div className="">
                <p
                  className="mt-1 text-base text-black font-medium"
                  style={{ textAlign: "justify" }}
                >
                  All the advantages of using Google Cloud Hosting make it a
                  reliable option for organizations and entities. You should
                  consider it if you are looking for a good cloud hosting
                  provider you can rely on for years.
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mx-auto mb-5">
            <h2 className="text-[#071b52] font-semibold mt-1">
              - Shruti Bhandari. <br />
            </h2>
          </div>

          <div className="md:mx-10 pb-10 mx-2">
            <h2 className="font-medium">Reference:</h2>
            <p
              style={{ textAlign: "justify" }}
              onClick={() =>
                openwebsite(
                  "https://www.whizlabs.com/blog/google-cloud-hosting/"
                )
              }
              className="text-sky-700 underline cursor-pointer"
            >
              https://www.whizlabs.com/blog/google-cloud-hosting/
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog2;
