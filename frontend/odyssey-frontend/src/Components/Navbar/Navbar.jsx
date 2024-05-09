import React from 'react';
import { Box, Flex, Spacer, Link, Heading, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex p="4" bg="#0E4975" color="white" fontSize="lg">
            <Box p="2">
                <img src="../Assets/odyssey-logo.png" alt="Logo" style={{ height: '50px' }} />
            </Box>
            <Spacer />
            <Box mr="400px" mt="2">
                <Link mr="8" fontSize="lg">Home</Link>
                <Link mr="8" fontSize="lg">Contact Us</Link>
                <Link mr="8" fontSize="lg">Destination</Link>
                <Link mr="8" fontSize="lg">About Us</Link>
                <Menu>
                    <MenuButton as={Link} mr="4" fontSize="lg">
                        Dropdown
                    </MenuButton>
                    <MenuList bg="#0E4975" color="white">
                        <MenuItem bg="#0E4975" color="white" fontSize="lg">Bookmarks</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem bg="#0E4975" color="white" fontSize="lg">Local Cuisine</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem bg="#0E4975" color="white" fontSize="lg">Posts</MenuItem>
                        <Box h="1px" bg="white" />
                        <MenuItem bg="#0E4975" color="white" fontSize="lg">Recommendations</MenuItem>
                        <Box h="1px" bg="white" />
                    </MenuList>
                </Menu>
            </Box>
                <Link mr="6" mt="2" fontSize="lg">Log In</Link>
        </Flex>
    );
};

export default Navbar;
