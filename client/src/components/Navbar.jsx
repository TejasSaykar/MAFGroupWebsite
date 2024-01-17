import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { IoSearch } from "react-icons/io5"
import HoverCard from './HoverCard';

const Navbar = () => {

    // const [hover, setHover] = useState(false);

    // const handleHover = () => {
    //     setHover(true);
    // }

    // const handleLeave = () => {
    //     setHover(false);
    // }

    const navigate = useNavigate();


    const [activeNavItem, setActiveNavItem] = useState(0);
    const [open, setOpen] = useState(false);

    const handleNavItemHover = (navItem) => {
        setActiveNavItem(navItem);
        setOpen(true);
    };

    const handleLeave = () => {
        setOpen(false);
        setActiveNavItem(0);
    }

    return (
        <>
            <div className='h-16 shadow-md flex justify-between items-center px-20'>
                <div className='left'>
                    <div style={ { fontFamily: "sans-serif" } }>
                        <h2 className='text-5xl font-semibold text-[#351d7d]'>
                            <Link to={"/"}>WPP</Link>
                        </h2>
                    </div>
                </div>
                <div className="middle">
                    <div className='flex gap-9 font-bold text-[14px]' style={ { fontFamily: "sans-serif" } }>
                        <button className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black' onClick={ () => { navigate("/about"), setOpen(false) } } onMouseEnter={ () => handleNavItemHover(1) } onMouseLeave={ handleLeave }>ABOUT</button>
                        <button className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black'
                            // to={"/investors"}
                            onClick={ () => {navigate("/investors"), setOpen(false) }} 
                            onMouseEnter={ () => handleNavItemHover(2) }
                            onMouseLeave={ handleLeave }
                        >INVESTORS</button>
                        <Link className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black'>SUSTAINABILITY</Link>
                        <Link className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black' to={ "/" }>MEDIA</Link>
                        <Link className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black' to={ "/" }>POEPLE</Link>
                        <Link className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black' to={ "/" }>WPP iQ</Link>
                        <Link className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black' to={ "/" }>WORK</Link>
                        <Link className='hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 items-center text-center flex hover:border-black' to={ "/contact" }>CONTACTS</Link>
                        {/* <select className='h-5 flex items-center justify-center text-center'>
                        <option value=""></option>
                    </select> */}
                    </div>
                </div>
                <div className="right text-xl">
                    <IoSearch className='cursor-pointer' />
                </div>
            </div>


            {/* Card for NavItem 1 */ }

            { open && activeNavItem === 1 && <HoverCard
                link={ [{
                    item: "Offers to our clients",
                    link: "/offer"
                },
                {
                    item: "WPP companies",
                    link: "/company"
                },
                {
                    item: "Leadership",
                    link: "/leadership"
                }
                ] }
                img1="/img/homeImg1.jpg"
                img2="/img/homeImg3.jpg"
                h1="Learn more about our offer to clients"
                h2="Our purpose"
                handleNavItemHover={ handleNavItemHover }
                activeNav={ activeNavItem }
                open={ open }
            />
            }

            {/* Card for NavItem 2 */ }

            { open && activeNavItem === 2 &&  <HoverCard
                link={ [{
                    item: "Financial realses",
                    link: "/finance"
                },
                {
                    item: "Regulatory news",
                    link: "/news"
                },
                {
                    item: "Share price",
                    link: "/share"
                },
                {
                    item: "Shareholder center",
                    link: "/shareholder"
                }
                ] }
                img1="/img/homeImg4.jpg"
                img2="/img/homeImg5.jpg"
                h1="Third Quarter Trading Update"
                h2="Our purpose"
                handleNavItemHover={ handleNavItemHover }
                activeNav={ activeNavItem }
            />
            }

        </>
    )
}

export default Navbar
