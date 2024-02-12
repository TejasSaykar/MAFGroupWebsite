import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const PF = "http://localhost:8080/images/";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/blog/all-blogs`
        );
        if (data) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <Layout title={"Blogs | MAF"}>
      <div className="w-full mt-[4rem]">
        <div className="text-3xl font-bold pt-4 text-center text-[#071b52]">
          <h2>Blogs</h2>
        </div>
        <div className="w-full md:h-[screen] md:pt-8">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-full w-full gap-8 md:w-[90vw] md:flex-row lg:w-[80vw] m-auto px-4 justify-center sm:items-start mt-8">
            <div className="h-full one m-auto sm:w-full md:mt-0">
              <img
                src="/img/science.png"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                18 intriguing facts about Data analytics that you cannot afford
                to miss
              </h2>
              <p className="px-2 font-normal mt-1">
                In this fast-paced world, data analytics has played an...{" "}
                <Link to={"/data_analytics"} className="text-sky-600 underline">
                  more
                </Link>
              </p>
            </div>
            <div className="h-full two m-auto md:mt-0 sm:w-full">
              <img
                src="/img/cloud4.png"
                className="h-auto sm:w-full bg-cover bg-center object-cover aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Advantages of Using Google Cloud Hosting
              </h2>
              <p className="px-2 font-normal mt-1">
                You might come across many options when considering cloud
                hosting for a business and Google...{" "}
                <Link to={"/cloud_solution"} className="text-sky-600 underline">
                  more
                </Link>
              </p>
            </div>
            <div className="h-full three m-auto mt-8 md:mt-0 sm:w-full">
              <img
                src="/img/machine.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Marketing Automation Trends No Forward-Thinking Organization
                Should Ignore!
              </h2>
              <p className="px-2 font-normal mt-1">
                The marketing automation industry has grown in the last...
                <Link
                  to={"/marketing_automation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div>
            <div className="h-full four mt-8 md:mt-0 w-full">
              <img
                src="/img/finalWord.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Exciting Digital Transformation Trends You Can't Ignore
              </h2>
              <p className="px-2 font-normal mt-1">
                Digital Dransformation simply refers to how well an organization
                has adopted new...
                <Link
                  to={"/digital_transformation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div>
            {blogs?.map((blog) => (
              <div key={blog._id}>
                <img
                  src={PF + blog.file}
                  className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                  alt=""
                />
                <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                  {blog.title}
                </h2>
                <p className="px-2 font-normal mt-1">
                  {blog.description.slice(0, 50)}...
                  <Link
                    to={`/blog/${blog._id}`}
                    className="text-sky-600 underline"
                  >
                    more
                  </Link>
                </p>
              </div>
            ))}
            {/* <div>
              <img
                src="/img/finalWord.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Exciting Digital Transformation Trends You Can't Ignore
              </h2>
              <p className="px-2 font-normal mt-1">
                Digital Dransformation simply refers to how well an organization
                has adopted new...
                <Link
                  to={"/digital_transformation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div>
            <div>
              <img
                src="/img/finalWord.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Exciting Digital Transformation Trends You Can't Ignore
              </h2>
              <p className="px-2 font-normal mt-1">
                Digital Dransformation simply refers to how well an organization
                has adopted new...
                <Link
                  to={"/digital_transformation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div>
            <div>
              <img
                src="/img/finalWord.png"
                className="h-auto sm:w-full bg-contain object-cover bg-center aspect-video sm:aspect-video"
                alt=""
              />
              <h2 className="px-2 text-xl font-bold mt-4 hover:underline text-[#071b52] dark:text-rose-600">
                Exciting Digital Transformation Trends You Can't Ignore
              </h2>
              <p className="px-2 font-normal mt-1">
                Digital Dransformation simply refers to how well an organization
                has adopted new...
                <Link
                  to={"/digital_transformation"}
                  className="text-sky-600 underline"
                >
                  more
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
