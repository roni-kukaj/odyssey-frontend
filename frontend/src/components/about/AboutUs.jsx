import React from 'react';

import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import logo from "../../assets/logo.png";
import aboutUsImage from "../../assets/events.jpeg";
import BoxWithImage from '../shared/BoxWithImage.jsx';

function AboutUs() {
  return (
    <div>
        <Navbar />
            <Grid placeItems="center" minHeight="calc(100vh - 200px)" px="30px">
                <Grid  gap="4" alignItems="center">
                <Box>
                    <br/><br/>
                    <Text fontSize="6xl" fontWeight="bold" textAlign="center">We are Odyssey</Text>
                    <Text fontSize="xl" fontWeight="bold" textAlign="center">
                        Our mission is to help travelers by providing them with a platform <br/>to discover, explore, and
                        connect with the world's most unique destinations through authentic <br/>photos, genuine reviews,
                        and personalized recommendations.
                    </Text>
                </Box>
                <br/><br/><br/>
                </Grid>
                <Box width="100%" textAlign="center" my="4" bg="#0E4975">
                    <Text fontSize="7xl" fontWeight="bold" style={{ color: 'white' }} >Our Team</Text>
                </Box>
                <Grid templateColumns="repeat(3, 1fr)" gap="4" mt="4">
                    <BoxWithImage image={ aboutUsImage } title = "Dina Pirana" />
                    <BoxWithImage image={ aboutUsImage } title = "Lorena Mekaj" />
                    <BoxWithImage image={ aboutUsImage } title = "Blerta Krasniqi" />
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" gap="4" mt="4">
                    <BoxWithImage image={ aboutUsImage } title = "Getuar Kelmendi" />
                    <BoxWithImage image={ aboutUsImage } title = "Roni Kukaj" />
                </Grid>
            </Grid>
        <Footer />
    </div>
  );
}

export default AboutUs;