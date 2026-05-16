import React, { useEffect, useRef, useState } from 'react'
import { Mood } from '../Mood/Mood'
import { useContext } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiAccountCircleFill } from "react-icons/ri";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { FiLogOut, FiUser } from "react-icons/fi";

export const Header = () => {
    const { darkMood, setDarkMood } = useContext(ThemeMoodContext);
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    // close when click outside
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const logout = () => {
        // لو عندك token احذفيه هنا
        localStorage.removeItem("token");

        navigate("/");
    };
    return (
        <div className={`header transition-all duration-300 ease-in-out fixed top-0 pl-10
      w-full h-[110px]  z-50 ${darkMood ? "bg-slate-900 backdrop-blur-md border-b border-slate-700  shadow-[0_4px_20px_rgba(255,255,255,0.08)]" : "bg-white shadow-md border-b border-slate-200"}`}>
            <div className="container  h-full flex justify-between items-center flex-row ">
                <div className="div">
                    {/* قسم اللوجو */}
                    <div className="div flex items-center gap-8">
                        <div className="logo_section  flex gap-6 items-center">
                            <div className="content flex flex-col gap-1 justify-center items-center">
                                <div className="logo-image  transition-all duration-300 ease-in-out w-[60px] h-[60px] rounded-full overflow-hidden shadow-md border-2 border-white">
                                    <img className='w-full h-full object-cover ' src="../../../src/assets/images/7a027ff2950166d8e0db1629f5c2a4b0_fgraphic.png" alt="" />

                                </div>
                                <div className="logo-text leading-tight items-center text-center">
                                    <h2 className={`text-l font-bold ${darkMood ? "text-slate-200" : "text-slate-500"}`}>بسطتهالك</h2>

                                </div>
                            </div>




                        </div>
                        {/* قسم الموود */}
                        <div className={`mood_section  transition-all duration-300 ease-in-out ${darkMood ? "dark" : ""}`}>
                            <Mood setDarkMood={setDarkMood} darkMood={darkMood} />

                        </div>
                </div>
                  
                </div>
                {/* قسم البروفايل */}
                {/* <NavLink to={"/profile"} className={`profile w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center  cursor-pointer ${darkMood ? "bg-slate-700 text-white fill-white" : "bg-gray-200 text-sky-500 fill-slate-600"}}`}>
                    <RiAccountCircle2Fill className='text-3xl' />
                </NavLink> */}
                <div className="relative" ref={menuRef}>
                    {/* ICON */}
                    <div
                        onClick={() => setOpen((s) => !s)}
                        className={`profile w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all
        ${darkMood ? "bg-slate-700 text-white" : "bg-gray-200 text-sky-500"}`}
                    >
                        <RiAccountCircle2Fill className="text-3xl" />
                    </div>

                    {/* DROPDOWN */}
                    {open && (
                        <div
                            className={`absolute right-0 mt-3 w-44 rounded-xl shadow-lg overflow-hidden border z-50 items-end flex flex-col justify-end
          ${darkMood ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-gray-200 text-gray-700"}`}
                        >
                            {/* Profile */}
                            <NavLink
                                to="/profile"
                                onClick={() => setOpen(false)}
                                className={`flex  items-center gap-4 pr-6  py-3 text-sm  transition ${darkMood ? "hover:bg-slate-500" :"hover:bg-slate-50"}`}
                            >
                                <FiUser />
                                حسابي
                               
                            </NavLink>

                            {/* Logout */}
                            <button
                                onClick={logout}
                                className={` gap-4 pr-6 py-3 text-sm   transition items-end flex  justify-end ${darkMood ? "hover:bg-slate-500" :"hover:bg-slate-50"}`}
                            >
                                <FiLogOut />
                                تسجيل خروج
                                
                              
                            </button>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}
