import {
    Box,
    Button, Divider,
    Flex,
    Modal,
    ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {FaRegTrashAlt} from "react-icons/fa";
import {deleteBookmark} from "../../services/client.js";
import {successNotification, errorNotification} from "../../services/notification.js";

const BookmarkCard = ({ bookmark, fetchData }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const removeBookmark = () => {
        deleteBookmark(bookmark.id).then(res => {
            successNotification("Bookmark removed!", `${bookmark.location.city},${bookmark.location.country} was successfully deleted!`);
            fetchData();
        }).catch(err => {
            errorNotification(err.code, err.message);
        }).finally(() => {
            onClose();
        })
    }

    const ConfirmationModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <Text fontSize="lg">Are you sure you want to remove this bookmark?</Text>
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
                        _focus={{
                            bg: 'gray.500'
                        }}
                        onClick={() => {
                            onClose();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        ml={4}
                        bg={'red.400'}
                        color={'white'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg'
                        }}
                        _focus={{
                            bg: 'green.500'
                        }}
                        onClick={() => removeBookmark()}
                    >
                        Delete
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );

    return (
        <>
            <Box bg={'white'} my={3} w={'90%'} p={3} borderRadius={'20px'} >
                <Flex justify="space-between" align="center">
                    <Text fontSize={'xl'} fontWeight={'bold'}>
                        {bookmark.location.city}, {bookmark.location.country}
                    </Text>
                    <Button bg={'red.500'} color={'white'} onClick={onOpen}>
                        <FaRegTrashAlt />
                    </Button>
                </Flex>
                <ConfirmationModal />
            </Box>
        </>
    );
}
export default BookmarkCard;