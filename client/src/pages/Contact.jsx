import React from "react";
import Layout from "../components/Layout";


const Contact = () => {
  return (
    <Layout title={"Contact | MAF"} description={"This is the contact page"}>
      <div className="mt-[4rem] w-full">
        <div className="relative top w-full">
          <div className="relative w-full h-[90vh] md:h-[60vh]">
            <img
              src="/img/contactBg1.jpg"
              className="w-full h-full object-cover bg-center bg-cover"
              alt=""
            />
            <div className="absolute bottom-0 inset-0 bg-black opacity-60"></div>
          </div>
          <div className="absolute top-10 md:top-28 text-white px-5 md:px-20">
            <div className="w-full flex-col md:flex-row flex md:justify-between md:gap-32">
              <div className="left w-full mt-7">
                <h2 className="text-3xl font-semibold">UK Address</h2>
                <p className="text-xl my-2 md:mt-5 font-light">
                  1st Floor, Building 2 Croxley Business Park, Watford, United
                  Kingdom, WD18 8YA -
                </p>
              </div>
              <div className="right w-full mt-7">
                <h2 className="text-3xl font-semibold">India Address</h2>
                <p className="text-xl mt-2 md:mt-5 font-light">
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

        <div className="w-full flex items-center justify-center mt-5">
          <div className="shadow-lg bg-gray-100 rounded-lg flex flex-col gap-5 p-4 w-full mx-3 md:mx-0 md:w-[60vw]">
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>
            <div className="flex w-full flex-col md:flex-row gap-4">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-base font-semibold">Username : </label>
                <input className="py-1 md:py-2 rounded-sm ring-2 ring-gray-600" type="text" />
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-base font-semibold">Email : </label>
                <input className="py-1 md:py-2 rounded-sm ring-2 ring-gray-600" type="email" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-base font-semibold">Phone : </label>
                <input className="py-1 md:py-2 rounded-sm ring-2 ring-gray-600" type="text" />
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="" className="text-base font-semibold">Message : </label>
                <textarea
                  className="rounded-sm px-2 ring-2 ring-gray-600 placeholder:text-gray-600"
                  cols="30"
                  rows="2"
                  placeholder="Enter message here..."
                ></textarea>
              </div>
            </div>

            <div className="w-10">
              <button className="px-4 py-2 bg-[#071b52] rounded-lg text-white">
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
