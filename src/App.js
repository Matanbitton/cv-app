import "./index.css";
import Controller from "./components/Controller";
import ThemeContext from "./store/theme-context";
import {useState} from "react";
import themes from "./components/UI/themes";

function App() {
  const [theme, setTheme] = useState({
    bg: "bg-slate-800",
    text: "text-sky-400",
    border: "border-sky-400",
    icons: "text-sky-600",
  });
  function handleTheme(themeInput) {
    setTheme(() => {
      console.log(themes[`${themeInput}`]);
      return themes[`${themeInput}`];
    });
    console.log(theme);
  }

  return (
    <ThemeContext.Provider value={{theme: theme, onChangeTheme: handleTheme}}>
      <Controller />
    </ThemeContext.Provider>
  );
}

export default App;
