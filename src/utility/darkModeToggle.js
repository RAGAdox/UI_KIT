import React, { useState, useEffect } from "react";
const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(
    window.localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    console.log("darkMode", darkMode);
    if (
      darkMode ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
    return () => {};
  }, [darkMode]);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="dark:bg-gray-800 flex items-center justify-center w-full mb-12 shadow-lg rounded-full pr-2">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            checked={darkMode}
            onChange={toggleMode}
          />
          <div className="block bg-gray-400 dark:bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
        <div className="ml-3 text-gray-700 dark:text-gray-200 font-medium">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </div>
      </label>
    </div>
  );
};
export default ToggleButton;
