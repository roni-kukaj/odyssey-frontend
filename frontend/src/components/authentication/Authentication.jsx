import {
    Avatar,
    AvatarGroup,
    Text,
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    useBreakpointValue, Flex, Button, Icon, Link, HStack, IconButton
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { FaHome } from "react-icons/fa";
import { TextInput } from "../shared/FormComponents.jsx";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import {errorNotification, successNotification} from "../../services/notification.js";
import {loginFormValidation, registerFormValidation} from "../../services/validation.js";

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
];

const Authentication = () => {

    const [loginState, setLoginState] = useState(true);
    const { login, isUserAuthenticated, register } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isUserAuthenticated()) {
            navigate("/");
        }
    })

    const handleClick = () => {
        navigate("/");
    }

    const onLogin = () => {
        setLoginState(true);
    }
    const onRegister = () => {
        setLoginState(false);
    }

    const containerProps = loginState ? {} : { display: 'flex', alignItems: 'center', justifyContent: 'center' };

    const LoginForm = () => {

        return (
            <Formik
                validateOnMount={true}
                validationSchema={loginFormValidation}
                initialValues={{username: '', password: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    login(values).then(() => {
                        navigate("/");
                    }).catch(err => {
                        errorNotification(
                            err.code,
                            err.message
                        )
                    }).finally(() => setSubmitting(false));
                }}
            >
                {({isValid, isSubmitting}) => (
                    <Form>
                        <Stack spacing={5}>
                            <TextInput label={'Username'} name={'username'} type={'text'} placeholder={'johnsmith'} />
                            <TextInput label={'Password'} name={'password'} type={'password'} placeholder={'Type your password here...'} />
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                type={'submit'}
                                bgGradient="linear(to-br, #555555, #0E4975)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, #000000, #0E4975)',
                                    boxShadow: 'xl',
                                }}
                                disabled={!isValid || isSubmitting}
                            >
                                Authenticate
                            </Button>
                            <Text>Dont have an account? <Link href={"#"} onClick={onRegister} color={'teal'}>Register now!</Link> </Text>
                        </Stack>
                    </Form>
                )}
            </Formik>
        );
    }
    const RegisterForm = () => {
        return (
            <Formik
                validateOnMount={true}
                validationSchema={registerFormValidation}
                initialValues={{firstname: '', lastname: '', username: '', email: '', password: '', confirm_password: ''}}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    const data = {
                        fullname: values.firstname + ' ' + values.lastname,
                        username: values.username,
                        email: values.email,
                        password: values.password
                    };
                    console.log('--->', data);
                    register(data).then(() => {
                        successNotification("Success", "You've been successfully registered to the platform!");
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
                        <Stack spacing={2}>
                            <HStack>
                                <TextInput label={'Firstname'} name={'firstname'} type={'text'} placeholder={'John'} />
                                <TextInput label={'Lastname'} name={'lastname'} type={'text'} placeholder={'Smith'} />
                            </HStack>
                            <TextInput label={'Username'} name={'username'} type={'text'} placeholder={'johnsmith'} />
                            <TextInput label={'Email'} name={'email'} type={'email'} placeholder={'johnsmith@gmail.com'} />
                            <TextInput label={'Password'} name={'password'} type={'password'} placeholder={'Type your password here...'} />
                            <TextInput label={'Confirm Password'} name={'confirm_password'} type={'password'} placeholder={'Confirm password...'} />
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                type={'submit'}
                                bgGradient="linear(to-br, #555555, #0E4975)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, #000000, #0E4975)',
                                    boxShadow: 'xl',
                                }}
                                disabled={!isValid || isSubmitting}
                            >
                                Register
                            </Button>
                            <Text>Already have an account? <Link href={"#"} onClick={onLogin} color={'teal'}>Log In instead!</Link> </Text>
                        </Stack>
                    </Form>
                )}
            </Formik>
        );
    }

    return (
        <>
        <Box
            position={'relative'}
            height={'100vh'}
            bgGradient="linear(to-br, #000000, #0E4975)"
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Container
                as={ SimpleGrid }
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}
                {...containerProps}
            >


                <Stack spacing={{ base: 10, md: 20 }} color={'white'}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Travellers {' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text"
                        >
                            &
                        </Text><br />{' '}
                        Tourists
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    size={{ base: 'md', md: 'lg' }}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400, white)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'white'}
                            color={'black'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, black, black)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            <strong>YOU</strong>
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        { loginState ? (
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                    Welcome back
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, blue.400, blue.400)"
                                    bgClip="text">
                                    !
                                </Text>
                            </Heading>
                        ) : (
                            <>
                                <Heading
                                    color={'gray.800'}
                                    lineHeight={1.1}
                                    fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                    Join our platform
                                    <Text
                                        as={'span'}
                                        bgGradient="linear(to-r, blue.400, blue.400)"
                                        bgClip="text">
                                        !
                                    </Text>
                                </Heading>
                                <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                    If you are a person who travels to different places, and need a way to plan ahead, look no further!!!
                                    <br />
                                    Join us!
                                </Text>
                            </>
                        )}
                    </Stack>
                    <Box>
                        { loginState ?
                            <LoginForm setLoginState={onRegister} /> :
                            <RegisterForm setLoginState={onLogin} />
                        }
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
            <IconButton
                position="absolute"
                bottom={10}
                right={10}
                onClick={handleClick}
            >
                <FaHome />
            </IconButton>

        </Box>
        </>
    );
}

const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};


   
export default Authentication;