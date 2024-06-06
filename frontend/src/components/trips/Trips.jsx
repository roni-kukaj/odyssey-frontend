import {useEffect, useState} from 'react';
import {
    Box,
    Button,
    SimpleGrid,
    Center, Heading, Spinner, Container
} from '@chakra-ui/react';
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import {getTripsByUserId} from "../../services/client.js";
import {useAuth} from "../context/AuthContext.jsx";
import TripCard from "./TripCard.jsx";
import {FaPlus} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Trips = () => {

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user, isUserAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchTrips();
    }, [user]);

    const handleClick = () => {
        navigate("/trip-planner");
    }

    const fetchTrips = () => {
        setLoading(true);
        getTripsByUserId(user?.id).then(res => {
            setTrips(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} w={'100%'} display="flex" flexDirection="column">
            <Navbar />
                <Center my={5} flex={1}><Heading>Plan your Trips</Heading></Center>
                <Container ml={'5%'}>
                    <Button
                        colorScheme='blue'
                        mb={4}
                        leftIcon={<FaPlus />}
                        onClick={() => handleClick()}
                    >
                        Plan a Trip
                    </Button>
                </Container>
                <SimpleGrid columns={{sm:1, md:2, lg:2, xl:2}} spacing={5} alignContent={'center'} mx={10}>
                    { trips.map(trip => (
                        <TripCard key={trip.id} trip={trip} fetchTrips={fetchTrips} />
                    )) }
                </SimpleGrid>
            <Footer />
        </Box>
    );

};



export default Trips;
