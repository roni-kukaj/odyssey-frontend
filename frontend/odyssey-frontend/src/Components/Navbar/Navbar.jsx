import React from 'react';
import { Box, Flex, Spacer, Link, Heading, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa'; // Import the desired icon
import logo from "../Assets/logo.png";

const Navbar = () => {
    return (
        <Flex p="4" bg="#0E4975" color="white" fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
            <Box p="2" pl="16">
              <Link>  <img src={logo} alt="Logo" style={{ height: '50px' }} /></Link>
            </Box>
            <Spacer />
            <Box mr={{ base: '0', md: '400px' }} mt={{ base: '4', md: '0' }} display={{ base: 'none', md: 'block' }}>
                <Link mr="8" _hover={{ textDecoration: 'none', opacity:'50%' }}>Home</Link>
                <Link mr="8" _hover={{ textDecoration: 'none', opacity:'50%' }}>Contact Us</Link>
                <Link mr="8" _hover={{ textDecoration: 'none', opacity:'50%' }}>Destination</Link>
                <Link mr="8" _hover={{ textDecoration: 'none', opacity:'50%' }}>About Us</Link>
                <Menu>
                    <MenuButton as={Link} mr="4" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none', opacity:'50%' }}>
                        <Icon as={FaAngleDown} />
                    </MenuButton>
                    <MenuList bg="#0E4975" color="white">
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity:'50%' }}>Bookmarks</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity:'50%' }}>Local Cuisine</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity:'50%' }}>Posts</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity:'50%' }}>Recommendations</MenuItem>
                        <Box h="1px" bg="white" />
                    </MenuList>
                </Menu>
            </Box>
            <Link mr={{ base: '0', md: '6' }} mt={{ base: '2', md: '0' }} pr="10" _hover={{ textDecoration: 'none', opacity:'50%' }}>Log In</Link>
        </Flex>
    );
};

export default Navbar;
