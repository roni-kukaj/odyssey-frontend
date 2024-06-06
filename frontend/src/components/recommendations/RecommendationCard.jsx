import {useAuth} from "../context/AuthContext.jsx";
import {
    Box,
    Button,
    Divider,
    Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {deleteRecommendation,} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";

const RecommendationCard = ({ recommendation, fetchRecommendations }) => {

    const { user, isUserAuthenticated } = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const RecommendationCardModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <Text fontSize="lg">Are you sure you want to delete this recommendation?</Text>
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
                            deleteRecommendation(recommendation.id).then(res => {
                                successNotification("Success!", "Recommendation was deleted successfully!");
                                fetchRecommendations();
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

    const DeleteButton = () => {
        if ( isUserAuthenticated() ) {
            if (user?.id === recommendation.userDto.id) {
                return (
                    <>
                        <Divider />
                        <Button
                            bg="red.500"
                            color="white"
                            my={3}
                            mx={3}
                            size={'sm'}
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            onClick={onOpen}
                        >
                            Delete Recommendation
                        </Button>
                    </>
                )
            }
        }
        else {
            return <></>
        }
    }

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
                    <Text fontWeight={'bold'} fontSize={'lg'}>Activity: {recommendation.activity.name}</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>{recommendation.description}</Text>
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
                            By: <i>@{recommendation.userDto.username}</i>
                        </Text>
                    </Box>
                </Box>
                <DeleteButton />
                <RecommendationCardModal />
            </Box>
        </>
    );
}

export default RecommendationCard;