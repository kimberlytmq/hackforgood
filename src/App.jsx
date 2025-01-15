import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import Calendar from './pages/Calendar.jsx';
import Projects from './pages/Projects.jsx';
import ProjectPage from './components/projectPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:name" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
