import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/homepage/Homepage.jsx";
import AboutUs from './components/about/AboutUs.jsx';
import Contact from './components/contact/Contact.jsx';
import News from './components/news/News.jsx';
import Authentication from './components/authentication/Authentication.jsx';
import Posts from './components/posts/Posts.jsx';

function App() {
    return (
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/authenticate" element={<Authentication />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/posts" element={<Posts />} />
                    </Routes>
                </div>
            </Router>
    );
}

export default App
