import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Components/LoginSignup/LoginSignup.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Aboutus from "./Components/AboutUs/Aboutus.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import News from "./Components/News/News.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/news" element={<News />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
