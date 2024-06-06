import {
    Accordion,
    AccordionButton, AccordionIcon, AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Divider,
    HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer,
    Text,
    useColorModeValue, useDisclosure,
    VStack
} from "@chakra-ui/react";
import {format} from "date-fns";
import {useAuth} from "../context/AuthContext.jsx";
import {deletePost} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";
import UserFollowCard from "../shared/UserFollowCard.jsx";

const PostCard = ({ post, fetchPosts }) => {

    const {user, isUserAuthenticated} = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const PostCardModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <Text fontSize="lg">Are you sure you want to delete this post?</Text>
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
                            deletePost(post.id).then(res => {
                                successNotification("Success!", "Post was deleted successfully!");
                                fetchPosts();
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
            if (user.id === post.userDto.id) {
                return (
                    <>
                        <Divider />
                        <Button
                            bg="red.500"
                            color="white"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: "lg"
                            }}
                            onClick={onOpen}
                        >
                            Delete Post
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
                    <UserFollowCard userDto={post.userDto} />
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>
                        Posted on: <u style={{color: 'blue'}}>{format(new Date(post.postedTime), 'PP')}</u>
                    </Text>
                </Box>
                <Box p={5}>
                    <Text fontSize={'md'} mb={5}>{post.text}</Text>
                    {post.image && <img src={post.image} alt="Post Image" style={{ width: '100%', borderRadius: '8px' }} />}
                </Box>
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            <HStack w="100%" spacing={4}>
                                <Text>
                                    View Trip Details
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
                                            {post.tripDto.items.map((item) => (
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
                                            {post.tripDto.places.map((place) => (
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
                                            {post.tripDto.activities.map((activity) => (
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
                                            {post.tripDto.events.map((event) => (
                                                <Box key={event.name} bg="gray.100" w="100%" p={2} borderRadius="md" color="black">
                                                    {event.name}
                                                </Box>
                                            ))}
                                        </VStack>
                                    </Box>
                                </HStack>

                                <DeleteButton />
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            <PostCardModal />
        </>
    );
}

export default PostCard;