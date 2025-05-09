import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Themes() {
  const [theme, setThemes] = useState(() =>
    localStorage.getItem("theme" || "light"),
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme == "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
  }, [Themes]);

  function handleTheme() {
    if (theme === "light") {
      setThemes("dark");
    }
    setThemes("light");
  }

  return (
    <button
      onClick={handleTheme}
      className="fixed right-10 bottom-10 cursor-pointer transition-all duration-300 active:rotate-180"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default Themes;
