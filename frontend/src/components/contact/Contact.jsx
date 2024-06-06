import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Flex, Container, Wrap, WrapItem, InputGroup, InputLeftElement, Stack, useColorModeValue
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

function Contact() {
    return (
        <>
            <Navbar />
            <Box maxW="full" mt={0} centerContent overflow="hidden">
                <Flex direction="row" wrap="wrap" justifyContent="center">
                    <Box
                        bg="#02054B"
                        bgGradient='linear(to-bl, #010101, #0E4975)'
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}
                        flex="1"
                    >
                        <Box p={4}>
                            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                                <WrapItem>
                                    <Box>
                                        <Heading>Contact</Heading>
                                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                            Fill up the form below to contact
                                        </Text>
                                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                            <VStack pl={0} spacing={3} alignItems="flex-start">
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB' }}
                                                    leftIcon={<MdPhone color="white" size="20px" />}
                                                >
                                                    +383 (0) 49 123-456
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB' }}
                                                    leftIcon={<MdEmail color="white" size="20px" />}
                                                >
                                                    contact@odyssey.com
                                                </Button>
                                                <Button
                                                    size="md"
                                                    height="48px"
                                                    width="200px"
                                                    variant="ghost"
                                                    color="#DCE2FF"
                                                    _hover={{ border: '2px solid #1C6FEB' }}
                                                    leftIcon={<MdLocationOn color="white" size="20px" />}
                                                >
                                                    Prishtinë, Kosova
                                                </Button>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                                <WrapItem>
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5}>
                                                <FormControl id="name">
                                                    <FormLabel>Your Name</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<BsPerson color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Mail</FormLabel>
                                                    <InputGroup borderColor="#E0E1E7">
                                                        <InputLeftElement
                                                            pointerEvents="none"
                                                            children={<MdOutlineEmail color="gray.800" />}
                                                        />
                                                        <Input type="text" size="md" />
                                                    </InputGroup>
                                                </FormControl>
                                                <FormControl id="name">
                                                    <FormLabel>Message</FormLabel>
                                                    <Textarea
                                                        borderColor="gray.300"
                                                        _hover={{
                                                            borderRadius: 'gray.300',
                                                        }}
                                                        placeholder="message"
                                                    />
                                                </FormControl>
                                                <FormControl id="name" float="right">
                                                    <Button
                                                        variant="solid"
                                                        colorScheme={'blue'}
                                                    >
                                                        Send Message
                                                    </Button>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                    <Flex
                        align={'center'}
                        justify={'center'}
                        flex="1"

                    >
                        <Container
                            maxW={'lg'}
                            boxShadow={'xl'}
                            rounded={'lg'}
                            p={6}
                            direction={'column'}
                            bg="#02054B"
                            bgGradient='linear(to-bl, #010101, #0E4975)'
                            color={'white'}
                        >
                            <Heading
                                as={'h2'}
                                fontSize={{ base: 'xl', sm: '2xl' }}
                                textAlign={'center'}
                                mb={5}
                            >
                                Subscribe to our Newsletter
                            </Heading>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                as={'form'}
                                spacing={'12px'}
                            >
                                <FormControl>
                                    <Input
                                        variant={'solid'}
                                        borderWidth={1}
                                        color={'gray.800'}
                                        _placeholder={{
                                            color: 'gray.400',
                                        }}
                                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                                        id={'email'}
                                        type={'email'}
                                        required
                                        placeholder={'Your Email'}
                                        aria-label={'Your Email'}
                                    />
                                </FormControl>
                                <FormControl w={{ base: '100%', md: '40%' }}>
                                    <Button
                                        colorScheme={'blue'}
                                        w="100%"
                                    >
                                        Submit
                                    </Button>
                                </FormControl>
                            </Stack>
                        </Container>
                    </Flex>
                </Flex>
            </Box>

            <Footer />
        </>
      );
}

export default Contact;