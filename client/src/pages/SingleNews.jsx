import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleNews = () => {
  const id = useParams().id;
  const PF = "http://localhost:8080/images/";
  const [news, setNews] = useState({});

  useEffect(() => {
    const singleNews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/news/single-news/${id}`
        );
        if (data) {
          // console.log("Data : ", data);
          setNews(data.news);
        }
      } catch (error) {
        console.log(error);
      }
    };
    singleNews();
  }, [id]);

  return (
    <Layout>
      <div className="md:w-[80%] mx-auto mt-[4rem]">
        <div className="md:w-[80%] px-3 pt-2 md:px-0 mx-auto h-full">
          <div className="w-full">
            <img
              src={PF + news.file}
              className="h-[60vh] w-full mx-auto object-cover bg-cover"
              alt=""
            />
          </div>
          <div className="mx-auto mt-3">
            <h2 className="text-xl font-bold text-[#071b52]">{news.title}</h2>
            <p>{news.description}.</p>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default SingleNews;
