import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState } from "react";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

const Requestdemo = () => {
  const [input, setInput] = useState({
    fullName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    subscribe: true,
    policy: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.firstName) {
      setError("First name is required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (!input.lastName) {
      setError("Last name is required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.test(input.email)) {
      setError("Invalid Email Address");
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(input.phone)) {
      setError("Invalid Mobile Number");
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    try {
      setLoading(true);
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        subscribe: true,
        policy: true,
      });
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_BASE_URL}/api/user/sendmail`,
      //   {
      //     fullname: input.firstName,
      //     email: input.email,
      //     phone: input.phone,
      //     message: input.message,
      //   }
      // );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
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
              {success && (
                <h3 className="text-center w-full text-gray-600 bg-green-200 rounded-md p-1">
                  Request send successfully
                </h3>
              )}
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
                  First Name :{" "}
                </label>
                <input
                  className="focus:outline-none py-1 md:py-2 px-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.firstName}
                  onChange={(e) =>
                    setInput({ ...input, firstName: e.target.value })
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
                  Last Name :{" "}
                </label>
                <input
                  className="focus:outline-none py-1 md:py-2 px-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.lastName}
                  onChange={(e) =>
                    setInput({ ...input, lastName: e.target.value })
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
            </div>

            <div className="relative flex w-full flex-col gap-1">
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

            <div className="w-full">
              <div className="">
                <Switch
                  checked={input.subscribe}
                  onCheckedChange={() =>
                    setInput({ ...input, subscribe: !input.subscribe })
                  }
                />
                <label htmlFor="" className="pl-1 text-sm">
                  Subscribe to Newsletter
                </label>
              </div>
              <div className="relative">
                {/* <div className="flex gap-2 mx-1">
                  <input type="checkbox" className="p-3" />
                  <label htmlFor="">Accept</label>
                </div> */}
                <div className="relative">
                  <Switch
                    className="mt-1"
                    checked={input.policy}
                    onCheckedChange={() =>
                      setInput({ ...input, policy: !input.policy })
                    }
                  />
                  <label htmlFor="" className="text-sm pl-1">
                    <Link
                      className="text-sky-600 underline"
                      to={"/terms_conditions"}
                    >
                      Accept Privacy Policy
                    </Link>
                  </label>
                  <sup className="top-[3px] text-xl pl-1 text-[16px] text-red-600">
                    *
                  </sup>
                </div>
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
