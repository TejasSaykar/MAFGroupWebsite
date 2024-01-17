import React from 'react'
import Layout from "../components/Layout"
import { FaArrowRight } from "react-icons/fa6"


const Contact = () => {
    return (
        <Layout title={"Contact | WPP"} description={"This is the contact page"}>
            <div className='mt-[4rem] w-full'>
                <div className="relative top w-full">
                    <img src="/img/contactBg.jpg" alt="" />
                    <div className='absolute top-24 text-white px-20'>
                        <div className="top mb-3">
                            <h1 className='text-5xl font-bold text-[#d724f2]'>WPP PLC</h1>
                        </div>
                        <div className='w-full flex justify-between gap-32'>
                            <div className="left flex flex-col gap-4 w-full">
                                <h2 className='text-2xl font-light'>Sea Containers</h2>
                                <p className='text-2xl font-light'>18 Upper Ground
                                    London, SE1 9GL
                                    Tel: +44 (0)20 7282 4600
                                </p>
                                <span className='flex gap-2 items-center'>
                                    <FaArrowRight />
                                    <h4 className='font-light'>Email</h4>
                                </span>
                            </div>
                            <div className="middle w-full flex flex-col gap-4">
                                <h2 className='font-bold'>OUR COMPANIES</h2>
                                <p className='text-2xl font-light'>Details for WPP’s agency networks and other operations.</p>
                                <span className='flex gap-2 items-center'>
                                    <FaArrowRight />
                                    <h4 className='font-light'>Find out more</h4>
                                </span>
                            </div>
                            <div className="right w-full flex flex-col gap-4">
                                <h1 className='font-bold'>NEW BUSINESS ENQUIRIES</h1>
                                <p className='text-2xl font-light'>Contact the WPP new business team for further details of our services.</p>
                                <span className='flex gap-2 items-center'>
                                    <FaArrowRight />
                                    <h4 className='font-light'>Email</h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-10'>
                    <div className='w-[80%] m-auto flex gap-10'>
                        <div className="left w-full">
                            <h2 className='text-3xl font-light'>Contact us for comments or information on WPP financial policies or statements.</h2>
                            <span className='flex gap-2 text-sm items-center mt-4 font-thin'>
                                <FaArrowRight className='font-thin' />
                                <h4 className='text-sm'>Email: investor@wpp.com</h4>
                            </span>
                        </div>
                        <div className="middle w-full">
                            <h2 className='text-3xl font-bold text-[#071b52]'>Tom Waldron</h2>
                            <p className='text-2xl mt-3 font-light'>Group Director, Investor Relations (London)</p>
                        </div>
                        <div className="right w-full">
                            <h2 className='text-3xl font-bold text-[#071b52]'>Anthony Hamilton</h2>
                            <p className='text-2xl mt-3 font-light'>Director, Investor Relations (London)</p>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-5'>
                    <div className='flex w-[80%] m-auto items-start justify-center gap-5'>
                        <div className='left w-full'>
                            <h2 className='text-3xl font-light'>For questions about your shareholding, including changes of address, lost share certificates, share transfers etc, contact:</h2>
                        </div>
                        <div className='w-full'>
                            <h2 className='w-1/2 m-auto font-light text-xl'>13 Castle Street
                                St Helier
                                Jersey
                                JE1 1ES
                                T : +44 (0)370 707 1411
                            </h2>
                        </div>
                        <div className='w-full'>
                            <h2 className='text-3xl font-bold text-[#071b52]'>WPP registered office</h2>
                            <p className='w-1/2 text-xl font-light mt-3'>22 Grenville Street
                                St Helier
                                Jersey
                                JE4 8PX
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Contact
