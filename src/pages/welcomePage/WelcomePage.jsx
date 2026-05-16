import React, { useContext } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { CardStatic } from '../../components/card/CardStatic';

export const WelcomePage = () => {
    const { darkMood, setDarkMood } = useContext(ThemeMoodContext);
  return (
      <div className={`welcome transition-all duration-300 ease-in-out  ${darkMood ? "bg-slate-900" : "bg-slate-50"}`}>
          <div className="container mx-auto px-6">
              <div className={`part_one flex flex-1 flex-col lg:flex-row items-center justify-between gap-10 py-10`}>
                  <div className="image image w-full lg:w-1/2 flex justify-center">
                      <img className="max-w-full h-auto" src="/src/assets/images/New-Profile-hero.bd0ed24ff94f80d4b949b15350f35824.svg" alt="" />
                  </div>
                  <div className="text text-center ">
                      <h1 className={`text-5xl font-bold font-alex pb-6 ${darkMood ? "text-white" : "text-black"}`}> منصة <span className={`text-6xl font-bold ${darkMood ? "text-prime_sky_500 hover:prime_sky_400" : "text-prime_sky_400 hover:prime_sky_300"}`}>بستطهالك</span></h1>
                      <p className={`text-2xl font-bold ${darkMood ? "text-white" : "text-black"}`}>منصة متكامله بكل ما يحتاجه الطالب ليتفوق</p>
                  </div>
              </div>
              <div className={`part_two flex flex-1 flex-col  items-center justify-between px-10 py-20`}>
                  <div className="text text-center ">
                      <h1 className={`text-5xl font-bold font-alex pb-6 ${darkMood ? "text-white" : "text-black"}`}>كورساتنا <span className={`text-6xl font-bold ${darkMood ? "text-prime_sky_500 hover:prime_sky_400" : "text-prime_sky_400 hover:prime_sky_300"}`}> المقترحة</span></h1>
                      <p className={`text-2xl font-bold ${darkMood ? "text-white" : "text-black"}`}>ريحنا دماغك وجمعنا لك كورسات على مزاجك، مختارة بحب وعناية كأننا بنعمل شوبينج لأحسن شوية كورسات تساعدك وتنميك</p>
                  </div>
                  <div className="course flex flex-col md:flex-row flex-wrap justify-evenly gap-6 py-20 ">
                      <CardStatic />
                      <CardStatic />
                      <CardStatic />
                      <CardStatic />
                      <CardStatic />
                      <CardStatic />
                  </div>
              </div>
          </div>
    </div>
  )
}
