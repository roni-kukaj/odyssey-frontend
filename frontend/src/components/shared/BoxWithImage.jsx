import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function BoxWithImage({ image, title }) {
    return (
        <Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src={ image } alt="Card 1" style={{ width:'300px', height: '330px' }} />    
                <Box p="4">
                    <Text fontWeight="bold" textAlign="center" fontSize="xl">{ title }</Text>
                </Box>
            </Box>
        </Box>
    );
}

export default BoxWithImage;