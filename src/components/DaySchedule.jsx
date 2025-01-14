import React from 'react';
import './DaySchedule.css';

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

// Sample events
const events = [
  { startTime: '09:00 AM', endTime: '10:00 AM', title: 'Morning Meeting' },
  { startTime: '01:00 PM', endTime: '02:30 PM', title: 'Lunch with client' },
  { startTime: '03:00 PM', endTime: '04:00 PM', title: 'Project Discussion' }
];

const DaySchedule = () => {
  return (
    <div className="schedule-container">
      {/* Time slots */}
      <div className="time-slot-container">
        {timeSlots.map((time, index) => (
          <div className="time-slot" key={index}>
            {time}
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="events-container">
        {events.map((event, index) => (
          <div
            key={index}
            className="event-block"
            style={{
              left: `${timeSlots.indexOf(event.startTime) * 160}px`,
              width: `${(timeSlots.indexOf(event.endTime) - timeSlots.indexOf(event.startTime)) * 160}px`
            }}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySchedule;