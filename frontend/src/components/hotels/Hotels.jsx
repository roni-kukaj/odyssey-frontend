import { useState, useEffect } from 'react';
import {
    Box,
    Heading, SimpleGrid, Spinner
} from '@chakra-ui/react';
import { getHotels } from '../../services/client.js';
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import HotelCard from "./HotelCard.jsx";

const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = () => {
        setLoading(true);
        getHotels().then(res => {
            setHotels(res.data);
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
                <Heading as="h1" my={5} textAlign="center">Our Hotels</Heading>
                <SimpleGrid columns={4} mx={10}>
                    {hotels.map(hotel => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                </SimpleGrid>
            </Box>
            <Footer />
        </Box>
    );
}

export default Hotels;
