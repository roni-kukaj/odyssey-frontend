import React from 'react';
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
    <Box bg="#0E4975" color="white" p="4">
                <Flex justify="space-between" align="center">
                    <Box ml="150px">
                        <Text fontWeight="bold" mb="2" fontSize="lg">Odyssey</Text>
                        <Link>About Us</Link>
                        <br />
                        <Link>Hotels</Link>
                        <br />
                        <Link>Trips</Link>
                        <br />
                        <Link>Activities</Link>
                        <br />
                        <Link>News</Link>
                    </Box>

                       <img src="../Assets/odyssey-logo.png" alt="Logo" style={{ height: '100px' }} />

                    <Box>
                        <Text fontWeight="bold" mb="2" fontSize="lg">Odyssey</Text>
                        <Link>About Us</Link>
                        <br />
                        <Link>Hotels</Link>
                        <br />
                        <Link>Trips</Link>
                        <br />
                        <Link>Activities</Link>
                        <br />
                        <Link>News</Link>
                    </Box>

                    <Box>
                        <Text fontWeight="bold" fontSize="lg" mb="2" align="center">Follow Us</Text>

                            <Link mr="4" mt="2"><Icon as={FaFacebook} boxSize={8} /></Link>
                            <br />
                            <Link mr="4" mt="5"><Icon as={FaTwitter} boxSize={8} /></Link>
                            <br />
                            <Link><Icon as={FaInstagram} boxSize={8} /></Link>
                    </Box>
                </Flex>
                 <br /> <br />
                <Box h="3px" bg="white" />
                <Text fontWeight="bold" fontSize="lg" mb="2" mt="6" align="center">@ 2024 Odyssey Company. All rights reserved</Text>
            </Box>
    );
};

export default Footer;
