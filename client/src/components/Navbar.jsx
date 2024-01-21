import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import HoverCard from "./HoverCard";

const Navbar = () => {
  // const [hover, setHover] = useState(false);

  // const handleHover = () => {
  //     setHover(true);
  // }

  // const handleLeave = () => {
  //     setHover(false);
  // }

  const navigate = useNavigate();

  const [activeNavItem, setActiveNavItem] = useState(null);
  const [open, setOpen] = useState(null);

  const handleNavItemHover = (navItem) => {
    setActiveNavItem(navItem);
    setOpen(true);
  };

  const handleLeave = () => {
    setActiveNavItem(null);
    setOpen(false);
  };

  const handleClick = () => {
    setActiveNavItem(0);
    setOpen(false);
  };

  return (
    <>
      <div className="h-16 shadow-md flex justify-between items-center px-20">
        <div className="left">
          <div style={{ fontFamily: "sans-serif" }}>
            <h2 className="text-5xl font-semibold text-[#351d7d]">
              <Link to={"/"}>MAF</Link>
            </h2>
          </div>
        </div>
        <div className="middle">
          <div
            className="flex font-bold text-[14px]"
            style={{ fontFamily: "sans-serif" }}
          >
            <button
              className={`hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black ${
                activeNavItem === 1 ? "hovered" : ""
              } `}
              onClick={() => {
                navigate("/about"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(1)}
              onMouseLeave={handleLeave}
              onMouseDown={() => handleMouseDown(index)}
            >
              ABOUT
            </button>

            <button
              className={`hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black`}
              onClick={() => {
                navigate("/services"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(3)}
              onMouseLeave={handleLeave}
            >
              SERVICES
            </button>

            <button
              className="hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black"
              onClick={() => {
                navigate("/banking"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(4)}
              onMouseLeave={handleLeave}
            >
              INDUSTRIES
            </button>

            <button
              className="hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black"
              onClick={() => {
                navigate("/our-work"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(5)}
              onMouseLeave={handleLeave}
            >
              OUR WORK
            </button>

            <Link
              className="hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black"
              to={"/partners"}
            >
              OUR PARTNERS
            </Link>
            <Link
              className="hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black"
              to={"/"}
            >
              POEPLE
            </Link>
            <Link
              className="hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black"
              to={"/"}
            >
              WORK
            </Link>
            <Link
              className="hover:border-t-4 border-t-4 border-transparent transition-all text-[#351d7d] h-16 px-5 items-center text-center flex hover:border-black"
              to={"/contact"}
            >
              CONTACTS
            </Link>
            {/* <select className='h-5 flex items-center justify-center text-center'>
                        <option value=""></option>
                    </select> */}
          </div>
        </div>
        <div className="right text-xl">
          <IoSearch className="cursor-pointer" />
        </div>
      </div>

      {/* Card for NavItem 1 */}

      {activeNavItem === 1 && (
        <HoverCard
          link={[
            {
              item: "Our Unique Value Proposition ",
              link: "/about_1",
            },
            {
              item: "Our Strategic Leadership ",
              link: "/about_2",
            },
          ]}
          img1="/img/realTimeData.jpg"
          img2="/img/homeImg3.jpg"
          h1="Learn more about our offer to clients"
          h2="Our purpose"
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
          open={open}
        />
      )}

      {/* Card for NavItem 2 */}

      {activeNavItem === 2 && (
        <HoverCard
          link={[
            {
              item: "Financial realses",
              link: "/finance",
            },
            {
              item: "Regulatory news",
              link: "/news",
            },
            {
              item: "Share price",
              link: "/share",
            },
            {
              item: "Shareholder center",
              link: "/shareholder",
            },
          ]}
          img1="/img/homeImg4.jpg"
          img2="/img/homeImg5.jpg"
          h1="Third Quarter Trading Update"
          h2="Our purpose"
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for Navitem 3 */}

      {activeNavItem === 3 && open && (
        <HoverCard
          link={[
            {
              item: "Data Analytics ",
              link: "/services",
            },
            {
              item: "Cloud Solutions ",
              link: "/cloud-solution",
            },
            {
              item: "Marketing Automation ",
              link: "/marketing-automation",
            },
            {
              item: "Digital Transformation ",
              link: "/digital-transformation",
            },
          ]}
          img1="/img/socialMedia.jpg"
          img2="/img/marketing.jpg"
          h1="Third Quarter Trading Update"
          h2="Our purpose"
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for Navitem 4 */}

      {activeNavItem === 4 && open && (
        <HoverCard
          link={[
            {
              item: "Pharmaceuticals",
              link: "/pharmaceuticals",
            },
            {
              item: "FMCG",
              link: "/fmcg",
            },
            {
              item: "Automobile",
              link: "/automobile",
            },
            {
              item: "Hospitality",
              link: "/hospitality",
            },
            {
              item: "Manufacturing",
              link: "/manufacturing",
            },
          ]}
          img1="/img/pharma1.jpg"
          img2="/img/pharma3.jpg"
          h1="Third Quarter Trading Update"
          h2="Our purpose"
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for Navitem 5 */}

      {activeNavItem === 5 && open && (
        <HoverCard
          link={[
            {
              item: "Case Study 1",
              link: "/our-work",
            },
            {
              item: "Case Study 2",
              link: "/case2",
            },
            {
              item: "Case Study 3",
              link: "/case3",
            },
            {
              item: "Case Study 4",
              link: "/case4",
            },
            {
              item: "Case Study 5",
              link: "/case5",
            },
            {
              item: "Case Study 6",
              link: "/case6",
            },
            {
              item: "Case Study 7",
              link: "/case7",
            },
          ]}
          img1="/img/bank1.avif"
          img2="/img/crm.png"
          h1="Third Quarter Trading Update"
          h2="Our purpose"
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}
    </>
  );
};

export default Navbar;
