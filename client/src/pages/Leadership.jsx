import React from "react";
import Layout from "../components/Layout";

const Leadership = () => {
  return (
    <Layout title={"MAF | Leadership"}>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[90vh] md:h-[70vh]">
          <img
            src="/img/about2Banner-min.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute w-full inset-0 mt-10 md:top-32 flex gap-5 flex-col md:flex-row">
            <div className="w-full">
              <h1
                className="text-4xl font-bold px-3 md:px-0 md:text-center text-white dark:text-rose-600"
                style={{
                  fontFamily: "sans-serif",
                  textShadow: "1px 1px black",
                }}
              >
                Our Strategic Leadership{" "}
              </h1>
            </div>
            <div className="w-full text-white px-3 md:px-0 md:mx-8">
              <h3
                style={{ textShadow: "1px 1px black" }}
                className="text-xl text-justify"
              >
                At the helm of our future-oriented organization is a dynamic
                leadership team who are a blend of tech-savvy entrepreneurs and
                innovators who are thought leaders in their fields. Their vision
                and guidance collectively help us transcend conventional
                boundaries and propel us towards unprecedented success.
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-[#f8f9fa] py-10">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col sm:w-[80%] px-2 m-auto md:flex-row gap-5 items-center">
              <div className="w-full order-2 md:order-1">
                <h2 className="text-2xl mt-3 font-semibold text-[#071b52] dark:text-rose-600">
                  Architects of Progress
                </h2>
                <p className="font-light text-justify">
                  Our C-Suite executives are a team of individuals with diverse
                  skill sets, innovative thought processes and extensively
                  experienced, competitive professionals with a knack for making
                  the most of their collective expertise. They have mentored and
                  steered us towards the forefront by leveraging their intrinsic
                  understanding of technology and progress.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/about31-min.jpg"
                  className="object-cover aspect-video rounded-lg md:w-full mx-auto"
                  alt=""
                />
              </div>
            </div>

            <div className="w-full mt-9 bg-[#eb1c26] pb-8">
              <div className="flex px-2 flex-col md:flex-row sm:w-[80%] m-auto gap-5 mt-7 items-center">
                <div className="w-full flex flex-col order-2">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-rose-600">
                    Strategic Visionaries
                  </h2>
                  <p className="font-light text-white text-justify">
                    Our dynamic leadership team has always been
                    forward-thinking, attuned to emerging opportunities,
                    anticipating trends and capitalizing on the changing
                    business landscape. With them at the top we have always
                    navigated the tech industry with precision and purpose and
                    achieved our organizational goals.
                  </p>
                </div>
                <div className="w-full order-1">
                  <img
                    src="/img/about32-min.jpg"
                    className="object-cover aspect-video rounded-lg md:w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex px-2 sm:w-[80%] m-auto flex-col md:flex-row gap-5 mt-7 items-center">
              <div className="w-full  flex flex-col order-2 md:order-1">
                <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                  Thought Leadership
                </h2>
                <p className="font-light text-justify">
                  Our work environment is fueled by creativity where our leaders
                  are the orchestrators. They nurture and foster our innovative
                  spirit by creating a culture that values experimentation and
                  the mindset to embrace failure as a mere stepping-stone and
                  not an obstacle.
                </p>
              </div>
              <div className="w-full order-1 md:order-2">
                <img
                  src="/img/leadership-min.jpg"
                  className="object-cover aspect-video rounded-lg md:w-full mx-auto"
                  alt=""
                />
              </div>
            </div>

            <div className="flex px-2 sm:w-[80%] m-auto flex-col md:flex-row gap-5 mt-7 items-center">
              <div className="w-full flex flex-col order-2">
                <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                  Navigating Dynamic Business Landscape
                </h2>
                <p className="font-light text-justify">
                  The tech landscape is an ever-changing, vast, intricate and
                  evolving domain where rapid adaptation and quick informed
                  decision-making is rewarded. Our arsenal of exceptional
                  individuals navigates this realm with finesse by capitalizing
                  on the collective knowledge and expertise they have gained
                  over the decades. They tirelessly work to keep us at the
                  forefront of industry standards by keeping pace with the
                  technological advancements and changing business requirements.
                </p>
              </div>
              <div className="w-full order-1">
                <img
                  src="/img/about34-min.jpg"
                  className="aspect-video object-cover rounded-lg md:w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leadership;
