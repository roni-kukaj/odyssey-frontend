import React from 'react';
import './Homepage.css';

import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import logo from "../Assets/odyssey-logo.png";
import trips from "../Assets/Trips.jpg";
import activities from "../Assets/Activities.jpg";
import events from "../Assets/Events.jpg";
import reviews from "../Assets/Reviews.jpg";
import flights from "../Assets/Flights.jpg";
import news from "../Assets/News.jpg";

function Homepage() {
  return (
    <div>
      <Navbar />
        <Box p="4"
            sx={{
                backgroundImage: 'url(${logo})',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 'calc(100vh-200px)',
               }}
            px={{ base: '4', md: '90px' }}
        >

                    <Grid templateColumns="1fr 1fr" gap="4" alignItems="center">

                        <Box>
                            <Text fontSize="4xl" fontWeight="bold">Hotels</Text>
                            <Text fontSize="l" fontWeight="bold" textAlign="justify">Hotels are more than just a place to rest one's head they
                            are portals to new experiences, custodians of cherished memories and architects of unforgettable moment.
                            From the grandeur of historic landmarks to the chic elegance of boutique hideways, each hotel whispers
                             tales of travelers pas, present and future.</Text>
                            <Button mt="2" colorScheme="blue" width="50%">Visit Hotels</Button>
                        </Box>

                        <Grid templateColumns="1fr 1fr" gap="4">
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src={trips} alt="Photo 1" style={{ width:'300px', height: '330px' }}/>
                                    <Box p="4">
                                        <Text fontWeight="bold">Trips</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src={activities} alt="Photo 1" style={{ width:'300px', height: '330px' }}/>
                                    <Box p="4">
                                        <Text fontWeight="bold">Activities</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                    <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                        <Grid templateColumns="1fr 1fr" gap="4">
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src={events} alt="Photo 1" style={{ width:'300px', height: '330px' }}/>
                                    <Box p="4">
                                        <Text fontWeight="bold">Events</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src={reviews} alt="Photo 1" style={{ width:'300px', height: '330px' }}/>
                                    <Box p="4">
                                        <Text fontWeight="bold">Reviews</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid templateColumns="1fr 1fr" gap="4">
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src={flights} alt="Photo 1" style={{ width:'300px', height: '330px' }}/>
                                    <Box p="4">
                                        <Text fontWeight="bold">Flights</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src={news} alt="Photo 1" style={{ width:'300px', height: '330px' }}/>
                                    <Box p="4">
                                        <Text fontWeight="bold">News</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
      <Footer />
    </div>
  );
}

export default Homepage;
