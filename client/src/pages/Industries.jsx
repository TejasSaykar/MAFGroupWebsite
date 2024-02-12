import React from "react";
import Layout from "../components/Layout";

const Industries = () => {
  return (
    <Layout title={"MAF | Banking"}>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <img
            src="/img/bank3.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
          <div className="absolute w-full inset-0 bottom-0 flex items-center justify-center text-white px-16">
            <h2
              className="text-5xl text-center font-bold"
              style={{ textShadow: "1px 1px black" }}
            >
              Banking
            </h2>
          </div>
        </div>

        <div className="w-full mt-10 px-8 sm:px-20 xl:px-20 flex justify-start flex-col md:flex-row gap-16">
          <div className="w-full flex-col items-center mx-auto flex">
            <div className="w-full my-auto mx-20 ring-1 ring-red-200 rounded-sm items-end flex">
              <img
                src="/img/bank1.avif"
                className="aspect-video object-cover"
                alt=""
              />
            </div>
            <div className="w-full my-auto">
              <p className="font-light text-justify mt-5">
                Due to the recent changes, the banking industry is witnessing
                more disruption than ever. New, advanced, and innovative
                technologies are changing how the market is structured. New
                industry players are taking a bite out of the revenues of
                existing banking organizations and challenging them at every
                turn.
              </p>
            </div>
          </div>

          <div className="w-full flex-col items-start justify-start mx-auto flex">
            <div className="w-full my-auto flex">
              <img
                src="/img/bank2.avif"
                className="aspect-video object-cover w-full"
                alt=""
              />
            </div>
            <div className="w-full my-auto">
              <p className="font-light text-justify mt-5 md:mt-0">
                So, banking industry players who want to sustain their position
                must act now. Being digital and offering better online service
                is one thing. Another is constantly adapting to change and being
                the best versions of themselves. Otherwise, they might be at the
                risk of lagging!
              </p>
            </div>
          </div>

          <div className="w-full flex-col justify-start items-start mx-auto flex">
            <div className="w-full mx-auto flex pt-4">
              <img
                src="/img/bank3.webp"
                className="aspect-video object-cover"
                alt=""
              />
            </div>
            <div className="w-full my-auto mt-5">
              <p className="font-light text-justify">
                That is where MAF Group can help. Whether you want to migrate to
                the cloud or hope to offer a better mobile experience, or even
                create cool content that motivates people to connect, our
                experts can deliver perfect solutions to you after delving
                through data driven insights and using the latest technological
                tools that go with the flow and improve with time. We have
                helped many clients in the banking sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Industries;
