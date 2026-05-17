import React, { useContext } from 'react'
import { MdSunny } from "react-icons/md";
import { RiMoonClearFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
export const Mood = ({ setDarkMood, darkMood }) => {

    return (
        <div className="mood-part cursor-pointer transition-all duration-400 ease-in-out flex justify-between  w-full " >
            <div className={`mood w-[60px] h-[30px] md:w-20 md:h-10 p-1 rounded-full bg-gray-200 flex items-center  transition-all duration-300 ${darkMood ? "bg-slate-500 justify-end" : "bg-sky-500 justify-start"}`} onClick={() => setDarkMood(!darkMood)}>
                <div className="flex items-center gap-3 md:gap-2">

                    {/* Sun */}
                    <div
                        className={` w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300
                            ${darkMood
                                ? ""
                                : "bg-white shadow-md"
                            }`} >

                        <MdSunny
                            className={`text-lg md:text-xl transition-all duration-300
                                 ${darkMood ? "text-gray-400" : "text-prime_sky_500"}`} />
                    </div>

                    {/* Moon */}
                    <div
                        className={`w-5 h-5 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300
                             ${darkMood ? "bg-gray-300" : ""}`}>
                        <RiMoonClearFill
                            className={`text-lg md:text-xl transition-all duration-300
                            ${darkMood ? "text-slate-900" : "text-gray-400"}`} />
                    </div>
                </div>
            </div>

        </div>

    )
}
