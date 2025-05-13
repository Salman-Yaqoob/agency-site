import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Themes() {
  const [theme, setThemes] = useState(() => {
    const store = localStorage.getItem("theme");
    if (store === "light" || store === "dark") {
      return store;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme == "dark") {
      root.classList.remove("light");
      root.classList.add("dark");

      localStorage.setItem("theme", theme);
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  function handleTheme() {
    if (theme === "light") {
      setThemes("dark");
    } else {
      setThemes("light");
    }
  }

  return (
    <button
      onClick={handleTheme}
      className="fixed right-10 bottom-10 z-50 cursor-pointer transition-all duration-300 active:rotate-180"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default Themes;
