import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem, AccordionPanel,
    Box, Button,
    Center, Divider,
    Heading, HStack,
    Spinner, Text
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContext.jsx";
import {getItems, getLocations, getEvents, getActivities, registerTrip} from "../../services/client.js";
import LocationCheckbox from "./LocationCheckbox.jsx";
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import ItemCheckbox from "./ItemCheckbox.jsx";
import ActivityCheckbox from "./ActivityCheckbox.jsx";
import EventCheckbox from "./EventCheckbox.jsx";
import {Form, Formik} from "formik";
import {tripRegistrationFormValidation} from "../../services/validation.js";
import {TextInput} from "../shared/FormComponents.jsx";
import {useNavigate} from "react-router-dom";
import {errorNotification, successNotification} from "../../services/notification.js";

const TripPlanner = () => {

    const {user, isAuthenticated} = useAuth()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [items, setItems] = useState([])
    const [locations, setLocations] = useState([])
    const [activities, setActivities] = useState([])
    const [events, setEvents] = useState([])

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [selectedItems, setSelectedItems] = useState([])
    const [selectedLocations, setSelectedLocations] = useState([])
    const [selectedActivities, setSelectedActivities] = useState([])
    const [selectedEvents, setSelectedEvents] = useState([])

    useEffect(() => {
        fetchData()
    }, []);

    const endFormSubmit = () => {
        navigate("/trips")
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const [itemsResponse, locationsResponse, activitiesResponse, eventsResponse] = await Promise.all([
                getItems(), getLocations(), getActivities(), getEvents()
            ]);
            setItems(itemsResponse.data);
            setLocations(locationsResponse.data);
            setActivities(activitiesResponse.data);
            setEvents(eventsResponse.data);
        }
        catch(err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    const TripForm = () => {
        return (
            <Formik
                validateOnMount={true}
                validationSchema={ tripRegistrationFormValidation }
                initialValues={{startDate: null, endDate: null}}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    const data = {
                        userId: user.id,
                        startDate: values.startDate,
                        endDate: values.endDate,
                        itemIds: selectedItems.map(item => item.id),
                        placeIds: selectedLocations.map(location => location.id),
                        activityIds: selectedActivities.map(activity => activity.id),
                        eventIds: selectedEvents.map(event => event.id)
                    }
                    if (data.placeIds.length < 1) {
                        data.placeIds = null;
                    }
                    if (data.itemIds.length < 1) {
                        data.itemIds = null;
                    }
                    if (data.activityIds.length < 1) {
                        data.activityIds = null;
                    }
                    if (data.eventIds.length < 1) {
                        data.eventIds = null
                    }
                    registerTrip(data).then(() => {
                        successNotification("Success!", "Trip was successfully added!");
                        navigate("/trips");
                    })
                    .catch(err => {
                        console.log(err);
                        errorNotification(
                            err.code,
                            err.message
                        );
                    })
                    .finally(() => {
                        setSubmitting(false);
                    })
                }}
            >
                {(isValid, isSubmitting) => (
                    <Form>
                        <HStack spacing={5} mb={5}>
                            <TextInput label={"Start Date"} name={'startDate'} type={"date"} />
                            <TextInput label={"End Date"} name={'endDate'} type={"date"} />
                        </HStack>
                        <Button
                            type={'submit'}
                            color={'white'}
                            bg={'blue.500'}
                        >
                            Plan Trip
                        </Button>
                    </Form>
                )}
            </Formik>
        );
    }

    if (loading) {
        return <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    }

    return (
        <Box minH={'100vh'} w={'100%'} display="flex" flexDirection="column">
            <Navbar />
            <Box my={10} ml={'5%'} w={'90%'}>
                <Center><Heading>Start planning your Trip!</Heading></Center>
                <Divider my={10} />
                <Center>
                <Accordion w={'90%'} display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Locations
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box w={'100%'} my={5}>
                                {locations.map((location) => (
                                    <LocationCheckbox
                                        key={location.id}
                                        location={location}
                                        selectedLocations={selectedLocations}
                                        setSelectedLocations={setSelectedLocations}
                                    />
                                ))}
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Items
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box w={'100%'} my={5}>
                                { items.map((item) => (
                                    <ItemCheckbox
                                        key={item.id}
                                        item={item}
                                        selectedItems={selectedItems}
                                        setSelectedItems={setSelectedItems}
                                    />
                                ))}
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Activities
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box w={'100%'} my={5}>
                                { activities.map((activity) => (
                                    <ActivityCheckbox
                                        key={activity.id}
                                        activity={activity}
                                        selectedActivities={selectedActivities}
                                        setSelectedActivities={setSelectedActivities}
                                    />
                                )) }
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Events
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box w={'100%'} my={5}>
                                { events.map(event => (
                                    <EventCheckbox
                                        key={event.id}
                                        event={event}
                                        selectedEvents={selectedEvents}
                                        setSelectedEvents={setSelectedEvents}
                                    />
                                )) }
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </Center>
                <Divider my={10} />
                <Box textAlign={'center'}>
                    <Text fontWeight={'bold'} display={'block'} fontSize={'xl'}>Planned Dates</Text>
                    <Center mt={5}>
                        <TripForm />
                    </Center>
                </Box>
            </Box>
            <Footer />
        </Box>

    );
}

export default TripPlanner;