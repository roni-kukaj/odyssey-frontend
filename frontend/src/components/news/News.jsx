import React, {useEffect, useState} from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import {
    Box,
    Heading,
    Grid,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text,
    Link,
    Spinner, Center, SimpleGrid
} from '@chakra-ui/react';
import NewsBox from "../shared/NewsBox";
import {getNews} from "../../services/client.js";
import LocationCard from "../locations/LocationCard.jsx";
import NewsCard from "./NewsCard.jsx";

const News = () => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchNews();
    }, [])

    const fetchNews = () => {
        setLoading(true);
        getNews().then(res => {
            setNews(res.data);
        }).catch(err => console.log(err))
            .finally(setLoading(false));
    }

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} w={'100%'} display="flex" flexDirection="column">
            <Navbar />
                <Center my={5} flex={1}><Heading>Latest News</Heading></Center>
                <SimpleGrid columns={{sm:1, md:2, lg:2, xl:2}} alignContent={'center'} mx={10}>
                    { news.map(n => (
                        <NewsCard
                            key={n.id}
                            news={n}
                        />
                    )) }
                </SimpleGrid>
            <Footer />
        </Box>
    );
}

export default News;
