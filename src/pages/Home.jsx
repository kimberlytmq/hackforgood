import React from 'react';
import DaySchedule from '../components/DaySchedule';

function Home() {
  return (
    <div className="App">
      <h1>Hey there! Here's your schedule for today</h1>
      <DaySchedule />
    </div>
  )
}

export default Home;
