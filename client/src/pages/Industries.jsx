import React from "react";
import Layout from "../components/Layout";

const Industries = () => {
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="relative w-full h-[70vh]">
          <img
            src="/img/banking.webp"
            className="w-full h-full object-cover"
            alt=""
          />
          <div class="absolute inset-0 bottom-0 bg-black opacity-30"></div>
          <div class="absolute w-full inset-0 bottom-0 flex items-center justify-between text-white px-16"></div>
        </div>

        <div className="w-full mt-10 px-20 flex flex-col gap-16">
          <div className="w-[80%] m-auto flex">
            <div className="w-full my-auto mx-20 ring-1 ring-red-200 rounded-sm items-end flex">
              <img
                src="/img/bank1.avif"
                className="aspect-video object-cover"
                alt=""
              />
            </div>
            <div className="w-full my-auto">
              <p className="text-lg font-light">
                Due to the recent changes, the banking industry is witnessing
                more disruption than ever. New, advanced, and innovative
                technologies are changing how the market is structured. New
                industry players are taking a bite out of the revenues of
                existing banking organizations and challenging them at every
                turn.
              </p>
            </div>
          </div>

          <div className="w-[80%] m-auto flex pl-20">
            <div className="w-full my-auto mx-10 flex order-2">
              <img
                src="/img/bank2.avif"
                className="aspect-video object-cover"
                alt=""
              />
            </div>
            <div className="w-full my-auto">
              <p className="text-lg font-light">
                So, banking industry players who want to sustain their position
                must act now. Being digital and offering better online service
                is one thing. Another is constantly adapting to change and being
                the best versions of themselves. Otherwise, they might be at the
                risk of lagging!
              </p>
            </div>
          </div>

          <div className="w-[80%] m-auto flex">
            <div className="w-full my-auto mx-20 flex">
              <img
                src="/img/bank3.webp"
                className="aspect-video object-cover"
                alt=""
              />
            </div>
            <div className="w-full my-auto">
              <p className="text-lg font-light">
                That is where MAF Group can help. Whether you want to migrate to
                the cloud or hope to offer a better mobile experience, or even
                create cool content that motivates people to connect, our
                experts can deliver perfect solutions to you after delving
                through data-driven insights and using the latest technological
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
