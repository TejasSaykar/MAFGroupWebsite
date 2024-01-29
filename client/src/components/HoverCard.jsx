import React, { useState } from "react";
import { Link } from "react-router-dom";

const HoverCard = (props) => {
  const [activeNav, setActiveNav] = useState(props.activeNav);

  const handleLeave = () => {
    setActiveNav(!activeNav);
    props.handleNavItemHover(0);
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 dark:text-white border-t-2 w-full h-${
        props.img1 && props.img2 ? "[45vh]" : "[35vh]"
      } flex justify-center items-center`}
      onMouseEnter={activeNav}
      onMouseLeave={handleLeave}
    >
      {activeNav && (
        <div className=" w-3/2 m-auto h-full gap-20 flex justify-around px-20 items-center">
          <div
            className={`text-gray-600 dark:text-rose-600  pl-40 flex flex-${
              props.img1 && props.img2 ? "col" : "row"
            } h-full  w-${
              props.img1 && props.img2 ? "1/2" : "full"
            } text-sm gap-4 px-10 py-5 mb-4`}
          >
            {props.link.map((item) => (
              <>
                <Link
                  to={item.link}
                  className={`hover:underline font-semibold`}
                  onClick={handleLeave}
                >
                  {item.item}
                </Link>
              </>
            ))}
          </div>
          {props?.img1 && props?.img2 && (
            <div className="flex w-[70%] items-start justify-start">
              <Link to={props.link1} className="cursor-pointer w-full">
                <div className="w-full">
                  <img
                    src={props.img1}
                    className="w-[80%] h-[50%] aspect-video object-cover"
                    alt=""
                  />
                  <h2 className="text-lg font-bold hover:underline cursor-pointer mt-2">
                    {props.h1}
                  </h2>
                </div>
              </Link>
              <Link to={props.link2} className="cursor-pointer w-full">
                <div className="w-full">
                  <img
                    src={props.img2}
                    className="w-[80%] h-[50%] aspect-video object-cover"
                    alt=""
                  />
                  <h2 className="text-lg font-bold hover:underline cursor-pointer mt-2">
                    {props.h2}
                  </h2>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HoverCard;
{
}
