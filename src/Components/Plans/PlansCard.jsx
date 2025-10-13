import React from "react";

export default function PlansCard(props) {
  return (
 <div className="max-w-sm w-full p-6 bg-white border rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-2"> {props.planName}</h2>
      <p className="text-gray-500 mb-4"> {props.To}</p>

      <div className="text-4xl font-extrabold text-gray-900 mb-1">{props.cost}EGP</div>
      <p className="text-gray-400 text-sm mb-6">{props.PayPer}</p>

      <ul className="text-gray-600 text-md space-y-2 mb-6 ">
        {props.list.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>

      <button className="w-full bg-[#F28482] hover:scale-110 hover:translate-y-[-3px]  hover:rotate-1 text-white font-medium py-2 rounded-full transition-all">
        اختر الخطة
      </button>
    </div>
  );
}
