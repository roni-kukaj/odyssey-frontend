import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Box,
    Button,
    Divider, HStack,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Spacer,
    Text, useColorModeValue,
    useDisclosure, VStack,

} from "@chakra-ui/react";
import {successNotification, errorNotification} from "../../services/notification.js";
import {deleteTrip} from "../../services/client.js";
import {useAuth} from "../context/AuthContext.jsx";
import {format} from "date-fns";

const TripCard = ({ trip, fetchTrips }) => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isAuthenticated} = useAuth();

    const TripCardModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <Text fontSize="lg">Are you sure you want to delete this item?</Text>
                </ModalBody>
                <Divider />
                <ModalFooter>
                    <Button
                        ml={4}
                        bg={'gray.400'}
                        color={'white'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg'
                        }}
                        onClick={() => {
                            onClose();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        ml={4}
                        bg={'red'}
                        color={'white'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg'
                        }}
                        onClick={() => {
                            deleteTrip(trip.id).then(res => {
                                successNotification("Trip deleted!", 'Trip was successfully deleted!');
                                if (isAuthenticated())
                                    fetchTrips();
                            }).catch(err => {
                                errorNotification(err.code, err.message);
                            }).finally(() => {
                                onClose();
                            })
                        }}
                    >
                        Delete
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );

    return (
        <>
            <Box
                w="100%"
                p={4}
                rounded={'sm'}
                bg='white'
                my={5}
                mx={5}
                borderRadius={2}
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 #0E4975', '6px 6px 0 cyan')}
            >
                <Box borderBottom={'1px'} borderColor='black' p={5}>
                    <Text fontWeight={'bold'} fontSize={'lg'}>@{trip.userDto.username}</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>
                        From: <u style={{color: 'blue'}}>{format(trip.startDate, 'PP')}</u> - Until: <u style={{color: 'blue'}}>{format(trip.endDate, 'PP')}</u>
                    </Text>
                </Box>
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            <HStack w="100%" spacing={4}>
                                <Text>
                                    View more
                                </Text>
                                <Spacer />
                                <AccordionIcon />
                            </HStack>
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Divider mb={4} />
                            <VStack w="100%" align="start" spacing={4}>
                                <HStack w="100%" spacing={4} align="start">
                                    <Box w="50%">
                                        <Text fontSize="xl" mb={2}>Items</Text>
                                        <VStack spacing={2}>
                                            {trip.items.map((item) => (
                                                <Box key={item.name} bg="gray.100" w="100%" p={2} borderRadius="md" color="black">
                                                    {item.name}
                                                </Box>
                                            ))}
                                        </VStack>
                                    </Box>
                                    <Divider orientation="vertical" />
                                    <Box w="50%">
                                        <Text fontSize="xl" mb={2}>Places</Text>
                                        <VStack spacing={2}>
                                            {trip.places.map((place) => (
                                                <Box key={place.city} bg="gray.100" w="100%" p={2} borderRadius="md" color="black">
                                                    {place.city}, {place.country}
                                                </Box>
                                            ))}
                                        </VStack>
                                    </Box>
                                </HStack>
                                <Divider />
                                <HStack w="100%" spacing={4} align="start">
                                    <Box w="50%">
                                        <Text fontSize="xl" mb={2}>Activities</Text>
                                        <VStack spacing={2}>
                                            {trip.activities.map((activity) => (
                                                <Box key={activity.name} bg="gray.100" w="100%" p={2} borderRadius="md" color="black">
                                                    {activity.name}
                                                </Box>
                                            ))}
                                        </VStack>
                                    </Box>
                                    <Divider orientation="vertical" />
                                    <Box w="50%">
                                        <Text fontSize="xl" mb={2}>Events</Text>
                                        <VStack spacing={2}>
                                            {trip.events.map((event) => (
                                                <Box key={event.name} bg="gray.100" w="100%" p={2} borderRadius="md" color="black">
                                                    {event.name}
                                                </Box>
                                            ))}
                                        </VStack>
                                    </Box>
                                </HStack>
                                <Divider />
                                <Button
                                    bg="red.500"
                                    color="white"
                                    _hover={{
                                        transform: "translateY(-2px)",
                                        boxShadow: "lg",
                                    }}
                                    onClick={onOpen}
                                >
                                    Delete Trip
                                </Button>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <TripCardModal />
        </>
    );

}

export default TripCard;