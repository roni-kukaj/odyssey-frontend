import {useEffect, useState} from 'react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {Box, Center, Heading, SimpleGrid, Spinner} from '@chakra-ui/react';
import { getLocations } from "../../services/client.js";
import LocationCard from "./LocationCard.jsx";

function Locations() {

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchLocations()
        }, []
    );

    const fetchLocations = () => {
        setLoading(true);
        getLocations().then(res => {
            setLocations(res.data);
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
                <Center my={5} flex={1}><Heading>Visit out best locations</Heading></Center>
                    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} alignContent={'center'} mx={10}>
                        {locations.map(location => (
                            <LocationCard key={location.id} location={location} fetchLocations={fetchLocations} />
                        ))}
                    </SimpleGrid>
            <Footer />
        </Box>
    );
}

export default Locations;