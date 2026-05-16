import { useState, useRef, useEffect, useContext } from "react";
import { CgDarkMode } from "react-icons/cg";
import {
    FiUser, FiPhone, FiMail, FiLock, FiEye, FiEyeOff,
    FiChevronRight, FiChevronLeft, FiCheck, FiBookOpen,
    FiMapPin, FiShield,
} from "react-icons/fi";
import { HiAcademicCap, HiSparkles } from "react-icons/hi2";
import { MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ThemeMoodContext } from "../../ulties/ThemeMood";

/* ─── Egyptian Governorates ─────────────────────── */
const GOVERNORATES = [
    "القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "البحر الأحمر", "البحيرة", "الفيوم",
    "الغربية", "الإسماعيلية", "المنوفية", "المنيا", "القليوبية", "الوادي الجديد",
    "السويس", "أسوان", "أسيوط", "بني سويف", "بورسعيد", "دمياط", "جنوب سيناء",
    "كفر الشيخ", "مطروح", "الأقصر", "قنا", "شمال سيناء", "الشرقية", "سوهاج",
];

const GRADES = [
    "الصف الأول الثانوي", "الصف الثاني الثانوي", "الصف الثالث الثانوي",
];

/* ─── Step meta ──────────────────────────────────── */
const STEPS = [
    { id: 1, title: "بيانات الطالب", icon: FiUser, color: "#3b82f6" },
    { id: 2, title: "بيانات ولي الأمر", icon: FiPhone, color: "#8b5cf6" },
    { id: 3, title: "البيانات الدراسية", icon: MdSchool, color: "#06b6d4" },
    { id: 4, title: "الأمان", icon: FiShield, color: "#10b981" },
];

/* ─── Reusable Input ─────────────────────────────── */
function FormInput({ label, type = "text", icon: Icon, value, onChange, error,
    placeholder, dir = "rtl", rightSlot }) {
    const [focused, setFocused] = useState(false);
    return (
        <div className="flex flex-col gap-1.5 ">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">{label}</label>
            <div className={`relative flex items-center border-2 rounded-2xl transition-all duration-200 bg-gray-50
        ${focused ? "border-blue-500 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.10)]"
                    : error ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-blue-300"}`}>
                {rightSlot ? rightSlot : null}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    dir={dir}
                    className="flex-1 bg-transparent text-gray-800 text-sm py-3.5 px-4 outline-none placeholder-gray-400 text-right"
                />
                {Icon && (
                    <span className={`pl-4 pr-1 transition-colors ${focused ? "text-blue-500" : "text-gray-400"}`}>
                        <Icon className="text-lg" />
                    </span>
                )}
            </div>
            {error && <p className="text-red-500 text-xs text-right">{error}</p>}
        </div>
    );
}

/* ─── Reusable Select ────────────────────────────── */
function FormSelect({ label, icon: Icon, value, onChange, error, options, placeholder }) {
    const [focused, setFocused] = useState(false);
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">{label}</label>
            <div className={`relative flex items-center border-2 rounded-2xl transition-all duration-200 bg-gray-50
        ${focused ? "border-blue-500 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.10)]"
                    : error ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-blue-300"}`}>
                <select
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    dir="rtl"
                    className="flex-1 bg-transparent text-gray-800 text-sm py-3.5 px-4 outline-none text-right appearance-none cursor-pointer"
                >
                    <option value="">{placeholder}</option>
                    {options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                {Icon && (
                    <span className={`pl-4 pr-1 flex-shrink-0 transition-colors ${focused ? "text-blue-500" : "text-gray-400"}`}>
                        <Icon className="text-lg" />
                    </span>
                )}
            </div>
            {error && <p className="text-red-500 text-xs text-right">{error}</p>}
        </div>
    );
}

