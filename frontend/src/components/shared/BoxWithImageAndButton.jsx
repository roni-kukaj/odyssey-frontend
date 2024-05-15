import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

function BoxWithImageAndButton({ image, title, buttonText }) {
    return (
        <Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src={ image } alt="image" style={{ width:'300px', height: '330px' }} />
                <Box p="4">
                    <Text fontWeight="bold">{ title }</Text>
                    <Button mt="2" colorScheme="blue">{ buttonText }</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default BoxWithImageAndButton;