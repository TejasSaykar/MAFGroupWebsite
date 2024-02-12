import React from "react";
import Layout from "../components/Layout";

const FMCG = () => {
  return (
    <Layout title={"MAF | FMCG"}>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[50%] md:h-[74vh]">
          <img
            src="/img/fmcg1.jpeg"
            className="w-full h-full bg-cover object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-30"></div>
          <div className="absolute w-full inset-0 bottom-0 flex items-center justify-center text-white ">
            <h2 className="mx-2 md:mx-0 text-4xl font-bold">
              Fast Moving Consumer Goods
            </h2>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="w-full px-4 md:w-[90%] m-auto flex flex-col items-start">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full order-2 md:order-1">
                <h1
                  className="text-2xl font-bold text-[#071b52] dark:text-rose-600"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Fast Moving Consumer Goods
                </h1>
                <p className="font-light mt-1 text-justify">
                  The world of retail and e-commerce is changing thanks to the
                  rise in trends like borderless business, cross-border
                  commerce, and international online retail growth rapidly. Two
                  years back, the sales from online purchases were 13.6 per cent
                  only. But it has seen a tremendous improvement in the past
                  couple of years.
                </p>{" "}
                <br />
                <p className="font-light">
                  All this means is that an e-commerce company needs to make
                  itself stand out if it wants to stay ahead of the competition
                  and make the most of the rapid growth in the industry.
                </p>{" "}
                <br />
                <p className="font-light text-justify">
                  One of the things that can help greatly is personalization and
                  leveraging the content to target specific customers. Mobile
                  App integration, Digital Transformation, Cloud NLP, and Data
                  Migration also help greatly. MAF Group can handle it all for
                  you and lets you leverage advanced technologies to play a
                  vital role in the future of consumerism.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img src="/img/goods.png" alt="" />
              </div>
            </div>
            {/* <p className="text-xl font-light">
              One of the things that can help greatly is personalization and
              leveraging the content to target specific customers. Mobile App
              integrations, Digital Transformations, Cloud NLP, and Data
              Migration also help greatly. MAF Group can handle it all for you
              and lets you leverage advanced technologies to play a vital role
              in the future of consumerism.
            </p> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FMCG;
