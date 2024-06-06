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
import {deleteFollowById} from "../../services/client.js";
import {successNotification, errorNotification} from "../../services/notification.js";

const FollowingCard = ({ following, fetchData }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const removeFollowing = () => {
        deleteFollowById(following.id).then(res => {
            successNotification("Follow removed!", `You no longer follow ${following.following.username}`);
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
                    <Text fontSize="lg">Are you sure you don&apos;t want to follow this user anymore?</Text>
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
                        onClick={() => removeFollowing()}
                    >
                        Unfollow
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
                        <i>@{following.following.username}</i>
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
export default FollowingCard;