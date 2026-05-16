import { useContext, useState } from "react";
import { FiPhone, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi2";
import { MdAutoAwesome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ThemeMoodContext } from "../../ulties/ThemeMood";

const FloatingOrb = ({ className }) => (
    <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse ${className}`} />
);

const StatCard = ({ value, label }) => (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex flex-col items-center">
        <span className="text-white font-bold text-2xl tracking-tight">{value}</span>
        <span className="text-blue-200 text-xs mt-1 font-medium">{label}</span>
    </div>
);

const CourseTag = ({ icon, label }) => (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
        <span className="text-lg">{icon}</span>
        <span className="text-white text-sm font-medium">{label}</span>
    </div>
);

export default function Login() {
    const { darkMood } = useContext(ThemeMoodContext);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => setIsLoading(false), 2000);

        if (phone && password) {
            localStorage.setItem("token", "123");
            navigate("/home");
        }
    };

    return (
        <div
           
            className={`min-h-screen flex flex-col lg:flex-row font-sans ${darkMood ? "bg-slate-900" : "bg-slate-50"}`}
        >

            {/* ── LEFT SIDE ── */}
            <div className="relative lg:w-1/2 min-h-[340px] lg:min-h-screen overflow-hidden bg-gradient-to-br from-[#0f2557] via-[#1a3a8f] to-[#1565d8] flex flex-col justify-between p-10 lg:p-14">

                <FloatingOrb className="w-96 h-96 bg-blue-300 -top-24 -left-24" />
                <FloatingOrb className="w-64 h-64 bg-indigo-400 bottom-32 right-0" />
                <FloatingOrb className="w-48 h-48 bg-sky-300 top-1/2 left-1/3" />

                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative flex justify-center pr-20 items-center gap-3">
                 
                    <span className="text-white font-bold text-xl">بسطتهالك</span>
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <HiAcademicCap className="text-white text-xl" />
                    </div>
                </div>

                <div className="relative flex flex-col items-center gap-8 my-auto py-10 text-right">

                    <div>
                        <div className="flex gap-2 mb-4 justify-end">
                          
                            <span className="text-blue-200 text-sm font-semibold">
                                منصة تعليمية
                            </span>
                        </div>

                        <h1 className="text-white font-extrabold text-4xl lg:text-5xl leading-tight">
                            ابدأ رحلتك <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
                                التعليمية الآن
                            </span>
                        </h1>

                        <p className="mt-4 text-blue-200 text-base leading-relaxed max-w-sm">
                            تعلّم مهارات جديدة وابدأ تطوير نفسك من أي مكان وفي أي وقت.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-end">
                        <CourseTag icon="🎨" label="تصميم" />
                        <CourseTag icon="💻" label="برمجة" />
                        <CourseTag icon="📊" label="بيانات" />
                    </div>
                </div>

                <div className="relative grid grid-cols-3 gap-3">
                    <StatCard value="50K+" label="طالب" />
                    <StatCard value="300+" label="كورس" />
                    <StatCard value="98%" label="رضا" />
                </div>
            </div>

            {/* ── RIGHT SIDE ── */}
            <div className="lg:w-1/2 flex items-center justify-center px-6 py-14">

                <div className={`w-full max-w-md  rounded-3xl shadow-[0_8px_60px_rgba(21,101,216,0.12)] p-8 lg:p-10 ${darkMood ? " bg-slate-900" : "bg-slate-50"}`}>

                    {/* Header */}
                    <div className="mb-8 text-right">
                        <h2 className={`text-2xl lg:text-3xl font-extrabold text-gray-800 ${darkMood ? "text-gray-300" : "text-gray-400"}`}>
                            مرحباً بعودتك
                        </h2>
                        <p className={`mt-2 text-gray-500 text-sm ${darkMood ? "text-gray-300" : "text-gray-400"}`}>
                            سجل الدخول لمتابعة رحلتك التعليمية
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">

                        {/* Phone */}
                        <div>
                            <label className={`block text-xs font-semibold  mb-2  ${darkMood ? "text-gray-400" : "text-gray-500"}`}>
                                رقم الهاتف
                            </label>

                            <div className="flex items-center gap-3 border-2 rounded-2xl px-4 py-3.5 bg-gray-50">
                                <FiPhone className="text-gray-400" />

                                <input
                                    type="tel"
                                    placeholder="+20 1XX XXX XXXX"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="flex-1 bg-transparent outline-none text-sm"
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className={`block text-xs font-semibold  mb-2 ${darkMood ? "text-gray-400" : "text-gray-500"}`}>
                                كلمة المرور
                            </label>

                            <div className="flex items-center gap-3 border-2 rounded-2xl px-4 py-3.5 bg-gray-50">
                                <FiLock className="text-gray-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="أدخل كلمة المرور"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="flex-1 bg-transparent outline-none text-sm"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>

                        {/* Remember */}
                        <div className="flex justify-between items-center">

                            <label className={`flex items-center gap-2 text-sm ${darkMood ? "text-gray-400" : "text-gray-500"}`}>
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                تذكرني
                            </label>

                            <a className="text-sm text-blue-600">
                                نسيت كلمة المرور؟
                            </a>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                        >
                            تسجيل الدخول
                            <FiArrowRight />
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        ليس لديك حساب؟{" "}
                        <span
                            onClick={() => navigate("/register")}
                            className="text-blue-600 font-bold cursor-pointer hover:underline"
                        >
                            إنشاء حساب
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
}