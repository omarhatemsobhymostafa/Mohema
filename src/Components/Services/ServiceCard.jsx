import React from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaCalendarWeek } from "react-icons/fa6";
export default function ServiceCard(props) {
  return (
    <div className=" items-center gap-3 md:w-[calc(25%-4rem)]">
      <div className=" flex-col md:flex-row items-center gap-3">
        <div className=" h-16 w-16 rounded-xl m-auto mb-3 content-center bg-[#F28482] hover:translate-y-[-3px] transition-all">
            {props.icon}
        </div>

        <h2 className="text-4xl ">{props.title}</h2>
      </div>
      <p className="my-2">  {props.desc} </p>
    </div>
  );
}
