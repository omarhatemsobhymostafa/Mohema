import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FirstPartHaml() {
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    async function getWeeks() {
      const res = await fetch("https://mohemabackend.onrender.com/api/v1/mohema");
  const data = await res.json();
      setWeeks(data);
    }
    getWeeks();
  }, []);

  return (
    <div className="flex flex-wrap flex-col mb-10 text-center gap-5 md:flex-row justify-center md:gap-10 font-bold rounded-lg text-white">
      {weeks.map((item , index) => (
          <Link
            className="inline-block  cursor-pointer text-center bg-[#75b8b2] px-5 py-3 rounded-lg"
            to={`/HamlPart1/${item.weekNumber}`}
          >
            الأسبوع {item.weekNumber}
          </Link>
      ))}
    </div>
  );
}
