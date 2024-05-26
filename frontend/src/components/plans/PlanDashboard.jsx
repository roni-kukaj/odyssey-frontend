import React, { useState, useRef } from 'react';
import {
  Box, Button, FormControl, FormLabel, Input, Stack, useToast, Image, Text, ButtonGroup, Heading, HStack,
  AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay
} from '@chakra-ui/react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';

const PlanDashboard = () => {
  const [plans, setPlans] = useState([]);
  const [dates, setDates] = useState({});
  const [isEditing, setIsEditing] = useState(null);
  const [editedPlanDate, setEditedPlanDate] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const cancelRef = useRef();
  const toast = useToast();


  const locations = [
    { id: 1, name: 'London', imageUrl: 'https://a.cdn-hotels.com/gdcs/production29/d1870/6a5ec560-bb25-11e8-970b-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium' },
    { id: 2, name: 'New York', imageUrl: 'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg' },

  ];

  const handleDateChange = (locationId, value) => {
    setDates(prev => ({ ...prev, [locationId]: value }));
  };

  const addPlan = (location) => {
    const newPlan = { locationId: location.id, location: location.name, visitDate: dates[location.id], imageUrl: location.imageUrl };
    setPlans(prev => [...prev, newPlan]);
    setDates(prev => ({ ...prev, [location.id]: '' })); // Reset the date for this location
  };

  const editPlan = (index) => {
    setIsEditing(index);
    setEditedPlanDate(plans[index].visitDate);
  };

  const savePlan = () => {
    const updatedPlans = plans.map((plan, idx) => idx === isEditing ? { ...plan, visitDate: editedPlanDate } : plan);
    setPlans(updatedPlans);
    setIsEditing(null);
    setEditedPlanDate('');
  };

  const openDeleteDialog = (index) => {
    setDeleteIndex(index);
    setIsAlertOpen(true);
  };

  const closeDeleteDialog = () => {
    setIsAlertOpen(false);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedPlans = plans.filter((_, planIndex) => planIndex !== deleteIndex);
      setPlans(updatedPlans);
      closeDeleteDialog();
    }
  };

  return (
    <div>
      <Navbar />
      <Box p="4" mx={{ base: '4', md: '90px' }} mt="3">
        <Heading as="h1" size="xl" mb="6">Plan your trip</Heading>
        <HStack spacing="4" wrap="wrap">
          {locations.map((location) => (
            <Box key={location.id} p="3" shadow="md" borderWidth="1px" maxWidth="200px" mb="4">
              <Text fontWeight="bold">{location.name}</Text>
              <Image src={location.imageUrl} alt={location.name} boxSize="150px" objectFit="cover" />
              <FormControl mt="3">
                <FormLabel>Visit Date</FormLabel>
                <Input
                  placeholder="YYYY-MM-DD"
                  value={dates[location.id] || ''}
                  onChange={(e) => handleDateChange(location.id, e.target.value)}
                />
                <Button mt="2" colorScheme='blue' onClick={() => addPlan(location)}>Add Trip Plan</Button>
              </FormControl>
            </Box>
          ))}
        </HStack>
        <Stack spacing={4} mt="5">
          {plans.map((plan, index) => (
            <Box key={index} p="5" shadow="md" borderWidth="1px" bg="blue.50">
              {isEditing === index ? (
                <FormControl>
                  <Input
                    placeholder="Visit Date"
                    value={editedPlanDate}
                    onChange={(e) => setEditedPlanDate(e.target.value)}
                    mb="2"
                  />
                  <ButtonGroup spacing="2">
                    <Button colorScheme='blue' onClick={savePlan}>Save Changes</Button>
                    <Button onClick={() => setIsEditing(null)}>Cancel</Button>
                  </ButtonGroup>
                </FormControl>
              ) : (
                <>
                  <Text fontWeight="bold">Location: {plan.location}</Text>
                  <Text fontWeight="bold">Visit Date: {plan.visitDate}</Text>
                  <ButtonGroup spacing="2">
                    <Button colorScheme='blue' onClick={() => editPlan(index)}>Edit</Button>
                    <Button colorScheme='red' onClick={() => openDeleteDialog(index)}>Delete</Button>
                  </ButtonGroup>
                </>
              )}
            </Box>
          ))}
        </Stack>
        <AlertDialog
          isOpen={isAlertOpen}
          leastDestructiveRef={cancelRef}
          onClose={closeDeleteDialog}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Plan
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure you want to delete this plan? This action cannot be undone.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={closeDeleteDialog}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={confirmDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
      <Footer />
    </div>
  );
};

export default PlanDashboard;
