import React from 'react';
import Part1 from '../Part1';
import { Link } from 'react-router-dom';

export default function FirstPartHaml() {
  return (
    <div className='flex flex-wrap flex-col mb-10 text-center gap-5  md:flex-row justify-center  md:gap-10 font-bold  rouned-lg text-white  '>
      {Part1.map((item) => (
        <div key={item.week} >
          <Link
            className='inline-block w-[80%] md:w-full cursor-pointer text-center bg-[#75b8b2] px-5 py-3 rounded-lg'
            to={`/HamlPart1/${item.week}`}
          >
            الأسبوع {item.week}
          </Link>

        </div>
      ))}
    </div>
  );
}
