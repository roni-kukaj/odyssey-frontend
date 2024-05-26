import React from 'react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import logo from "../../assets/logo.png";
import peja from "../../assets/peja.jpeg";
import prishtina from "../../assets/prishtina.jpg";
import prizreni from "../../assets/prizreni.jpg";
import gjakova from "../../assets/gjakova.jpg";

import BoxWithImageAndButton from '../shared/BoxWithImageAndButton.jsx';

function Locations() {
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
                        <BoxWithImageAndButton image={prishtina} title={'Prishtina'} buttonText={'Favorite'} />
                        <BoxWithImageAndButton image={peja} title={'Peja'} buttonText={'Favorite'} />
                    </Grid>
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={[prizreni]} title={'Prizreni'} buttonText={'Favorite'} />
                        <BoxWithImageAndButton image={gjakova} title={'Gjakova'} buttonText={'Favorite'} />
                    </Grid>
                </Grid>

                <br/>
                <Box width="100%" textAlign="center" my="4" bg="#0E4975">
                    <Text fontSize="7xl" fontWeight="bold" style={{ color: 'white' }} >Italy</Text>
                </Box>

                <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={prishtina} title={'Prishtina'} buttonText={'Favorite'} />
                        <BoxWithImageAndButton image={peja} title={'Peja'} buttonText={'Favorite'} />
                    </Grid>
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={[prizreni]} title={'Prizreni'} buttonText={'Favorite'} />
                        <BoxWithImageAndButton image={gjakova} title={'Gjakova'} buttonText={'Favorite'} />
                    </Grid>
                </Grid>

                <br/>
                <Box width="100%" textAlign="center" my="4" bg="#0E4975">
                    <Text fontSize="7xl" fontWeight="bold" style={{ color: 'white' }} >France</Text>
                </Box>

                <Grid templateColumns="1fr 1fr" gap="4" mt="4">
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={prishtina} title={'Prishtina'} buttonText={'Favorite'} />
                        <BoxWithImageAndButton image={peja} title={'Peja'} buttonText={'Favorite'} />
                    </Grid>
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={[prizreni]} title={'Prizreni'} buttonText={'Favorite'} />
                        <BoxWithImageAndButton image={gjakova} title={'Gjakova'} buttonText={'Favorite'} />
                    </Grid>
                </Grid>

            </Grid>
        <Footer />
    </div>
  );
}

export default Locations;