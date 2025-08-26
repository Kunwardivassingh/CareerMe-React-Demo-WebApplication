import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import LoginSignup from './components/LoginPage/Login';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/HomePage/HomePage';
import HRLoginSignup from './components/LoginPage/HRLoginSignup';
import NikiInterviewer from './components/Assistant/NikiInterviewer';
import Assistant from './components/Assistant/Assistant';
import CareerHub from './components/Assistant/CareerHub';
import About from './components/Assistant/About';
import Contact from './components/Assistant/Contact';
import MeetNiki from './components/Assistant/meetniki';
import TellTiaAboutYourself from './components/Assistant/TellTiaAboutYourself';
import JobDetails from './components/Assistant/jobdetails';


const App = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: !!localStorage.getItem('token'),
    name: localStorage.getItem('userName') || '',
  });

  return (
    <Router>
      {/* <Navbar auth={auth} setAuth={setAuth} /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup setAuth={setAuth} />} />
        <Route path="/dashboard" element={<Dashboard auth={auth} setAuth={setAuth} />} />
        <Route path="/hr-login" element={<HRLoginSignup setAuth={setAuth} />} />
      <Route path="/meet-niki" element={<NikiInterviewer />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/jobs" element={<CareerHub />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/niki-meet" element={<MeetNiki />} />
        <Route path="/tell-tia" element={<TellTiaAboutYourself />} />
                <Route path="/jobdetails" element={<JobDetails />} />

      </Routes>
    </Router>
  );
};

export default App;
