import {useEffect, useState} from 'react';
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
import {
    getActivities,
    getRecommendations,
    registerRecommendation,
} from "../../services/client.js";
import {FaPlus} from "react-icons/fa";
import {Form, Formik} from "formik";
import {recommendationRegistrationFormValidation} from "../../services/validation.js";
import {SelectInput, TextAreaInput} from "../shared/FormComponents.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import {errorNotification, successNotification} from "../../services/notification.js";
import RecommendationCard from "./RecommendationCard.jsx";

const Recommendations = () => {

    const [recommendations, setRecommendations] = useState([]);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user, isUserAuthenticated} = useAuth();
    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        fetchRecommendations();
    }, [user]);

    const fetchRecommendations = () => {
        setLoading(true);
        getRecommendations().then(res => {
            setRecommendations(res.data);
        })
        .catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    const fetchActivities = () => {
        setLoading(true);
        getActivities().then(res => {
            const allActivities = res.data;
            const userRecommendations = recommendations.filter(rec => rec.userDto.id === user.id);
            const reviewedActivityIds = new Set(userRecommendations.map(rec => rec.activity.id));
            const unReviewedActivities = allActivities.filter(activity => !reviewedActivityIds.has(activity.id));
            setActivities(unReviewedActivities);
        }).catch(err => {
            console.log(err);
        }).finally(setLoading(false));
    }

    const RecommendationRegistrationForm = () => (
        <Formik
            validateOnMount={true}
            validationSchema={recommendationRegistrationFormValidation}
            initialValues={{description: null, activityId: null}}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(true);
                const data = {
                    description: values.description,
                    userId: user.id,
                    activityId: values.activityId
                }
                registerRecommendation(data).then(res => {
                    successNotification("Success", "Recommendation was successfully added!");
                    fetchRecommendations();
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
                        <SelectInput label={"Activity"} name={"activityId"}>
                            <option value="">Select Activity</option>
                            { activities.map(activity => (
                                <option
                                    key={activity.id}
                                    value={`${activity.id}`}
                                >
                                    {activity.name}
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
                                disabled={!isValid || isSubmitting}
                                type={'submit'}
                            >
                                Upload
                            </Button>
                        </HStack>
                    </Stack>
                </Form>
            )}
        </Formik>
    )

    const RecommendationRegistrationModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Upload a Recommendation</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <RecommendationRegistrationForm />
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
            <Center my={5} flex={1}><Heading>Recommendations</Heading></Center>
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
                    onClick={() => {
                        fetchActivities();
                        onOpen();
                    }}
                >
                    New Recommendation
                </Button>
            </Center>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} alignContent={'center'} mx={10}>
                {recommendations.map(recommendation => (
                    <RecommendationCard
                        key={recommendation.id}
                        recommendation={recommendation}
                        fetchRecommendations={fetchRecommendations}
                    />
                ))}
            </SimpleGrid>
            <Footer />
            <RecommendationRegistrationModal />
        </Box>
    );
};

export default Recommendations;
