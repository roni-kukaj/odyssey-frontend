import React from 'react';
import {
  Box, Heading, SimpleGrid, Text, Image
} from '@chakra-ui/react';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';

const Activities = () => {
  const activities = [
    {
      name: 'City Tour in Madrid',
      description: 'Explore the main attractions of the city with a guided tour.',
      duration: '3 hours',
      cost: '$50',
      imageUrl: 'https://lp-cms-production.imgix.net/2022-12/GettyImages-679775764.jpeg',
    },
    {
      name: 'Museum Visit in Leiden',
      description: 'Visit the city museum and enjoy a variety of exhibits.',
      duration: '2 hours',
      cost: '$30',
      imageUrl: 'https://assets.plaece.nl/thumb/OKeCuIfnDaMfIfoLLJPZxSMhARKag9oONeuDnCs0Z8s/resizing_type:fit/width:960/height:0/gravity:sm/enlarge:0/aHR0cHM6Ly9hc3NldHMucGxhZWNlLm5sL2t1bWEtbGVpZGVuL3VwbG9hZHMvbWVkaWEvNWZiZDE1NTFiNDc4My9yaWprc211c2V1bS12YW4tb3VkaGVkZW4tZ3JpZWtlbi1mb3RvLW1pa2UtYmluay5qcGc.jpg',
    },
    {
      name: 'Boat Ride in Niagara',
      description: 'Enjoy a relaxing boat ride on the river.',
      duration: '1 hour',
      cost: '$50',
      imageUrl: 'https://www.niagarafallstourism.com/site/assets/files/2180/hornblower_2-1.jpg',
    },
    {
      name: 'Hiking Adventure in Himalayas',
      description: 'Join a guided hike through scenic trails.',
      duration: '1 day',
      cost: '$80',
      imageUrl: 'https://static.tnn.in/thumb/msid-107627372,thumbsize-109902,width-1280,height-720,resizemode-75/107627372.jpg',
    },

    {
      name: 'Historical Tour in Cappadocia, Ephesus and Pamukkale',
      description: 'Discover the history of the city with a guided tour.',
      duration: '4 days',
      cost: '$250',
      imageUrl: 'https://static.independent.co.uk/2023/08/31/12/iStock-1484200613.jpg?width=1200&height=1200&fit=crop',
    },

    {
      name: 'Sunny Hill Festival in Pristina',
      description: 'Every moment is an opportunity to embrace joy and create lasting memories, enjoy the festival.',
      duration: '4 days',
      cost: '$150',
      imageUrl: 'https://studioberar.com/wp-content/uploads/2022/08/298442207_483943127071523_7188672003449958000_n-1-e1660566634631.jpg',
    },
  ];

  return (
    <div>
      <Navbar />
      <Box p="4" mx={{ base: '4', md: '90px' }} mt="3">

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4" mt="5">
          {activities.map((activity, index) => (
            <Box key={index} p="5" shadow="md" borderWidth="1px" bg="blue.50">
              <Image src={activity.imageUrl} alt={activity.name} boxSize="380px" objectFit="cover" mb="4" />
              <Text fontWeight="bold"> {activity.name}</Text>
              <Text> {activity.description}</Text>
              <Text>Duration: {activity.duration}</Text>
              <Text>Cost: {activity.cost}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </div>
  );
};

export default Activities;
