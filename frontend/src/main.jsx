import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, createStandaloneToast} from '@chakra-ui/react'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./components/homepage/Homepage.jsx";
import Profile from "./components/profile/Profile.jsx";
import AboutUs from "./components/about/AboutUs.jsx";
import Contact from "./components/contact/Contact.jsx";
import Authentication from "./components/authentication/Authentication.jsx";
import News from "./components/news/News.jsx";
import Hotels from "./components/hotels/Hotels.jsx";
import LocalCuisine from "./components/localcuisine/LocalCuisine.jsx";
import Posts from "./components/posts/Posts.jsx";
import Plans from "./components/plans/Plans.jsx";
import Locations from "./components/locations/Locations.jsx";
import Flights from "./components/flights/Flights.jsx";
import Events from "./components/events/Events.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
import Activities from "./components/activities/Activities.jsx";
import Trips from "./components/trips/Trips.jsx";
import AuthProvider from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import Recommendations from "./components/recommendations/Recommendations.jsx";
import TripPlanner from "./components/trips/TripPlanner.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/authenticate", element: <Authentication /> },
    { path: "/news", element: <News /> },
    { path: "/hotels", element: <Hotels /> },
    { path: "/locations", element: <Locations /> },
    { path: "/flights", element: <Flights /> },
    { path: "/events", element: <Events /> },
    { path: "/reviews", element: <ProtectedRoute><Reviews /></ProtectedRoute> },
    { path: "/local-cuisine", element: <LocalCuisine /> },
    { path: "/posts", element: <ProtectedRoute><Posts /></ProtectedRoute> },
    { path: "/plans", element: <ProtectedRoute><Plans /></ProtectedRoute> },
    { path: "/activities", element: <Activities /> },
    { path: "/trips", element: <ProtectedRoute><Trips /></ProtectedRoute> },
    { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
    { path: "/recommendations", element: <ProtectedRoute><Recommendations /></ProtectedRoute> },
    { path: "/trip-planner", element: <ProtectedRoute><TripPlanner /></ProtectedRoute> },
]);

const { ToastContainer } = createStandaloneToast();

ReactDOM  
      .createRoot(document.getElementById('root'))
      .render(
          <React.StrictMode>
              <ChakraProvider>
                  <AuthProvider>
                      <RouterProvider router={router} />
                  </AuthProvider>
                  <ToastContainer />
              </ChakraProvider>
          </React.StrictMode>,
      )
