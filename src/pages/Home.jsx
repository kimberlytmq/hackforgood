// import { useState } from 'react';
// import DaySchedule from '../components/DaySchedule';
// import Navbar from '../components/Navbar';
// import MeetingPopup from '../components/MeetingPopup/MeetingPopup.jsx';
// import TaskPopup from '../components/TaskPopup/TaskPopup.jsx';

// function Home() {

//   const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);
//   const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);

//   return (
//     <div className="App">
//       <Navbar
//         setIsMeetingPopupOpen={setIsMeetingPopupOpen}
//         setIsTaskPopupOpen={setIsTaskPopupOpen}
//       />
//       <h1 style={{ color: '#21183f', fontFamily: 'sans-serif' }}>Hey there! Here is your schedule for today</h1>
//       <DaySchedule />
//       {isMeetingPopupOpen && <MeetingPopup setIsMeetingPopupOpen={setIsMeetingPopupOpen} />}
//       {isTaskPopupOpen && <TaskPopup setIsTaskPopupOpen={setIsTaskPopupOpen} />}
//     </div>
//   )
// }

// export default Home;
