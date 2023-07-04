"use client";

import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";


const DarkModeToggle = () => {

  const {toggle, mode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className="relative cursor-pointer w-[46px] h-[22px] border-[1.5px] border-[#53c28b70] rounded-[30px] flex justify-between items-center "
    >
      <div className="text-[13px] absolute left-[2px]">🌙</div>
      <div className="text-[13px] absolute left-6 top-[1.5px]">☀️</div>
      <div
        className={`absolute ml-[3px] transition-all
        ${mode === "light" ? "left-[22px]" : "left-0"} w-4 h-4 bg-[#53c28b] rounded-[100%]`}
      />
    </div>
  );
};

export default DarkModeToggle;
