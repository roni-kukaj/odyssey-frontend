import {useEffect, useState} from 'react';
import {
    Box, Heading, SimpleGrid, Center, Spinner
} from '@chakra-ui/react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {getActivities} from "../../services/client.js";
import ActivityCard from "./ActivityCard.jsx";

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchActivities();
    }, []);

    const fetchActivities = () => {
        setLoading(true);
        getActivities().then(res => {
            setActivities(res.data);
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
            <Center my={5} flex={1}><Heading>Experience the best Activities</Heading></Center>
            <SimpleGrid columns={4} mx={10}>
                {activities.map(activity => (
                    <ActivityCard key={activity.id} activity={activity} />
                ))}
            </SimpleGrid>
            <Footer />
        </Box>
    );
};

export default Activities;
