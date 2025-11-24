import React from "react";
import { Link } from "react-router-dom";

export default function LearnHomeCard(props) {
  return (
    <div className="items-center gap-3  md:w-1/4   shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-[0.3s] ease-[ease] p-[1.8rem] rounded-[20px] hover:translate-y-[-5px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] bg-[fff]">
      <h2 className="text-4xl text-center mb-5">{props.title}</h2>
      <p className="text-center text-lg border-2 border-[#F28482] mx-5 rounded-full my-2 text-[#F28482]">
        {props.weak}
      </p>
      <p className="mt-3 marker:text-[#F28482] text-lg  text-center  ">
          {props.desc}
      </p>
        <div className="w-full text-center pb-10 cursor-pointer py-5">
          {props.coming?true:
        <Link to={'/HamlPart1'} className="text-center bg-[#F28482] block m-auto  text-white font-bold rounded-full hover:scale-110 hover:translate-y-[-3px]  transition-all">تعلمي المزيد</Link>}
      </div>
    </div>
  );
}
