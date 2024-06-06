import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {
    Box,
    Grid,
    Text,
    Stack,
    Container,
    SimpleGrid,
    StackDivider,
    Flex,
    Image,
    useColorModeValue, Heading, Icon, Divider
} from '@chakra-ui/react';
import aboutUsImage from "../../assets/events.jpeg";
import BoxWithImage from '../shared/BoxWithImage.jsx';
import {IoLocationOutline} from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import {IoLogoBitcoin} from "react-icons/io";

function AboutUs() {

    const Feature = ({ text, icon, iconBg }) => {
        return (
            <Stack direction={'row'} align={'center'}>
                <Flex
                    w={8}
                    h={8}
                    align={'center'}
                    justify={'center'}
                    rounded={'full'}
                    bg={iconBg}>
                    {icon}
                </Flex>
                <Text fontWeight={600}>{text}</Text>
            </Stack>
        );
    };

  return (
    <div>
        <Navbar />
            <Grid placeItems="center" minHeight="calc(100vh - 200px)" px="30px">
                <Container maxW={'5xl'} py={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Stack spacing={4}>
                            <Text
                                textTransform={'uppercase'}
                                color={'blue.400'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={useColorModeValue('blue.50', 'blue.900')}
                                p={2}
                                alignSelf={'flex-start'}
                                rounded={'md'}>

                            </Text>
                            <Heading>A Travel Planning Platform</Heading>
                            <Text color={'gray.500'} fontSize={'lg'}>
                                You travel, we plan
                            </Text>
                            <Stack
                                spacing={4}
                                divider={
                                    <StackDivider
                                        borderColor={useColorModeValue('gray.100', 'gray.700')}
                                    />
                                }>
                                <Feature
                                    icon={
                                        <Icon as={IoLocationOutline} color={'yellow.500'} w={5} h={5} />
                                    }
                                    iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                                    text={'Attractive Locations'}
                                />
                                <Feature
                                    icon={<Icon as={MdEventAvailable} color={'black.500'} w={5} h={5} />}
                                    iconBg={useColorModeValue('purple.100', 'purple.900')}
                                    text={'Best Events'}
                                />
                                <Feature
                                    icon={
                                        <Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />
                                    }
                                    iconBg={useColorModeValue('pink.100', 'purple.900')}
                                    text={'Cheapest Offers'}
                                />
                            </Stack>
                        </Stack>
                        <Flex>
                            <Image
                                rounded={'md'}
                                alt={'feature image'}
                                src={
                                    'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                                }
                                objectFit={'cover'}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
                <Divider />
                <Box width="100%" textAlign="center" my="4">
                    <Text fontSize="4xl" mt={4} fontWeight="bold" >Our Team</Text>
                </Box>
                <Grid templateColumns="repeat(3, 1fr)" gap="4" mt="4">
                    <BoxWithImage image={ aboutUsImage } mx={5} title = "Dina Pirana" />
                    <BoxWithImage image={ aboutUsImage } mx={5} title = "Lorena Mekaj" />
                    <BoxWithImage image={ aboutUsImage } mx={5} title = "Blerta Krasniqi" />
                </Grid>
                <Grid templateColumns="repeat(2, 1fr)" gap="4" mt="4" mb={5}>
                    <BoxWithImage image={ aboutUsImage } mx={5} title = "Getuar Kelmendi" />
                    <BoxWithImage image={ aboutUsImage } mx={5} title = "Roni Kukaj" />
                </Grid>
            </Grid>
        <Footer />
    </div>
  );
}

export default AboutUs;