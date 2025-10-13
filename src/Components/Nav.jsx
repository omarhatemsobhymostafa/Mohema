import React from "react";

import Logo from "../Assets/logo.png";
export default function Nav() {
  return (
    <nav className="h-20 md:flex-row flex-col w-full px-6 hidden md:flex items-center  bg-[#83C5BE]  ">
      <img src={Logo} alt="" className="h-5/6 ml-16" />

      <div
        className="list  flex-wrap justify-center items-center gap-3 text-black font-bold
                sm:gap-4 sm:justify-center
                flex md:gap-6 md:justify-start"
      >
        <a href="#" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          الحمل
        </a>
        <a href="#" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          النمو التطور
        </a>
        <a href="#" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          التربية الاجابية
        </a>
        <a href="#" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          كورسات
        </a>
        <a href="#" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          ماذا تشرتي
        </a>
        <a href="#" className="bg-white rounded-xl px-4 py-2 border-2 hover:scale-110 hover:translate-y-[-3px] transition-all ">
          خدمات
        </a>

      </div>
    </nav>
  );
}
