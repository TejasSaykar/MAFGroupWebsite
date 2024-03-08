import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const News = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const PF = "http://localhost:8080/images/";

  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/news/get-news`
        );
        if (data) {
          setNews(data.news);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <Layout title={"News | MAF"}>
      <div className="w-full mt-[4rem]">
        <div className="relative middle1 mt-16 md:mt-10">
          <h2 className="text-2xl text-center py-4 font-semibold text-[#071b52]">
            News
          </h2>
          <div className="w-full px-3 md:w-[90%] lg:w-[80%] m-auto pb-4">
            <div className="left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
              <div className="flex flex-col rounded-t-lg items-start w-full shadow-xl pb-3">
                <img
                  src="/img/news.jpg"
                  className="w-full aspect-video rounded-t-lg h-auto bg-cover object-cover bg-center"
                  alt=""
                />
                <h2
                  onClick={() =>
                    openWebsite(
                      "https://dma.org.uk/awards/winner/2023-gold-customer-programme"
                    )
                  }
                  className="text-xl hover:underline cursor-pointer font-bold px-2 my-3 text-[#071b52] dark:text-rose-600"
                >
                  Using predictive-AI to reduce churn
                </h2>

                <a
                  className="text-gray-600 p-2 cursor-pointer"
                  onClick={() =>
                    openWebsite(
                      "https://dma.org.uk/awards/winner/2023-gold-customer-programme"
                    )
                  }
                >
                  We used data intelligence and predictive AI to keep more
                  customers on board with rigorously tested brands....{" "}
                </a>
              </div>
              {news?.map((news) => (
                <div className="flex flex-col items-start w-full shadow-xl pb-3">
                  <img
                    src={PF + news.file}
                    className="w-full h-auto aspect-video bg-cover object-cover bg-center"
                    alt=""
                  />
                  <h2
                    onClick={() => navigate(`/news/${news._id}`)}
                    className="text-xl hover:underline cursor-pointer font-bold px-2 my-3 text-[#071b52] dark:text-rose-600"
                  >
                    {news.title}
                  </h2>
                  <p className="text-justify px-2 font-light">
                    {news.description.slice(0, 50)}....{" "}
                    <Link
                      className="text-sky-600 underline cursor-pointer"
                      to={`/news/${news._id}`}
                    >
                      read more
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
