import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import HoverCard from "./HoverCard";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FiMenu } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useTheme } from "./Themeprovider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import axios from "axios";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [cat, setCat] = useState([]);

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

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/blog/all-blogs`
        );
        if (data) {
          setCat(data.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCat();
  }, []);

  return (
    <>
      <div className="h-16 shadow-md flex items-center px-3 sm:px-8 lg:px-12">
        <div className="left">
          <div
            className="flex gap-2 items-center"
            style={{ fontFamily: "sans-serif" }}
          >
            <Sheet>
              <SheetTrigger asChild>
                <FiMenu className="font-bold text-2xl text-[#105f7f] dark:text-rose-600 lg:hidden cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 items-start justify-center mt-5">
                  <div className="w-full flex gap-10 items-center justify-between">
                    <Link
                      to={"/about"}
                      className="dark:text-rose-600 font-bold"
                    >
                      About
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IoIosArrowDown className="text-2xl dark:text-rose-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <h2 className="dark:text-rose-600 font-bold">
                            <Link to={"/about"}>About Us</Link>
                          </h2>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            to={"/valueproposition"}
                            className="dark:text-rose-600"
                          >
                            Our Unique Value Proposition
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/leadership"}
                            className="dark:text-rose-600"
                          >
                            Our Strategic Leadership
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="w-full justify-between flex gap-10 items-center">
                    <Link
                      to={"/data-analytics"}
                      className="dark:text-rose-600 font-bold"
                    >
                      Services
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IoIosArrowDown className="text-2xl dark:text-rose-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <h2 className="dark:text-rose-600 font-bold">
                            <Link to="/data-analytics">Services</Link>
                          </h2>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            to={"/data-analytics"}
                            className="dark:text-rose-600"
                          >
                            Data Analytics
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/cloud-solution"}
                            className="dark:text-rose-600"
                          >
                            Cloud Solution
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/marketing-automation"}
                            className="dark:text-rose-600"
                          >
                            Marketing Automation
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/digital-transformation"}
                            className="dark:text-rose-600"
                          >
                            Digital Transformation
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link
                      to={"/banking"}
                      className="dark:text-rose-600 font-bold"
                    >
                      Industries
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IoIosArrowDown className="text-2xl dark:text-rose-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <h2 className="dark:text-rose-600 font-bold">
                            <Link to={"/banking"}>Industries</Link>
                          </h2>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to={"/banking"} className="dark:text-rose-600">
                            Banking
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/pharmaceuticals"}
                            className="dark:text-rose-600"
                          >
                            Pharmaceuticals
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/fmcg"} className="dark:text-rose-600">
                            FMCG
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/automobile"}
                            className="dark:text-rose-600"
                          >
                            Automobile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/hospitality"}
                            className="dark:text-rose-600"
                          >
                            Hospitality
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/manufacturing"}
                            className="dark:text-rose-600"
                          >
                            Manufacturing
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link
                      to={"/our-work"}
                      className="dark:text-rose-600 font-bold"
                    >
                      Our Work
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IoIosArrowDown className="text-2xl dark:text-rose-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <h2 className="dark:text-rose-600 font-bold">
                            <Link to={"/our-work"}>Our Work</Link>
                          </h2>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to={"/case1"} className="dark:text-rose-600">
                            Business Excellence
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/case2"} className="dark:text-rose-600">
                            Boosting Marketing
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/case3"} className="dark:text-rose-600">
                            Ensuring GDPR Compliance
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/case4"} className="dark:text-rose-600">
                            Uplift revenue
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/case5"} className="dark:text-rose-600">
                            Digital Transformation
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/case6"} className="dark:text-rose-600">
                            Optimize Marketing Strategy
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/case7"} className="dark:text-rose-600">
                            Enhance User Experience
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link
                      to={"/partners"}
                      className="dark:text-rose-600 font-bold"
                    >
                      Our Partners
                    </Link>
                  </div>

                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link
                      to={"/avenues"}
                      className="dark:text-rose-600 font-bold"
                    >
                      People
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IoIosArrowDown className="text-2xl dark:text-rose-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <h2 className="dark:text-rose-600 font-bold">
                            <Link to={"/avenues"}>People</Link>
                          </h2>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link to={"/avenues"} className="dark:text-rose-600">
                            Career Avenues
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={"/culture"} className="dark:text-rose-600">
                            Organizational Culture
                          </Link>
                        </DropdownMenuItem>
                        {/* <DropdownMenuItem>
                          <Link to={"/contact"} className="dark:text-rose-600">
                            Contact Us
                          </Link>
                        </DropdownMenuItem> */}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link
                      to={"/blog1"}
                      className="dark:text-rose-600 font-bold"
                    >
                      Blogs
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <IoIosArrowDown className="text-2xl dark:text-rose-600" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>
                          <h2 className="dark:text-rose-600 font-bold">
                            <Link to="/blogs">Blogs</Link>
                          </h2>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Link
                            to={"/data_analytics"}
                            className="dark:text-rose-600"
                          >
                            Blog on Data Analytics
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/cloud_solution"}
                            className="dark:text-rose-600"
                          >
                            Blog on Cloud solutions
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/marketing_automation"}
                            className="dark:text-rose-600"
                          >
                            Blogs on Marketing Automation
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link
                            to={"/digital_transformation"}
                            className="dark:text-rose-600"
                          >
                            Blogs on Digital Transformation
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link to={"/news"} className="dark:text-rose-600 font-bold">
                      News
                    </Link>
                  </div>
                  <div className="flex gap-10 items-center w-full justify-between">
                    <Link
                      to={"/contact"}
                      className="dark:text-rose-600 font-bold"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="">
              <Link to={"/"}>
                <img src="/img/logo1.png" className="h-7 xl:h-12" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="middle hidden lg:block">
          <div
            className="flex font-bold text-[11px] lg:text-[12px]"
            style={{ fontFamily: "sans-serif" }}
          >
            {/* <button
              className={`hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black`}
              onClick={() => navigate("/")}
            >
              HOME
            </button> */}
            <button
              className={`hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black ${
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
              className={`hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black`}
              onClick={() => {
                navigate("/data-analytics"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(3)}
              onMouseLeave={handleLeave}
            >
              SERVICES
            </button>

            <button
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              onClick={() => {
                navigate("/banking"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(4)}
              onMouseLeave={handleLeave}
            >
              INDUSTRIES
            </button>

            <button
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              onClick={() => {
                navigate("/our-work"), setActiveNavItem(0);
              }}
              onMouseEnter={() => handleNavItemHover(5)}
              onMouseLeave={handleLeave}
            >
              OUR WORK
            </button>

            <Link
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              to={"/partners"}
            >
              OUR PARTNERS
            </Link>
            <button
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              onMouseEnter={() => handleNavItemHover(6)}
              onMouseLeave={handleLeave}
              onClick={() => {
                navigate("/avenues"), setActiveNavItem(0);
              }}
            >
              PEOPLE
            </button>

            <button
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              onMouseEnter={() => handleNavItemHover(7)}
              onMouseLeave={handleLeave}
              onClick={() => {
                navigate("/blogs"), setActiveNavItem(0);
              }}
            >
              BLOGS
            </button>
            <button
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              onMouseEnter={() => handleNavItemHover(8)}
              onMouseLeave={handleLeave}
              onClick={() => {
                navigate("/news"), setActiveNavItem(0);
              }}
            >
              NEWS
            </button>

            <button
              className="hover:text-sky-600 hover:border-t-4 dark:hover:border-white border-t-4 border-transparent transition-all text-[#000050] dark:text-rose-600 h-16 px-5 items-center text-center flex hover:border-black"
              onMouseEnter={() => handleNavItemHover(9)}
              onMouseLeave={handleLeave}
              onClick={() => {
                navigate("/contact"), setActiveNavItem(0);
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>
        <div className="right text-xl text-[#000050] dark:text-rose-600 flex items-center gap-3">
          {/* {theme === "light" ? (
            <IoMdMoon
              onClick={() => setTheme("dark")}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <MdOutlineWbSunny
              onClick={() => setTheme("light")}
              className="text-2xl cursor-pointer"
            />
          )} */}
          {/* <IoSearch className="cursor-pointer text-2xl" /> */}
        </div>
      </div>

      {/* Card for NavItem 1 */}

      {activeNavItem === 1 && (
        <HoverCard
          link={[
            {
              item: "Our Unique Value Proposition ",
              link: "/valueproposition",
            },
            {
              item: "Our Strategic Leadership ",
              link: "/leadership",
            },
          ]}
          h1="Diverse Footprint"
          h2="Our Strategic Leadership"
          link1="/valueproposition"
          link2="/leadership"
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
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
              link: "/data-analytics",
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
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for Navitem 4 */}

      {activeNavItem === 4 && open && (
        <HoverCard
          link={[
            {
              item: "Banking",
              link: "/banking",
            },
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
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for Navitem 5 */}

      {activeNavItem === 5 && open && (
        <HoverCard
          link={[
            {
              item: "Deliver Business Excellence",
              link: "/case1",
            },
            {
              item: "Boosting Marketing",
              link: "/case2",
            },
            {
              item: "Ensuring GDPR Compliance",
              link: "/case3",
            },
            {
              item: "Uplift revenue",
              link: "/case4",
            },
            {
              item: "Digital Transformation",
              link: "/case5",
            },
            {
              item: "Optimize Marketing Strategy",
              link: "/case6",
            },
            {
              item: "Enhance User Experience",
              link: "/case7",
            },
            {
              item: "Customer Satisfaction",
              link: "/case8",
            },
          ]}
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for NavItem 6 */}

      {activeNavItem === 6 && (
        <HoverCard
          link={[
            {
              item: "Career Avenues ",
              link: "/avenues",
            },
            {
              item: "Organizational Culture ",
              link: "/culture",
            },
          ]}
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}

      {/* Card for NavItem7 */}
      {activeNavItem === 7 && (
        <HoverCard
          link={[
            {
              item: "Data Analytics",
              link: "/data_analytics",
            },
            {
              item: "Cloud solutions",
              link: "/cloud_solution",
            },
            {
              item: "Marketing Automation",
              link: "/marketing_automation",
            },
            {
              item: "Digital Transformation",
              link: "/digital_transformation",
            },
          ]}
          handleNavItemHover={handleNavItemHover}
          activeNav={activeNavItem}
        />
      )}
    </>
  );
};

export default Navbar;
