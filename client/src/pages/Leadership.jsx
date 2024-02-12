import React from "react";
import Layout from "../components/Layout";

const Leadership = () => {
  return (
    <Layout title={"MAF | Leadership"}>
      <div className="mt-[4rem] w-full">
        <div className="relative w-full h-[90vh]">
          <img
            src="/img/lead0.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-50"></div>
          <div className="absolute w-full inset-0 mt-10 md:top-32 flex gap-5 flex-col md:flex-row">
            <div className="w-full">
              <h1
                className="text-4xl font-bold px-3 md:px-0 md:text-center text-white dark:text-rose-600"
                style={{ fontFamily: "sans-serif" }}
              >
                Our Strategic Leadership{" "}
              </h1>
            </div>
            <div className="w-full text-white px-3 md:px-0 md:mx-8">
              <h3 className="text-xl text-justify">
                At the helm of our future-oriented organization is a dynamic
                leadership team who are a blend of tech-savvy entrepreneurs and
                innovators who are thought leaders in their fields. Their vision
                and guidance collectively help us transcend conventional
                boundaries and propel us towards unprecedented success.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full px-5 sm:w-[80%] m-auto flex flex-col gap-2 mt-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full order-2 md:order-1">
              <h2 className="text-2xl mt-3 font-semibold text-[#071b52] dark:text-rose-600">
                Architects of Progress
              </h2>
              <p className="font-thin">
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
                src="/img/lead1.png"
                className="object-cover aspect-video md:w-2/3 mx-auto"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-7 items-center">
            <div className="w-full flex flex-col order-2">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Strategic Visionaries
              </h2>
              <p className="font-thin">
                Our dynamic leadership team has always been <br />{" "}
                forward-thinking, attuned to emerging opportunities,
                anticipating trends and capitalizing on the changing business
                landscape. With them at the top we have always navigated the
                tech industry with precision and purpose and achieved our
                organizational goals.
              </p>
            </div>
            <div className="w-full order-1">
              <img
                src="/img/lead2.png"
                className="object-cover aspect-video"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-7 items-center">
            <div className="w-full flex flex-col order-2 md:order-1">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Thought Leadership
              </h2>
              <p className="font-thin">
                Our work environment is fueled by creativity where our leaders
                are the orchestrators. They nurture and foster our innovative
                spirit by creating a culture that values experimentation and the
                mindset to embrace failure as a mere stepping-stone and not an
                obstacle.
              </p>
            </div>
            <div className="w-full order-1 md:order-2">
              <img
                src="/img/lead3.png"
                className="object-cover aspect-video md:w-2/3 mx-auto"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-7 items-center">
            <div className="w-full flex flex-col order-2">
              <h2 className="text-2xl font-semibold text-[#071b52] dark:text-rose-600">
                Navigating dynamic business landscape
              </h2>
              <p className="font-thin">
                The tech landscape is an ever-changing, vast, intricate and
                evolving domain where rapid adaptation and quick informed
                decision-making is rewarded. Our arsenal of exceptional
                individuals navigates this realm with finesse by capitalizing on
                the collective knowledge and expertise they have gained over the
                decades. They tirelessly work to keep us at the forefront of
                industry standards by keeping pace with the technological
                advancements and changing business requirements.
              </p>
            </div>
            <div className="w-full order-1">
              <img src="/img/lead4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leadership;
