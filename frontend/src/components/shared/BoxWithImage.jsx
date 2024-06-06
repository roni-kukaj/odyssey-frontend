import { Box, Text } from '@chakra-ui/react';

function BoxWithImage({ image, title, description }) {
    return (
        <Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
                <img src={ image } alt="Card 1" style={{ width:'300px', height: '330px' }} />
                <Box p="4" textAlign={'center'}>
                    <Text fontSize="2xl" fontWeight="bold" mt="2">{title}</Text>
                    <Text fontSize="md" mt="2">{description}</Text>
                </Box>
            </Box>
        </Box>
    );
}

export default BoxWithImage;