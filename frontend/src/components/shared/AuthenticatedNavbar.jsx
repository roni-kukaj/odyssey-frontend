import {Link as RouterLink} from "react-router-dom";
import logo from "../../assets/odyssey-logo.png";
import {FaAngleDown} from "react-icons/fa";
import {
    Flex,
    Link,
    useColorModeValue,
    Image,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    Box,
    Stack,
    Divider,
    Icon,
    Avatar, Button
} from "@chakra-ui/react";
import {useAuth} from "../context/AuthContext.jsx";

const AuthenticatedNavbar = () => {

    const {logOut, user} = useAuth();

    const handleClick = () => {
        logOut();
    }

    return (
        <Box>
            <Flex
                bg={'#0E4975'}
                bgGradient='linear(to-bl, #010101, #0E4975)'
                color={'white'}
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                fontSize={{base: 'sm', md: 'lg', lg: 'xl'}}
                align={'center'}>

                <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}} alignItems={'center'}>
                    <RouterLink to="/"><Link> <Image boxSize={'75px'} src={logo} alt="Logo"/></Link></RouterLink>
                    <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                        <RouterLink to="/"><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Home</Link></RouterLink>
                        <RouterLink to={"/trips"}><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Trips</Link></RouterLink>
                        <RouterLink to={"/posts"}><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Posts</Link></RouterLink>
                        <RouterLink to={"/reviews"}><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Reviews</Link></RouterLink>
                        <RouterLink to={"/plans"}><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Plans</Link></RouterLink>
                        <RouterLink to={"/locations"}><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Locations</Link></RouterLink>
                        <Menu>
                            <MenuButton mr="4" pt={1} fontSize="lg"
                                        _hover={{textDecoration: 'none', opacity: '50%'}}>
                                More<Icon pt={2} as={FaAngleDown}/>
                            </MenuButton>
                            <MenuList p={0}>
                                <RouterLink to="/contact">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Contact Us
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/local-cuisine">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Local Cuisine
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/recommendations">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Recommendations
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/events">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Events
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/activities">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Activities
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/flights">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Flights
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/hotels">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                        Hotels
                                    </MenuItem>
                                </RouterLink>

                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                <Stack
                    flex={{base: 1, md: 0}}
                    justify={'flex-end'}
                    spacing={6}>
                    <Menu>
                        <MenuButton fontSize="lg" fontWeight="bold"
                                    _hover={{textDecoration: 'none', opacity: '50%'}}>
                            <Avatar src={user?.avatar}></Avatar>

                        </MenuButton>
                        <MenuList p={0}>
                            <RouterLink to="/profile">
                                <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                    Profile
                                </MenuItem>
                            </RouterLink>
                            <RouterLink to="/news">
                                <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                    News
                                </MenuItem>
                            </RouterLink>
                            <Divider />
                            <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{textDecoration: 'none', opacity: '50%'}}>
                                <Button colorScheme='0E4975' w={'100%'} onClick={handleClick}>Sign Out</Button>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </Box>
    );
}

export default AuthenticatedNavbar;