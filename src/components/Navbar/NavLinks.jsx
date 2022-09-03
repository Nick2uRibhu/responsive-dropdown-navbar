import React, { useState } from "react";
import { links } from "./MyLinks";
import { Link } from "react-router-dom";
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'

const NavLinks = () => {
    const [heading, setHeading] = useState("")
    const [subHeading, setSubHeading] = useState("")
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group" onClick={() =>
                 heading !== link.name ? setHeading(link.name) : setHeading("")
                 }
                >
                    {link.name}
                    <span className="text-lg md:hidden inline">
                        {heading !== link.name ? <AiOutlineDown /> : <AiOutlineUp />}
                    </span>
                    <span className="text-lg hidden md:block md:ml-2 group-hover:rotate-180 group-hover:-mt-0.5">
                        <AiOutlineDown />
                    </span>
                </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45" />
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks) => (
                <div key={slinks.Head}>
                    <div>
                        <h1 className="py-4 pl-7 text-md md:pr-0 pr-5 flex justify-between items-center"
                            onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")}
                        >
                            {slinks.Head}
                            <span className="text-md md:mt-1 md:ml-2 inline">
                                {subHeading !== slinks.Head ? <AiOutlineDown/> : <AiOutlineUp />}
                            </span>
                        </h1>
                        <div className={`${subHeading == slinks.Head ? "md:hidden" : "hidden"}`}>
                            {slinks.sublink.map((slink) => (
                                <li className="py-3 pl-14 text-sm">
                                    <Link to={slink.link}>{slink.name}</Link>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
