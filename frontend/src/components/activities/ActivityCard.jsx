import {useAuth} from "../context/AuthContext.jsx";
import {Box, Flex, HStack, Link, Text, useColorModeValue} from "@chakra-ui/react";
import {BsArrowUpRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const ActivityCard = ({ activity }) => {

    const { isUserAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/trips");
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
                    <Text fontWeight={'bold'} fontSize={'lg'}>{activity.name}</Text>
                    <Text fontSize={'xs'}>Duration - {activity.duration} days</Text>
                    <Text fontWeight={'bold'} fontSize={'sm'} mt={5}>{activity.description}</Text>
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
                            { activity.location.city }, { activity.location.country }
                        </Text>
                    </Box>
                </Box>
                { isUserAuthenticated() ? (
                    <HStack borderTop={'1px'} color="black">
                        <Flex
                            p={4}
                            as={Link}
                            alignItems="center"
                            justifyContent={'space-between'}
                            roundedBottom={'sm'}
                            cursor={'pointer'}
                            w="full"
                            onClick={handleClick}
                        >
                            <Text fontSize={'md'} fontWeight={'semibold'}>
                                Plan a trip
                            </Text>
                            <BsArrowUpRight />
                        </Flex>
                    </HStack>
                ) : <></> }
            </Box>
        </>
    );
}

export default ActivityCard;