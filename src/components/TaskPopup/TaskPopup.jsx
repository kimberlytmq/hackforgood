function TaskPopup({ setIsTaskPopupOpen }) {
    const handleClose = () => {
      setIsTaskPopupOpen(false); // Close the popup
    };
   
   
    return (
      <div className="Taskpopup">
        <div onClick={handleClose} className="overlay"></div>
        <div className="Taskpopup-content">
          <h2>Add Task</h2>
          <p>
            Choose the people you want to do the task with!
          </p>
          <button className="close-Taskpopup" onClick={handleClose}>
            CLOSE
          </button>
        </div>
      </div>
    );
   }
   
   
   export default TaskPopup;
   