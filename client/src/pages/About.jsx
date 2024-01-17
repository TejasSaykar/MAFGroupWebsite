import React from 'react'
import Layout from '../components/Layout'
import { FaArrowRight } from "react-icons/fa6"
import { IoPeopleOutline } from "react-icons/io5"
import { TbWorld } from "react-icons/tb"
import { SlClock } from "react-icons/sl"
import { LiaClipboardListSolid } from "react-icons/lia"


const About = () => {
  return (
    <Layout title={"About | WPP"} description={"This is the about page"}>
      <div className='mt-[4rem] w-full'>
        <div className="relative top gradiant w-full">
          <img src="/img/aboutBg.png" alt="" />
          <div className='absolute top-[10rem] px-16 text-white flex justify-between items-center gap-28'>
            <div className="left w-full">
              <h2 className='text-4xl font-bold'>WE ARE THE CREATIVE TRANSFORMATION COMPANY</h2>
              <p className='text-3xl font-thin mt-4'>We use the power of creativity to build better futures for our people, planet, clients and communities.</p>
            </div>
            <div className="right w-1/2">
              <p className='text-xl font-light text-md'>"The ‘new normal’ is yet to be defined; creativity has the power to ensure that what comes next is better than what came before"</p>
              <span>
                <h3 className='text-xl font-semibold mt-6'>Mark Read CBE</h3>
                <h4 className='text-lg font-light'>Chief Executive Officer</h4>
              </span>
            </div>
          </div>
        </div>


        {/* First */ }

        <div className="first w-full mt-10">
          <div className='w-[80%] m-auto'>
            <img src="/img/aboutBg.png" className='' alt="" />
          </div>

          <div className='w-1/2 m-auto my-6'>
            <h2 className='text-3xl font-semibold'><span className='text-3xl text-purple-500 font-bold'>"</span> Creative transformation is fuelled by ideas that are born from a powerful sense of purpose and executed in a massively disruptive way <span className='text-3xl text-purple-500 font-bold'>"</span>
            </h2>
            <h4 className='text-xl mt-3 font-medium'>ROB REILLY</h4>
            <p className='text-md font-thin'>Global Chief Creative Officer, WPP</p>
          </div>
        </div>

        {/* Second */ }

        <div className='second w-full mt-10'>
          <div className='w-full flex px-14 items-start justify-center gap-20'>
            <div className="left w-full">
              <img src="/img/homeImg4.jpg" alt="" />
            </div>
            <div className="right flex flex-col gap-8">
              <h1 className='text-4xl font-bold text-[#071b52]'>Building better futures for our people</h1>
              <p className='text-xl font-thin'>We invest in our people’s future, create inclusive working environments, and build cultures based on the values of openness, optimism and a commitment to extraordinary work.</p>
              <span className='flex gap-2 items-center text-sm font-thin'>
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
          </div>
        </div>

        {/* Third */ }

        <div className='third w-full mt-20'>
          <div className='w-[90%] mx-28 flex gap-5 items-start justify-center'>
            <div className="one w-full">
              <div className='flex gap-3 items-center text-3xl text-[#2c0678] font-bold'>
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-12 mt-4'>People</h2>
            </div>
            <div className="two w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678]'>
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Countries</h2>
            </div>
            <div className="three w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3'>
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Women in executive leadership roles</h2>
                <span className='text-xl font-light text-[#2c0678] ml-10 mt-4'>(2021: 39%)</span>
              </div>
            </div>
            <div className="four w-full px-10">
              <div className='flex gap-3 items-center text-3xl font-bold text-[#2c0678] mb-3'>
                <LiaClipboardListSolid />
                <h2>33,000+</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold w-1/2 ml-10'>Technology accreditations earned by our people</h2>
            </div>
          </div>
        </div>

        {/* Fourth */ }

        <div className='second w-full mt-20 bg-green-50'>
          <div className='w-full flex px-14 items-start justify-center gap-20'>
            <div className="right flex flex-col gap-8">
              <h1 className='text-4xl font-bold text-[#071b52]'>Building better futures for our people</h1>
              <p className='text-xl font-thin'>We invest in our people’s future, create inclusive working environments, and build cultures based on the values of openness, optimism and a commitment to extraordinary work.</p>
              <span className='flex gap-2 items-center text-sm font-thin'>
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
            <div className="left w-full">
              <img src="/img/homeImg3.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* Fifth */ }

        <div className='third w-full mt-20'>
          <div className='w-[80%] m-auto flex gap-5 items-start justify-center'>
            <div className="one w-full">
              <div className='flex gap-3 items-center text-3xl text-[#2c0678] font-bold'>
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-12 mt-4'>People</h2>
            </div>
            <div className="two w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678]'>
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Countries</h2>
            </div>
            <div className="three w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3'>
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Women in executive leadership roles</h2>
                <span className='text-xl font-light text-[#2c0678] ml-10 mt-4'>(2021: 39%)</span>
              </div>
            </div>
          </div>
        </div>


        {/* Sixth */ }

        <div className='second w-full mt-10'>
          <div className='w-full flex px-14 items-start justify-center gap-20'>
            <div className="left w-full">
              <img src="/img/homeImg4.jpg" alt="" />
            </div>
            <div className="right flex flex-col gap-8">
              <h1 className='text-4xl font-bold text-[#071b52]'>Building better futures for our people</h1>
              <p className='text-xl font-thin'>We invest in our people’s future, create inclusive working environments, and build cultures based on the values of openness, optimism and a commitment to extraordinary work.</p>
              <span className='flex gap-2 items-center text-sm font-thin'>
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
          </div>
        </div>

        {/* Seventh */ }

        <div className='third w-full mt-20'>
          <div className='w-[80%] m-auto flex gap-5 items-start justify-center'>
            <div className="one w-full">
              <div className='flex gap-3 items-center text-3xl text-[#2c0678] font-bold'>
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-12 mt-4'>People</h2>
            </div>
            <div className="two w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678]'>
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Countries</h2>
            </div>
            <div className="three w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3'>
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Women in executive leadership roles</h2>
                <span className='text-xl font-light text-[#2c0678] ml-10 mt-4'>(2021: 39%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Eighth */ }

        <div className='second w-full mt-20 bg-green-50'>
          <div className='w-full flex px-14 items-start justify-center gap-20'>
            <div className="right flex flex-col gap-8">
              <h1 className='text-4xl font-bold text-[#071b52]'>Building better futures for our people</h1>
              <p className='text-xl font-thin'>We invest in our people’s future, create inclusive working environments, and build cultures based on the values of openness, optimism and a commitment to extraordinary work.</p>
              <span className='flex gap-2 items-center text-sm font-thin'>
                <FaArrowRight />
                <h4>Find out more about our approach to people and culture</h4>
              </span>
            </div>
            <div className="left w-full">
              <img src="/img/homeImg3.jpg" alt="" />
            </div>
          </div>
        </div>


        {/* Ninth */ }

        <div className='third w-full mt-20'>
          <div className='w-[90%] mx-28 flex gap-5 items-start justify-center'>
            <div className="one w-full">
              <div className='flex gap-3 items-center text-3xl text-[#2c0678] font-bold'>
                <IoPeopleOutline />
                <h2>115,000</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-12 mt-4'>People</h2>
            </div>
            <div className="two w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678]'>
                <TbWorld />
                <h2>100+</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Countries</h2>
            </div>
            <div className="three w-full">
              <div className='flex gap-2 items-center text-3xl font-bold text-[#2c0678] mb-3'>
                <SlClock />
                <h2>40%</h2>
              </div>
              <div>
                <h2 className='text-xl text-[#2c0678] font-bold ml-10 mt-4'>Women in executive leadership roles</h2>
                <span className='text-xl font-light text-[#2c0678] ml-10 mt-4'>(2021: 39%)</span>
              </div>
            </div>
            <div className="four w-full px-10">
              <div className='flex gap-3 items-center text-3xl font-bold text-[#2c0678] mb-3'>
                <LiaClipboardListSolid />
                <h2>33,000+</h2>
              </div>
              <h2 className='text-xl text-[#2c0678] font-bold w-1/2 ml-10'>Technology accreditations earned by our people</h2>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default About