/* ─── Password Input ─────────────────────────────── */
function PasswordInput({ label, value, onChange, error, placeholder }) {
    const [show, setShow] = useState(false);
    const [focused, setFocused] = useState(false);
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">{label}</label>
            <div className={`relative flex items-center border-2 rounded-2xl transition-all duration-200 bg-gray-50
        ${focused ? "border-blue-500 bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.10)]"
                    : error ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-blue-300"}`}>
                <button type="button" onClick={() => setShow(s => !s)}
                    className="pl-4 pr-1 text-gray-400 hover:text-blue-500 transition-colors flex-shrink-0">
                    {show ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                </button>
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder}
                    dir="rtl"
                    className="flex-1 bg-transparent text-gray-800 text-sm py-3.5 px-4 outline-none placeholder-gray-400 text-right"
                />
                <span className={`pl-4 pr-1 flex-shrink-0 transition-colors ${focused ? "text-blue-500" : "text-gray-400"}`}>
                    <FiLock className="text-lg" />
                </span>
            </div>
            {error && <p className="text-red-500 text-xs text-right">{error}</p>}
        </div>
    );
}

/* ─── Stepper ────────────────────────────────────── */
function Stepper({ current }) {
    return (
        <div className="flex items-center justify-center gap-0 mb-8 rtl:flex-row-reverse" dir="rtl">
            {STEPS.map((s, i) => {
                const done = current > s.id;
                const active = current === s.id;
                const Icon = s.icon;
                return (
                    <div key={s.id} className="flex items-center">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                ${done ? "bg-green-500 border-green-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                                    : active ? "bg-blue-600 border-blue-600 shadow-[0_0_0_4px_rgba(59,130,246,0.20)] scale-110"
                                        : "bg-gray-100 border-gray-200"}`}>
                                {done
                                    ? <FiCheck className="text-white text-sm font-bold" />
                                    : <Icon className={`text-sm ${active ? "text-white" : "text-gray-400"}`} />}
                            </div>
                            <span className={`text-[10px] font-bold hidden sm:block transition-colors duration-300
                ${active ? "text-blue-600" : done ? "text-green-500" : "text-gray-400"}`}>
                                {s.title}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className={`w-10 sm:w-16 h-0.5 mx-1 mb-5 transition-all duration-500
                ${done ? "bg-green-400" : "bg-gray-200"}`} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

/* ─── Step Panels ────────────────────────────────── */
function StepStudentInfo({ data, onChange, errors }) {
    return (
        <div className="flex flex-col gap-5" dir="rtl">
            <FormInput label="اسم الطالب" icon={FiUser}
                value={data.studentName} onChange={e => onChange("studentName", e.target.value)}
                error={errors.studentName} placeholder="أدخل اسمك الكامل" />
            <FormInput label="رقم الهاتف" icon={FiPhone} type="tel" dir="ltr"
                value={data.studentPhone} onChange={e => onChange("studentPhone", e.target.value)}
                error={errors.studentPhone} placeholder="01XXXXXXXXX" />
        </div>
    );
}

function StepParentInfo({ data, onChange, errors }) {
    return (
        <div className="flex flex-col gap-5" dir="rtl">
            <FormInput label="رقم هاتف ولي الأمر" icon={FiPhone} type="tel" dir="ltr"
                value={data.parentPhone} onChange={e => onChange("parentPhone", e.target.value)}
                error={errors.parentPhone} placeholder="01XXXXXXXXX" />
            <FormInput label="البريد الإلكتروني" icon={FiMail} type="email" dir="ltr"
                value={data.email} onChange={e => onChange("email", e.target.value)}
                error={errors.email} placeholder="example@email.com" />
        </div>
    );
}

function StepEducation({ data, onChange, errors }) {
    return (
        <div className="flex flex-col gap-5" dir="rtl">
            <FormSelect label="الصف الدراسي" icon={FiBookOpen}
                value={data.grade} onChange={e => onChange("grade", e.target.value)}
                error={errors.grade} options={GRADES} placeholder="اختر الصف الدراسي" />

            {/* Department radio */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest text-right">الإدارة</label>
                <div className="grid grid-cols-2 gap-3">
                    {["عام", "أزهر"].map(dep => (
                        <button key={dep} type="button"
                            onClick={() => onChange("department", dep)}
                            className={`py-3.5 rounded-2xl border-2 text-sm font-bold transition-all duration-200
                ${data.department === dep
                                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-[0_0_0_3px_rgba(59,130,246,0.12)]"
                                    : "border-gray-200 text-gray-500 hover:border-blue-300 hover:bg-blue-50/50"}`}>
                            {dep}
                        </button>
                    ))}
                </div>
                {errors.department && <p className="text-red-500 text-xs text-right">{errors.department}</p>}
            </div>

            <FormSelect label="المحافظة" icon={FiMapPin}
                value={data.governorate} onChange={e => onChange("governorate", e.target.value)}
                error={errors.governorate} options={GOVERNORATES} placeholder="اختر المحافظة" />
        </div>
    );
}

function StepSecurity({ data, onChange, errors }) {
    const strength = (() => {
        const p = data.password;
        if (!p) return 0;
        let s = 0;
        if (p.length >= 8) s++;
        if (/[A-Z]/.test(p)) s++;
        if (/[0-9]/.test(p)) s++;
        if (/[^A-Za-z0-9]/.test(p)) s++;
        return s;
    })();
    const strengthLabel = ["", "ضعيفة", "مقبولة", "جيدة", "قوية"][strength];
    const strengthColor = ["", "bg-red-400", "bg-yellow-400", "bg-blue-400", "bg-green-500"][strength];

    return (
        <div className="flex flex-col gap-5" dir="rtl">
            <PasswordInput label="كلمة المرور"
                value={data.password} onChange={e => onChange("password", e.target.value)}
                error={errors.password} placeholder="أدخل كلمة مرور قوية" />
            {data.password && (
                <div className="flex flex-col gap-1 -mt-2">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${i <= strength ? strengthColor : "bg-gray-200"}`} />
                        ))}
                    </div>
                    <p className={`text-xs text-right font-medium ${strength <= 1 ? "text-red-500" : strength <= 2 ? "text-yellow-600" : strength === 3 ? "text-blue-500" : "text-green-600"
                        }`}>قوة كلمة المرور: {strengthLabel}</p>
                </div>
            )}
            <PasswordInput label="تأكيد كلمة المرور"
                value={data.confirmPassword} onChange={e => onChange("confirmPassword", e.target.value)}
                error={errors.confirmPassword} placeholder="أعد إدخال كلمة المرور" />
        </div>
    );
}

