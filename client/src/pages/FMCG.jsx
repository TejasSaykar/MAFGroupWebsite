import React from "react";
import Layout from "../components/Layout";

const FMCG = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[74vh]">
          <img
            src="/img/fmcg.png"
            className="w-full h-full bg-center object-cover"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-40"></div>
          <div class="absolute w-full inset-0 bottom-0 flex items-center justify-center text-white "></div>
        </div>

        <div className="w-full mt-10">
          <div className="w-[70%] m-auto flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold text-[#071b52]" style={{fontFamily: "sans-serif"}}>
              Fast Moving Consumer Goods
            </h1>
            <p className="text-xl font-light" >
              The world of retail and e-commerce is changing thanks to the rise
              in trends like borderless business, cross-border commerce, and
              international online retail growth rapidly. Two years back, the
              sales from online purchases were 13.6 per cent only. But it has
              seen a tremendous improvement in the past couple of years.
            </p>
            <p className="text-xl font-light">
              All this means is that an e-commerce company needs to make itself
              stand out if it wants to stay ahead of the competition and make
              the most of the rapid growth in the industry.
            </p>
            <p className="text-xl font-light">
              One of the things that can help greatly is personalization and
              leveraging the content to target specific customers. Mobile App
              integrations, Digital Transformations, Cloud NLP, and Data
              Migration also help greatly. MAF Group can handle it all for you
              and lets you leverage advanced technologies to play a vital role
              in the future of consumerism.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FMCG;
