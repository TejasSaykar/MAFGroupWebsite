import React from "react";
import Layout from "../components/Layout";

const Culture = () => {
  return (
    <Layout title={"MAF | Organizational Culture"}>
      <div className="w-full mt-[4rem]">
        <div className="w-[90%] lg:w-[70%] m-auto flex flex-col gap-4 py-5">
          <h1 className="text-3xl font-bold text-[#071b52] dark:text-rose-600">
            Organizational Culture{" "}
          </h1>
          <p className="font-light">
            Welcome to MAF Group, where our culture is more than a policy but a
            way of life. Our environment is a harmonious blend of innovation and
            creativity fueled by our need to include, cherish and value
            everyone. Here you can craft your own workspace and control your
            professional narrative.
          </p>
          <div className="flex flex-col items-center md:flex-row gap-3">
            <div className="w-full order-2 md:order-1">
              <h2 className="text-2xl font-bold pb-1 text-[#071b52] dark:text-rose-600">
                Embracing Diversity :
              </h2>
              <p className="font-light">
                At MAF Group, we are creating a team that consists of a
                kaleidoscope of backgrounds, skills, personalities and
                perspectives, thus creating a dynamic tapestry of ideas that
                redefines possibilities. We welcome, nurture, innovate and
                appreciate your differences and pave the way for innovation.
              </p>
            </div>
            <div className="w-full order-1 md:order-2">
              <img
                src="/img/org.png"
                className="aspect-video object-cover md:w-2/3 mx-auto"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              A Welcome Harbor of Inclusion :
            </h2>
            <p className="font-light">
              Inclusion isn't just a checkbox but the essence of who we are.
              Every idea, voice and perspective resonate and becomes an integral
              part of our journey. We strive to create an environment that
              values authenticity and instills a sense of belonging.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              A Symphony of Work and Life :
            </h2>
            <p className="font-light">
              Our remote-first philosophy is an experience where we create a
              harmonious blend of work and life. True brilliance transcends
              physical boundaries and inspiration strikes when the mind is free,
              this ideology is what paved the way for creating our remote,
              global team.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              Empowering career growth :
            </h2>
            <p className="font-light">
              At MAF Group, we believe that growth lies in identifying and
              nurturing the potential of everyone to broaden their horizons and
              enhance their skill sets. We provide continuous learning
              opportunities, training programs and mentorship supplemented by a
              supportive environment that brings the best out of you.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-[#071b52] dark:text-rose-600">
              Innovation as a mindset :
            </h2>
            <p className="font-light">
              With a team of forward-thinking leaders and curious professionals,
              questions are evoked, new ideas are put forth, boundaries are
              tested, and novel concepts are experimented with. This innovative
              spirit not only enhances our current project but also positions us
              as industry leaders, making us the best at what we do.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Culture;