/* ─── Validation ─────────────────────────────────── */
function validate(step, data) {
    const e = {};
    if (step === 1) {
        if (!data.studentName.trim()) e.studentName = "هذا الحقل مطلوب";
        else if (data.studentName.trim().length < 3) e.studentName = "الاسم قصير جداً";
        if (!data.studentPhone.trim()) e.studentPhone = "هذا الحقل مطلوب";
        else if (!/^01[0-9]{9}$/.test(data.studentPhone.replace(/\s/g, ""))) e.studentPhone = "رقم غير صحيح";
    }
    if (step === 2) {
        if (!data.parentPhone.trim()) e.parentPhone = "هذا الحقل مطلوب";
        else if (!/^01[0-9]{9}$/.test(data.parentPhone.replace(/\s/g, ""))) e.parentPhone = "رقم غير صحيح";
        if (!data.email.trim()) e.email = "هذا الحقل مطلوب";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "بريد إلكتروني غير صحيح";
    }
    if (step === 3) {
        if (!data.grade) e.grade = "اختر الصف الدراسي";
        if (!data.department) e.department = "اختر الإدارة";
        if (!data.governorate) e.governorate = "اختر المحافظة";
    }
    if (step === 4) {
        if (!data.password) e.password = "هذا الحقل مطلوب";
        else if (data.password.length < 8) e.password = "كلمة المرور يجب أن تكون 8 أحرف على الأقل";
        if (!data.confirmPassword) e.confirmPassword = "هذا الحقل مطلوب";
        else if (data.password !== data.confirmPassword) e.confirmPassword = "كلمتا المرور غير متطابقتان";
    }
    return e;
}

