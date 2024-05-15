import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Box, Heading, Text, Grid, Link } from '@chakra-ui/react';
import NewsBox from "../shared/NewsBox";

const News = () => {
    return (
        <div>
            <Navbar />
                <Box p="4">
                    <Heading as="h1" mb="4" textAlign="center" >Latest News</Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
                        <NewsBox title="Title" primaryText="Politics" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="Sport" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="Culture" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="History" secondaryText="Test" linkText="Read more..." />
                    </Grid>
                </Box>
                <Box p="4">
                    <Heading as="h1" mb="4" textAlign="center" >Latest News</Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
                        <NewsBox title="Title" primaryText="Politics" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="Sport" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="Culture" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="History" secondaryText="Test" linkText="Read more..." />
                    </Grid>
                </Box>
                <Box p="4">
                    <Heading as="h1" mb="4" textAlign="center" >Latest News</Heading>
                    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
                        <NewsBox title="Title" primaryText="Politics" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="Sport" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="Culture" secondaryText="Test" linkText="Read more..." />
                        <NewsBox title="Title" primaryText="History" secondaryText="Test" linkText="Read more..." />
                    </Grid>
                </Box>
            <Footer />
        </div>
    );
}

export default News;