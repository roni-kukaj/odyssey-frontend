import React from 'react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {
    Box,
    Grid,
    Text,
    Button,
    Container,
    Stack,
    Heading,
    chakra,
    Stat,
    StatLabel, StatNumber, SimpleGrid, Divider
} from '@chakra-ui/react';
import activities from "../../assets/activities.jpeg";
import events from "../../assets/events.jpeg";
import flights from "../../assets/flights.jpeg";
import news from "../../assets/news.jpeg";
import BoxWithImageAndButton from '../shared/BoxWithImageAndButton.jsx';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";
import picture from "../../assets/main_bg.png";

function Homepage() {
    const navigate = useNavigate();
    const { isUserAuthenticated } = useAuth();

    const handleClick = () => {
        if (isUserAuthenticated()) {
            navigate("/locations");
        }
        else {
            navigate("/authenticate");
        }
    }

    const StatsCard = (props) => {
        const { title, stat } = props;
        return (
            <Stat
                px={{ base: 4, md: 8 }}
                py={'5'}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={'#0E4975'}
                rounded={'lg'}>
                <StatLabel fontWeight={'medium'} isTruncated>
                    {title}
                </StatLabel>
                <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                    {stat}
                </StatNumber>
            </Stat>
        );
    }

    return (
        <>
            <Navbar />
            <Box w={'100%'} bgImg={picture} backgroundSize="cover" backgroundRepeat={'no-repeat'}>
                <Container maxW="5xl">
                    <Stack
                        textAlign="center"
                        align="center"
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}
                    >
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight="110%"
                        >
                            Itinerary planning{' '}
                            <Text as="span" color="white" textShadow="0.5px 0.5px 1px black, -0.5px -0.5px 1px black, 0.5px -0.5px 1px black, -0.5px 0.5px 1px black">
                                made easy
                            </Text>
                        </Heading>
                        <Text color="black" maxW="3xl" textShadow="0.5px 0.5px 1px white, -0.5px -0.5px 1px black, 0.5px -0.5px 1px white, -0.5px 0.5px 1px black">
                            Plan your perfect getaway with our expert tips and personalized recommendations,
                            ensuring you experience the best each location has to offer. From breathtaking landscapes to vibrant cityscapes,
                            discover hidden gems and must-see attractions with our curated travel itineraries.
                        </Text>
                        <Stack spacing={6} direction="row">
                            <Button
                                rounded="full"
                                px={6}
                                colorScheme="blue"
                                bg="#0E4975"
                                bgGradient="linear(to-bl, #010101, #0E4975)"
                                _hover={{ bg: 'blue.500' }}
                                onClick={handleClick}
                            >
                                Get started
                            </Button>
                            <Button rounded="full" px={6}>
                                Learn more
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Box maxW="7xl" mx={'auto'} pt={5} mb={10} px={{ base: 2, sm: 12, md: 17 }}>
                <chakra.h1
                    textAlign={'center'}
                    fontSize={'4xl'}
                    py={10}
                    fontWeight={'bold'}>
                    What is our company doing?
                </chakra.h1>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                    <StatsCard title={'We serve'} stat={'50,000 people'} />
                    <StatsCard title={'In'} stat={'30 different countries'} />
                    <StatsCard title={'Who speak'} stat={'100 different languages'} />
                </SimpleGrid>
            </Box>
            <Divider />
            <Box p="4" px={{ base: '4', md: '90px' }} my="5">
                <Grid templateColumns="1fr 1fr" gap="4" alignItems="center">
                    <Box>
                        <Text fontSize="4xl" fontWeight="bold">Hotels</Text>
                        <Text fontSize="l" fontWeight="bold" textAlign="justify">Hotels are more than just a place to rest one's head they
                        are portals to new experiences, custodians of cherished memories and architects of unforgettable moment.
                        From the grandeur of historic landmarks to the chic elegance of boutique hideways, each hotel whispers
                        tales of travelers pas, present and future.</Text>
                        <Button mt="2" colorScheme="blue" width="50%" onClick={() => navigate("/hotels")}>Visit Hotels</Button>
                    </Box>
                </Grid>
                <Grid templateColumns="1fr 1fr" gap="4" mt="5">
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={events} title={'Events'} />
                        <BoxWithImageAndButton image={activities} title={'Activities'} />
                    </Grid>
                    <Grid templateColumns="1fr 1fr" gap="4">
                        <BoxWithImageAndButton image={flights} title={'Flights'} />
                        <BoxWithImageAndButton image={news} title={'News'} />
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    );
  }

  export default Homepage;