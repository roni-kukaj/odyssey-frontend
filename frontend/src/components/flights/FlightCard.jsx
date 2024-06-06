import {Box, Text, useColorModeValue} from "@chakra-ui/react";
import {useAuth} from "../context/AuthContext.jsx";
import { format } from 'date-fns';
import { FaArrowRight } from "react-icons/fa";


const FlightCard = ({flight}) => {
    return (
        <>
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
                <Box  borderBottom={'1px'} borderColor="black" p={5}>
                    <Text fontWeight={'bold'} fontSize={'lg'}>{flight.name}</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>{format(flight.time, 'PPpp')}</Text>
                </Box>
                <Box p={4}>
                    <Box
                        bg="#0E4975"
                        display={'inline-block'}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}
                    >
                        <Text fontSize={'sm'} fontWeight="medium">
                            { flight.origin.city }, { flight.origin.country }
                        </Text>
                    </Box>
                    <Box
                        display={'inline-block'}
                        mx={5}
                        mt={2}
                    >
                        <FaArrowRight mt={4} />
                    </Box>
                    <Box
                        bg="#0E4975"
                        display={'inline-block'}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}>
                        <Text fontSize={'sm'} fontWeight="medium">
                            { flight.destination.city }, { flight.destination.country }
                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default FlightCard;