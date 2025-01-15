import './MeetingPopup.css';

function MeetingPopup({ setIsMeetingPopupOpen }) {
  const handleClose = () => {
    setIsMeetingPopupOpen(false); // Close the popup
  };
 
 
  return (
    <div className="Meetingpopup">
      <div onClick={handleClose} className="overlay"></div>
      <div className="Meetingpopup-content">
        <h2>Add Meeting</h2>
        <p>
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
          Choose the people you want to meet with and the time slots you're free!
        </p>
        <button className="close-Meetingpopup" onClick={handleClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
 }
 
 
 export default MeetingPopup;
 