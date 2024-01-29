import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full font-thin text-sm">
      <div className="flex-col w-full md:flex-row  py-8 sm:py-16 flex gap-5 md:w-[90%] mx-auto md:items-center justify-center">
        <div className="w-full flex-col px-4 md:px-0 md:flex-row gap-2 flex justify-between md:gap-10 md:w-[70%]">
          <div className="one flex flex-col items-center md:items-start justify-center gap-2 w-full">
            <Link to={"/tc"} className="hover:underline">Privacy policy</Link>
            <Link to="/tc" className="hover:underline">Terms & conditions</Link>
            <Link to={"/cookies"} className="hover:underline">Cookies</Link>
            {/* <span>Accessibility</span> */}
          </div>
          <div className="two flex flex-col items-center md:items-start gap-2 w-full">
            {/* <span>Sitemap</span> */}
            <Link to="/contact" className="hover:underline">Contacts Us</Link>
          </div>
          <div className="four flex flex-col items-center md:items-center gap-3 sm:gap-10 w-full">
            <div className="top flex gap-4 text-xl items-center mt-4 md:mt-0">
              <div className="bg-[#105f7f] dark:bg-rose-600 h-8 cursor-pointer w-8 flex items-center justify-center rounded-full">
                <FaXTwitter className="text-white text-sm" />
              </div>

              <div className="bg-[#105f7f] dark:bg-rose-600 h-8 w-8 flex cursor-pointer items-center justify-center rounded-full">
                <TiSocialLinkedin className="text-white tesm-xl" />
              </div>
              <div className="bottom text-sm font-thin">
                <h2>© mafgroup 2023-24</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
