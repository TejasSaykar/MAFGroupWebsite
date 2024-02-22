import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import { message } from "antd";

const Contact = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    policy: true,
  });

  const [isChecked, setIsChecked] = useState(true);

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.firstname) {
      setError("First name is required!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    if (!input.lastname) {
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
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);

      setInput({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
        policy: true,
      });

      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_BASE_URL}/api/user/contact`,
      //   {
      //     firstname: input.firstname,
      //     lastname: input.lastname,
      //     email: input.email,
      //     phone: input.phone,
      //     message: input.message,
      //     subscribe: input.subscribe,
      //     policy: input.policy,
      //   }
      // );
      if (data) {
        console.log("Data : ", data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Contact | MAF"} description={"This is the contact page"}>
      <div className="mt-[4rem] w-full">
        <div className="relative top w-full">
          <div className="relative w-full h-[90vh] md:h-[70vh]">
            <img
              src="/img/contactUs.jpg"
              className="w-full h-full object-cover bg-center bg-cover"
              alt=""
            />
            <div className="absolute bottom-0 inset-0 bg-black opacity-60"></div>
          </div>
          <div className="absolute top-10 lg:top-28 text-white px-5 md:px-20">
            <div className="w-full flex-col md:flex-row flex md:justify-between lg:gap-32">
              <div className="left w-full mt-7">
                <h2 className="text-3xl font-semibold">UK Address</h2>
                <p className="text-xl my-2 md:mt-5 font-light text-justify">
                  1st Floor, Building 2 Croxley Business Park, Watford, United
                  Kingdom, WD18 8YA -
                </p>
              </div>
              <div className="right w-full mt-7">
                <h2 className="text-3xl font-semibold">India Address</h2>
                <p className="text-xl mt-2 md:mt-5 font-light text-justify">
                  Krishe Sapphire, Hitech City Rd, Hyderabad, Telangana 500081,
                  India +1800 789-4567
                </p>
              </div>
              <div className="w-full mt-7">
                <h2 className="text-3xl font-semibold">Email Address</h2>
                <p className="text-xl mt-2 md:mt-5 font-light">
                  service@mafgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="shadow-lg rounded-lg flex flex-col gap-3 p-4 w-full mx-3 md:mx-0 md:w-[60vw]">
            <h2 className="text-3xl font-bold text-center text-[#071b52]">
              Contact Us
            </h2>
            <div className="relative h-4 mb-4">
              {success && (
                <h3 className="text-center w-full text-gray-600 bg-green-200 rounded-md p-1">
                  Details Successfully Submitted
                </h3>
              )}
              {error && (
                <h3 className="text-center w-full text-red-500 bg-red-200 rounded-md py-2">
                  {error}
                </h3>
              )}
              {error && (
                <span
                  className="absolute right-3 ring-1 text-gray-700 px-2 py-1 ring-red-300 top-1 cursor-pointer rounded-[1px]"
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
                  className="focus:outline-none py-1 px-1 md:py-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.firstname}
                  onChange={(e) =>
                    setInput({ ...input, firstname: e.target.value })
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
                  className="focus:outline-none py-1 px-1 md:py-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.lastname}
                  onChange={(e) =>
                    setInput({ ...input, lastname: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-4 w-full">
              <sup className="absolute top-[1px] -left-4 text-xl pl-1 text-[16px] text-red-600">
                *
              </sup>
              <div className="flex w-full flex-col gap-1">
                <label
                  htmlFor=""
                  className="text-base font-semibold text-gray-700"
                >
                  Email :{" "}
                </label>
                <input
                  className="focus:outline-none py-1 px-1 md:py-2 rounded-sm ring-1 ring-gray-600"
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
                  className="focus:outline-none py-1 px-1 md:py-2 rounded-sm ring-1 ring-gray-600"
                  type="text"
                  value={input.phone}
                  onChange={(e) =>
                    setInput({ ...input, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex w-full flex-col gap-1">
                <label
                  htmlFor=""
                  className="text-base font-semibold text-gray-700"
                >
                  Message :{" "}
                </label>
                <textarea
                  className="focus:outline-none rounded-sm px-2 py-2 ring-1 ring-gray-600 placeholder:text-gray-600"
                  cols="30"
                  placeholder="Enter message here..."
                  value={input.message}
                  onChange={(e) =>
                    setInput({ ...input, message: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center">
                <Switch
                  checked={isChecked}
                  onCheckedChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor="" className="pl-1 text-sm">
                  Subscribe to Newsletter
                </label>
              </div>
              <div className="relative pt-2">
                <div className="flex flex-col">
                  {/* <div className="flex gap-2 mx-1">
                    <input type="checkbox" className="p-3" />
                    <label htmlFor="">Accept</label>
                  </div> */}
                  <div className="relative">
                    <Switch
                      className="mt-2"
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
                        Accept Terms and Conditions{" "}
                      </Link>
                      and
                      <Link
                        className="pl-1 text-sky-600 underline"
                        to={"/terms_conditions"}
                      >
                        Privacy Policy
                      </Link>
                    </label>
                    <sup className="top-[3px] text-xl pl-1 text-[16px] text-red-600">
                      *
                    </sup>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-10">
              <button
                disabled={!input.policy}
                className={`px-4 py-2 bg-[#071b52] rounded-lg text-white ${
                  !input.policy ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={handleSubmit}
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

export default Contact;
