import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const pathname = useLocation().pathname;
  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`w-full font-light text-sm bg-gray-800 text-white mt-${
        pathname === "/about" ? "0" : "0"
      }`}
    >
      <div className="flex-col w-full md:flex-row  py-8 sm:py-16 flex gap-5 md:w-[90%] mx-auto md:items-center justify-center">
        <div className="w-full flex-col px-4 md:px-0 md:flex-row gap-2 flex justify-between md:gap-10 md:w-[100%]">
          <div className="two flex flex-col items-center md:items-start gap-2 w-full">
            <h2 className="text-xl border-b-[1px] w-full text-center md:text-start pb-2">
              About Us
            </h2>
            <p
              className="border-b-[2px] pb-4 mt-3 text-gray-300"
              style={{ textAlign: "justify" }}
            >
              Setup your business for unparalleled success by navigating complex
              data landscapes with precision. We are experts in formulating
              clear, actionable strategies that position your business
              strategically to achieve optimal outcomes...
              <Link
                to={"/about"}
                className="pl-1 underline font-semibold text-sky-700"
              >
                read more
              </Link>
            </p>
            <div className="flex items-center gap-2 mt-5">
              {/* <IoIosMail className="text-2xl" /> */}
              <p className="text-gray-300">
                If you are willing to put data to use and make data-driven,
                informed decisions that revolutionize your business, contact us
                by emailing to{" "}
                <a
                  href="mailto:service@mafgroup.com"
                  className="text-sky-700 font-semibold underline"
                >
                  service@mafgroup.com
                </a>
              </p>
            </div>
          </div>
          <div className="one flex flex-col items-center md:items-start justify-center md:justify-start gap-5 w-full mb-6 pt-6 md:pt-0">
            <h2 className="text-xl border-b-[1px] text-center md:text-start w-full pb-2">
              Links
            </h2>
            <Link
              to={"/terms_conditions"}
              className="w-[60%] md:w-auto mx-auto md:mx-0 text-center hover:underline"
            >
              Privacy policy
            </Link>
            {/* <Link
              to="/tc"
              className="w-[60%] md:w-auto mx-auto md:mx-0 text-center hover:underline"
            >
              Terms & conditions
            </Link> */}
            <Link to={"/cookies"} className="text-center hover:underline">
              Cookies
            </Link>

            {/* <span>Accessibility</span> */}
          </div>

          <div className="four flex flex-col items-center md:items-start gap-3 sm:gap-10 w-full">
            <h2 className="text-xl border-b-[1px] text-center md:text-start pb-2 w-full">
              Social
            </h2>
            <div className="top flex flex-col md:flex-row gap-4 text-xl items-center mt-4 md:mt-0">
              <div className="flex gap-4">
                <div
                  onClick={() => openWebsite("https://twitter.com/MAFGroup_")}
                  className="bg-[#105f7f] dark:bg-rose-600 h-8 cursor-pointer w-8 flex items-center justify-center rounded-full"
                >
                  <FaXTwitter className="text-white text-sm" />
                </div>

                <div
                  onClick={() =>
                    openWebsite(
                      "https://www.linkedin.com/company/maf-group-uk/"
                    )
                  }
                  className="bg-[#105f7f] dark:bg-rose-600 h-8 w-8 flex cursor-pointer items-center justify-center rounded-full"
                >
                  <TiSocialLinkedin className="text-white tesm-xl" />
                </div>
              </div>
              <div className="bottom text-sm font-thin">
                <h2 className="font-light">mafgroup 2023-24</h2>
              </div>
            </div>
            <Link
              to="/contact"
              // ${pathname === "/contact" && "hidden"
              className={`
              } w-[60%] bg-white mx-auto md:mx-0 text-center font-semibold py-2 md:py-3 rounded-sm text-lg text-gray-600 hover:bg-gray-100 ring-1 ring-gray-300`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
