import React from 'react'
import FirstPartHaml from './Haml/FirstPartHaml'
import { Route, Routes } from 'react-router-dom'
import WeekHamlPart1 from './Haml/WeekHamlPart1'

export default function HamlPage() {
    return (
        <div className='py-10'>
            <FirstPartHaml />
            <Routes>
                <Route path=':id' element={<WeekHamlPart1 />} />
            </Routes>
        </div>
    )
}
