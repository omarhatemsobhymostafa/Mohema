import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FirstPartHaml from './FirstPartHaml';

export default function WeekHamlPart1() {
  const [weeks, setWeeks] = useState([]);
  const { id } = useParams();
  const [weekData, setWeekData] = useState(null);

  useEffect(() => {
    async function getWeeks() {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/mohema`);
      const data = await res.json();
      setWeeks(data);
      const week = data.find(w => w.weekNumber === Number(id));
      setWeekData(week);
    }
    getWeeks()
  }, [id]);
  if (!weekData) {
    return <div className="text-center">جار التحميل...</div>;
  }

  return (
    <div className='m-5'>
      <FirstPartHaml />
      <div className="text-center">
        <h2 className='text-[#f48a8a] font-black text-xl'>الاسبوع {weekData.weekNumber}</h2>
        <p className="py-5 md:m-auto text-center md:text-right w-full md:w-1/2">
          {weekData.babySize ? (
            <p className="bg-[#75b8b2] p-5 font-bold text-white rounded-2xl my-5">
              {weekData.babySize}
            </p>
          ) : null}
          {weekData.WhappenInBody ? (
            <p className="bg-[#75b8b2] p-5 font-bold text-white rounded-2xl my-5">
              {weekData.WhappenInBody}
            </p>
          ) : null}
          {weekData.AmIpregnancy ? (
            <p className="bg-[#75b8b2] p-5 font-bold text-white rounded-2xl my-5">
              {weekData.AmIpregnancy}
            </p>
          ) : null}
          {weekData.sympotyms ? (
            <p className="bg-[#75b8b2] p-5 font-bold text-white rounded-2xl my-5">
              {weekData.sympotyms}
            </p>
          ) : null}
          {weekData.babyLooks ? (
            <p className="bg-[#75b8b2] p-5 font-bold text-white rounded-2xl my-5">
              {weekData.babyLooks}
            </p>
          ) : null}
          {weekData.importantSteps ? (
            <p className="bg-[#75b8b2] p-5 font-bold text-white rounded-2xl my-5">
              {weekData.importantSteps}
            </p>
          ) : null}

        </p>
      </div>
    </div>
  );
}
