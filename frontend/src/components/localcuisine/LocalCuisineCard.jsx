import {Box, Img, Text, useColorModeValue} from "@chakra-ui/react";
import {useAuth} from "../context/AuthContext.jsx";

const LocalCuisineCard = ({localCuisine}) => {

    return (
        <Box
            w="xs"
            rounded={'sm'}
            my={5}
            mx={[0, 5]}
            overflow={'hidden'}
            bg="white"
            border={'1px'}
            borderColor="black"
            borderRadius="2"
            boxShadow={useColorModeValue('6px 6px 0 #0E4975', '6px 6px 0 cyan')}>
            <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                <Img
                    src={localCuisine.image}
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}
                />
            </Box>
            <Box p={4}>
                <Box mb={3}>
                    <Text fontSize={'lg'} fontWeight={'bold'}>{localCuisine.name}</Text>
                </Box>
                <Box
                    bg="#0E4975"
                    display={'inline-block'}
                    px={2}
                    py={1}
                    color="white"
                    mb={2}>
                    <Text fontSize={'sm'} fontWeight="medium">
                        { localCuisine.location.city }, { localCuisine.location.country }
                    </Text>
                </Box>
                <Box>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>{localCuisine.description}</Text>
                </Box>
            </Box>
        </Box>
    );

}

export default LocalCuisineCard;