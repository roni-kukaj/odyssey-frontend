import {Box, Flex, HStack, Link, Text, useColorModeValue} from "@chakra-ui/react";
import {BsArrowUpRight} from "react-icons/bs";
import {useAuth} from "../context/AuthContext.jsx";

const HotelCard = ({ hotel }) => {

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
                    <Text fontWeight={'bold'} fontSize={'lg'}>{hotel.name}</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>Rating - {hotel.rating}</Text>
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
                            { hotel.location.city }, { hotel.location.country }
                        </Text>
                    </Box>
                </Box>
                <HStack borderTop={'1px'} color="black">
                    <Flex
                        p={4}
                        as={Link}
                        href={hotel.bookingLink}
                        colorScheme={'white'}
                        color={'black'}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full"
                        isExternal
                    >
                        <Text fontSize={'md'} fontWeight={'semibold'}>
                            View hotel
                        </Text>
                        <BsArrowUpRight />
                    </Flex>
                </HStack>
            </Box>
        </>
    );
}

export default HotelCard;