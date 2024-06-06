import {Box, Flex, HStack, Img, useColorModeValue, Text, Button} from "@chakra-ui/react";
import {BsArrowUpRight, BsHeart, BsHeartFill} from "react-icons/bs";
import {useAuth} from "../context/AuthContext.jsx";
import {registerBookmark, getUserByUsername, getBookmarksByUserId} from "../../services/client.js";
import {getAuthenticatedUsername} from "../../services/auth.js";
import {successNotification, errorNotification} from "../../services/notification.js";
import {useEffect, useState} from "react";

const LocationCard = ({ location, fetchLocations }) => {

    const { isUserAuthenticated, user } = useAuth();
    const [bookmarks, setBookmarks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isUserAuthenticated() && user) {
            fetchBookmarks()
        }
    }, [isUserAuthenticated, user])

    const fetchBookmarks = () => {
        setLoading(true);
        getBookmarksByUserId(user.id).then(res => {
            setBookmarks(res.data);
        }).catch(err => console.log(err))
            .finally(setLoading(false));
    }

    const isBookmark = (location) => {
        return bookmarks.some(bookmark => bookmark.location.id === location.id && bookmark.username === getAuthenticatedUsername());
    }

    const handleClick = () => {
        const username = getAuthenticatedUsername();
        getUserByUsername(username).then( res => {
            const bookmark = { locationId: location.id, userId: user?.id };
            registerBookmark(bookmark).then(() => {
                successNotification("Success", "Bookmark was added!");
                fetchBookmarks();
            }).catch(err => {
                errorNotification(
                    err.code,
                    err.message
                );
            })
        }).catch(error => console.log(error));

    }

    if (loading) return <></>;

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
                    src={location.picture}
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}
                />
            </Box>
            <Box p={4}>
                <Box
                    bg="#0E4975"
                    display={'inline-block'}
                    px={2}
                    py={1}
                    color="white"
                    mb={2}>
                    <Text fontSize={'sm'} fontWeight="medium">
                        { location.city }, { location.country }
                    </Text>
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
                    { isBookmark(location) ?
                        (
                            <Flex
                                p={4}
                                alignItems="center"
                                as={Button}
                                bg={'white'}
                                justifyContent={'space-between'}
                                roundedBottom={'sm'}
                                cursor="pointer"
                            >
                                <BsHeartFill fill="red" fontSize={'24px'} />
                            </Flex>
                        ) : (
                            <Flex
                                p={4}
                                alignItems="center"
                                as={Button}
                                bg={'white'}
                                justifyContent={'space-between'}
                                roundedBottom={'sm'}
                                cursor="pointer"
                                onClick={handleClick}
                            >
                                <BsHeart fontSize={'24px'} />
                            </Flex>
                        )
                    }
                </HStack>
            ) : <></> }
        </Box>
    );
};

export default LocationCard;