import React from 'react';
import './Homepage.css';

import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';


function Homepage() {
  return (
    <div>
      <Navbar />
        <Box p="4"
                backgroundImage="url('../Assets/odyssey-logo.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                minHeight="calc(100vh - 200px)"
        >

                    <Grid templateColumns="1fr 1fr" gap="4" alignItems="center">

                        <Box>
                            <Text fontSize="4xl" fontWeight="bold">Hotels</Text>
                            <Text fontSize="l" fontWeight="bold">Hotels are more than just a place to rest one's head they
                            are portals to new experiences, custodians of cherished memories and architects of unforgettable moment.
                            From the grandeur of historic landmarks to the chic elegance of boutique hideways, each hotel whispers
                             tales of travelers pas, present and future.</Text>
                            <Button mt="2" colorScheme="blue">Visit Hotels</Button>
                        </Box>

                        <Grid templateColumns="1fr 1fr" gap="4">
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src="/path/to/photo1.jpg" alt="Photo 1" />
                                    <Box p="4">
                                        <Text fontWeight="bold">Trips</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src="/path/to/photo2.jpg" alt="Photo 2" />
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
                                    <img src="/path/to/photo3.jpg" alt="Photo 3" />
                                    <Box p="4">
                                        <Text fontWeight="bold">Events</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src="/path/to/photo4.jpg" alt="Photo 4" />
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
                                    <img src="/path/to/photo5.jpg" alt="Photo 5" />
                                    <Box p="4">
                                        <Text fontWeight="bold">Flights</Text>
                                        <Button mt="2" colorScheme="blue">View</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                                    <img src="/path/to/photo6.jpg" alt="Photo 6" />
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
