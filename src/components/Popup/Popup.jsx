function Popup({ setIsPopupOpen }) {
  const handleClose = () => {
    setIsPopupOpen(false); // Close the popup
  };
 
 
  return (
    <div className="popup">
      <div onClick={handleClose} className="overlay"></div>
      <div className="popup-content">
        <h2>Add Meeting</h2>
        <p>
          Choose the people you want to meet with and the time slots you're free!
        </p>
        <button className="close-popup" onClick={handleClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
 }
 
 
 export default Popup;
 