import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createnews = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/news/create-news`,
        {
          title: input.title,
          description: input.description,
          category: input.category,
          image: input.image,
        }
      );
      if (data) {
        console.log("Data : ", data);
        navigate("/news");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="w-full mt-[4rem]">
        <div className="max-w-xs md:w-1/2 mx-auto pt-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-center text-lg font-semibold text-gray-700">
              Create News
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Title"
                value={input.title}
                onChange={(e) => setInput({ ...input, title: e.target.value })}
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                value={input.description}
                onChange={(e) =>
                  setInput({ ...input, description: e.target.value })
                }
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                placeholder="Description"
                value={input.category}
                onChange={(e) =>
                  setInput({ ...input, category: e.target.value })
                }
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image Url
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Image Url"
                value={input.image}
                onChange={(e) => setInput({ ...input, image: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-[#071b52] hover:bg-[#172c65] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Createnews;
