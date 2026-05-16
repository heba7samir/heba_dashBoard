import React, { useContext } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';

export const Card = ({ course }) => {
    const { darkMood, setDarkMood } = useContext(ThemeMoodContext);
    if (!course) return null;
    return (

        <div className={`card w-[200px] md:w-[250px] lg:w-[350px]  overflow-visible rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out  border-[3px] border-slate-200 py-4 px-4 ${darkMood ? "bg-prime_sky_950 border-slate-400" :"bg-prime_sky_100 border-prime_sky_600"}`}>

            {/* image */}
            <div className="image rounded-lg   ">

                <img
                    className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
                    src={course?.image}
                    alt={course?.title}
                />

            </div>

            {/* content */}
            <div className="content p-5 flex flex-col gap-5">

                {/* title */}
                <div className="title">

                    <h2 className={`text-2xl font-bold  leading-relaxed ${darkMood ? "text-slate-100" :"text-slate-800"}`}>
                        {course.title}
                    </h2>

                </div>

                {/* text */}
                <div className={`text flex flex-col gap-3  ${darkMood ? "text-slate-400" :"text-slate-600"}`}>

                    <div className="date flex flex-col gap-1 text-sm">

                        <span>{course.startDate }</span>

                        <span> {course.endDate} </span>

                    </div>

                    <div className="level">

                        <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                            {course.level}
                        </span>

                    </div>

                </div>

                {/* button */}
                <div className="button pt-2">

                    <button
                        className={`w-full  text-white py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02] ${darkMood ?"bg-prime_sky_600 hover:bg-prime_sky_500":"bg-blue-600 hover:bg-blue-700"}`}
                    >
                        الدخول للكورس
                    </button>

                </div>

            </div>

        </div>

    )
}