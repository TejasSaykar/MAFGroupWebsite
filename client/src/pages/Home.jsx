import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { FaArrowRight } from "react-icons/fa6"
import Layout from '../components/Layout'
import { FaLongArrowAltDown } from "react-icons/fa"
import { FaTags } from "react-icons/fa"

const Home = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const imgStyle = {
        transform: `translateY(-${scrollY}px)`,
        transition: "transform 0.3s ease-out"
    }

    const imgStyle1 = {
        transform: `translateY(${10}px)`,
        transition: "transform 0.3s ease-out"
    }

    return (
        <>
            <Layout title={"Home | WPP"} description={"This is the home page"} className='w-full h-screen' >
                <div className='gradiant relative top'>
                    <div className='relative'>
                        <img className='' src="/img/homeBg.png" alt="" />
                        <img className='absolute top-36 h-[150px] left-28' src="/img/homeBg3.png" alt="" />
                        <img className='absolute top-[34rem] left-28' src="/img/homeBg2.png" alt="" style={ imgStyle } />
                        <img className='absolute top-[18rem] h-[150px] right-40' style={ imgStyle } src="/img/homeBg1.png" alt="" />
                        <img className='absolute top-[30rem] h-[150px] right-[20rem]' style={ imgStyle } src="/img/homeBg3.png" alt="" />
                        <img className='absolute top-[20rem] left-10' style={imgStyle1} src="/img/homeBg4.png" alt="" />
                        <img className='absolute top-[10rem] right-5' style={imgStyle1} src="/img/homeBg5.png" alt="" />
                        <img className='absolute top-[30rem] right-40' src="/img/homeBg6.png" alt="" />
                    </div>
                    <div className='absolute top-36 flex flex-col items-center justify-center w-full'>
                        <div className='flex flex-col gap-5 text-6xl text-white font-bold'>
                            <h1 className='text-center'>WE ARE THE CREATIVE</h1>
                            <h1 className='text-center'>TRANSFORMATION COMPANY</h1>
                        </div>
                        <div className='w-1/3 text-white text-center mt-10 text-xl'>
                            <h3>Using the power of creativity to build better futures for our people, planet, clients and communities</h3>
                        </div>
                        <div className='my-8'>
                            <button className='px-6 py-3 ring-2 ring-sky-600 rounded-full text-white hover:underline'>Learn more about WPP</button>
                        </div>
                        <div className='text-6xl font-thin text-white'>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>

                {/* Middle One */ }

                <div className='middle1 mt-20'>
                    <div className='relative w-[70%] m-auto flex justify-between px-10 gap-10'>
                        <h2 className='absolute font-bold -rotate-90 -left-8 top-4 text-xl'>WORK</h2>
                        <div className="left w-1/2 cursor-pointer">
                            <div className='flex flex-col'>
                                <img src="/img/homeImg1.jpg" className='w-full' alt="" />
                                <h2 className='text-xl font-bold my-3 hover:underline'>
                                    Ogilvy & Wavemaker: Cadbury Dairy Milk’s Proud Sponsors of the Ground Staff
                                </h2>
                                <p className='text-gray-600'>
                                    Celebrating the work of unnoticed heroes
                                </p>
                            </div>
                        </div>
                        <div className="right w-1/2 cursor-pointer">
                            <div className='flex flex-col'>
                                <img src="/img/homeImg2.jpg" className='w-full aspect-auto' alt="" />
                                <h2 className='text-xl font-bold my-3 hover:underline'>
                                    VMLY&R: Maxx Flash’s The Killer Pack
                                </h2>
                                <p className='text-gray-600'>
                                    A pack that kills mosquito larvae at source
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Two */ }

                <div className='middle2 mt-20'>
                    <div className='relative w-[70%] m-auto px-10'>
                        <h2 className='absolute font-bold -rotate-90 -left-8 top-16 text-xl'>WPP iQ</h2>
                        <div className='top flex gap-3 items-center justify-end mb-3'>
                            <p className='text-sky-400 text-lg'><FaArrowRight /></p>
                            <h2 className='text-md text-gray-600 font-semibold'>Read more on WPP iQ</h2>
                        </div>
                        <div className="bottom w-full flex gap-4 items-srart justify-center">
                            <div className="left w-full">
                                <div className='w-full'>
                                    <img src="/img/homeImg3.jpg" className='aspect-square' alt="" />
                                </div>
                                <h2 className='text-xl font-bold hover:underline mt-2 mb-5'>
                                    Going hyperlocal in India
                                </h2>
                                <p className='text-gray-600'>
                                    India is a vast country, and advertising that works in one part of the country may not work well in another.
                                </p>
                            </div>
                            <div className="middle w-full">
                                <div className='w-full'>
                                    <img src="/img/homeImg4.jpg" className='aspect-square' alt="" />
                                </div>
                                <h2 className='text-xl font-bold hover:underline mt-2 mb-5'>
                                    New possibilities powered by creativity in India
                                </h2>
                                <p className='text-gray-600'>
                                    Both the accolades and the ideas associated with WPP’s use of technologies that underpin the metaverse stand out in India
                                </p>
                            </div>
                            <div className="right w-full">
                                <div className='w-full'>
                                    <img src="/img/homeImg5.jpg" className='aspect-square' alt="" />
                                </div>
                                <h2 className='text-xl font-bold hover:underline mt-2 mb-5'>
                                    Customer centricity rules in B2B marketing
                                </h2>
                                <p className='text-gray-600'>
                                    The modern B2B CMO must act as a tech integrator, customer oracle and cross-department orchestrator, says Kristin Gower of WPP’s EssenceMediacom
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Three */ }

                <div className='w-full mt-20'>
                    <div className='relative w-[66%] m-auto h-[80vh] px-16' style={ { background: "url('/img/homeImg6.jpg')", backgroundPosition: "cover", objectFit: "cover" } }>
                        <h2 className='absolute -left-28 top-16 -rotate-90 text-xl font-bold'>SUSTAINABILITY</h2>
                    </div>
                    <div className='w-[66%] m-auto mt-6 pl-6'>
                        <h3 className='text-xl font-semibold my-4'>
                            WPP’s net zero commitment
                        </h3>
                        <p className='my-4 text-gray-700'>
                            Our commitment is to reach the net zero in our value chain by 2030
                        </p>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sky-400 text-lg '><FaArrowRight /></p>
                            <h2 className='text-lg text-gray-600 font-semibold'>WPP Net Zero</h2>
                        </div>
                    </div>
                </div>

                {/* Middle Four */ }

                <div className='w-full mt-20'>
                    <div className='relative w-[70%] m-auto px-4 flex gap-4 justify-center items-start'>
                        <h2 className='absolute -left-16 top-16 font-bold text-xl -rotate-90'>LATEST NEWS</h2>
                        <span className='absolute right-5 -top-8 flex gap-2 items-center'>
                            <FaArrowRight className='text-sky-500' />
                            <h2 className='text-gray-500 font-semibold hover:underline cursor-pointer'>Read more news</h2>
                        </span>
                        <div className="one w-full">
                            <img src="/img/last1.jpg" className='aspect-square w-[100%] bg-contain' alt="" />
                            <h2 className='text-xl font-bold my-3 hover:underline'>WPP acquires sonic branding agency amp</h2>
                        </div>
                        <div className="two w-full">
                            <img src="/img/last2.jpeg" className='aspect-square bg-contain' alt="" />
                            <h2 className='text-xl font-bold my-3 hover:underline'>WPP welcomes KKR as strategic partner in FGS Global</h2>
                            <p className='text-md text-gray-500' style={ { lineHeight: "32px" } }>
                                WPP today announces that leading global investment firm KKR has made a growth investment in FGS Global, the strategic advisory and communications consultancy in which WPP is a majority shareholder.
                            </p>
                        </div>
                        <div className="three w-full">
                            <img src="/img/last3.jpg" className='aspect-square bg-contain' alt="" />
                            <h2 className='text-xl font-bold my-3 hover:underline'>WPP India Foundation wins CSR Foundation of the Year</h2>
                        </div>
                        <div className="four w-full">
                            <img src="/img/last4.jpg" className='aspect-square bg-contain' alt="" />
                            <h2 className='text-xl font-bold my-3 hover:underline'>
                                WPP acquires remaining stake in MediaCom Communications in India from Sam Balsara and Lara Balsara Vajifdar
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Share */ }

                <div className='w-full mt-20 gradiant text-white py-10'>
                    <div className='relative w-[70%] m-auto flex gap-4 justify-center items-start'>
                        <h2 className='absolute -rotate-90 -left-24 top-14 text-xl font-bold'>INVESTORS</h2>
                        <div className="left w-full flex flex-col gap-8">
                            <h1 className='text-xl font-semibold'>SHARE PRICE</h1>
                            <div>
                                <h3 className='text-gray-400 font-semibold'>LSE</h3>
                                <div className='flex gap-4 mt-1 items-center'>
                                    <h2 className='text-2xl font-normal'>730.12 p</h2>
                                    <h4 className='text-gray-400'>-2.48</h4>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-gray-400 font-semibold'>NYSE</h3>
                                <div className='flex gap-4 mt-1 items-center'>
                                    <h2 className='text-2xl font-normal'>$46.31</h2>
                                    <h4 className='text-gray-400'>-0.19</h4>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-xl font-bold'>Data is deployed by 15 minutes</h2>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <FaArrowRight className='text-gray-200' />
                                <p className='text-gray-300 hover:underline cursor-pointer'>See full share price</p>
                            </div>

                        </div>
                        <div className="middle w-full flex flex-col gap-8">
                            <h1 className='text-xl font-semibold'>RESOURCES</h1>
                            <div>
                                <h2 className='text-xl font-semibold'>Annual Reports & Accounts 2024</h2>
                                <div className='mt-2 flex gap-1 items-center text-gray-400'>
                                    <FaLongArrowAltDown className='' />
                                    <h3>PDF</h3>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold'>Sustainability Report 2022</h2>
                                <div className='mt-2 flex gap-1 items-center text-gray-400'>
                                    <FaLongArrowAltDown className='' />
                                    <h3>PDF</h3>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center mt-[3.7rem]'>
                                <FaArrowRight className='text-gray-200' />
                                <p className='text-gray-300 hover:underline cursor-pointer'>See more resources</p>
                            </div>
                        </div>
                        <div className="right w-full flex flex-col gap-8">
                            <h1 className='text-xl font-semibold'>REGULATORY NEWS</h1>
                            <div className='flex flex-col gap-1'>
                                <span className='text-gray-400'>12 jan 2024 - 12:45</span>
                                <h2 className='text-xl font-semibold'>Notification of CMD and 2023 Preliminary Results</h2>
                                <div className='flex gap-5 items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <FaTags />
                                        <h1 className='text-gray-400'>Results</h1>
                                    </span>
                                    <span className='mt-2 flex gap-1 items-center text-gray-400'>
                                        <FaLongArrowAltDown className='' />
                                        <h3>PDF</h3>
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-gray-400'>12 jan 2024 - 15:03</span>
                                <h2 className='text-xl font-semibold'>Total Voting Rights and Capital</h2>
                                <div className='flex gap-5 items-center'>
                                    <span className='flex gap-2 items-center'>
                                        <FaTags />
                                        <h1 className='text-gray-400'>Capital structure</h1>
                                    </span>
                                    <span className='mt-2 flex gap-1 items-center text-gray-400'>
                                        <FaLongArrowAltDown className='' />
                                        <h3>PDF</h3>
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <FaArrowRight className='text-gray-200' />
                                <p className='text-gray-300 hover:underline cursor-pointer'>See the latest investor news</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Home
