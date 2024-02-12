import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SingleBlog = () => {
  const id = useParams().id;
  const [blog, setBlog] = useState({});

  const PF = "http://localhost:8080/images/";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/blog/get-blog/${id}`
        );
        if (data) {
          setBlog(data.blog);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <Layout>
      <div className="md:w-[80%] mx-auto mt-[4rem]">
        <div className="md:w-[80%] px-3 pt-2 md:px-0 mx-auto h-full">
          <div className="w-full">
            <img
              src={PF + blog.file}
              className="h-[60vh] w-full mx-auto object-cover bg-cover"
              alt=""
            />
          </div>
          <div className="mx-auto mt-3">
            <h2 className="text-xl font-bold text-[#071b52]">{blog.title}</h2>
            <p>{blog.description}.</p>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
