import { createContext, useState } from "react";

const ThemeMoodContext = createContext();
function ThemeModeProvider({ children }) {
    const [darkMood, setDarkMood] = useState(false);
    return <ThemeMoodContext.Provider value={{ darkMood, setDarkMood }}>{children}</ThemeMoodContext.Provider>
}
export { ThemeMoodContext, ThemeModeProvider };