/* ─── Left Panel Illustration ────────────────────── */
function LeftPanel({ step }) {
    const messages = [
        { title: "ابدأ رحلتك!", sub: "سجّل بياناتك وانضم لآلاف الطلاب المتميزين" },
        { title: "نحن نهتم بعائلتك", sub: "نضمن التواصل المستمر مع ولي أمرك" },
        { title: "مسارك الدراسي", sub: "محتوى مخصص لصفّك وتخصصك تماماً" },
        { title: "حسابك آمن معنا", sub: "نحمي بياناتك بأعلى معايير الأمان" },
    ];
    const msg = messages[(step - 1) % messages.length];

    return (
        <div className="relative h-full min-h-[300px] lg:min-h-screen overflow-hidden bg-gradient-to-br from-[#0d1f4e] via-[#1a3a8f] to-[#1e62d8] flex flex-col justify-between p-10 lg:p-14">
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "52px 52px" }} />
            {/* Orbs */}
            <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-15 -top-20 -left-20 animate-slow-pulse" />
            <div className="absolute w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-15 bottom-20 right-0 animate-slow-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute w-40 h-40 bg-sky-300 rounded-full blur-3xl opacity-10 top-1/2 left-1/2 animate-slow-pulse" style={{ animationDelay: "1s" }} />

            {/* Brand */}
            <div className="relative flex justify-end pr-20 items-center gap-3 z-10">
              
                <div>
                    <p className="text-white font-extrabold text-lg tracking-wide">بسطتهالك</p>
                    <p className="text-blue-300 text-xs">منصة التعلم الذكي</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <HiAcademicCap className="text-white text-xl" />
                </div>
            </div>

            {/* Central illustration */}
            <div className="relative z-10 flex flex-col items-center gap-8 my-auto py-8">
                {/* Step illustration SVG */}
                <div className="w-full max-w-xs">
                    <svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                        {/* Desk */}
                        <rect x="60" y="190" width="260" height="14" rx="7" fill="white" fillOpacity="0.12" />
                        {/* Monitor */}
                        <rect x="110" y="80" width="160" height="110" rx="12" fill="white" fillOpacity="0.10" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
                        <rect x="124" y="94" width="132" height="82" rx="7" fill="white" fillOpacity="0.07" />
                        {/* Screen content */}
                        <rect x="136" y="106" width="80" height="7" rx="3.5" fill="#60a5fa" fillOpacity="0.8" />
                        <rect x="136" y="120" width="55" height="6" rx="3" fill="#93c5fd" fillOpacity="0.6" />
                        <rect x="136" y="133" width="40" height="5" rx="2.5" fill="#bfdbfe" fillOpacity="0.5" />
                        {/* Chart */}
                        <rect x="218" y="140" width="12" height="28" rx="4" fill="#3b82f6" fillOpacity="0.7" />
                        <rect x="234" y="126" width="12" height="42" rx="4" fill="#60a5fa" fillOpacity="0.8" />
                        {/* Monitor stand */}
                        <path d="M182 190 L192 210 M198 190 L188 210" stroke="white" strokeOpacity="0.3" strokeWidth="5" strokeLinecap="round" />
                        <rect x="170" y="208" width="40" height="6" rx="3" fill="white" fillOpacity="0.15" />
                        {/* Floating book */}
                        <rect x="30" y="110" width="58" height="72" rx="8" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.2" strokeWidth="1.2" />
                        <rect x="38" y="122" width="42" height="5" rx="2.5" fill="white" fillOpacity="0.5" />
                        <rect x="38" y="133" width="30" height="4" rx="2" fill="white" fillOpacity="0.35" />
                        <rect x="38" y="143" width="36" height="4" rx="2" fill="white" fillOpacity="0.35" />
                        <rect x="38" y="153" width="24" height="4" rx="2" fill="white" fillOpacity="0.25" />
                        {/* Pencil */}
                        <rect x="292" y="100" width="10" height="52" rx="5" fill="#fbbf24" fillOpacity="0.7" transform="rotate(15 292 100)" />
                        <path d="M296 148 l3 8 l-6-2z" fill="#f97316" fillOpacity="0.8" />
                        {/* Stars */}
                        <circle cx="80" cy="70" r="3" fill="#fbbf24" fillOpacity="0.6" />
                        <circle cx="310" cy="80" r="2" fill="#a5f3fc" fillOpacity="0.6" />
                        <circle cx="50" cy="200" r="2.5" fill="#c4b5fd" fillOpacity="0.5" />
                        <circle cx="340" cy="160" r="2" fill="#fca5a5" fillOpacity="0.5" />
                        {/* Floating badge */}
                        <rect x="270" y="40" width="90" height="38" rx="12" fill="white" fillOpacity="0.12" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                        <circle cx="290" cy="59" r="8" fill="#22c55e" fillOpacity="0.85" />
                        <path d="M286 59 l3 3 l5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="304" y="51" width="44" height="6" rx="3" fill="white" fillOpacity="0.6" />
                        <rect x="304" y="62" width="30" height="5" rx="2.5" fill="white" fillOpacity="0.35" />
                    </svg>
                </div>

                {/* Dynamic message */}
                <div className="text-center" key={step}>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-3">
                        <HiSparkles className="text-yellow-300 text-sm" />
                        <span className="text-blue-200 text-xs font-bold tracking-widest uppercase">الخطوة {step} من 4</span>
                    </div>
                    <h2 className="text-white font-extrabold text-2xl lg:text-3xl leading-snug">{msg.title}</h2>
                    <p className="text-blue-200 text-sm mt-2 max-w-xs mx-auto leading-relaxed">{msg.sub}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="relative z-10 grid grid-cols-3 gap-3">
                {[["50K+", "طالب"], ["300+", "كورس"], ["98%", "رضا"]].map(([v, l]) => (
                    <div key={l} className="bg-white/10 hover:bg-white/20  backdrop-blur border border-white/20 rounded-2xl py-3 flex flex-col items-center">
                        <span className="text-white font-bold text-xl">{v}</span>
                        <span className="text-blue-200 text-xs mt-0.5">{l}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Main Component ─────────────────────────────── */
export default function Register() {
    const { darkMood, setDarkMood } = useContext(ThemeMoodContext);
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [animDir, setAnimDir] = useState("forward");
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    const [data, setData] = useState({
        studentName: "", studentPhone: "",
        parentPhone: "", email: "",
        grade: "", department: "", governorate: "",
        password: "", confirmPassword: "",
    });

    const updateField = (key, val) => {
        setData(d => ({ ...d, [key]: val }));
        if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
    };

    const animateStep = (dir, cb) => {
        setAnimDir(dir);
        setVisible(false);
        setTimeout(() => { cb(); setVisible(true); }, 220);
    };

    const next = () => {
        const errs = validate(step, data);
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setErrors({});
        if (step < 4) animateStep("forward", () => setStep(s => s + 1));
        else {
            setSubmitted(true);
        }
    };

    const prev = () => {
        if (step > 1) animateStep("backward", () => setStep(s => s - 1));
    };

    /* success screen */
    if (submitted) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${darkMood?"bg-slate-800":"bg-slate-50"}  style={{ fontFamily: "'Cairo','Sora',sans-serif" }}`}>
                <div className="bg-white rounded-3xl shadow-[0_8px_60px_rgba(21,101,216,0.12)] p-10 flex flex-col items-center text-center max-w-sm w-full mx-4" dir="rtl">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                        <FiCheck className="text-green-500 text-4xl" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-800 mb-2">تم إنشاء الحساب بنجاح !</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        مرحباً <span className="font-bold text-blue-600">{data.studentName}</span>!<br />
                        تم تسجيل حسابك بنجاح. ابدأ رحلتك التعليمية الآن.
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); setStep(1); setData({ studentName: "", studentPhone: "", parentPhone: "", email: "", grade: "", department: "", governorate: "", password: "", confirmPassword: "" }); navigate("/home"); }}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-2xl shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.45)] transition-all duration-200 active:scale-[0.98]"
                    >
                       الذهاب الى الصفحة الرئيسية
                    </button>
                </div>
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Sora:wght@400;600;700;800&display=swap');`}</style>
            </div>
        );
    }

    const stepTitles = ["بيانات الطالب", "بيانات ولي الأمر", "البيانات الدراسية", "الأمان"];
    const stepSubs = [
        "أدخل اسمك ورقم هاتفك",
        "أدخل بيانات ولي أمرك",
        "اختر صفّك ومحافظتك",
        "اختر كلمة مرور آمنة",
    ];

    return (
        <div className="min-h-screen flex flex-col lg:flex-row" style={{ fontFamily: "'Cairo','Sora',sans-serif" }}>
            {/* LEFT */}
            <div className="lg:w-1/2">
                <LeftPanel step={step} />
            </div>

            {/* RIGHT */}
            {/* RIGHT */}
            <div
                className={`lg:w-1/2 flex items-center justify-center px-5 py-12 lg:py-0 transition-colors duration-300
  ${darkMood ? "bg-[#0b1220]" : "bg-[#f0f4ff]"}`}
            >
                <div className="w-full max-w-md">

                    <div
                        className={`rounded-3xl shadow-[0_8px_60px_rgba(21,101,216,0.12)]
      px-8 lg:px-10 py-6 lg:py-7 transition-all duration-300
      ${darkMood ? "bg-slate-700 text-white" : "bg-white text-gray-900"}`}
                        dir="rtl"
                    >

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-7">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                                <HiAcademicCap className="text-white text-xl" />
                            </div>

                            <div>
                                <p className="text-[11px] font-bold tracking-widest text-blue-400 uppercase">
                                    بسطتهالك
                                </p>
                                <p className={`${darkMood ? "text-gray-300" : "text-gray-400"} text-xs`}>
                                    منصة التعلم الذكي
                                </p>
                            </div>
                        </div>

                        {/* Titles */}
                        <div className="mb-6">
                            <h2 className={`text-2xl font-extrabold leading-tight ${darkMood ? "text-white" : "text-gray-800"}`}>
                                إنشاء حساب جديد
                            </h2>

                            <p className={`mt-1 text-sm ${darkMood ? "text-gray-300" : "text-gray-500"}`}>
                                ابدأ رحلتك التعليمية وسجّل حسابك الآن
                            </p>
                        </div>

                        {/* Stepper */}
                        <Stepper current={step} />

                        {/* Step label */}
                        <div className="mb-5 text-right">
                            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold rounded-full px-4 py-1.5">
                                <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">
                                    {step}
                                </span>
                                {stepTitles[step - 1]}
                            </span>

                            <p className="text-gray-400 text-xs mt-1.5">
                                {stepSubs[step - 1]}
                            </p>
                        </div>

                        {/* Animated step content */}
                        <div
                            className="transition-all duration-200"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible
                                    ? "translateX(0)"
                                    : animDir === "forward"
                                        ? "translateX(-18px)"
                                        : "translateX(18px)",
                            }}
                        >
                            {step === 1 && (
                                <StepStudentInfo
                                    data={data}
                                    onChange={updateField}
                                    errors={errors}
                                />
                            )}
                            {step === 2 && (
                                <StepParentInfo
                                    data={data}
                                    onChange={updateField}
                                    errors={errors}
                                />
                            )}
                            {step === 3 && (
                                <StepEducation
                                    data={data}
                                    onChange={updateField}
                                    errors={errors}
                                />
                            )}
                            {step === 4 && (
                                <StepSecurity
                                    data={data}
                                    onChange={updateField}
                                    errors={errors}
                                />
                            )}
                        </div>

                        {/* Progress bar */}
                        <div className="mt-6 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
                                style={{ width: `${(step / 4) * 100}%` }}
                            />
                        </div>

                        <p className="text-xs text-gray-400 text-left mt-1">
                            {Math.round((step / 4) * 100)}%
                        </p>

                        {/* Navigation buttons */}
                        <div className="flex gap-3 mt-6">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={prev}
                                    className="flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-2xl text-sm font-bold transition-all duration-200 active:scale-95"
                                >
                                    <FiChevronRight className="text-base" />
                                    السابق
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={next}
                                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold rounded-2xl py-3.5 text-sm shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_28px_rgba(37,99,235,0.45)] transition-all duration-200 active:scale-[0.98]"
                            >
                                {step === 4 ? "إنشاء الحساب" : "التالي"}
                                {step < 4 && <FiChevronLeft className="text-base" />}
                            </button>
                        </div>

                        {/* Login link */}
                        <p className={`text-center text-sm mt-6 ${darkMood ? "text-gray-300" : "text-gray-500"}`}>
                            لديك حساب بالفعل؟{" "}
                            <a
                                href="/login"
                                className="text-blue-600 font-bold hover:underline underline-offset-2"
                            >
                                تسجيل الدخول
                            </a>
                        </p>
                    </div>

                    {/* footer */}
                    <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
                        بإنشاء حساب، أنت توافق على{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-600">
                            شروط الاستخدام
                        </a>{" "}
                        و{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-600">
                            سياسة الخصوصية
                        </a>
                    </p>
                </div>
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Sora:wght@400;600;700;800&display=swap');
        @keyframes slow-pulse { 0%,100%{opacity:.15} 50%{opacity:.25} }
        .animate-slow-pulse { animation: slow-pulse 5s ease-in-out infinite; }
      `}</style>
        </div>
    );
}