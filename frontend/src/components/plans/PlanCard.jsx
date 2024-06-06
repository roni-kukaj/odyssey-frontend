import {useAuth} from "../context/AuthContext.jsx";
import {
    Box,
    Button,
    Divider,
    Img,
    Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,
    ModalOverlay,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {deletePlan} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";
import {format} from "date-fns";

const PlanCard = ({plan, fetchPlans}) => {

    const {isUserAuthenticated, user} = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const PlanCardModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Confirmation</ModalHeader>
                <ModalBody>
                    <Text fontSize="lg">Are you sure you want to delete this plan?</Text>
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
                            deletePlan(plan.id).then(res => {
                                successNotification("Success!", "Plan was deleted successfully!");
                                fetchPlans();
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
            if (user?.id === plan.userDto.id) {
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
                            Delete Plan
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
                    src={plan.location.picture}
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}
                />
            </Box>
            <Box p={4}>
                <Text fontWeight={'bold'} fontSize={'md'}>
                    <i>@{plan.userDto.username}</i> wants to visit
                </Text>
                <Box
                    bg="#0E4975"
                    display={'inline-block'}
                    px={2}
                    py={1}
                    mt={2}
                    color="white"
                    mb={2}>
                    <Text fontSize={'sm'} fontWeight="medium">
                        { plan.location.city }, { plan.location.country }
                    </Text>
                </Box>
                <Text fontWeight={'bold'} fontSize={'md'}>
                    on <u>{format(plan.plannedDate, 'PP')}</u>
                </Text>
            </Box>
            <DeleteButton />
            <PlanCardModal />
        </Box>
    );

}
export default PlanCard;