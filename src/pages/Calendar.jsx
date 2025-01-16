// import /*React,*/ { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Place from '../Place';
import Projects from '../pages/Projects';
import ProjectPage from '../components/projectPage';

function Calendar() {

    return (
        <div>
            <h1>Calendar Page</h1>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="place" element={<Place />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="projects" element={<Projects />} />
                <Route path="project/:name" element={<ProjectPage />} />
              </Route>
            </Routes>
        </div>
        
    );
}

export default Calendar;