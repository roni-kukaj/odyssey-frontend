import React from 'react';

import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react'; // Adjust imports as needed
import logo from "../Assets/odyssey-logo.png";
import aboutUsImage from "../Assets/Events.jpg";
import cardImage1 from "../Assets/Events.jpg";
import cardImage2 from "../Assets/Events.jpg";
import cardImage3 from "../Assets/Events.jpg";
import cardImage4 from "../Assets/Events.jpg";
import cardImage5 from "../Assets/Events.jpg";

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
          <Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img src={cardImage1} alt="Card 1" style={{ width:'300px', height: '330px' }} />
              <Box p="4">
                <Text fontWeight="bold" textAlign="center" fontSize="xl">Dina Pirana</Text>
              </Box>
            </Box>
          </Box>
          <Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img src={cardImage2} alt="Card 2" style={{ width:'300px', height: '330px' }} />
              <Box p="4">
                <Text fontWeight="bold" textAlign="center" fontSize="xl">Lorena Mekaj</Text>
              </Box>
            </Box>
          </Box>
          <Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img src={cardImage3} alt="Card 3"style={{ width:'300px', height: '330px' }} />
              <Box p="4">
                <Text fontWeight="bold" textAlign="center" fontSize="xl">Blerta Krasniqi</Text>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap="4" mt="4">
          <Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img src={cardImage4} alt="Card 4" style={{ width:'300px', height: '330px' }} />
              <Box p="4">
                <Text fontWeight="bold" textAlign="center" fontSize="xl">Getuar Kelmendi</Text>
              </Box>
            </Box>
          </Box>
          <Box>

            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <img src={cardImage5} alt="Card 5" style={{ width:'300px', height: '330px' }} />
              <Box p="4">
                <Text fontWeight="bold" textAlign="center" fontSize="xl">Roni Kukaj</Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default AboutUs;
