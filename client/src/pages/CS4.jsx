import React from "react";
import Layout from "../components/Layout";

const CS4 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Driving Revenue Uplift and Real-Time Targeting in Banking
                Industry
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">Banking</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">United Kingdom</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]  md:ml-0 text-justify md:text-start">
                Tealium EventStream, Tealium AudienceStream, AWS Redshift,
                Marketing Automation, Customer Data Platform (CDP)
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Result : </h2>
              <div className="flex flex-col gap-1  md:ml-8">
                <h3>• 35% Increase in Paid and Email Conversions</h3>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className="text-justify md:text-start md:ml-8">
                Our distinguished client, a British universal bank and financial
                service group has a multinational footprint that extends to East
                Asia. With headquarters in London and a global customer base,
                they understood the imperativeness of being able to dynamically
                engage with their users throughout their digital journey to
                ensure revenue growth. The client enlisted our expertise to
                implement real-time marketing segmentation solutions to achieve
                this objective.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className="text-justify md:text-start md:ml-8">
                We devised a comprehensive solution strategy with their two
                primary objectives in mind which were to establish real-time
                marketing segments for dynamic user engagement and to achieve a
                substantial increase in revenue.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="text-justify md:text-start md:ml-8">
                  As an initial step, we strategically deployed Tealium
                  AudienceStream (TAS) to integrate the client’s marketing
                  channels seamlessly and revitalize their dormant systems. This
                  primed their channels for dynamic, real-time engagement that
                  resonated with their users across various touchpoints.
                </p>
                <p className="text-justify md:text-start md:ml-8 mt-2 md:mt-1">
                  Upon this strong foundation, we built a strong combination of
                  Tealium EventStream and AWS Redshift. Tealium EventStream
                  facilitated real-time customer interactions, while AWS
                  Redshift served as a robust data repository, ensuring the
                  seamless capture and analysis of critical marketing data.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
                    </h2>
                    <p className="mb-2 text-justify md:text-start md:ml-0">
                      The efficacy of our real-time marketing strategy was
                      validated through measurable outcomes that showed a
                      remarkable 35% increase in paid and email conversions.
                      This uplift was a solid indication of our successful
                      implementation and signifies a profound transformation in
                      their marketing approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                  Key Performance Indicators (KPI):{" "}
                </h2>
                <div className="flex flex-col gap-1  md:ml-4">
                  <p>• 35% Increase in Paid and Email Conversions</p>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start md:ml-0">
                  By strategically combining innovative technologies and
                  efficient integration, we unlocked new avenues for the
                  client’s revenue growth and improved engagement with their
                  audience. Our collaborative approach positioned the client for
                  sustainable growth and equipped them with the aspects to adapt
                  to the competitive banking landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS4;
