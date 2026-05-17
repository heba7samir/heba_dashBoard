
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../../components/card/Card'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
export const Course = ({ isOpen, setIsOpen }) => {
  const [courses, setCourses] = useState([]);
  const { darkMood, setDarkMood } = useContext(ThemeMoodContext);

  // useEffect(() => {

  //   axios
  //     .get("http://localhost:3001/myCourses")

  //     .then((res) => {
  //       setCourses(res.data);
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });

  // }, []);

  return (

    <div className={`p-10 transition-all duration-300 ease-in-out  ${darkMood ? "bg-slate-900" : "bg-slate-50"}`}>
      <h2 className={`flex justify-center md:justify-end md:px-20  py-6  text-2xl  font-bold  ${darkMood ? "text-slate-200" : "text-slate-800"} `}>  الكورسات المشترك بها </h2>
      <div className="content flex justify-center flex-wrap gap-10 md:p-4">
      {/* {courses?.map((course) => (
        course && (
          <Card
            key={course.id}
            course={course}
          />
        )
      ))} */}
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
             src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                 3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
              src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                  3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
              src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                  3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
              src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                  3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
              src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                  3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
              src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                  3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        <div className={`card w-[350px] md:w-[250px] lg:w-[350px] overflow-visible rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border-[3px] py-4 px-4
      ${darkMood ? "bg-prime_sky_950 border-slate-400" : "bg-prime_sky_100 border-prime_sky_600"}`}>

          {/* image */}
          <div className="image rounded-lg">
            <img
              className='w-full h-full rounded-lg object-contain hover:scale-105 transition-all duration-300'
              src="/images/KSTLyQdR5b2mUAkaw7Aza1NUSiKNrrm2qqu7sXfb.jpg" alt=''
            />
          </div>

          {/* content */}
          <div className="content p-2 md:p-5 flex flex-col gap-5">

            {/* title */}
            <h2 className={`text-sm text-center md:text-xl font-bold leading-relaxed
          ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
              كورس المراجعة النهائية
            </h2>

            {/* text */}
            <div className={`flex flex-col gap-3
          ${darkMood ? "text-slate-400" : "text-slate-600"}`}>

              <div className="date flex flex-col gap-1 text-sm">
                <span>1 Jan 2026</span>
                <span>30 Jan 2026</span>
              </div>

              <div>
                <span className='bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold'>
                  3ث
                </span>
              </div>

            </div>

            {/* button */}
            <button className={`w-full text-white py-3 rounded-2xl text-[12px]  md:text-[14px] font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
          ${darkMood ? "bg-prime_sky_600 hover:bg-prime_sky_500" : "bg-blue-600 hover:bg-blue-700"}`} onClick={() => navigate("/login")} >
              الدخول للكورس
            </button>

          </div>
        </div>
        
        </div>
    </div>

  )
};
