import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaCalendarWeek } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <div className=" h-[60vh] py-5 px-16 text-center md:mb-0 mb-60">
      <h2 className="md:text-5xl text-4xl text-center font-bold flex justify-center mb-12 text-[#444444]">
        كل المحتجاه في مكان واحد
      </h2>
      <div className=" flex flex-col md:flex-row justify-between mt-2 text-[#444444] ">
        <ServiceCard icon={<FaBookBookmark className="text-white m-auto text-3xl hover:scale-125 hover:rotate-12 transition-all"/>} title="تعليم شامل" desc="مقالات مفصلة عن كل مراحل الحمل والولادة ونمو الطفل"/>
        <ServiceCard icon={<BsCameraVideoFill className="text-white m-auto text-3xl hover:scale-125 hover:rotate-12 transition-all"/>} title="كورسات" desc="كورسات عن الام والطفل والحنين الخ"/>
        <ServiceCard icon={<FaCalendarWeek className="text-white m-auto text-3xl hover:scale-125 hover:rotate-12 transition-all"/>} title="متابعة أسبوعية" desc="تحديثات أسبوعية عن تطور الجنين ونمو الطفل"/>
      </div>
    </div>
  );
}
