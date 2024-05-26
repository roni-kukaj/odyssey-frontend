import React, { useState } from 'react';
import { Box, Image, Badge, SimpleGrid, Text, Avatar, HStack, Input, Button, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';

const Post = ({ property, onClick }) => (
  <Box maxW='sm' mt="5" ml="5" borderWidth='2px' borderRadius='lg' overflow='hidden' onClick={() => onClick(property)}>
    <Image src={property.imageUrl} alt={property.imageAlt} />
    <Box p='6'>
      <Box display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          New
        </Badge>
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
      <Box mt='2'>
        <Text noOfLines={2}>{property.description}</Text>
      </Box>
      <Box mt='2'>
        <HStack spacing="2">
          <Avatar size="xs" name={property.user} src={property.userImage} />
          <Text fontSize='sm' color='gray.500'>Uploaded by {property.user}</Text>
        </HStack>
      </Box>
    </Box>
  </Box>
);

const Posts = () => {
  const [properties, setProperties] = useState([
    {
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/0d/97/f9/kijk-kubus-show-cube.jpg?w=1400&h=1400&s=1',
      imageAlt: 'Rotterdam image',
      title: 'Rotterdam',
      description: 'Rotterdam is a beautiful modern place located in Netherlandsvdsyuadsyufvewyfvsua.',
      user: 'John Doe',
      userImage: 'https://bit.ly/ryan-florence'
    },
    {
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=1400&s=1',
      imageAlt: 'View of Eiffel Tower',
      title: 'Paris',
      description: 'A stunning view of the Eiffel Tower in Paris.',
      user: 'Jane Smith',
      userImage: 'https://bit.ly/kent-c-dodds'
    },
    {
      imageUrl: 'https://img.monocle.com/25-25/dsc07069-5f0dbcf571bc1.jpg?g=center&q=90',
      imageAlt: 'Historic building in Vienna',
      title: 'Vienna',
      description: 'A historic building in the heart of Vienna.',
      user: 'Alice Johnson',
      userImage: 'https://bit.ly/prosper-baba'
    },
  ]);

  const [newPost, setNewPost] = useState({
    imageUrl: '',
    imageAlt: '',
    title: '',
    description: '',
    user: '',
    userImage: ''
  });

  const [selectedProperty, setSelectedProperty] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProperties((prevProperties) => [newPost, ...prevProperties]);
    setNewPost({
      imageUrl: '',
      imageAlt: '',
      title: '',
      description: '',
      user: '',
      userImage: ''
    });
  };

  const handlePostClick = (property) => {
    setSelectedProperty(property);
    onOpen();
  };

  return (
    <Box p="5">
      <Accordion allowToggle mb="5">
        <AccordionItem>
          <h2>
            <AccordionButton as={Button} colorScheme="teal">
              <Box flex="1" textAlign="left">
                Add a New Post
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb="4">
            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing="3">
                <Input
                  placeholder="Image URL"
                  name="imageUrl"
                  value={newPost.imageUrl}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Image Alt Text"
                  name="imageAlt"
                  value={newPost.imageAlt}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Title"
                  name="title"
                  value={newPost.title}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Description"
                  name="description"
                  value={newPost.description}
                  onChange={handleChange}
                />
                //useri
                {/* <Input
                  placeholder="User Name"
                  name="user"
                  value={newPost.user}
                  onChange={handleChange}
                /> */}
                //foto e userit
                {/* <Input
                  placeholder="User Image URL"
                  name="userImage"
                  value={newPost.userImage}
                  onChange={handleChange}
                /> */}
                <Button type="submit" colorScheme="teal">
                  Add Post
                </Button>
              </VStack>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {properties.map((property, index) => (
          <Post key={index} property={property} onClick={handlePostClick} />
        ))}
      </SimpleGrid>

      {selectedProperty && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProperty.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedProperty.imageUrl} alt={selectedProperty.imageAlt} mb="4" />
              <Text mb="4">{selectedProperty.description}</Text>
              <HStack spacing="2">
                <Avatar size="xs" name={selectedProperty.user} src={selectedProperty.userImage} />
                <Text fontSize='sm' color='gray.500'>Uploaded by {selectedProperty.user}</Text>
              </HStack>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Posts;
