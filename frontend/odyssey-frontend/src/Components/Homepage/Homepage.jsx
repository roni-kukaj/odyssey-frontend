import React from 'react';
import "./Homepage.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Functional component representing the home page
function Homepage() {
  return (
    <div>
    <Navbar />
      <h1>Welcome to My Website</h1>
      <p>This is the home page of my website.</p>
      <p>Feel free to explore!</p>
    <Footer />
    </div>

  );
}

export default Homepage;
