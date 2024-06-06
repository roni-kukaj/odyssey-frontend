import {Box, Divider, Flex, HStack, Img, Text, useColorModeValue} from "@chakra-ui/react";
import {BsArrowUpRight, BsHeart} from "react-icons/bs";
import {useState} from "react";
import {useAuth} from "../context/AuthContext.jsx";

const EventCard = ({event}) => {

    const {isUserAuthenticated} = useAuth();

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
                    src={event.image}
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}
                />
            </Box>
            <Box p={4}>
                <Box mb={3}>
                    <Text fontSize={'lg'} fontWeight={'bold'}>{event.name}</Text>
                </Box>
                <Box
                    bg="#0E4975"
                    display={'inline-block'}
                    px={2}
                    py={1}
                    color="white"
                    mb={2}>
                    <Text fontSize={'sm'} fontWeight="medium">
                        { event.location.city }, { event.location.country }
                    </Text>
                </Box>
                <Box>
                    <Text fontSize={'xs'}>Duration - {event.duration} days</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>{event.description}</Text>
                    <Divider my={3} />
                    <Text fontSize={'md'} fontWeight={'bold'}>Cost - ${event.cost}</Text>
                </Box>
            </Box>
            { isUserAuthenticated() ? (
                <HStack borderTop={'1px'} color="black">
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        cursor={'pointer'}
                        w="full">
                        <Text fontSize={'md'} fontWeight={'semibold'}>
                            Plan a trip
                        </Text>
                        <BsArrowUpRight />
                    </Flex>
                </HStack>
            ) : <></> }
        </Box>
    );
}

export default EventCard;
