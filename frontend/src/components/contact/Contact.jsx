import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import {Grid, Box, Text, Heading,VStack,FormControl,FormLabel,Input,Textarea,Button} from '@chakra-ui/react'; // Adjust imports as needed


function Contact() {
    return (
        <div>
            <Navbar />
                <Grid bg="#fff" h="2px" ></Grid>
                <Grid  bg="#0E4975">
                    <Box>
                        <Text fontSize="6xl" fontWeight="bold" textAlign="center" style={{ color: 'white' }} letterSpacing="30px"> Odyssey</Text>
                    </Box>
                </Grid>
                <Grid>
                    <Box>
                        <Text fontSize="5xl" fontWeight="bold" textAlign="center" style={{ color: '#0E4975' }}>Contact Us</Text>
                    </Box>
                </Grid>
                <Grid placeItems="center"  bg="#0E4975" >
                    <Box mt="30px" mb="30px" w="450px">
                        <VStack spacing={4}>
                        <Grid templateColumns="repeat(2, 1fr)" gap="5">
                            <FormControl >
                                <FormLabel style={{ color: 'white' }} >First Name</FormLabel>
                                <Input placeholder='First Name' bg="#fff"/>
                            </FormControl>
                            <FormControl >
                                <FormLabel style={{ color: 'white' }}>Last Name</FormLabel>
                                <Input placeholder='Last Name' bg="#fff"/>
                            </FormControl>
                        </Grid>
                            <FormControl >
                                <FormLabel style={{ color: 'white' }}>Email Address</FormLabel>
                                <Input  type='email' placeholder='Email Address' bg="#fff"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel style={{ color: 'white' }}>Phone Number</FormLabel>
                                <Input placeholder='Phone Number' bg="#fff" />
                            </FormControl>
                            <FormControl >
                                <FormLabel style={{ color: 'white' }}>Reason for contacting us</FormLabel>
                                <Textarea placeholder='Reason for contacting us...' bg="#fff"/>
                            </FormControl>
                            <Button bg="#fff" w="200px">
                                Contact Us
                            </Button>
                        </VStack>
                    </Box>
                </Grid>
                <Grid bg="#fff" h="2px" ></Grid>
            <Footer />
        </div>
      );
}

export default Contact;