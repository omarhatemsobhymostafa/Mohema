import React from "react";
import LearnHomeCard from "./LearnHomeCard";

export default function LearnHome() {
  return (
    <div>
      <h2 className="md:text-5xl text-4xl  text-center font-bold flex justify-center  mb-12 text-[#444444]  px-12 ">
        محتوي <b className="mr-2 text-[#F28482]">تعليمي</b>
      </h2>

      <div className="flex flex-col md:flex-row justify-between mt-2 text-[#444444] gap-6 mb-12 px-12">
        <LearnHomeCard
          title="الثلث الأول"
          weak="اسبوع 1-12"
          list={[
            "تكوين الأعضاء الأساسية",
            "بداية نبضات القلب",
            "تطور الجهاز العصبي",
            "تكون الأطراف",
          ]}
        />
        <LearnHomeCard
          title="الثلث الثاني"
          weak="اسبوع 13-27"
          list={[
            "يبدأ الطفل بالحركة",
            "نمو الشعر والأظافر",
            "تطور حاسة السمع",
            "تكوين الأسنان",
          ]}
        />
        <LearnHomeCard
          title="الثلث الثالث"
          weak="اسبوع 28-40"
          list={[
            "اكتمال نمو الرئتين",
            "زيادة الوزن السريعة",
            "فتح وإغلاق العينين",
            "الاستعداد للولادة",
          ]}
        />
      </div>

      <div className="w-full text-center pb-10 cursor-pointer">
        <a className="text-center bg-[#F28482] block m-auto md:w-[25%] py-1 w-[75%] text-white font-bold rounded-full hover:scale-110 hover:translate-y-[-3px] hover:rotate-1 transition-all">تعلمي المزيد</a>
      </div>
    </div>
  );
}
