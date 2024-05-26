import React, { useState } from 'react';
import { Box, Image, Badge, Grid, Avatar, Text, HStack, Input, Button, VStack, Collapse, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Hotels = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [properties, setProperties] = useState([
    {
      imageUrl: 'https://www.mawa-design.de/app/uploads/2020/06/hotel-nhow-rotterdam-tischleuchte-und-stehleuchte-elle-02-750x727.jpg',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Le Marin Boutique Hotel',
      formattedPrice: '$1,900.00',
      user: 'John Doe',
      userImage: 'https://bit.ly/ryan-florence',
      location: 'Rotterdam, Netherlands',
      bookingUrl: 'https://www.booking.com/hotel/nl/le-marin.en-gb.html?aid=304142&label=gen173rf-1FCBcoggI46AdIM1gDaIECiAEBmAEJuAEXyAEM2AEB6AEB-AECiAIBogIObG9jYWxob3N0OjUxNzOoAgO4AvvszrIGwAIB0gIkZDI5YjkwZTYtZTRhYy00NGNkLWI5YzEtNzhjNzJmY2Q5M2Jm2AIF4AIB&sid=577d60089645f9b9fbfb1ed82b015bcc&dest_id=-2152403;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=14;hpos=14;nflt=distance%3D1000;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1716763390;srpvid=af409fab9df901c2;type=total;ucfs=1&'
    },
    {
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=1400&s=1',
      imageAlt: 'View of Eiffel Tower',
      beds: 2,
      baths: 1,
      title: 'Cozy apartment with a view of the Eiffel Tower',
      formattedPrice: '$1,500.00',
      user: 'Jane Smith',
      userImage: 'https://bit.ly/kent-c-dodds',
      location: 'Paris, France',
      bookingUrl: 'https://booking.com/hotel2'
    },
    {
      imageUrl: 'https://img.monocle.com/25-25/dsc07069-5f0dbcf571bc1.jpg?g=center&q=90',
      imageAlt: 'Historic building in Vienna',
      beds: 4,
      baths: 3,
      title: 'Spacious flat in historic building in Vienna',
      formattedPrice: '$2,300.00',
      user: 'Alice Johnson',
      userImage: 'https://bit.ly/prosper-baba',
      location: 'Vienna, Austria',
      bookingUrl: 'https://booking.com/hotel3'
    },
  ]);

  const [newProperty, setNewProperty] = useState({
    imageUrl: '',
    imageAlt: '',
    beds: '',
    baths: '',
    title: '',
    formattedPrice: '',
    user: '',
    userImage: '',
    location: '',
    bookingUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty(prevState => ({ ...prevState, [name]: value }));
  };

  const addProperty = () => {
    setProperties(prevProperties => [...prevProperties, newProperty]);
    setNewProperty({
      imageUrl: '',
      imageAlt: '',
      beds: '',
      baths: '',
      title: '',
      formattedPrice: '',
      user: '',
      userImage: '',
      location: '',
      bookingUrl: ''
    });
    setShowForm(false);
  };

  const handlePropertyClick = (index) => {
    setExpandedIndex(index);
    onOpen();
  };

  const handleBoxClick = (e, index) => {
    if (!e.target.closest('button')) {
      handlePropertyClick(index);
    }
  };

  return (
    <>
      <Box p='6'>
        <Button
          colorScheme='teal'
          onClick={() => setShowForm(!showForm)}
          leftIcon={showForm ? <MinusIcon /> : <AddIcon />}
        >
          {showForm ? 'Hide Form' : 'Add Hotel'}
        </Button>
        <Collapse in={showForm} animateOpacity>
          <Box mt='4'>
            <VStack spacing='4' align='start'>
              <Input placeholder='Image' name='imageUrl' value={newProperty.imageUrl} onChange={handleInputChange} />
              <Input type='number' placeholder='Number of Bedrooms' name='beds' value={newProperty.beds} onChange={handleInputChange} />
              <Input type='number' placeholder='Number of Bathrooms' name='baths' value={newProperty.baths} onChange={handleInputChange} />
              <Input placeholder='Title' name='title' value={newProperty.title} onChange={handleInputChange} />
              <Input type='number' placeholder='Price' name='formattedPrice' value={newProperty.formattedPrice} onChange={handleInputChange} />
              <Input placeholder='Location' name='location' value={newProperty.location} onChange={handleInputChange} />
              <Input placeholder='Booking URL' name='bookingUrl' value={newProperty.bookingUrl} onChange={handleInputChange} />
              <Button colorScheme='teal' onClick={addProperty}>Add Hotel</Button>
            </VStack>
          </Box>
        </Collapse>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt='6' ml='5'>
        {properties.map((property, index) => (
          <Box
            key={index}
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            onClick={(e) => handleBoxClick(e, index)}
            cursor='pointer'
          >
            <Image src={property.imageUrl} alt={property.imageAlt} />
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  bedrooms: {property.beds} &bull; bathrooms: {property.baths}
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {property.title}
              </Box>
              <Box>
                {property.formattedPrice}
                <Box as='span' color='gray.600' fontSize='sm'>
                  / wk
                </Box>
              </Box>
              <Box mt='2'>
                <HStack spacing="2">
                  <Avatar size="xs" name={property.user} src={property.userImage} />
                  <Text fontSize='sm' color='gray.500'>Uploaded by {property.user}</Text>
                </HStack>
              </Box>
              <Box mt='2'>
                <Text fontSize='sm' color='gray.500'>Location: {property.location}</Text>
              </Box>
              <Box mt='4'>
                <Button colorScheme='teal' as='a' href={property.bookingUrl} target='_blank' onClick={(e) => e.stopPropagation()}>
                  Book
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
      {expandedIndex !== null && (
        <Modal isOpen={isOpen} onClose={onClose} size='xl'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{properties[expandedIndex].title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={properties[expandedIndex].imageUrl} alt={properties[expandedIndex].imageAlt} mb='4' />
              <Box>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  New
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                  mb='2'
                >
                  bedrooms: {properties[expandedIndex].beds} &bull; bathrooms: {properties[expandedIndex].baths}
                </Box>
                <Box>
                  {properties[expandedIndex].formattedPrice}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    / wk
                  </Box>
                </Box>
                <Box mt='2'>
                  <HStack spacing="2">
                    <Avatar size="xs" name={properties[expandedIndex].user} src={properties[expandedIndex].userImage} />
                    <Text fontSize='sm' color='gray.500'>Uploaded by {properties[expandedIndex].user}</Text>
                  </HStack>
                </Box>
                <Box mt='2'>
                  <Text fontSize='sm' color='gray.500'>Location: {properties[expandedIndex].location}</Text>
                </Box>
                <Box mt='4'>
                  <Button colorScheme='teal' as='a' href={properties[expandedIndex].bookingUrl} target='_blank' onClick={(e) => e.stopPropagation()}>
                    Book
                  </Button>
                </Box>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default Hotels;
