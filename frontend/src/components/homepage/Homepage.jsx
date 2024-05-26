import React from 'react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import logo from "../../assets/odyssey-logo.png";
import trips from "../../assets/trips.jpeg";
import activities from "../../assets/activities.jpeg";
import events from "../../assets/events.jpeg";
import reviews from "../../assets/reviews.jpeg";
import flights from "../../assets/flights.jpeg";
import news from "../../assets/news.jpeg";
import BoxWithImageAndButton from '../shared/BoxWithImageAndButton.jsx';

function Homepage() {
    return (
      <div>
        <Navbar />

            <Box p="4" px={{ base: '4', md: '90px' }} mt="3">
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
                        <BoxWithImageAndButton image={trips} title={'Trips'} buttonText={'View'} />
                        <BoxWithImageAndButton image={activities} title={'Activities'} buttonText={'View'} />
                    </Grid>
                </Grid>
                <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={events} title={'Events'} buttonText={'View'} />
                        <BoxWithImageAndButton image={reviews} title={'Reviews'} buttonText={'View'} />
                    </Grid>
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={flights} title={'Flights'} buttonText={'View'} />
                        <BoxWithImageAndButton image={news} title={'News'} buttonText={'View'} />
                    </Grid>
                </Grid>
            </Box>

        <Footer />
      </div>
    );
  }

  export default Homepage;