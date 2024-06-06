import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import {
    Box,
    Button,
    Center,
    Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader,
    DrawerOverlay,
    Heading,
    SimpleGrid,
    Spinner, Stack,
    useDisclosure
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {getPosts, getTripsByUserId, registerPost} from "../../services/client.js";
import PostCard from "./PostCard.jsx";
import {FaPlus} from "react-icons/fa";
import {Form, Formik} from "formik";
import {postRegistrationFormValidation} from "../../services/validation.js";
import {FileInput, SelectInput, TextAreaInput} from "../shared/FormComponents.jsx";
import {format} from "date-fns";
import {errorNotification, successNotification} from "../../services/notification.js";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user, isUserAuthenticated} = useAuth();

    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        fetchPosts();
        fetchTripsByUserId()
    }, [user])

    const isTripPosted = (trip) => {
        if (posts.length >= 1) {
            const userPosts = posts.filter(post => post.userDto.id === user.id);
            return userPosts.some(post => post.tripDto.id === trip.id);
        }
        return false;
    }

    const fetchPosts = () => {
        setLoading(true);
        getPosts().then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    const fetchTripsByUserId = async () => {
        setLoading(true);
        getTripsByUserId(user?.id).then(res => {
            setTrips(res.data);
        })
        .catch(err => console.log(err))
        .finally(setLoading(false));
    }

    const PostRegistrationForm = () => {
        return (
            <>
                <Formik
                    validateOnMount={true}
                    validationSchema={ postRegistrationFormValidation }
                    initialValues={{ text: null, tripId: null, file: null }}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(true);
                        const data = {
                            text: values.text,
                            userId: user?.id,
                            tripId: values.tripId,
                            image: values.image
                        }
                        registerPost(data).then(res => {
                            successNotification("Success", "The post has been uploaded successfully!");
                            fetchPosts();
                            onClose();
                        })
                            .catch(error => {
                            errorNotification(
                                error.code,
                                error.message
                            );
                        })
                        .finally(() => {
                            setSubmitting(false);
                        });
                    }}
                >
                    {({isValid, isSubmitting}) => (
                        <Form>
                            <Stack spacing={5}>
                                <TextAreaInput label={"Post Text"} name={"text"} type={"textarea"} placeholder={"Post Text..."} />
                                <SelectInput label={"Trip"} name={"tripId"}>
                                    <option value="">Select Trip</option>
                                    { trips
                                        .filter(trip => !isTripPosted(trip))
                                        .map(trip => (
                                        <option
                                            key={trip.id}
                                            value={`${trip.id}`}
                                        >
                                            {format(trip.startDate, 'PP')} - {format(trip.endDate, 'PP')}
                                        </option>
                                    )) }
                                </SelectInput>
                                <FileInput label="Picture" name="image" type="file" />
                                <Button type="submit" colorScheme={'cyan'} color={'white'} disabled={!isValid || isSubmitting}>Post</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} w={'100%'} display="flex" flexDirection="column">
            <Navbar />
                <Center my={5} flex={1}>
                    <Heading>What others have been doing...</Heading>
                </Center>
                <Center>
                    <Button
                        bgGradient='linear(to-bl, #010101, #0E4975)'
                        color={'white'}
                        leftIcon={<FaPlus />}
                        _hover={{
                            transform: 'translateY(-2px)',
                            bgGradient: 'linear(to-bl, #0E4975, #010101)'
                        }}
                        onClick={onOpen}
                    >
                        New Post
                    </Button>
                </Center>
            <SimpleGrid columns={{sm:1, md:2, lg:2, xl:2}} spacing={5} alignContent={'center'} mx={10}>
                { posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                        fetchPosts={fetchPosts}
                    />
                )) }
            </SimpleGrid>

            <Drawer onClose={onClose} isOpen={isOpen} size={'lg'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create a New Post!</DrawerHeader>
                    <DrawerBody>
                        <PostRegistrationForm />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Footer />
        </Box>
    );
}

export default Posts;
