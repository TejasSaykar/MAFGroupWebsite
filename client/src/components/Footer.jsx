import React from 'react'
import { GoArrowUpRight } from "react-icons/go"
import { GrInstagram } from "react-icons/gr"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import { TiSocialLinkedin } from "react-icons/ti"
import { IoLogoYoutube } from "react-icons/io5"


const Footer = () => {
  return (
    <div className='w-full font-thin text-sm'>
      <div className='pl-10 py-16 flex gap-5 w-[90%] m-auto items-start justify-center'>
        <div className="one flex flex-col justify-center gap-2 w-full">
          <span>Privacy policy</span>
          <span>Terms & conditions</span>
          <span>Cookies</span>
          <span>Accessibility</span>
        </div>
        <div className="two flex flex-col gap-2 w-full">
          <span>Modern Slavery Act statement</span>
          <span>Sitemap</span>
          <span>Contacts</span>
          <span>Right to Speak</span>
        </div>
        <div className="three flex flex-col gap-2 w-full">
          <span>Fraudulent use of WPP's name</span>
          <span className='flex gap-2 items-center'><GoArrowUpRight /><h4>WPP internet</h4></span>
        </div>
        <div className="four flex flex-col gap-10 w-full">
          <div className="top flex gap-4 text-xl">

            <div className='bg-[#0c2059] h-8 w-8 flex items-center justify-center rounded-full'>
            <FaFacebookF className='text-white text-sm' />
            </div>

            <div className='bg-[#0c2059] h-8 w-8 flex items-center justify-center rounded-full'>
            <GrInstagram className='text-white text-sm' />
            </div>

            <div className='bg-[#0c2059] h-8 w-8 flex items-center justify-center rounded-full'>
            <FaXTwitter className='text-white text-sm' />
            </div>

            <div className='bg-[#0c2059] h-8 w-8 flex items-center justify-center rounded-full'>
            <TiSocialLinkedin className='text-white tesm-xl' />
            </div>

            <div className='bg-[#0c2059] h-8 w-8 flex items-center justify-center rounded-full'>
            <IoLogoYoutube className='text-white text-sm' />
            </div>
          </div>
          <div className="bottom">
            <h2>© WPP plc 1999-2024</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
