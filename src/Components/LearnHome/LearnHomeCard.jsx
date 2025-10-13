import React from "react";

export default function LearnHomeCard(props) {
  return (
    <div className="items-center gap-3 md:w-[calc(25%-4rem)] px-8">
      <h2 className="text-4xl text-center">{props.title}</h2>
      <p className="text-center text-lg border-2 border-[#F28482] mx-5 rounded-full my-2 text-[#F28482]">
        {props.weak}
      </p>
      <ul className="mt-3 marker:text-[#F28482] text-lg list-disc text-center  ">
        {props.list.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
