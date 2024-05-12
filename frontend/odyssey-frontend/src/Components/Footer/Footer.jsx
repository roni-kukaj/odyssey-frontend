import React from 'react';
import { Box, Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../Assets/logo2.png";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
    <Box bg="#0E4975" color="white" p="4">
                <Flex justify="space-between" align="center">
                    <Box ml="150px">
                        <Text fontWeight="bold" mb="2" fontSize="lg">Odyssey</Text>
                        <RouterLink to="aboutus"><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>About Us</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>Hotels</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>Trips</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>Activities</Link></RouterLink>
                        <br />
                        <RouterLink to="/news"><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>News</Link></RouterLink>
                    </Box>

                       <img src={logo} alt="Logo" style={{ width:'300px', height: '220px' }}/>

                    <Box>
                        <Text fontWeight="bold" mb="2" fontSize="lg">Odyssey</Text>
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>Privacy</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>Terms</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>info@odyssey.com</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>?</Link></RouterLink>
                        <br />
                        <RouterLink><Link _hover={{ textDecoration: 'none', opacity:'50%' }}>?</Link></RouterLink>
                    </Box>

                    <Box pr="20">
                        <Text fontWeight="bold" fontSize="lg" mb="2" align="center">Follow Us</Text>

                            <Link mr="4" mt="2" _hover={{ textDecoration: 'none', opacity:'50%' }}><Icon as={FaFacebook} boxSize={8} /></Link>
                            <br />
                            <Link mr="4" mt="5" _hover={{ textDecoration: 'none', opacity:'50%' }}><Icon as={FaTwitter} boxSize={8} /></Link>
                            <br />
                            <Link _hover={{ textDecoration: 'none', opacity:'50%' }}><Icon as={FaInstagram} boxSize={8} /></Link>
                    </Box>
                </Flex>
                 <br /> <br />
                <Box h="3px" bg="white" />
                <Text fontWeight="bold" fontSize="lg" mb="2" mt="6" align="center">@ 2024 Odyssey Company. All rights reserved</Text>
            </Box>
    );
};

export default Footer;
