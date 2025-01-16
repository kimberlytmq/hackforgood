// components/Layout.jsx
import {useState} from 'react';
import Navbar from './Navbar'; // Ensure the path is correct
import {Outlet} from 'react-router-dom'
import MeetingPopup from '../components/MeetingPopup/MeetingPopup';
import TaskPopup from '../components/TaskPopup/TaskPopup';

function Layout() {
    const [isMeetingPopupOpen, setIsMeetingPopupOpen] = useState(false);
    const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false);
    return (
        <div>
            <Navbar 
                    setIsMeetingPopupOpen={setIsMeetingPopupOpen}
                    setIsTaskPopupOpen={setIsTaskPopupOpen}
                    />
            <Outlet />
            {isMeetingPopupOpen && <MeetingPopup setIsMeetingPopupOpen={setIsMeetingPopupOpen} />}
            {isTaskPopupOpen && <TaskPopup setIsTaskPopupOpen={setIsTaskPopupOpen} />}
        </div>
    );
}

export default Layout;