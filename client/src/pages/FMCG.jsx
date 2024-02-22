import React from "react";
import Layout from "../components/Layout";

const FMCG = () => {
  return (
    <Layout title={"MAF | FMCG"}>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[50%] md:h-[74vh]">
          <img
            src="/img/fmcg1.jpg"
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
          <div className="w-full px-4 md:w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="w-full">
                <img
                  src="/img/goods.png"
                  className="aspect-video shadow-sm rounded-md object-cover bg-cover"
                  alt=""
                />
              </div>
              <div>
                <p className="font-light mt-1 text-justify">
                  The world of retail and e-commerce is changing thanks to the
                  rise in trends like borderless business, cross-border
                  commerce, and international online retail growth rapidly. Two
                  years back, the sales from online purchases were 13.6 per cent
                  only. But it has seen a tremendous improvement in the past
                  couple of years.
                </p>{" "}
              </div>
            </div>

            <div>
              <div>
                <img
                  src="/img/fmcg1.png"
                  className="aspect-video shadow-sm rounded-md object-cover bg-cover"
                  alt=""
                />
              </div>
              <div>
                <br />
                <p className="font-light">
                  All this means is that an e-commerce company needs to make
                  itself stand out if it wants to stay ahead of the competition
                  and make the most of the rapid growth in the industry.
                </p>{" "}
              </div>
            </div>
            <div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/fmcg2.png"
                  className="aspect-video shadow-sm rounded-md object-cover bg-cover"
                  alt=""
                />
              </div>
              <div>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FMCG;
