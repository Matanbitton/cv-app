import {createContext} from "react";

const ThemeContext = createContext({
  theme: {
    bg: "bg-slate-800",
    text: "text-sky-400",
    icons: "text-sky-600",
  },
});

export default ThemeContext;
