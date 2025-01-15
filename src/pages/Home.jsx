import React from 'react';
import DaySchedule from '../components/DaySchedule';

function Home() {
  return (
    <div className="App">
      <h1 style={{ color: '#21183f', fontFamily: 'sans-serif' }}>Hey there! Here's your schedule for today</h1>
      <DaySchedule />
    </div>
  )
}

export default Home;
