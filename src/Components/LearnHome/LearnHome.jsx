import React from "react";
import LearnHomeCard from "./LearnHomeCard";
import { TbCalendarWeekFilled } from "react-icons/tb";

export default function LearnHome() {
  return (
    <div className="mb-44">
        <div className=" h-16 w-16 rounded-xl m-auto mb-3 content-center bg-gradient-to-b from-[#f48a8a] to-[#f26d6d] hover:translate-y-[-3px] transition-all">
            <TbCalendarWeekFilled className="text-white m-auto text-3xl hover:scale-110 hover:rotate-5 transition-all" />
        </div>
      <h2 className="md:text-5xl text-4xl  text-center font-bold flex justify-center  mb-10 text-[#444444] items-center  px-12 ">
        الحمل أسبوع بأسبوع  

      </h2>

    <div className="w-11/12 m-auto justify-center flex py-5 font-bold ">
        <p className="text-center bg-[#75b8b2] text-white p-3 rounded-xl inline-block m-auto shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">يخطر ببالك الكثير من الاسئلة لما تسمعى كلمة مبروووك انتى حامل
        بداية من ماذا يحدث داخل جسمك وكيف ينمو طفلك والتوصيات والنصائح لكل حامل
      </p>

    </div>
      <div className="flex flex-col md:flex-row justify-center mt-2 text-[#444444] gap-24 mb-12 px-12 ">
        <LearnHomeCard
          title="الثلث الأول"
          weak="اسبوع 1-12"
          desc={
           'أهلًا بكِ في الثلث الأول من حملك من أعراض الحمل المبكرة إلى مراحل نمو وتطور طفلك، ستجدين هنا كل ما تحتاجين إليه. '
          }
        />
        <LearnHomeCard
          title="الثلث الثاني"
          weak="اسبوع 13-27"
          desc={
         ' أنتِ الآن في الثلث الثاني من الحمل، ونأمل أن تكوني قد تجاوزتِ أسوأ الأعراض.'
          }
          coming={true}
        />
        <LearnHomeCard
          title="الثلث الثالث"
          weak="اسبوع 28-40"
          desc={
            'أنتِ الآن في الثلث الأخير من الحمل، ولم يتبقَ على ولادتك سوى حوالي 12 أسبوعًا.'
          }
          coming={true}
        />
      </div>

    
    </div>
  );
}
