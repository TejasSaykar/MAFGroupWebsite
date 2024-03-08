import React from "react";
import Layout from "../components/Layout";

const CS4 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case4-min.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Driving Revenue Uplift and Real-Time Targeting in Banking
                Industry
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Driving Revenue Uplift and Real-Time Targeting in Banking
                Industry
              </span>
            </div> */}
            <div className="px-5 md:px-32 text-white bg-red-600 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">Banking</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">United Kingdom</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full md:ml-0 text-justify md:text-start">
                  Tealium EventStream, Tealium AudienceStream, AWS Redshift,
                  Marketing Automation, Customer Data Platform (CDP)
                </span>
              </div>
              <div className="flex lg:ml-7 w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Result
                </h2>
                <div className="flex w-full flex-col gap-1">
                  <h3>• 35% Increase in Paid and Email Conversions</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col py-10 bg-gray-50 px-5 pt-4 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background
              </h2>
              <p className="text-justify md:text-start">
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

            <div>
              <img src="/img/case44-min.jpg" alt="" />
            </div>

            <div className="flex flex-col px-5 py-6 md:px-32 bg-gray-50">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="text-justify md:text-start">
                We devised a comprehensive solution strategy with their two
                primary objectives in mind which were to establish real-time
                marketing segments for dynamic user engagement and to achieve a
                substantial increase in revenue.
              </p>
            </div>

            <div className="flex flex-col px-5 py-2 md:px-32 bg-gray-50 gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="text-justify md:text-start">
                  As an initial step, we strategically deployed Tealium Audience
                  Stream (TAS) to integrate the client’s marketing channels
                  seamlessly and revitalize their dormant systems. This primed
                  their channels for dynamic, real-time engagement that
                  resonated with their users across various touchpoints.
                </p>
                <p className="text-justify md:text-start mt-2 md:mt-3">
                  Upon this strong foundation, we built a strong combination of
                  Tealium Event Stream and AWS Redshift. Tealium Event Stream
                  facilitated real-time customer interactions, while AWS
                  Redshift served as a robust data repository, ensuring the
                  seamless capture and analysis of critical marketing data.
                </p>
              </div>
            </div>

            <div className="px-5 py-3 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
                  </h2>
                  <p className="mb-2 text-justify md:text-start md:ml-0">
                    The efficacy of our real-time marketing strategy was
                    validated through measurable outcomes that showed a
                    remarkable 35% increase in paid and email conversions. This
                    uplift was a solid indication of our successful
                    implementation and signifies a profound transformation in
                    their marketing approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32">
              <h2 className="text-xl font-semibold mb-2 text-[#071b52]">
                Key Performance Indicators (KPI)
              </h2>

              <div className="flex mt-4 flex-col md:flex-row items-center justify-center gap-4 md:gap-10 md:ml-4">
                <div className="flex flex-col items-center justify-center gap-3">
                  <h2 className="text-2xl font-medium">35%</h2>
                  <p className="font-medium text-gray-500">
                    Increase in Paid and Email Conversions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32 pb-8">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-2 text-justify md:text-start md:ml-0">
                By strategically combining innovative technologies and efficient
                integration, we unlocked new avenues for the client’s revenue
                growth and improved engagement with their audience. Our
                collaborative approach positioned the client for sustainable
                growth and equipped them with the aspects to adapt to the
                competitive banking landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS4;
