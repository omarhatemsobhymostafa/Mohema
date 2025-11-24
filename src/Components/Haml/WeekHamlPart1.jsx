import React from 'react';
import { useParams } from 'react-router-dom';
import Part1 from './../Part1';
import weak4fruit from './../../Assets/pregnancy-fruit-2021-week-4.png';
import weak4baby from './../../Assets/wbw-your-baby-2021-alt-w04-1200x1200 (4).jpg';
import FirstPartHaml from './FirstPartHaml';

export default function WeekHamlPart1() {
    const { id } = useParams();
    const weekData = Part1.find(item => item.week === parseInt(id));

    if (!weekData) {
        return <div>الأسبوع غير موجود</div>;
    }

    return (
        <div className='py-10'>
            <FirstPartHaml />
            <div className='text-center'>
                {weekData.sizeAndWeek}
                {parseInt(id) === 4 && <img src={weak4fruit} className='w-[30%] md:w-[10%] bg-[#75b8b2] inline-block rounded-full mx-4 m-auto my-10'/> }
                {parseInt(id) === 4 && <img src={weak4baby} className='w-[30%] md:w-[10%] bg-[#75b8b2] inline-block rounded-full mx-4 m-auto my-10'/> }
 
                <p className='py-5 md:m-auto text-center md:text-right w-full md:w-1/2'>{weekData.content}</p>
            </div>
        </div>
    );
}
