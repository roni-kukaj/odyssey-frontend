import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  useColorModeValue,
  VStack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  HStack,
  Divider,
  Textarea
} from '@chakra-ui/react';

const Trips = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trips, setTrips] = useState([]);
  const [selectedTripId, setSelectedTripId] = useState(null);

  const [newTripName, setNewTripName] = useState('');
  const [newTripDescription, setNewTripDescription] = useState('');
  const [newLocations, setNewLocations] = useState([]);
  const [newActivities, setNewActivities] = useState([]);
  const [newEvents, setNewEvents] = useState([]);
  const [newItems, setNewItems] = useState([]);

  const onClose = () => {
    setIsOpen(false);
    setSelectedTripId(null);
    setNewTripName('');
    setNewTripDescription('');
    setNewLocations([]);
    setNewActivities([]);
    setNewEvents([]);
    setNewItems([]);
  };

  const onOpen = (tripId) => {
    setSelectedTripId(tripId);
    const trip = trips.find(t => t.id === tripId);
    if (trip) {
      setNewTripName(trip.name);
      setNewTripDescription(trip.description);
      setNewLocations(trip.locations);
      setNewActivities(trip.activities);
      setNewEvents(trip.events);
      setNewItems(trip.items);
    }
    setIsOpen(true);
  };

  const addTrip = () => {
    setTrips([...trips, {
      id: new Date().toISOString(),
      name: newTripName,
      description: newTripDescription,
      locations: newLocations,
      activities: newActivities,
      events: newEvents,
      items: newItems
    }]);
    onClose();
  };

  const updateTrip = () => {
    const updatedTrips = trips.map(trip => {
      if (trip.id === selectedTripId) {
        return {
          ...trip,
          name: newTripName,
          description: newTripDescription,
          locations: newLocations,
          activities: newActivities,
          events: newEvents,
          items: newItems
        };
      }
      return trip;
    });
    setTrips(updatedTrips);
    onClose();
  };

  const deleteTrip = () => {
    setTrips(trips.filter(trip => trip.id !== selectedTripId));
    onClose();
  };

  const addNewItemToList = (setList, list) => {
    setList([...list, '']);
  };

  const updateListItem = (setList, list, index, value) => {
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  };

  return (
  <div>
  <Navbar />
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Trips Dashboard</Text>
      <Button onClick={() => setIsOpen(true)} colorScheme="teal" mb={4}>Create New Trip</Button>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {trips.map(trip => (
          <TripCard
            key={trip.id}
            trip={trip}
            onOpen={() => onOpen(trip.id)}
          />
        ))}
      </SimpleGrid>

      <TripModal
        isOpen={isOpen}
        onClose={onClose}
        onSave={selectedTripId ? updateTrip : addTrip}
        onDelete={deleteTrip}
        tripName={newTripName}
        setTripName={setNewTripName}
        tripDescription={newTripDescription}
        setTripDescription={setNewTripDescription}
        locations={newLocations}
        setLocations={setNewLocations}
        activities={newActivities}
        setActivities={setNewActivities}
        events={newEvents}
        setEvents={setNewEvents}
        items={newItems}
        setItems={setNewItems}
        addNewItemToList={addNewItemToList}
        updateListItem={updateListItem}
        selectedTripId={selectedTripId}
      />
    </Box>
    <Footer />
   <div/>
  );
};

const TripCard = ({ trip, onOpen }) => (
  <Box
    w={'100%'}
    h={'100%'}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'}
    p={4}
  >
    <Text fontSize="xl" mb={2}>{trip.name}</Text>
    <Text fontSize="md" color="gray.500" mb={4}>{trip.description}</Text>
    <Button onClick={onOpen} colorScheme="teal">Details</Button>
  </Box>
);

const TripModal = ({
  isOpen, onClose, onSave, onDelete, tripName, setTripName, tripDescription, setTripDescription,
  locations, setLocations, activities, setActivities, events, setEvents, items, setItems,
  addNewItemToList, updateListItem, selectedTripId
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{selectedTripId ? 'Edit Trip' : 'Create Trip'}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Name:</Text>
        <Input value={tripName} onChange={(e) => setTripName(e.target.value)} />
        <Text mt={4}>Description:</Text>
        <Textarea value={tripDescription} onChange={(e) => setTripDescription(e.target.value)} />

        <Divider my={4} />

        <Text>Locations:</Text>
        {locations.map((location, index) => (
          <Input key={index} value={location} onChange={(e) => updateListItem(setLocations, locations, index, e.target.value)} mt={2} />
        ))}
        <Button onClick={() => addNewItemToList(setLocations, locations)} mt={2} colorScheme="teal">Add Location</Button>

        <Divider my={4} />

        <Text>Activities:</Text>
        {activities.map((activity, index) => (
          <Input key={index} value={activity} onChange={(e) => updateListItem(setActivities, activities, index, e.target.value)} mt={2} />
        ))}
        <Button onClick={() => addNewItemToList(setActivities, activities)} mt={2} colorScheme="teal">Add Activity</Button>

        <Divider my={4} />

        <Text>Events:</Text>
        {events.map((event, index) => (
          <Input key={index} value={event} onChange={(e) => updateListItem(setEvents, events, index, e.target.value)} mt={2} />
        ))}
        <Button onClick={() => addNewItemToList(setEvents, events)} mt={2} colorScheme="teal">Add Event</Button>

        <Divider my={4} />

        <Text>Items:</Text>
        {items.map((item, index) => (
          <Input key={index} value={item} onChange={(e) => updateListItem(setItems, items, index, e.target.value)} mt={2} />
        ))}
        <Button onClick={() => addNewItemToList(setItems, items)} mt={2} colorScheme="teal">Add Item</Button>

      </ModalBody>
      <ModalFooter>
        {selectedTripId && <Button colorScheme="red" mr={3} onClick={onDelete}>Delete</Button>}
        <Button colorScheme="blue" mr={3} onClick={onSave}>{selectedTripId ? 'Update' : 'Create'}</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default Trips;
