import React from 'react';
import './DaySchedule.css';

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const DaySchedule = () => {
  return (
    <div className="schedule-container">
      <div className="time-slot-container">
        {timeSlots.map((time, index) => (
          <div className="time-slot" key={index}>
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySchedule;