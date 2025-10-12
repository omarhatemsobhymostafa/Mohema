import React from "react";
import { FaBookBookmark } from "react-icons/fa6";

export default function Service() {
  return (
    <div className=" h-[60vh] py-5 px-16 text-center">
      <h2 className="md:text-5xl text-4xl text-center font-bold flex justify-center mb-12">
        كل المحتجاه في مكان واحد
      </h2>
      <div className=" flex flex-col md:flex-row justify-between mt-2  ">
        <div className=" items-center gap-3 md:w-[calc(25%-4rem)]">
          <div className=" flex-col md:flex-row items-center gap-3">
            <div className=" h-16 w-16 rounded-xl m-auto mb-3 content-center bg-[#B872D2]">
              <FaBookBookmark className="text-white m-auto text-3xl" />
            </div>

            <h2 className="text-4xl ">تعليم شامل</h2>
          </div>
          <p className="my-2">
            مقالات مفصلة عن كل مراحل الحمل والولادة ونمو الطفل
          </p>
        </div>

        <div className=" items-center gap-3 md:w-[calc(25%-4rem)]">
          <div className="flex-col md:flex-row items-center gap-3">
            <div className=" h-16 w-16 rounded-xl m-auto mb-3 content-center bg-[#B872D2]">
              <FaBookBookmark className="text-white m-auto text-3xl" />
            </div>

            <h2 className="text-4xl "> كورسات</h2>
          </div>
          <p className="my-2">كورسات للرضاعة والحمل والجنين وكمان التغذية</p>
        </div>

        <div className=" items-center gap-3 md:w-[calc(25%-4rem)]">
          <div className="flex-col md:flex-row items-center gap-3 ">
            <div className=" h-16 w-16 rounded-xl m-auto mb-3  content-center bg-[#B872D2]">
              <FaBookBookmark className="text-white m-auto text-3xl" />
            </div>

            <h2 className="text-4xl "> متابعة أسبوعية</h2>
          </div>
          <p className="my-2">تحديثات أسبوعية عن تطور الجنين ونمو الطفل</p>
        </div>
      </div>
    </div>
  );
}
