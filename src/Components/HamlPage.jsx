import React from 'react';
import FirstPartHaml from './Haml/FirstPartHaml';

export default function HamlPage() {
  return (
    <div className='py-10'>
      <h1 className="text-center text-2xl font-bold mb-5">مراحل الحمل</h1>
      <FirstPartHaml />
    </div>
  );
}