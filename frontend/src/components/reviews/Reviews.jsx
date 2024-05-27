import React, { useState } from 'react';
import {
  Box, Text, Heading, Stack, FormControl, FormLabel, Input, Button
} from '@chakra-ui/react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    location: '',
    description: '',
    rating: ''
  });
  const [reviews, setReviews] = useState([
    { id: 1, description: 'London offers an unforgettable experience with its iconic landmarks, bustling streets, and endless attractions.', rating: 5, location: 'London' },
    { id: 2, description: 'Awesome trip in New York!', rating: 4, location: 'New York' },
    { id: 3, description: 'Lovely experience!', rating: 4, location: 'Paris' },
    { id: 4, description: 'Fantastic destination!', rating: 5, location: 'Tokyo' },
    { id: 5, description: 'Beautiful scenery!', rating: 3, location: 'Sydney' },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const id = reviews.length + 1;
    const newReviewWithId = { ...newReview, id };
    setReviews([...reviews, newReviewWithId]);
    setNewReview({
      location: '',
      description: '',
      rating: ''
    });
  };

  const [showAddReviewForm, setShowAddReviewForm] = useState(false);

  return (
    <div>
      <Navbar />
      <Box p="4" mx={{ base: '4', md: '90px' }} mt="3">
        <Heading as="h1" size="xl" mb="6">Reviews Dashboard</Heading>
        <Button colorScheme="blue" mb="8" onClick={() => setShowAddReviewForm(!showAddReviewForm)}>
          {showAddReviewForm ? "Hide Form" : "Add New Review"}
        </Button>
        {showAddReviewForm && (
          <Box>
            <Stack spacing={4}>
              <FormControl id="location">
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  name="location"
                  value={newReview.location}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="description">
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  name="description"
                  value={newReview.description}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="rating">
                <FormLabel>Rating</FormLabel>
                <Input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleChange}
                  placeholder="1 to 5"
                />
              </FormControl>
              <Button colorScheme="blue" onClick={handleSubmit}>Submit Review</Button>
            </Stack>
          </Box>
        )}
        <Stack spacing={4} mt="5">
          {reviews.map((review) => (
            <Box key={review.id} p="5" shadow="md" borderWidth="1px" bg="green.50">
              <Text fontWeight="bold">Location: {review.location}</Text>
              <Text>Description: {review.description}</Text>
              <Text>Rating: {review.rating}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default Reviews;
