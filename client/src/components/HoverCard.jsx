import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HoverCard = (props) => {
    const [activeNav, setActiveNav] = useState(props.activeNav);
    const [open, setOpen] = useState(props.open)

    const handleLeave = () => {
        setActiveNav(!activeNav);
        props.handleNavItemHover(0);
        setOpen(false);
    }

    return (
        <div className='bg-white border-t-2 w-full flex justify-center' onMouseEnter={ activeNav } onMouseLeave={ handleLeave }>
            { activeNav &&  <div className='h-[40vh] gap-20 flex justify-center items-start mt-10'>
                <div className='text-gray-600 flex flex-col w-40 text-sm gap-4 px-10'>
                    { props.link.map((item) => (
                        <>
                            <Link
                                to={ item.link }
                                className='hover:underline'
                            >{ item.item }</Link>
                        </>
                    )) }
                </div>
                <div className='flex gap-8 w-full items-start justify-center'>
                    <div className=''>
                        <img src={ props.img1 } className='w-full h-[30vh]' alt="" />
                        <h2 className='text-lg font-bold hover:underline cursor-pointer mt-2'>{ props.h1 }</h2>
                    </div>
                    <div className=''>
                        <img src={ props.img2 } className='w-full h-[30vh]' alt="" />
                        <h2 className='text-lg font-bold hover:underline cursor-pointer mt-2'>{ props.h2 }</h2>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default HoverCard
{ }