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
import {useNavigate} from "react-router-dom";
import {deleteReview} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";

const ReviewCard = ({ review, fetchReviews }) => {

    const { user, isUserAuthenticated } = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const ReviewCardModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <Text fontSize="lg">Are you sure you want to delete this review?</Text>
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
                            deleteReview(review.id).then(res => {
                                successNotification("Success!", "Review was deleted successfully!");
                                fetchReviews();
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
            if (user?.id === review.userDto.id) {
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
                            Delete Review
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
                    <Text fontWeight={'bold'} fontSize={'lg'}>Location: {review.location.city}, {review.location.country}</Text>
                    <Text fontSize={'xs'}>Rating - {review.rating}</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>{review.description}</Text>
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
                            By: <i>@{review.userDto.username}</i>
                        </Text>
                    </Box>
                </Box>
                <DeleteButton />
                <ReviewCardModal />
            </Box>
        </>
    );
}

export default ReviewCard;