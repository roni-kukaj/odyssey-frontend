import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

const NewsBox = ({ title, primaryText, secondaryText, linkText, onClick }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" shadow="md">
            <Heading as="h3" size="lg" mb="4">{title}</Heading>
            <Text fontSize="sm" color="gray.500" mb="4">{primaryText}</Text>
            <Text mb="4">{secondaryText}</Text>
            <Link color="teal.500" onClick={onClick}>{linkText}</Link>
        </Box>
    );
}

export default NewsBox;
