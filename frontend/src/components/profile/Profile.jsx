import {useState, useEffect} from 'react';
import Footer from '../shared/Footer.jsx';
import {
    Box,
    Grid,
    Text,
    GridItem,
    Spinner,
    Divider,
    VStack,
} from '@chakra-ui/react';
import Navbar from "../shared/Navbar.jsx";
import {getBookmarksByUserId, getFollowersByUserId, getFollowingByUserId} from "../../services/client.js";
import BookmarkCard from "./BookmarkCard.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import UserCard from "./UserCard.jsx";
import FollowerCard from "./FollowerCard.jsx";
import FollowingCard from "./FollowingCard.jsx";

function Profile() {

    const { user, setUser } = useAuth();
    // const [user, setUser] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [user]);


    const fetchData = async () => {
        setLoading(true);
        try {
            const [bookmarksResponse, followersResponse, followingResponse] = await Promise.all([
                getBookmarksByUserId(user.id),
                getFollowersByUserId(user.id),
                getFollowingByUserId(user.id)
            ]);
            setBookmarks(bookmarksResponse.data);
            setFollowers(followersResponse.data);
            setFollowing(followingResponse.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <>
            <Navbar />

                <Grid
                    templateColumns={{ base: '1fr', md: '1fr', lg: 'repeat(2, 1fr)' }}
                    gap={6}
                    w={'90%'}
                    ml={'5%'}
                >
                    <GridItem w={'100%'} bg={'gray.100'} m={5} borderRadius={'20px'} mr={4}>
                        <UserCard user={user} setUser={setUser} />
                    </GridItem>
                    <GridItem w={'100%'} m={5} borderRadius={'20px'} bg={'gray.100'}>
                        <Box align={'center'} my={3}>
                            <Text fontSize={'2xl'} fontWeight={'bold'}>Bookmarks</Text>
                        </Box>
                        <Divider />
                        <VStack spacing={2}>
                            { bookmarks.map(bookmark => (
                                <BookmarkCard key={bookmark.id} bookmark={bookmark} fetchData={fetchData} />
                            )) }
                        </VStack>
                    </GridItem>
                </Grid>
                <Grid
                    templateColumns={{ base: '1fr', md: '1fr', lg: 'repeat(2, 1fr)' }}
                    gap={6}
                    w={'90%'}
                    ml={'5%'}
                >
                    <GridItem w={'100%'} m={5} borderRadius={'20px'} bg={'gray.100'}>
                        <Box align={'center'} my={3}>
                            <Text fontSize={'2xl'} fontWeight={'bold'}>Followers</Text>
                        </Box>
                        <Divider />
                        <VStack spacing={2}>
                            { followers.map(follower => (
                                <FollowerCard follower={follower} fetchData={fetchData} />
                            )) }
                        </VStack>
                    </GridItem>
                    <GridItem w={'100%'} m={5} borderRadius={'20px'} bg={'gray.100'}>
                        <Box align={'center'} my={3}>
                            <Text fontSize={'2xl'} fontWeight={'bold'}>Following</Text>
                        </Box>
                        <Divider />
                        <VStack spacing={2}>
                            { following.map(following_ => (
                                <FollowingCard following={following_} fetchData={fetchData} />
                            )) }
                        </VStack>
                    </GridItem>
                </Grid>
            <Footer />
        </>
    );
  }

  export default Profile;