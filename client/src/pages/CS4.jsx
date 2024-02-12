import React from "react";
import Layout from "../components/Layout";

const CS4 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-4 pt-5">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            Uplift revenue and implement real-time targeting in marketing
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Problem Statement:
            </h2>
            <p className="font-light">
              Our client wanted to create real-time marketing segments to ensure
              that their users are dynamically engaged throughout their digital
              journeys. They also wanted to make sure that there was a
              substantial increase in their revenue. We navigated their
              requirements and delivered the following solutions to achieve
              their objectives.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
              Our Solution:
            </h2>
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="w-full order-2 md:order-1">
                <p className="font-light">
                  We initiated the project by systematically deploying Tealium
                  AudienceStream (TAS) and seamlessly integrated them with their
                  existing marketing channels. The once-muted systems came alive
                  with this integration and were prepped for dynamic, real-time
                  engagement.
                </p>
                <p className="font-light">
                  As a next step, we introduced the powerful combination of
                  Tealium EventStream and AWS Redshift. Tealium EventStream
                  orchestrated real-time customer interactions while being
                  backed up by AWS Redshift that acts as a data repository.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/revenue.png"
                  className="aspect-video object-cover"
                  alt=""
                />
              </div>
            </div>

            <p className="font-light">
              The efficiency of real-time marketing was yet again proved, as
              this strategy of ours bore tangible results. The{" "}
              <span className="font-semibold text-[#071b52] dark:text-rose-600">
                {" "}
                paid and email conversions experienced a remarkable 35% increase{" "}
              </span>{" "}
              thus indicating a successful solution implementation and a
              profound transformation.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS4;
