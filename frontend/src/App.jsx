import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/homepage/Homepage.jsx";
import UserPage from "./components/homepage/UserPage.jsx";
import AboutUs from './components/about/AboutUs.jsx';
import Contact from './components/contact/Contact.jsx';
import News from './components/news/News.jsx';
import Authentication from './components/authentication/Authentication.jsx';
import Hotels from './components/hotels/Hotels.jsx';
import PlanDashboard from './components/plans/PlanDashboard.jsx'
import Locations from './components/locations/Locations.jsx';
import Flights from './components/flights/Flights.jsx'
import LocalCuisine from './components/localcuisine/LocalCuisine.jsx';
import Posts from './components/posts/Posts.jsx';
import Reviews from './components/reviews/Reviews.jsx';
function App() {
    return (
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Homepage />} />
                        <Route exact path="/userpage" element={<UserPage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/authenticate" element={<Authentication />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/hotels" element={<Hotels />} />
                        <Route path="/localcuisine" element={<LocalCuisine />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/plans" element={<PlanDashboard/>}/>
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/flights" element={<Flights />} />
                        <Route path="/reviews" element={<Reviews />} />
                    </Routes>
                </div>
            </Router>
    );
}

export default App
