import React, { useContext, useState } from 'react'
import { ThemeMoodContext } from '../../ulties/ThemeMood';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
export const Profile = (e) => {
  const { darkMood, setDarkMood } = useContext(ThemeMoodContext);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("student");
  const [name, setName] = useState("هبه سمير");
  const [phone, setPhone] = useState("01554665623");
  const [grade, setGrade] = useState("ثانوية عامة");
  const handleLogout = () => {

    // حذف التوكن
    localStorage.removeItem("token");

    // الرجوع للصفحة الرئيسية
    navigate("/");
  };

  return (

    <div className={`profile transition-all duration-300 ease-in-out ${darkMood ? "bg-slate-900" : "bg-slate-50"} `}>
      <div className="text">
        <h2 className={`text-2xl font-bold tracking-tight py-10 px-5 transition-all duration-300 ease-in-out ${darkMood ? "text-slate-50" : "text-prime_sky_500 "}`}>Welcome Back Heba</h2>
      </div>
      <div className="container flex flex-row  gap-2">
        <div
          className={`account_section_two flex-1 rounded-3xl p-8 border transition-all duration-300
          ${darkMood ? "bg-prime_sky_950 border-slate-700" : "bg-white border-slate-200 shadow-md"
            }`}  >
          <div className="div flex flex-col">
            {activeSection === "student" && (
              <h2 className={`text-3xl font-bold mb-8 text-right
                   ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
                بيانات الطالب
              </h2>)}
            {activeSection === "settings" && (
              <h2 className={`text-3xl font-bold mb-8 text-right
                   ${darkMood ? "text-slate-100" : "text-slate-800"}`}>
                الاعدادات
              </h2>)}
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-10">

            {/* ===================== STUDENT ===================== */}
            {activeSection === "student" && (
              <>
                {/* الفورم */}
                <div className="form flex-1">
                  <form className="flex flex-col gap-6">

                    <input className="text-right px-4 py-3 rounded-2xl border" value="هبه سمير" onChange={(e) => setName(e.target.value)} />
                    <input className="text-right px-4 py-3 rounded-2xl border" value="01554665623" onChange={(e) => setName(e.target.value)} />
                    <input className="text-right px-4 py-3 rounded-2xl border" value="ثانوية عامة" onChange={(e) => setName(e.target.value)} />

                    <button className={` text-l font-semibold py-3 rounded-2xl  w-[30%] ${darkMood ? "bg-prime_sky_700 hover:bg-prime_sky_400 text-slate-200" : "bg-prime_sky_300 text-slate-900"}`}>
                      حفظ التعديلات
                    </button>

                  </form>
                </div>

                {/* الصورة */}
                <div className="image-section flex flex-col items-center gap-5">

                  <div className="w-[220px] h-[220px] rounded-3xl overflow-hidden border-4 border-slate-200">
                    <img
                      src="/src/assets/images/WhatsApp Image 2026-05-03 at 12.00.12 AM.jpeg"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <label className={`font-semibold cursor-pointer px-6 py-3 rounded-2xl ${darkMood ? "bg-prime_sky_700 hover:bg-prime_sky_400 text-slate-200" : "bg-prime_sky_300 text-slate-900"}`}>
                    تعديل الصورة
                    <input type="file" className="hidden" />
                  </label>

                </div>
              </>
            )}

            {/* ===================== SETTINGS ===================== */}
            {activeSection === "settings" && (
              <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-6">

                  {/* تغيير البريد الإلكتروني */}
                  <div className="flex flex-col gap-2 text-right">

                    <label
                      className={`font-semibold
      ${darkMood ? "text-slate-300" : "text-slate-700"}`}
                    >
                      تغيير البريد الإلكتروني
                    </label>

                    <input
                      type="email"
                      placeholder="ادخل البريد الإلكتروني الجديد"
                      className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all duration-300
      ${darkMood
                          ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-prime_sky_500"
                          : "bg-slate-50 border-slate-300 text-slate-900 focus:border-prime_sky_500"
                        }`}
                    />

                  </div>

                  {/* تغيير كلمة المرور */}
                  <div className="flex flex-col gap-2 text-right">

                    <label
                      className={`font-semibold
      ${darkMood ? "text-slate-300" : "text-slate-700"}`}
                    >
                      تغيير كلمة المرور
                    </label>

                    <input
                      type="password"
                      placeholder="ادخل كلمة المرور الجديدة"
                      className={`w-full px-4 py-3 rounded-2xl border outline-none transition-all duration-300
      ${darkMood
                          ? "bg-slate-900 border-slate-700 text-slate-100 focus:border-prime_sky_500"
                          : "bg-slate-50 border-slate-300 text-slate-900 focus:border-prime_sky_500"
                        }`}
                    />

                  </div>

                  {/* حفظ */}
                  <button
                    className={` text-l font-semibold py-3 rounded-2xl  w-[30%] ${darkMood ? "bg-prime_sky_700 hover:bg-prime_sky_400 text-slate-200" : "bg-prime_sky_300 text-slate-900"}`}
                  >
                    حفظ التعديلات
                  </button>

                
                

                  <button onClick={handleLogout} className={`text-l text-center font-bold  px-4 py-3 rounded-2xl border w-[30%] ${darkMood ? "bg-red-700 hover:bg-red-800 text-slate-200 " : "bg-red-500 hover:bg-red-600 text-slate-100 "}`}>
                    تسجيل الخروج
                  </button>

                </div>

              </div>
            )}

          </div>


        </div>
        <div className={`account_section_right flex flex-col items-center  overflow-visible rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out  border-[3px] border-slate-200 py-4 px-4 ${darkMood ? "bg-prime_sky_950 border-slate-700" : "bg-slate-100 border-prime_sky_600"} `}>
          <div className={`image flex justify-center  w-[100px] h-[100px]  items-center border rounded-lg ${darkMood ? "bg-slate-900" : "bg-slate-100"}`}>
            <img className='w-full h-full object-cover rounded-lg ' src="/src/assets/images/WhatsApp Image 2026-05-03 at 12.00.12 AM.jpeg" alt="" />
          </div>
          <div className="data flex flex-col gap1">
            <h2 className={`text-[14px] font-bold ${darkMood ? "text-slate-200" : "text-slate-800"}`}>Heba Samir</h2>
            <span className={`text-[12px] font-bold ${darkMood ? "text-slate-200" : "text-slate-800"}`}>01554665623</span>
          </div>

          <div className="menu flex flex-col pt-6 gap-4">

            <button
              onClick={() => setActiveSection("student")}
              className={`w-full flex items-center justify-between gap-8 text-white py-3 px-4 rounded-2xl text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
                ${activeSection === "student"
                  ? darkMood
                    ? "bg-prime_sky_700 hover:bg-prime_sky_400 text-white shadow-lg"
                    : "bg-prime_sky_300 hover:bg-prime_sky_400 text-slate-900 shadow-md"
                  : darkMood
                    ? "bg-slate-400/20 hover:bg-slate-500 text-slate-200"
                    : "bg-prime_sky_100 hover:bg-prime_sky_200 text-slate-800"
                }
             `}
            >
              <MdKeyboardArrowLeft className={`text-2xl ${darkMood ? "text-slate-200" : "text-slate-800"}`} />
              <span className={`text-xl text-right flex-1  ${darkMood ? "text-slate-200" : "text-slate-800"}`}> بيانات الطالب</span>
            </button>


            <button
              onClick={() => setActiveSection("settings")}
              className={`w-full flex items-center justify-between gap-8 text-white py-3 px-4 rounded-2xl text-lg font-semibold transition-all duration-300 ease-in-out hover:scale-[1.02]
             ${activeSection === "settings"
                  ? darkMood
                    ? "bg-prime_sky_700 hover:bg-prime_sky_400 text-white shadow-lg"
                    : "bg-prime_sky_300 hover:bg-prime_sky_400 text-slate-900 shadow-md"
                  : darkMood
                    ? "bg-slate-400/20 hover:bg-slate-500 text-slate-200"
                    : "bg-prime_sky_100 hover:bg-prime_sky_200 text-slate-800"
                }
             `}
            >
              <MdKeyboardArrowLeft className={`text-2xl ${darkMood ? "text-slate-200" : "text-slate-800"}`} />
              <span className={`text-xl text-right flex-1  ${darkMood ? "text-slate-200" : "text-slate-800"}`}> الاعدادات</span>
            </button>


          </div>
        </div>
      </div>
    </div>
  )
};
