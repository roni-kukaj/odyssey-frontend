import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function BoxWithImage({ image, date, time, title, description }) {
    return (
        <Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src={ image } alt="Card 1" style={{ width:'300px', height: '330px' }} />
                <Box p="4">
                    <Text fontSize="2xl" fontWeight="bold" mt="2">{title}</Text>
                    <Text fontWeight="bold" color="gray.600" mt="2">{date} at {time}</Text>
                    <Text fontSize="md" mt="2">{description}</Text>

                </Box>
            </Box>
        </Box>
    );
}

export default BoxWithImage;