import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/AuthContext';
import { fetchSchedule } from '../api';

const ScheduleTimeline = ({ selectedDate }) => {
  const [meetings, setMeetings] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
    const {authToken, user} = useContext(AuthContext);
    const timelineStartTime = 9; // 9am
    const timelineEndTime = 17; // 5pm
    const timeIntervals = Array.from({ length: timelineEndTime - timelineStartTime }, (_, i) => timelineStartTime + i);

  useEffect(() => {
    const loadSchedule = async () => {
      try {
        const meetingsData = await fetchSchedule(user.uid, selectedDate, authToken);
         setMeetings(meetingsData);
         setErrorMessage("");
      } catch (error) {
          console.error('Error fetching schedule:', error);
          setErrorMessage(error.message)
      }
    };
    loadSchedule();
  }, [selectedDate, user.uid, authToken]);

 const calculateMeetingPosition = (meeting) => {
    const meetingStartTime = new Date(meeting.startTime);
    const meetingStartHour = meetingStartTime.getHours();
    const meetingStartMinute = meetingStartTime.getMinutes();
    const meetingDuration = meeting.duration;

      const totalMinutesSinceStart = (meetingStartHour - timelineStartTime) * 60 + meetingStartMinute;
      const timelineDurationInMinutes = (timelineEndTime - timelineStartTime) * 60;
        // Calculate the percentage of the timeline width where the meeting starts
        const startPercentage = (totalMinutesSinceStart / timelineDurationInMinutes) * 100;

        // Calculate the width of the meeting block as a percentage
      const meetingDurationPercentage = (meetingDuration / timelineDurationInMinutes) * 100;

      return { startPercentage: startPercentage, meetingDurationPercentage: meetingDurationPercentage };
  };

ScheduleTimeline.propTypes = {
  selectedDate: PropTypes.string.isRequired,
};

  return (
    <div className="schedule-timeline">
        <div className="timeline-header">
            {timeIntervals.map((hour) => (
              <span className="timeline-hour" key={hour}>{hour}00</span>
             ))}
        </div>
      <div className="timeline">
        {meetings && meetings.map((meeting) => {
          const { startPercentage, meetingDurationPercentage } = calculateMeetingPosition(meeting);
          return (
            <div
              key={meeting.id}
              className="meeting-block"
              style={{
                left: `${startPercentage}%`,
                width: `${meetingDurationPercentage}%`,
              }}
            >
              {meeting.title}
            </div>
          );
        })}
      </div>
        {errorMessage && <p className="error-message">Error: {errorMessage}</p>}
    </div>
  );
}
export default ScheduleTimeline;
