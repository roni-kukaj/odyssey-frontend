import React from 'react';
import { Box, Flex, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { FaAngleDown, FaUserCircle } from 'react-icons/fa';
import logo from "../../assets/odyssey-logo.png";
import { Link as RouterLink } from 'react-router-dom';


const UserNavbar = () => {
    return (
        <Flex p="4" bg="#0E4975" color="white" fontSize={{ base: 'sm', md: 'lg', lg: 'xl' }} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
            <Box p="2" pl="16">
                <RouterLink to="/"><Link>  <img src={logo} alt="Logo" style={{ height: '50px' }} /></Link></RouterLink>
            </Box>
            <Spacer />
            <Box mr={{ base: '0', md: '400px' }} mt={{ base: '4', md: '0' }} display={{ base: 'none', md: 'block' }}>
                <RouterLink to="/"><Link mr="8" _hover={{ textDecoration: 'none', opacity: '50%' }}>Home</Link></RouterLink>
                <RouterLink to="/contact"><Link mr="8" _hover={{ textDecoration: 'none', opacity: '50%' }}>Contact Us</Link></RouterLink>
                <RouterLink><Link mr="8" _hover={{ textDecoration: 'none', opacity: '50%' }}>Destination</Link></RouterLink>
                <RouterLink to="/about-us"><Link mr="8" _hover={{ textDecoration: 'none', opacity: '50%' }}>About Us</Link></RouterLink>
                <Link mr="8" _hover={{ textDecoration: 'none', opacity: '50%' }}>Explore Users</Link>
                <Menu>
                    <MenuButton as={Link} mr="4" fontSize="lg" fontWeight="bold" _hover={{ textDecoration: 'none', opacity: '50%' }}>
                        <Icon as={FaAngleDown} />
                    </MenuButton>
                    <MenuList bg="#0E4975" color="white">
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Bookmarks</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Local Cuisine</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Posts</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Recommendations</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Reviews</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Menu>
                <MenuButton as={Link} display="flex" alignItems="center" _hover={{ textDecoration: 'none', opacity: '50%' }} pr="10">
                    <Icon as={FaUserCircle} w={6} h={6} />
                    <Icon as={FaAngleDown} ml="2" />
                </MenuButton>
                <MenuList bg="#0E4975" color="white">
                    <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>My Friends</MenuItem>
                    <Box h="1px" bg="white" />
                    <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Posts</MenuItem>
                    <Box h="1px" bg="white" />
                    <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>My Plans</MenuItem>
                    <Box h="1px" bg="white" />
                    <MenuItem fontSize="lg" bg="#0E4975" _hover={{ textDecoration: 'none', opacity: '50%' }}>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default UserNavbar;
