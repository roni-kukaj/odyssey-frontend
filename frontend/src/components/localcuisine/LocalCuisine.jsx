import {useEffect, useState} from 'react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {Box, Spinner, Center, Heading, SimpleGrid} from '@chakra-ui/react';
import {getLocalCuisine} from "../../services/client.js";
import LocalCuisineCard from "./LocalCuisineCard.jsx";

function LocalCuisine() {

    const [localCuisine, setLocalCuisine] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            fetchLocalCuisine()
        }, []
    );

    const fetchLocalCuisine = () => {
        setLoading(true);
        getLocalCuisine().then(res => {
            setLocalCuisine(res.data);
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
            <Center my={5} flex={1}><Heading>Try the most authentic foods!</Heading></Center>
            <SimpleGrid columns={4} mx={10}>
                {localCuisine.map(lc => (
                    <LocalCuisineCard key={lc.id} localCuisine={lc} />
                ))}
            </SimpleGrid>
            <Footer />
        </Box>
    );

}

export default LocalCuisine;