import {
    Box,
    Flex,
    Spacer,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Icon,
    useDisclosure,
    Stack, Button, useColorModeValue, IconButton, Image, Collapse, Avatar, Text, Divider
} from '@chakra-ui/react';
import { FaAngleDown, FaUserCircle } from 'react-icons/fa';
import logo from "../../assets/odyssey-logo.png";
import { Link as RouterLink } from 'react-router-dom';
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";


const UnAuthenticatedNavbar = () => {

    const {isOpen, onToggle} = useDisclosure();

    const MobileNav = () => (
        <Stack
            bg={'#0E4975'}
            color={'white'}
            p={4}
            display={{base: 'block', md: 'block'}}
            spacing={4}
            align={'center'}
        >
            <RouterLink to="/"><Button w={'90%'} ml={'5%'} my={1}>Home</Button></RouterLink>
            <RouterLink to="/contact"><Button w={'90%'} ml={'5%'} my={1}>Contact Us</Button></RouterLink>
            <RouterLink to="/locations"><Button w={'90%'} ml={'5%'} my={1}>Destination</Button></RouterLink>
            <RouterLink to="/about-us"><Button w={'90%'} ml={'5%'} my={1}>About Us</Button></RouterLink>
            <RouterLink to="/bookmarks"><Button w={'90%'} ml={'5%'} my={1}>Bookmarks</Button></RouterLink>
            <RouterLink to="/local-cuisine"><Button w={'90%'} ml={'5%'} my={1}>Local Cuisine</Button></RouterLink>
            <RouterLink to="/posts"><Button w={'90%'} ml={'5%'} my={1}>Posts</Button></RouterLink>
            <RouterLink to="/recommendations"><Button w={'90%'} ml={'5%'} my={1}>Recommendations</Button></RouterLink>
        </Stack>
    );

    return (
        <Box>
            <Flex
                bg={'#0E4975'}
                color={'white'}
                bgGradient='linear(to-bl, #010101, #0E4975)'
                minH={'60px'}
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                fontSize={{base: 'sm', md: 'lg', lg: 'xl'}}
                align={'center'}>

                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{base: -2}}
                    display={{base: 'flex', md: 'none'}}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5} color={'white'}/>
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}} alignItems={'center'}>
                    <RouterLink to="/"><Link> <Image boxSize={'75px'} src={logo} alt="Logo"/></Link></RouterLink>
                    <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                        <RouterLink to="/"><Link mr="8" _hover={{
                            textDecoration: 'none',
                            opacity: '50%'
                        }}>Home</Link></RouterLink>
                        <RouterLink to="/contact"><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>Contact
                            Us</Link></RouterLink>
                        <RouterLink to="/locations"><Link mr="8" _hover={{
                            textDecoration: 'none',
                            opacity: '50%'
                        }}>Destinations</Link></RouterLink>
                        <RouterLink to="/about-us"><Link mr="8" _hover={{textDecoration: 'none', opacity: '50%'}}>About
                            Us</Link></RouterLink>
                        <Menu>
                            <MenuButton mr="4" pt={1} fontSize="lg"
                                        _hover={{textDecoration: 'none', opacity: '50%'}}>
                                More<Icon pt={2} as={FaAngleDown}/>
                            </MenuButton>
                            <MenuList bg="#0E4975" color="white" p={0}>
                                <RouterLink to="/local-cuisine">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' borderBottom="1px solid white" _hover={{ textDecoration: 'none', opacity: '50%' }}>
                                        Local Cuisine
                                    </MenuItem>
                                </RouterLink>
                                <RouterLink to="/recommendations">
                                    <MenuItem fontSize="lg" bg="#0E4975" bgGradient='linear(to-bl, #010101, #0E4975)' _hover={{ textDecoration: 'none', opacity: '50%' }}>
                                        Recommendations
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
                    <RouterLink to={'/authenticate'}>
                        <Button
                            display={{base: 'none', md: 'inline-flex'}}
                            fontSize={'sm'}
                            fontWeight={600}
                            color={'#0E4975'}
                            bg={'white'}
                            href={'#'}
                            _hover={{
                                bg: 'blue.300',
                            }}>
                            Log In
                        </Button>
                    </RouterLink>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>

        </Box>
    );

};

export default UnAuthenticatedNavbar;
