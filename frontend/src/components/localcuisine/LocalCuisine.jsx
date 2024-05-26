import React from 'react';

import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import { Box, Grid, Text, Button } from '@chakra-ui/react';
import logo from "../../assets/logo.png";
import aboutUsImage from "../../assets/events.jpeg";
import grillhouse from "../../assets/grillhouse.jpg";
import BoxWithImage from '../shared/BoxWithImage.jsx';

function LocalCuisine() {
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
                                image={grillhouse}
                                date="May 30, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prishtina, Restaurant Mr.Fisher"
                                description="Shijoni ushqimin tuaj në botën nënujore, vendi i vetëm i këtij lloji në rajon! Ju mirëpresim për një eksperiencë të pa harruar!
                                             Tel: +383 44 50 60 50"
                              />
                              <BoxWithImage
                                image={grillhouse}
                                date="June 1, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Peja, Restaurant Era"
                                description="Ushqime të gatuara me shumë dashuri dhe shije.
                                             Pamje fantastike e qytetit të Pejës.
                                             Për rezervime
                                             049-755-645 ose 049-490-008"
                              />
                        </Grid>
                        <Grid templateColumns="1fr 1fr" gap="4">
                              <BoxWithImage
                                image={grillhouse}
                                date="June 5, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prizreni, White House Restaurant"
                                description="The white house is an adorable place. The view of mountain, the fresh air, the food and the service are of the best"
                              />
                              <BoxWithImage
                                image={grillhouse}
                                date="June 10, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Gjakova, Grill House"
                                description="GRILL HOUSE Gjakovë me përvojë shumëvjeçare të kuzhinës, që nga viti 1965, ofron një shërbim
                                të pastër dhe me cilësi të lartë, ku ushqimi përgatitet çdo ditë i freskët."
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
                                image={grillhouse}
                                date="May 30, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prishtina, Restaurant Mr.Fisher"
                                description="Shijoni ushqimin tuaj në botën nënujore, vendi i vetëm i këtij lloji në rajon! Ju mirëpresim për një eksperiencë të pa harruar!
                                             Tel: +383 44 50 60 50"
                              />
                              <BoxWithImage
                                image={grillhouse}
                                date="June 1, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Peja, Restaurant Era"
                                description="Ushqime të gatuara me shumë dashuri dhe shije.
                                             Pamje fantastike e qytetit të Pejës.
                                             Për rezervime
                                             049-755-645 ose 049-490-008"
                              />
                        </Grid>
                        <Grid templateColumns="1fr 1fr" gap="4">
                              <BoxWithImage
                                image={grillhouse}
                                date="June 5, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Prizreni, White House Restaurant"
                                description="The white house is an adorable place. The view of mountain, the fresh air, the food and the service are of the best"
                              />
                              <BoxWithImage
                                image={grillhouse}
                                date="June 10, 2024"
                                time="9:00 AM to 24:00 PM"
                                title="Gjakova, Grill House"
                                description="GRILL HOUSE Gjakovë me përvojë shumëvjeçare të kuzhinës, që nga viti 1965, ofron një shërbim
                                të pastër dhe me cilësi të lartë, ku ushqimi përgatitet çdo ditë i freskët."
                              />
                        </Grid>
                </Grid>
           </Grid>
        <Footer />
    </div>
  );
}

export default LocalCuisine;