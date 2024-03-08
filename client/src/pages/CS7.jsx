import React from "react";
import Layout from "../components/Layout";

const CS7 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-full">
          <div className="relative w-full h-[60vh] md:h-[70vh]">
            <img
              src="/img/case7.jpg"
              className="h-full w-full bg-cover object-cover"
              alt=""
            />
            <div className="absolute inset-0 bottom-0 bg-black opacity-60"></div>
            <div className="absolute flex w-full items-center justify-center top-32">
              <h2 className="text-center text-3xl md:w-2/3 mx-auto text-white font-semibold">
                Revolutionizing User Experience in the IT Sector
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col">
            {/* <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Revolutionizing User Experience in the IT Sector
              </span>
            </div> */}
            <div className="w-full px-5 py-10 md:px-32 bg-red-600 text-white gap-3 grid grid-cols-1 md:grid-cols-3">
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Industry
                </h2>
                <span className="w-full">IT</span>
              </div>
              <div className="flex w-full flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Location
                </h2>
                <span className="w-full">Bangalore, India</span>
              </div>
              <div className="flex flex-row md:flex-col gap-2">
                <h2 className="text-lg w-2/3 font-bold text-gray-900">
                  Solution
                </h2>
                <span className="w-full">
                  AI, Elastic Search, Attribution Modeling, Augmented Search
                </span>
              </div>
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-10 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background
              </h2>
              <p className="mt-1 text-justify md:text-start">
                An Indian multinational Information Technology services and
                consulting company based in Bangalore, sought to elevate their
                user experience and optimize functionality within their digital
                infrastructure.
              </p>
            </div>

            <div className="h-[100vh] w-full">
              <img
                src="/img/case77.jpg"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col bg-gray-50 px-5 py-4 md:px-32">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Our client aimed to revolutionize their search infrastructure to
                provide excellent user experience to their clients. With a focus
                on scalability and efficiency, they wanted to redefine the way
                the users engaged with their platform.
              </p>
            </div>

            <div className="flex flex-col gap-2 bg-gray-50 px-5 py-4 md:px-32">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution
                </h2>
                <p className="text-justify md:text-start">
                  As with all projects, we did a thorough assessment of the
                  client’s existing infrastructure, outlined key deficiencies
                  and opportunities for improvement. The implementation of an
                  Elastic Search System which was renowed for its scalability
                  and efficiency in large datasets was proposed thus laying down
                  the foundation for search functionality.
                </p>
                <p className="mt-2 md:mt-3 text-justify md:text-start">
                  We concurrently worked on Attribution Modeling that unraveled
                  the intricate customer journey and how effectively they
                  communicated with each touchpoint. By leveraging Multi-Channel
                  Funnel (MCF), we generated reports by collecting data from
                  multiple applications and gained insights into customer
                  conversion pathways. This invaluable information was then
                  utilized efficiently to enable appropriate resource
                  allocation.
                </p>
                <p className="mt-2 md:mt-3 text-justify md:text-start">
                  Building upon this foundation, we established a Search Data
                  Lake tailored for Augmented Search, harnessing the power of
                  Artificial Intelligence to enhance user experiences based on
                  intent and context. This innovative approach ensured that
                  users received personalized search results tailored to their
                  preferences and behavior.
                </p>
              </div>
            </div>

            <div className="px-5 py-4 md:px-32 bg-gray-50">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-[#071b52]">
                    Results
                  </h2>
                  <p className="mb-2 text-justify md:text-start">
                    The implementation of the Elastic Search system and the
                    adoption of advanced Attribution Modeling techniques
                    propelled our client towards unprecedented success. By
                    addressing critical gaps in their search infrastructure and
                    delivering personalized experiences, we significantly
                    elevated customer satisfaction, thereby driving upsell
                    opportunities and increasing overall ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 px-5 md:px-32 pb-8">
              <h2 className="text-xl font-semibold text-[#071b52]">
                Conclusion
              </h2>
              <p className="mt-1 text-justify md:text-start">
                Through strategic integration of advanced technologies and
                meticulous execution, we enabled our client to redefine user
                engagement and drive business growth. The success of this
                initiative underscores our commitment to delivering
                transformative solutions that empower organizations to thrive in
                the digital era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS7;
