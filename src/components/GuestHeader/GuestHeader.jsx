import React, { useState } from 'react'
import { Mood } from '../Mood/Mood'
import { useContext } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoPlanetOutline } from "react-icons/io5";
import logoImage from "../../assets/images/7a027ff2950166d8e0db1629f5c2a4b0_fgraphic.png"
export const GuestHeader = () => {
    const { darkMood, setDarkMood } = useContext(ThemeMoodContext);
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className={`header transition-all duration-300 ease-in-out fixed top-0  md:pl-10
      w-full h-[110px]  z-50 ${darkMood ? "bg-slate-900 backdrop-blur-md border-b border-slate-700  shadow-[0_4px_20px_rgba(255,255,255,0.08)]" : "bg-white shadow-md border-b border-slate-200"}`}>
            <div className="container  h-full flex justify-between items-center flex-row ">
                {/* قسم اللوجو */}
                <div className="div flex items-center gap-4 md:gap-8">
                    <div className="logo_section  flex gap-6 items-center">
                        <div className="content flex flex-col gap-1 justify-center items-center">
                            <div className="logo-image  transition-all duration-300 ease-in-out w-[40px] md:w-[60px]  h-[40px] md:h-[60px] rounded-full overflow-hidden shadow-md border-2 border-white">
                                <img className='w-full h-full object-cover ' src={logoImage} alt="" />

                            </div>
                            <div className="logo-text leading-tight items-center text-center">
                                <h2 className={`text-sm md:text-l font-bold ${darkMood ? "text-slate-200" : "text-slate-500"}`}>بسطتهالك</h2>

                            </div>
                        </div>




                    </div>
                    {/* قسم الموود */}
                    <div className={`mood_section  transition-all duration-300 ease-in-out ${darkMood ? "dark" : ""}`}>
                        <Mood setDarkMood={setDarkMood} darkMood={darkMood} />

                    </div>
                </div>
                {/* قسم تسجيل الدخول وانشاء الحساب */}
                <div className="section hidden md:flex gap-4">
                    <div className="login_sec">
                        <NavLink to={"/login"}>
                            <button className={`w-full text-sm  text-white py-4 px-6 rounded-2xl  font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02] ${darkMood ? "bg-prime_sky_500 hover:bg-prime_sky_600" : "bg-prime_sky_400 hover:bg-prime_sky_500"}`}>
                                تسجيل الدخول
                            </button>
                        </NavLink>
                    </div>
                    <div className="register_sec">
                        <NavLink to={"/register"}>
                            <button className={`w-full  text-sm  text-white py-4 px-6  rounded-2xl  font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02] ${darkMood ? "bg-prime_sky_500 hover:bg-prime_sky_600" : "bg-prime_sky_400 hover:bg-prime_sky_500"}`}>
                          انشاء حساب
                            </button>
                        </NavLink>
                    </div>
                </div>
                {/* قسم منيو الفون */}
                <div className="mobil_menu relative md:hidden">
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className={`text-4xl transition-all duration-300
                        ${darkMood ? "text-white" : "text-slate-800"}`}
                    >
                        {
                            openMenu
                                ? < IoPlanetOutline className="rotate-180 transition-all duration-300 text-prime_sky_500" />
                                : <IoMenu className="transition-all duration-300 text-prime_sky_400" />
                        }
                    </button>
                    {/* Dropdown */}
                    <div
                        className={`absolute flex flex-col gap-4 items-start top-[70px] right-0 w-screen py-6 px-6  rounded-2xl shadow-l border transition-all duration-300 
                        ${openMenu ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                        ${darkMood
                            ? "bg-prime_sky_700 border-prime_sky_600"
                            : "bg-prime_sky_600 border-prime_sky_500"
                            }`}
                    >

                        <NavLink
                            to="/login"
                            className={` w-full px-5 py-4 text-sm font-semibold transition-all duration-300 text-right flex justify-end rounded-2xl

                            ${darkMood
                                ? "bg-prime_sky_950 text-white hover:bg-[#075985]"
                                : "bg-[#075985] text-white hover:bg-prime_sky_700"
                                }`}
                        >
                            سجل الدخول ل حسابك
                        </NavLink>

                        <NavLink
                            to="/register"
                            className={`text-right flex justify-end w-full px-5 py-4 text-sm font-semibold transition-all duration-300 rounded-2xl 
                            ${darkMood
                                ? "bg-prime_sky_950 text-white hover:bg-[#075985]"
                                : "bg-[#075985] text-white hover:bg-prime_sky_700"
                                }`}
                        >
                          ! اعمل حساب جديد
                        </NavLink>


                </div>

                </div>
            </div>
        </div>
    )
}
