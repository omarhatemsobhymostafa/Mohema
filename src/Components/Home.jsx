import React from 'react'
import Service from './Services/Service.jsx'
import LearnHome from './LearnHome/LearnHome'
import Plans from './Plans/Plans.jsx'
import Welcome from './Welcome/Welcome.jsx';
import FirstPartHaml from './Haml/FirstPartHaml.jsx';
import WeekHamlPart1 from './Haml/WeekHamlPart1.jsx'
import { Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <Welcome />
        <LearnHome />

 
    </div>
  )
}
