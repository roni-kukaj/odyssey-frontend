import {useEffect, useState} from 'react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {Box, Spinner, Center, Heading, SimpleGrid} from '@chakra-ui/react';
import {getEvents} from "../../services/client.js";
import EventCard from "./EventCard.jsx";

const Events = () => {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            fetchEvents()
        }, []
    );

    const fetchEvents = () => {
        setLoading(true);
        getEvents().then(res => {
            setEvents(res.data);
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
            <Center my={5} flex={1}><Heading>Attend our most attractive Events</Heading></Center>
            <SimpleGrid columns={4} mx={10}>
                {events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </SimpleGrid>
            <Footer />
        </Box>
    );
}

export default Events;