import React from 'react'
import Logo from './../../Assets/logo.png'
export default function Welcome() {
  return (
    <div>
           <span className="md:text-4xl text-4xl text-center translate-y-[20px] qad py-5 font-bold flex justify-center  text-[#444444] ">
        انتِ قد الــ
      </span>
      <img src={Logo} alt="" className=" md:h-1/6 md:w-1/6 m-auto " />
      <div class="w-full flex justify-center py-10 mb-10">
        <ul class="w-full max-w-xl bg-[#d5fffc] p-5 rounded-2xl shadow-md space-y-3 font-bold" dir="rtl">

 

          <li class="text-center bg-[#75b8b2] text-white p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                  وضوح وثقة بدل العشوائية والتوتر<br />
            ستعرفين  كيف تتعاملين مع الحمل أو مع طفلك خطوة بخطوة دون إضاعة الوقت في مصادر غير موثوقة
          </li>

       
          <li class="text-center bg-[#75b8b2] text-white p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            طمأنينة حقيقية بدل القلق <br />
            معلومات بسيطة، دقيقة، وموثوقة تمنحك الثقة في كل قرار
          </li>

          <li class="text-center bg-[#75b8b2] text-white p-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            ارتباط أقوى بطفلك  <br />
            أنك ستكونين على فهم أعمق لاحتياجاته، فتُصبح علاقتكما أهدأ وأفضل
          </li>

        </ul>
      </div>
    </div>
  )
}
