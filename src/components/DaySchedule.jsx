import React, { useState } from 'react';
import './DaySchedule.css';

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const meetings = [
  { startTime: '09:00 AM', endTime: '10:00 AM', title: 'Morning check in'},
  { startTime: '03:00 PM', endTime: '05:00 PM', title: 'Project meeting'}
]

const tasks = [
  { description: 'Meeting with team' },
  { description: 'Work on project' },
];

const notifications = [
  'Reminder: Meeting at 10:00 AM',
  'Project deadline approaching!',
  'New task added: Design review',
];

const DaySchedule = () => {

  const [taskStatus, setTaskStatus] = useState(
    tasks.map(() => false)
  );

  const handleCheckboxChange = (index) => {
    const updatedTaskStatus = [...taskStatus];
    updatedTaskStatus[index] = !updatedTaskStatus[index];
    setTaskStatus(updatedTaskStatus);
  }

  return (
    <div className="day-schedule">
      
      {/* Scrollable Schedule */}
      <div className="schedule-container">
        <div className="time-labels">
          {timeSlots.map((time, index) => (
            <div key={index} className="time-label">
              {time}
            </div>
          ))}
        </div>
        <div className="time-slot-container">
          {timeSlots.map((_, index) => (
          <div key={index} className="time-slot"></div>
          ))}
        </div>
        <div className="meetings-container">
        {meetings.map((meeting, index) => (
          <div
            key={index}
            className="meeting-block"
            style={{
              left: `${timeSlots.indexOf(meeting.startTime) * 120}px`,
              width: `${(timeSlots.indexOf(meeting.endTime) - timeSlots.indexOf(meeting.startTime)) * 120}px`
            }}
          >
            {meeting.title}
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
              <li key={index} className={taskStatus[index] ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={taskStatus[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                {task.description}
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