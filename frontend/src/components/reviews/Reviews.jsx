import React, {useEffect, useState} from 'react';
import {
    Box,
    Heading,
    Stack,
    Button,
    Center,
    SimpleGrid,
    Spinner,
    useDisclosure,
    ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Modal, HStack
} from '@chakra-ui/react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {getLocations, getReviews, registerReview} from "../../services/client.js";
import ReviewCard from "./ReviewCard.jsx";
import {FaPlus} from "react-icons/fa";
import {Form, Formik} from "formik";
import {reviewRegistrationFormValidation} from "../../services/validation.js";
import {SelectInput, TextAreaInput, TextInput} from "../shared/FormComponents.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import {errorNotification, successNotification} from "../../services/notification.js";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user, isUserAuthenticated} = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        fetchReviews();
    }, [user]);

    const fetchReviews = () => {
        setLoading(true);
        getReviews().then(res => {
            setReviews(res.data);
        }).then(() => fetchLocations())
            .catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    const fetchLocations = () => {
        setLoading(true);
        getLocations().then(res => {
            const allLocations = res.data;
            const userReviews = reviews.filter(review => review.userDto.id === user.id);
            const reviewedLocationIds = new Set(userReviews.map(review => review.location.id));
            const unReviewedLocations = allLocations.filter(location => !reviewedLocationIds.has(location.id));
            setLocations(unReviewedLocations);
        }).catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    const ReviewRegistrationForm = () => (
        <Formik
            validateOnMount={true}
            validationSchema={reviewRegistrationFormValidation}
            initialValues={{description: null, rating: null, locationId: null}}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(true);
                const data = {
                    description: values.description,
                    rating: values.rating,
                    userId: user.id,
                    locationId: values.locationId
                }
                registerReview(data).then(res => {
                    successNotification("Success", "Review was successfully added!");
                    fetchReviews();
                    onClose();
                }).catch(err => {
                    errorNotification(
                        err.code,
                        err.message
                    );
                }).finally(() => {
                    setSubmitting(false);
                });
            }}
        >
            {({isValid, isSubmitting}) => (
                <Form>
                    <Stack spacing={5}>
                        <TextAreaInput label={"Description"} name={"description"} type={"textarea"} placeholder={"Describe here..."} />
                        <TextInput label={"Rating"} name={"rating"} type={"number"} placeholder={"0.0"} />
                        <SelectInput label={"Location"} name={"locationId"}>
                            <option value="">Select Location</option>
                            { locations.map(location => (
                                <option
                                    key={location.id}
                                    value={`${location.id}`}
                                >
                                    {location.city}, {location.country}
                                </option>
                            )) }
                        </SelectInput>
                        <HStack spacing={2} justifyContent={'right'}>
                            <Button colorScheme='gray' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                bgGradient='linear(to-bl, #010101, #0E4975)'
                                color={'white'}
                                my={1}
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    bgGradient: 'linear(to-bl, #0E4975, #010101)'
                                }}
                                type={'submit'}
                                disabled={!isValid || isSubmitting}
                            >Upload</Button>
                        </HStack>
                    </Stack>
                </Form>
            )}
        </Formik>
    )

    const ReviewRegistrationModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload a Review</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ReviewRegistrationForm />
                </ModalBody>

            </ModalContent>
        </Modal>
    )

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} display="flex" flexDirection="column">
            <Navbar />
            <Center my={5} flex={1}><Heading>What our users have to say?</Heading></Center>
            <Center>
                <Button
                    bgGradient='linear(to-bl, #010101, #0E4975)'
                    color={'white'}
                    my={1}
                    leftIcon={<FaPlus />}
                    _hover={{
                        transform: 'translateY(-2px)',
                        bgGradient: 'linear(to-bl, #0E4975, #010101)'
                    }}
                    onClick={onOpen}
                >
                    New Review
                </Button>
            </Center>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} alignContent={'center'} mx={10}>
                {reviews.map(review => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                        fetchReviews={fetchReviews}
                    />
                ))}
            </SimpleGrid>
            <Footer />
            <ReviewRegistrationModal />
        </Box>
    );
};

export default Reviews;
