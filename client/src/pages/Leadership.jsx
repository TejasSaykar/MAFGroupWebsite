import React from "react";
import Layout from "../components/Layout";
import { FaArrowRight } from "react-icons/fa6";

const Leadership = () => {
  return (
    <Layout>
      <div className="mt-[4rem] w-full">
        <div className="w-[50%] m-auto flex flex-col gap-8 mt-28">
          <h1
            className="text-3xl font-bold text-[#071b52]"
            style={{ fontFamily: "sans-serif" }}
          >
            Our Strategic Leadership{" "}
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-light text-[#071b52]">
              Architects of Progress
            </h2>
            <p className="font-thin text-xl">
              Our C-Suite executives are a team of individuals with diverse
              skill sets, innovative thought processes and extensively
              experienced, competitive professionals with a knack for making the
              most of their collective expertise. They have mentored and steered
              us towards the forefront by leveraging their intrinsic
              understanding of technology and progress.
            </p>
            <div className="flex gap-2 text-sm font-thin items-center">
              <FaArrowRight />
              <p className="hover:underline cursor-pointer">Find out more</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-3xl font-light text-[#071b52]">
              Strategic Visionaries
            </h2>
            <p className="font-thin text-xl">
              Our dynamic leadership team has always been forward-thinking,
              attuned to emerging opportunities, anticipating trends and
              capitalizing on the changing business landscape. With them at the
              top we have always navigated the tech industry with precision and
              purpose and achieved our organizational goals.
            </p>
            <div className="flex gap-2 text-sm font-thin items-center">
              <FaArrowRight />
              <p className="hover:underline cursor-pointer">Find out more</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-3xl font-light text-[#071b52]">
              Thought Leadership
            </h2>
            <p className="font-thin text-xl">
              Our work environment is fueled by creativity where our leaders are
              the orchestrators. They nurture and foster our innovative spirit
              by creating a culture that values experimentation and the mindset
              to embrace failure as a mere stepping-stone and not an obstacle.
            </p>
            <div className="flex gap-2 text-sm font-thin items-center">
              <FaArrowRight />
              <p className="hover:underline cursor-pointer">Find out more</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-3xl font-light text-[#071b52]">
              Navigating dynamic business landscape
            </h2>
            <p className="font-thin text-xl">
              The tech landscape is an ever-changing, vast, intricate and
              evolving domain where rapid adaptation and quick informed
              decision-making is rewarded. Our arsenal of exceptional
              individuals navigates this realm with finesse by capitalizing on
              the collective knowledge and expertise they have gained over the
              decades. They tirelessly work to keep us at the forefront of
              industry standards by keeping pace with the technological
              advancements and changing business requirements.
            </p>
            <div className="flex gap-2 text-sm font-thin items-center">
              <FaArrowRight />
              <p className="hover:underline cursor-pointer">Find out more</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leadership;
