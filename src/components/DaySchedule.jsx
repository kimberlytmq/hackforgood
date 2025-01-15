import React from 'react';
import './DaySchedule.css';

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const tasks = [
  { time: '10:00 AM', description: 'Meeting with team' },
  { time: '01:00 PM', description: 'Work on project' },
];

const notifications = [
  'Reminder: Meeting at 10:00 AM',
  'Project deadline approaching!',
  'New task added: Design review',
];

const DaySchedule = () => {
  return (
    <div className="day-schedule">
      {/* Scrollable Schedule */}
      <div className="schedule-container">
        <div className="time-slot-container">
          {timeSlots.map((time, index) => (
            <div className="time-slot" key={index}>
              {time}
            </div>
          ))}
        </div>
      </div>

      {/* Task List and Notifications */}
      <div className="task-notification-container">
        {/* Left Section: Task List */}
        <div className="task-list">
          <h2>Tasks for Today</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.time}</strong>: {task.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Notifications */}
        <div className="notifications">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DaySchedule;