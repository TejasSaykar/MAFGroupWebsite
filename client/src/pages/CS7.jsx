import React from "react";
import Layout from "../components/Layout";

const CS7 = () => {
  return (
    <Layout title={"MAF | Work"}>
      <div className="mt-[4rem] w-full">
        <div className="w-[90%] lg:w-[80%] m-auto flex flex-col gap-4 pt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <span className="text-2xl font-semibold text-[#071b52]">
                Revolutionizing User Experience in the IT Sector
              </span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Industry : </h2>
              <span className="">IT</span>
            </div>
            <div className="flex gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Location : </h2>
              <span className="">Bangalore, India</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <h2 className="text-lg font-bold text-[#071b52]">Solution : </h2>
              <span className="md:w-[80%]">
                AI, Elastic Search, Attribution Modeling, Augmented Search
              </span>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Background:
              </h2>
              <p className="md:ml-8 text-justify md:text-start">
                An Indian multinational Information Technology services and
                consulting company based in Bangalore, sought to elevate their
                user experience and optimize functionality within their digital
                infrastructure.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-[#071b52]">
                Objective:
              </h2>
              <p className="md:ml-8 text-justify md:text-start">
                Our client aimed to revolutionize their search infrastructure to
                provide excellent user experience to their clients. With a focus
                on scalability and efficiency, they wanted to redefine the way
                the users engaged with their platform.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="w-full">
                <h2 className="text-lg font-semibold text-[#071b52]">
                  Solution :{" "}
                </h2>
                <p className="md:ml-8 text-justify md:text-start">
                  As with all projects, we did a thorough assessment of the
                  client’s existing infrastructure, outlined key deficiencies
                  and opportunities for improvement. The implementation of an
                  Elastic Search System which was renowed for its scalability
                  and efficiency in large datasets was proposed thus laying down
                  the foundation for search functionality.
                </p>
                <p className="md:ml-8 mt-2 md:mt-1 text-justify md:text-start">
                  We concurrently worked on Attribution Modeling that unraveled
                  the intricate customer journey and how effectively they
                  communicated with each touchpoint. By leveraging Multi-Channel
                  Funnel (MCF), we generated reports by collecting data from
                  multiple applications and gained insights into customer
                  conversion pathways. This invaluable information was then
                  utilized efficiently to enable appropriate resourceallocation.
                </p>
                <p className="md:ml-8 mt-2 md:mt-1 text-justify md:text-start">
                  Building upon this foundation, we established a Search Data
                  Lake tailored for Augmented Search, harnessing the power of
                  Artificial Intelligence to enhance user experiences based on
                  intent and context. This innovative approach ensured that
                  users received personalized search results tailored to their
                  preferences and behavior.
                </p>
              </div>

              <div className="mt-5">
                <div className="flex flex-col">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold text-[#071b52]">
                      Results :{" "}
                    </h2>
                    <p className="mb-2 text-justify md:text-start">
                      The implementation of the Elastic Search system and the
                      adoption of advanced Attribution Modeling techniques
                      propelled our client towards unprecedented success. By
                      addressing critical gaps in their search infrastructure
                      and delivering personalized experiences, we significantly
                      elevated customer satisfaction, thereby driving upsell
                      opportunities and increasing overall ROI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold text-[#071b52]">
                  Conclusion:
                </h2>
                <p className="text-justify md:text-start">
                  Through strategic integration of advanced technologies and
                  meticulous execution, we enabled our client to redefine user
                  engagement and drive business growth. The success of this
                  initiative underscores our commitment to delivering
                  transformative solutions that empower organizations to thrive
                  in the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CS7;
