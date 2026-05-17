import React, { useContext } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { useNavigate } from 'react-router-dom';

export const CardStatic = () => {
    const { darkMood } = useContext(ThemeMoodContext);
    const navigate = useNavigate();

    // بيانات ثابتة بدل props
    const course = {
        title: "كورس المراجعة النهائية",
        image: "/images/MWQ2LcAhil6xzlRAVeASGKS8qHR8gEdIRUSsZXsv.png",
        startDate: "1 Jan 2026",
        endDate: "30 Jan 2026",
        level: "3ث"
    };

    return (
        <div className={`card w-[250px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

            {/* image */}
            <div className="image rounded-lg">
                <img
                    className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
                    src={course.image}
                    alt={course.title}
                />
            </div>

            {/* content */}
            <div className="content p-2 md:p-5 flex flex-col gap-5">

                {/* title */}
                <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
                    {course.title}
                </h2>

                {/* text */}
                <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

                    <div className="date flex flex-col gap-1 text-sm">
                        <span>{course.startDate}</span>
                        <span>{course.endDate}</span>
                    </div>

                    <div>
                        <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                            {course.level}
                        </span>
                    </div>

                </div>

                {/* button */}
                <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
                   الإشتراك في الكورس
                </button>

            </div>
        </div>
    )
}