import React from "react";
import Layout from "../components/Layout";

const Hospitality = () => {
  return (
    <Layout title={"MAF | Hospitality"}>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[70vh]">
          <img
            src="/img/hospitality2.jpg"
            className="w-full h-full object-cover bg-cover"
            alt=""
          />
          <div className="absolute w-full inset-0 bottom-0 bg-black opacity-45"></div>
          <div className="absolute w-full inset-0 flex justify-center items-center">
            <h1
              className="text-5xl sm:text-6xl font-bold text-white"
              style={{ fontFamily: "sans-serif" }}
            >
              Hospitality
            </h1>
          </div>
        </div>

        <div className="w-full mt-10">
          <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-5 font-light">
            <div className="flex flex-col items-start gap-4">
              <div>
                <p>
                  The hospitality industry has been going through many changes,
                  and the players have been trying to offer more holistic
                  experiences to customers in the last few years. One of the key
                  tools helping this industry measure, map, and deliver customer
                  expectations is data. Digitalization is also helping the
                  industry players to stay connected with the customers, seek
                  their feedback, and improvise accordingly.
                </p>
              </div>
              <div className="w-full">
                <img src="/img/hotel.png" className="md:w-1/2 mx-auto" alt="" />
              </div>
              <div className="w-full" style={{ textAlign: "justify" }}>
                <p>
                  Access to marketing automation and customer data is a key
                  factor for success in this industry, as customer experience
                  matters a lot. Customers who get what they expect will stay
                  engaged with the brand and be more loyal. However, even one
                  disappointment can lead to disasters. So, there is no scope
                  for an error.
                </p>{" "}
                <br />
                <p>
                  At MAF Group, we help ensure a perfect customer experience
                  using the latest tools like cloud, AI, data ingestion,
                  marketing automation, and analytics implementation. With
                  achievable goals like supporting real-time experience on
                  digital platforms, MAF Group has helped countless customers in
                  the hospitality industry to get the end customers the
                  best-ever experience. We helped Bourne Leisure Limited, a big
                  name in the hospitality industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hospitality;
