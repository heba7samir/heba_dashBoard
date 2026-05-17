import React, { useContext } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logoImage from "../../assets/images/7a027ff2950166d8e0db1629f5c2a4b0_fgraphic.png"
export const Footer = () => {

    const { darkMood } = useContext(ThemeMoodContext);

    return (

        <footer
            className={`footer  bottom-0  h-[141px] w-full py-6 transition-all duration-300 z-50
            ${darkMood
                    ? "bg-slate-900 border-t border-slate-700"
                    : "bg-white border-t border-slate-200 shadow-sm"
                }`}
        >

            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* اللوجو */}
                    <div className="logo flex items-center gap-4">

                        <div className="w-[55px] h-[55px] rounded-full overflow-hidden border-2 border-slate-300">
                            <img
                                src={logoImage}
                                alt="logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <div className="text text-center">
                                <h2 className={`text-xl font-bold ${darkMood ? "text-white" : "text-slate-800"}`}>
                                    بسطتهالك
                                </h2>

                                <p className={`text-sm ${darkMood ? "text-slate-400" : "text-slate-500"}`}>
                                    منصة تعليمية متكاملة
                                </p>
                           </div>
                        </div>

                    </div>

                    {/* النص */}
                    <div className="text-center">

                        <h2
                            className={`text-sm md:text-base font-medium leading-relaxed
                            ${darkMood ? "text-slate-300" : "text-slate-600"}`}
                        >
                            © 2026 جميع الحقوق محفوظة لصالح
                            <span className='font-bold text-prime_sky_500 px-1'>
                                Bony Programming Company
                            </span>
                        </h2>

                    </div>

                    {/* السوشيال */}
                    <div className="social flex flex-col items-center md:items-end gap-3">

                        <span
                            className={`text-sm font-semibold
                            ${darkMood ? "text-slate-300" : "text-slate-600"}`}
                        >
                            تقدر تلاقينا على
                        </span>

                        <div className="icons flex items-center gap-4">

                            {/* Facebook */}
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full flex items-center justify-center
        bg-[#1877F2] text-white
        hover:bg-[#1669d9] hover:scale-125
        transition-all duration-300 shadow-md"
                            >
                                <FaFacebookF className="text-lg" />
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full flex items-center justify-center
        bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]
        text-white
        hover:brightness-90 hover:scale-125
        transition-all duration-300 shadow-md"
                            >
                                <FaInstagram className="text-lg" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full flex items-center justify-center
        bg-[#0A66C2] text-white
        hover:bg-[#0857a5] hover:scale-125
        transition-all duration-300 shadow-md"
                            >
                                <FaLinkedinIn className="text-lg" />
                            </a>

                            {/* GitHub */}
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full flex items-center justify-center
        bg-[#24292F] text-white
        hover:bg-[#171b20] hover:scale-125
        transition-all duration-300 shadow-md"
                            >
                                <FaGithub className="text-lg" />
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}