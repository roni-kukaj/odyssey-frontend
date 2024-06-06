import {useEffect, useState} from 'react';
import {
    Box,
    Heading,
    Center,
    SimpleGrid,
    Spinner,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure, Stack, HStack
} from '@chakra-ui/react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import {getLocations, getPlans, registerPlan} from "../../services/client.js";
import {FaPlus} from "react-icons/fa";
import PlanCard from "./PlanCard.jsx";
import {planRegistrationFormValidation} from "../../services/validation.js";
import {errorNotification, successNotification} from "../../services/notification.js";
import {Form, Formik} from "formik";
import {SelectInput, TextInput} from "../shared/FormComponents.jsx";
import {useAuth} from "../context/AuthContext.jsx";

const Plans = () => {

    const [plans, setPlans] = useState([]);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {user, isUserAuthenticated} = useAuth();

    useEffect(() => {
        fetchPlans();
        fetchLocations();
    }, [])

    const fetchPlans = () => {
        setLoading(true);
        getPlans().then(res => {
            setPlans(res.data);
        })
        .then(() => fetchLocations())
        .catch(err => {
            console.log(err);
        })
        .finally(setLoading(false));
    }
    const fetchLocations = () => {
        setLoading(true);
        getLocations().then(res => {
            const allLocations = res.data;
            const userPlans = plans.filter(plan => plan.userDto.id === user.id);
            const plannedLocationIds = new Set(userPlans.map(plan => plan.location.id));
            const unplannedLocations = allLocations.filter(location => !plannedLocationIds.has(location.id));
            setLocations(unplannedLocations);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(setLoading(false));
    }

    const PlanRegistrationForm = () => (
        <Formik
            validateOnMount={true}
            validationSchema={ planRegistrationFormValidation }
            initialValues={{date: null, locationId: null}}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(true);
                const data = {
                    userId: user.id,
                    locationId: values.locationId,
                    date: values.date
                }
                registerPlan(data).then(res => {
                    successNotification("Success", "Plan was successfully added!");
                    fetchPlans();
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
                        <TextInput label={"Planned Date"} name={'date'} type={"date"} />
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

    const PlanRegistrationModal = () => (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Plan a Visit</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <PlanRegistrationForm />
                </ModalBody>

            </ModalContent>
        </Modal>
    )

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} w={'100%'} display="flex" flexDirection="column">
            <Navbar />
            <Center my={5} flex={1}><Heading>What is everybody planning?</Heading></Center>
            <Center>
                <Button
                    bgGradient='linear(to-bl, #010101, #0E4975)'
                    color={'white'}
                    leftIcon={<FaPlus />}
                    my={2}
                    _hover={{
                        transform: 'translateY(-2px)',
                        bgGradient: 'linear(to-bl, #0E4975, #010101)'
                    }}
                    onClick={() => {
                        fetchLocations();
                        onOpen();
                    }}
                >
                    Add Planned Location
                </Button>
            </Center>
            <SimpleGrid columns={{sm:1, md:2, lg:3, xl:3}} alignContent={'center'} mx={10}>
                { plans.map(plan => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        fetchPlans={fetchPlans}
                    />
                )) }
            </SimpleGrid>
            <PlanRegistrationModal />
            <Footer />
        </Box>
    );
};

export default Plans;
