import React from 'react'
import Service from './Services/Service.jsx'
import LearnHome from './LearnHome/LearnHome'
import Plans from './Plans/Plans.jsx'

export default function Home() {
  return (
    <div>
        <Service />
        <LearnHome />
        <Plans />
    </div>
  )
}
