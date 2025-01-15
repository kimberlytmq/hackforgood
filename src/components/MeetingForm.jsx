import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../contexts/AuthContext';
import UserList from './UserList';
import Calendar from './Calendar';
import TimeSlotSelector from './TimeSlotSelector';
import { fetchUsers } from '../api';

const MeetingForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [attendees, setAttendees] = useState([]);
  const [duration, setDuration] = useState(60); // Default to 60 minutes
  const [venue, setVenue] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(''); // For simplicity, a project ID for now
  const [files, setFiles] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const {authToken, user} = useContext(AuthContext);

    useEffect(() => {
        fetchUsers(authToken)
            .then(data => setAllUsers(data))
            .catch(error => {
              console.error("Error fetching users", error);
            setErrorMessage(error.message)
            });
     }, [authToken]);

    const handleAttendeeSelect = (selectedUsers) => {
      setAttendees(selectedUsers.map(user => user.id));
    };

    const handleDateSelect = (date) => {
      setSelectedDate(date);
       fetchAvailableDays(date); //fetch time slots for this date after date selected
    };

    const handleTimeSlotSelect = (time) => {
      setSelectedTimeSlot(time);
    };

    const fetchAvailableDays = async () => {
      try {
        if (attendees.length === 0){
           setErrorMessage("Please select attendees first before choosing the date");
            return;
        }
        //fetch data from backend to get availble days
        //For example: We assume backend returns list of available days
          const today = new Date();
        // Sample available days based on current date and a couple of days later
          const futureDate = new Date();
          futureDate.setDate(today.getDate() + 5);
        setAvailableDays([today, futureDate]);
        setErrorMessage(""); // Clear error messages if successful
      } catch (error) {
        console.error("Error getting available days", error);
        setErrorMessage("Error getting available days: " + error.message);
      }
  };

  useEffect(() => {
    const fetchAvailableTimeSlots = async () => {
      try {
        if (!selectedDate || attendees.length === 0) return; //Ensure date and attendees have been selected

        // Make an api call to your backend to get availbale time slots
          //For example, you could fetch the user's schedule for this day and mark when they are busy
          //We are using dummy data for now
          setAvailableTimeSlots(['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']);
         setErrorMessage(""); //Clear any existing error messages
      } catch (error) {
        console.error("Error fetching available time slots:", error);
          setErrorMessage("Error fetching time slots:" + error.message);
      }
    };
    fetchAvailableTimeSlots();
}, [selectedDate, attendees]);


  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
          if (!selectedTimeSlot){
              setErrorMessage("Please select the desired time slot before creating the meeting")
               return;
          }
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('attendees', attendees.join(','));
        formData.append('startTime', new Date(selectedDate + " " + selectedTimeSlot).getTime()); //Combine the selectedDate and selectedTimeSlot into a date string
        formData.append('duration', duration);
        formData.append('venue', venue);
        formData.append('description', description);
        formData.append('projectId', projectId);
        formData.append('createdBy', user.uid);
        files.forEach((file) => formData.append('files', file));


         const response = await fetch('/meetings', {
           method: 'POST',
           headers: {
              'Authorization': `Bearer ${authToken}`
            },
           body: formData,
         });
       if (response.ok) {
            onClose();
       } else {
        const errorData = await response.json();
         setErrorMessage(errorData.error || "Failed to create meeting")
       }
      } catch (error) {
        console.error('Error creating meeting:', error);
        setErrorMessage("Failed to create meeting: " + error.message);
      }
  };

  return (
    <div className="meeting-form">
      <h2>Create Meeting</h2>
      <form onSubmit={handleSubmit}>
         <div className="form-group">
            <label>Title:</label>
            <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
             />
         </div>
         <div className="form-group">
            <label>Attendees:</label>
            <UserList users={allUsers} onSelect={handleAttendeeSelect}/>
         </div>
        <div className="form-group">
            <label>Available days:</label>
            <Calendar onSelect={handleDateSelect} availableDays={availableDays}/>
        </div>
        <div className="form-group">
            <label>Available Time Slots:</label>
             {availableTimeSlots.length > 0 && (
                <TimeSlotSelector availableTimeSlots={availableTimeSlots} onSelect={handleTimeSlotSelect} />
             )}
         </div>
          <div className="form-group">
            <label>Duration (minutes):</label>
            <input
               type="number"
               value={duration}
               onChange={(e) => setDuration(parseInt(e.target.value, 10))}
             />
          </div>
          <div className="form-group">
                <label>Venue:</label>
                <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                />
         </div>
        <div className="form-group">
                <label>Description:</label>
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
         </div>
        <div className="form-group">
            <label>Project ID (Optional):</label>
            <input
             type="text"
             value={projectId}
             onChange={(e) => setProjectId(e.target.value)}
            />
         </div>
        <div className="form-group">
            <label>Attachments:</label>
            <input type="file" multiple onChange={handleFileChange} />
         </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Create Meeting</button>
      </form>
        <button onClick={onClose}>Close</button>
    </div>
  );
};
MeetingForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default MeetingForm;