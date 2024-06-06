import {Box, Flex, Link, Text, Icon, Image} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/odyssey-logo.png";
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
    <Box bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' color="white" p="4">
        <Flex justify="space-between" align="center">

            <Image src={logo} alt="Logo" boxSize={'300px'}/>

            <Box ml="150px">
                <Text fontWeight="bold" mb="2" fontSize="lg">Odyssey</Text>
                <RouterLink to="/about-us"><Link _hover={{textDecoration: 'none', opacity: '50%'}}>About
                    Us</Link></RouterLink>
                <br/>
                <RouterLink to={'/hotels'}><Link
                    _hover={{textDecoration: 'none', opacity: '50%'}}>Hotels</Link></RouterLink>
                <br/>
                <RouterLink to={'/trips'}><Link
                    _hover={{textDecoration: 'none', opacity: '50%'}}>Trips</Link></RouterLink>
                <br/>
                <RouterLink to={'/activities'}><Link _hover={{textDecoration: 'none', opacity: '50%'}}>Activities</Link></RouterLink>
                <br/>
                <RouterLink to="/news"><Link _hover={{textDecoration: 'none', opacity: '50%'}}>News</Link></RouterLink>
            </Box>


            <Box>
                <Text fontWeight="bold" mb="2" fontSize="lg">Support</Text>
                <Link _hover={{textDecoration: 'none', opacity: '50%'}}>Privacy</Link>
                <br/>
                <Link _hover={{textDecoration: 'none', opacity: '50%'}}>Terms</Link>
                <br/>
                <Link _hover={{textDecoration: 'none', opacity: '50%'}}>info@odyssey.com</Link>
            </Box>

            <Box pr="20" align={'center'}>
                <Text fontWeight="bold" fontSize="lg" mb="2" align="center">Follow Us</Text>

                <Link _hover={{textDecoration: 'none', opacity: '50%'}}><Icon as={FaFacebook} boxSize={8}/></Link>
                <br/>
                <Link _hover={{textDecoration: 'none', opacity: '50%'}}><Icon as={FaTwitter} boxSize={8}/></Link>
                <br/>
                <Link _hover={{textDecoration: 'none', opacity: '50%'}}><Icon as={FaInstagram} boxSize={8}/></Link>
            </Box>
        </Flex>
        <br/> <br/>
        <Box h="3px" bg="white" />
                <Text fontWeight="bold" fontSize="lg" mb="2" mt="6" align="center">@ 2024 Odyssey Inc. All rights reserved</Text>
            </Box>
    );
};

export default Footer;