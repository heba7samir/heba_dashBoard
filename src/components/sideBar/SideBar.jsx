import React, { useContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { FaBookReader } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
export const SideBar = ({ isOpen, setIsOpen }) => {
    const { darkMood, setDarkMood } = useContext(ThemeMoodContext);

    return (
        <div className={`side-bar h-[calc(100vh-100px)]
    sticky top-[100px]
    overflow-y-auto
    right-0 
       
       bg-slate-50 transition-all duration-300 ease-in-out z-40 ${isOpen ? "w-64" : "w-20"} ${darkMood ? "bg-slate-900 border-slate-500" : "bg-white border-l border-slate-200"} `}>
            <div className={`open_menu py-10 ${isOpen ? "flex justify-start px-6 " : "flex justify-center px-0 "} `}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl"
                >
                    <MdMenuOpen className={`text-6xl pt-4 ${darkMood ? "text-slate-100" : "text-slate-800"}`} />
                </button>
            </div>
            <div className={`flex flex-col gap-4 py-3 items-end transition-all duration-300 ease-in-out
             ${isOpen ? "px-6 items-end" : "px-0 items-center"}`}>

                <div className={`main-section `}>
                    <NavLink to={"home"}
                        className={({ isActive }) =>
                            `flex items-center transition-all duration-300 ease-in-out rounded-2xl
                             ${isOpen
                                ? "gap-4 w-full px-5 py-3 justify-end "
                                : "justify-center  p-4"
                            }
                             ${isActive
                                ? darkMood
                                    ? "bg-slate-500 text-yellow-300 shadow-lg scale-[1.02]"
                                    : "bg-blue-500 text-white shadow-md scale-[1.02]"
                                : darkMood
                                    ? "text-white hover:bg-slate-800"
                                    : "text-gray-800 hover:bg-slate-200"
                            }`}>
                        {isOpen && <span className={`text-2xl font-bold ${darkMood ? "text-white" : "text-gray-800 "}`}> الرئيسية </span>}
                        <IoHome className={`text-2xl  ${darkMood ? "fill-slate-200" : "fill-blue-950"}`} />
                    </NavLink>
                </div>
                <div className="AllCourse-section">
                    <NavLink to={"/allcourses"}
                        className={({ isActive }) =>
                            `flex items-center transition-all duration-300 ease-in-out rounded-2xl
                               ${isOpen
                                ? "gap-4 w-full px-5 py-3 justify-end "
                                : "justify-center p-4"
                            }
        
                             ${isActive
                                ? darkMood
                                    ? "bg-slate-500 text-yellow-300 shadow-lg scale-[1.02]"
                                    : "bg-blue-500 text-white shadow-md scale-[1.02]"
                                : darkMood
                                    ? "text-white hover:bg-slate-800"
                                    : "text-gray-800 hover:bg-slate-200"
                            }`}>

                        {isOpen && <span className={`text-xl font-bold ${darkMood ? "text-white" : "text-gray-800 "}`}>جميع الكورسات </span>}
                        <FaBookReader className={`text-2xl  ${darkMood ? "fill-slate-200" : "fill-blue-950"}`} />
                    </NavLink>
                </div>
                <div className="course-section">
                    <NavLink to={"/course"}
                        className={({ isActive }) =>
                            ` flex items-center transition-all duration-300 ease-in-out rounded-2xl
                           ${isOpen
                                ? "gap-4 w-full px-5 py-3 justify-end"
                                : "justify-center p-4"
                            }
                             ${isActive
                                ? darkMood
                                    ? "bg-slate-500 text-yellow-300 shadow-lg scale-[1.02]"
                                    : "bg-blue-500 text-white shadow-md scale-[1.02]"
                                : darkMood
                                    ? "text-white hover:bg-slate-800"
                                    : "text-gray-800 hover:bg-slate-200"
                            }`}>

                        {isOpen && <span className={`text-2xl font-bold ${darkMood ? "text-white" : "text-gray-800 "}`}>كورساتي</span>}
                        <FaBookOpen className={`text-2xl  ${darkMood ? "fill-slate-200" : "fill-blue-950"}`} />
                    </NavLink>
                </div>
                <div className="profile-section ">
                    <NavLink to="/profile"
                        className={({ isActive }) =>
                            `flex items-center transition-all duration-300 ease-in-out rounded-2xl
                             ${isOpen
                                ? "gap-4 w-full px-5 py-3 justify-end"
                                : "justify-center p-4"
                            }
                             ${isActive
                                ? darkMood
                                    ? "bg-slate-500 text-yellow-300 shadow-lg scale-[1.02]"
                                    : "bg-blue-500 text-white shadow-md scale-[1.02]"
                                : darkMood
                                    ? "text-white hover:bg-slate-800"
                                    : "text-gray-800 hover:bg-slate-200"
                            }`}>
                        {isOpen && <span className={`text-2xl font-bold ${darkMood ? "text-white" : "text-gray-800 "}`}>حسابي</span>}
                        <RiAccountCircleFill className={`text-2xl  ${darkMood ? "fill-slate-200" : "fill-blue-950"}`} />
                    </NavLink>
                </div>
            </div>

        </div>
    )
}
