import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import {
    Box, Heading, Grid, Image, Text, Button, Stack
} from '@chakra-ui/react';

const flights = [
    {
        name: "American Airlines",
        origin: "New York",
        destination: "London",
        agencyImage: "https://media.npr.org/assets/img/2021/06/22/ap_21159776567541-1079d192254e2e22424066eb5a4173427cd1db29.jpg"
    },
    {
        name: "Emirates",
        origin: "Pekin",
        destination: "Dubai",
        agencyImage: "https://content.presspage.com/uploads/2431/1920_1tw-2.jpg?10000"
    },
    {
        name: "United Airlines",
        origin: "Amsterdam",
        destination: "Dubrovnik",
        agencyImage: "https://upload.wikimedia.org/wikipedia/commons/9/91/N24976%40PEK_%2820200421150836%29.jpg"
    },
    {
        name: "Pegasus Airlines",
        origin: "Sydney",
        destination: "Tokyo",
        agencyImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hannover_Airport_Pegasus_Airlines_Airbus_A320-251N_TC-NCN_%28DSC05253%29.jpg/1200px-Hannover_Airport_Pegasus_Airlines_Airbus_A320-251N_TC-NCN_%28DSC05253%29.jpg"
    }
];

const FlightDashboard = () => {
    const [reservations, setReservations] = useState([]);

    const handleReserveClick = (flight) => {
        setReservations([...reservations, flight]);
    };

    const handleDeleteClick = (index) => {
        setReservations(reservations.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Navbar />
            <Box p="4">
                <Heading as="h1" mb="4" textAlign="center">Available Flights</Heading>
                <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
                    {flights.map((flight, index) => (
                        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" shadow="md">
                            <Heading as="h3" size="lg" mb="4">{flight.name}</Heading>
                            <Image src={flight.agencyImage} alt={`${flight.name} Agency`} borderRadius="md" mb="4" />
                            <Text mb="2"><strong>Origin:</strong> {flight.origin}</Text>
                            <Text mb="4"><strong>Destination:</strong> {flight.destination}</Text>
                            <Button colorScheme="blue" onClick={() => handleReserveClick(flight)}>Reserve</Button>
                        </Box>
                    ))}
                </Grid>
            </Box>

            <Box p="4">
                <Heading as="h1" mb="4" textAlign="center">Reserved Flights</Heading>
                <Stack spacing="4">
                    {reservations.map((reservation, index) => (
                        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" shadow="md" bg="blue.50">
                            <Heading as="h3" size="lg" mb="4">{reservation.name}</Heading>
                            <Text mb="2"><strong>Origin:</strong> {reservation.origin}</Text>
                            <Text mb="4"><strong>Destination:</strong> {reservation.destination}</Text>
                            <Button colorScheme="red" onClick={() => handleDeleteClick(index)}>Delete</Button>
                        </Box>
                    ))}
                </Stack>
            </Box>
            <Footer />
        </div>
    );
}

export default FlightDashboard;
