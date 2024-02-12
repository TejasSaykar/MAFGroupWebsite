import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Requestdemo = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.fullname) {
      setError("Fullname is required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (!input.email) {
      setError("Email is required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (!input.phone) {
      setError("Phone is required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/user/sendmail`,
        {
          fullname: input.fullname,
          email: input.email,
          phone: input.phone,
          message: input.message,
        }
      );
      setLoading(false);
      console.log("Data : ", data);
      setInput({
        fullname: "",
        email: "",
        phone: "",
      });
      navigate("/");
      message.success("Request send");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout title={"Request Demo | MAF"}>
      <div className="w-full mt-[4rem]">
        <div className="w-full flex items-center justify-center mt-5 pt-6">
          <div className="shadow-lg rounded-lg flex flex-col gap-2 p-4 w-full mx-3 md:mx-0 md:w-[60vw]">
            <h2 className="text-3xl font-bold text-center text-[#071b52]">
              Request a Demo
            </h2>
            <div className="relative h-2 mb-4">
              {loading && <h3 className="text-center">Loading...</h3>}
              {error && (
                <h3 className="text-center w-full text-red-500 bg-red-200 rounded-md p-1">
                  {error}
                </h3>
              )}
              {error && (
                <span
                  className="absolute right-3 ring-1 text-gray-700 px-[6px] ring-red-300 top-1 cursor-pointer rounded-[1px]"
                  onClick={() => setError("")}
                >
                  X
                </span>
              )}
            </div>
            <div className="flex w-full flex-col md:flex-row gap-4">
              <div className="relative flex w-full flex-col gap-1">
                <sup className="absolute top-[1px] -left-4 text-xl pl-1 text-[16px] text-red-600">
                  *
                </sup>
                <label
                  htmlFor=""
                  className="text-base font-semibold text-gray-700"
                >
                  Fullname :{" "}
                </label>
                <input
                  className="focus:outline-none py-1 md:py-2 px-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.username}
                  onChange={(e) =>
                    setInput({ ...input, fullname: e.target.value })
                  }
                />
              </div>
              <div className="relative flex w-full flex-col gap-1">
                <sup className="absolute top-[1px] -left-4 text-xl pl-1 text-[16px] text-red-600">
                  *
                </sup>
                <label
                  htmlFor=""
                  className="text-base font-semibold text-gray-700"
                >
                  Email :{" "}
                </label>
                <input
                  className="focus:outline-none py-1 md:py-2 px-2 rounded-sm ring-1 ring-gray-600"
                  type="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="relative flex w-full flex-col gap-1">
                <sup className="absolute top-[1px] -left-4 text-xl pl-1 text-[16px] text-red-600">
                  *
                </sup>
                <label
                  htmlFor=""
                  className="text-base font-semibold text-gray-700"
                >
                  Phone :{" "}
                </label>
                <input
                  className="focus:outline-none py-1 md:py-2 px-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.phone}
                  onChange={(e) =>
                    setInput({ ...input, phone: e.target.value })
                  }
                />
              </div>
              <div className="relative flex w-full flex-col gap-1">
                <sup className="absolute top-[1px] -left-4 text-xl pl-1 text-[16px] text-red-600">
                  *
                </sup>
                <label
                  htmlFor=""
                  className="text-base font-semibold text-gray-700"
                >
                  Message :{" "}
                </label>
                <textarea
                  className="focus:outline-none rounded-sm w-full px-2 ring-1 ring-gray-600 placeholder:text-gray-600"
                  cols="30"
                  placeholder="Enter message here..."
                  value={input.message}
                  onChange={(e) =>
                    setInput({ ...input, message: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            <div className="w-10">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-4 py-2 bg-[#071b52] rounded-lg text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Requestdemo;
