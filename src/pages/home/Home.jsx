import React, { useContext } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { IoCloudDone } from "react-icons/io5";
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { FaAddressBook } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Card } from '../../components/card/Card';
import { Course } from '../courses/Course';
export const Home = () => {
  const { darkMood, setDarkMood } = useContext(ThemeMoodContext);

 
  return (
    <div className={`home py-2 transition-all duration-300 ease-in-out  ${darkMood ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="container">
        {/* الجزء الاول بتاع العناوين  */}
        <div className="section-one flex flex-col md:flex-row gap-2 px-4">
          <div className={`div flex justify-end px-4 flex-1  py-4 rounded-lg items-center md:px-6 md:gap-4 lg:pr-6   lg:gap-6 ${darkMood ? "bg-prime_sky_400  " : "bg-prime_sky_500"}`}>
            <div className="text flex flex-col items-center px-2 lg:items-end  ">
              <span className={`text-xl md:text-3xl font-bold ${darkMood ? "text-white" :"text-white "}`}>1</span>
              <h2 className={`text-xl md:text-2xl font-semibold text-white`}>الفيديوهات المحفوظة</h2>
            </div>
            <div className="icon">
              <MdOutlineFavorite className={`text-3xl md:text-3xl ${darkMood ? "text-slate-200" :"text-slate-100"}`} />
            </div>

          </div>

          <div className={`div flex justify-end px-4 flex-1  py-4 rounded-lg items-center md:px-6 md:gap-4 lg:pr-6   lg:gap-6 ${darkMood ? "bg-prime_sky_400  " : "bg-prime_sky_500"}`}>
            <div className="text flex flex-col items-center px-2 lg:items-end ">
              <span className={`text-xl md:text-3xl font-bold ${darkMood ? "text-white" : "text-white "}`}>7</span>
              <h2 className={`text-xl md:text-2xl font-semibold ${darkMood ? "text-white" : "text-white "}`}>كورسات الحالية</h2>
            </div>
            <div className="icon">
              <FaAddressBook className={`text-3xl md:text-3xl ${darkMood ? "text-slate-200" : "text-slate-100"}`} />
            </div>

          </div>
          <div className={`div flex justify-end px-4 flex-1  py-4 rounded-lg items-center md:px-6 md:gap-4 lg:pr-6   lg:gap-6 ${darkMood ? "bg-prime_sky_400  " : "bg-prime_sky_500"}`}>
            <div className="text flex flex-col items-center px-2 lg:items-end ">
              <span className={`text-xl md:text-3xl  font-bold ${darkMood ? "text-white" : "text-white "}`}>0</span>
              <h2 className={`text-xl md:text-2xl font-semibold ${darkMood ? "text-white" : "text-white "}`}>كورسات مكتملة</h2>
            </div>
            <div className="icon">
              <IoCloudDone className={`text-3xl md:text-3xl ${darkMood ? "text-slate-200" : "text-slate-100"}`} />
            </div>

          </div>
         
         
        </div>
        {/* التقدم والمستوى */}
        <div className="section-two">

        </div>
        {/* الكورسات */}
        <div className="section-three flex flex-wrap justify-center gap-10 py-8 ">
           <Course/>
        </div>
      </div>
    </div>
  )
};
