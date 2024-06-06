import {useEffect, useState} from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import {
    Box, Heading, Spinner, SimpleGrid
} from '@chakra-ui/react';
import {getFlights} from "../../services/client.js";
import FlightCard from "./FlightCard.jsx";

const Flights = () => {

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFlights();
    }, []);

    const fetchFlights = () => {
        setLoading(true);
        getFlights().then(res => {
            setFlights(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} display="flex" flexDirection="column">
            <Navbar />
            <Box p="4" flex={1}>
                <Heading as="h1" my={5} textAlign="center">Available Flights</Heading>
                <SimpleGrid columns={4} mx={10}>
                    {flights.map(flight => (
                        <FlightCard flight={flight} />
                    ))}
                </SimpleGrid>
            </Box>
            <Footer />
        </Box>
    );
}

export default Flights;
