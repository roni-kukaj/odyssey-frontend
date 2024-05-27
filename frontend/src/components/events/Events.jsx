import React from 'react';

import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import logo from "../../assets/logo.png";
import aboutUsImage from "../../assets/events.jpeg";
import events from "../../assets/events.jpeg";
import BoxWithImage from '../shared/BoxWithImage.jsx';

function Events() {
  return (
    <div>
        <Navbar />
           <Grid placeItems="center" minHeight="calc(100vh - 200px)" px="30px">
                   <br/>
                   <Box width="100%" textAlign="center" my="4" bg="#0E4975">
                       <Text fontSize="7xl" fontWeight="bold" style={{ color: 'white' }} >Kosova</Text>
                   </Box>
                <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                        <Grid templateColumns="1fr 1fr" gap="4">
                              <BoxWithImage
                                image={events}
                                date="May 30, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prishtina Event"
                                description="Prishtina event......"
                              />
                              <BoxWithImage
                                image={events}
                                date="June 1, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Peja Event"
                                description="Prishtina event......"
                              />
                        </Grid>
                        <Grid templateColumns="1fr 1fr" gap="4">
                              <BoxWithImage
                                image={events}
                                date="June 5, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prizreni Event"
                                description="Prishtina event......"
                              />
                              <BoxWithImage
                                image={events}
                                date="June 10, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Gjakova Event"
                                description="Prishtina event......"
                              />
                        </Grid>
                </Grid>

                <br/>
               <Box width="100%" textAlign="center" my="4" bg="#0E4975">
                   <Text fontSize="7xl" fontWeight="bold" style={{ color: 'white' }} >Italy</Text>
               </Box>

                <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                        <Grid templateColumns="1fr 1fr" gap="4">
                              <BoxWithImage
                                image={events}
                                date="May 30, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prishtina Event"
                                description="Prishtina event......"
                              />
                              <BoxWithImage
                                image={events}
                                date="June 1, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Peja Event"
                                description="Prishtina event......"
                              />
                        </Grid>
                        <Grid templateColumns="1fr 1fr" gap="4">
                              <BoxWithImage
                                image={events}
                                date="June 5, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prizreni Event"
                                description="Prishtina event......"
                              />
                              <BoxWithImage
                                image={events}
                                date="June 10, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Gjakova Event"
                                description="Prishtina event......"
                              />
                        </Grid>
                </Grid>
           </Grid>
        <Footer />
    </div>
  );
}

export default Events;