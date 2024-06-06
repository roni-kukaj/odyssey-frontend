import {
    Avatar,
    Box,
    Button,
    Center,
    Divider,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay, Stack,
    Text, useDisclosure
} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import {userUpdateFormValidation} from "../../services/validation.js";
import {updateUser} from "../../services/client.js";
import {errorNotification, successNotification} from "../../services/notification.js";
import {FileInput, TextInput} from "../shared/FormComponents.jsx";

const UserCard = ({ user, setUser }) => {

    const { isOpen: isUpdateOpen, onOpen: onOpenUpdate, onClose: onCloseUpdate } = useDisclosure();
    const { isOpen: isPasswordOpen, onOpen: onOpenPassword, onClose: onClosePassword } = useDisclosure();

    const UserUpdateForm = () => {
        return (
            <Formik
                validateOnMount={true}
                validationSchema={ userUpdateFormValidation }
                initialValues={{fullname: user.fullname, username: user.username, file: null}}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    const request = {
                        fullname: values.fullname,
                        username: values.username,
                        password: null,
                        file: values.file
                    };
                    console.log(request);
                    updateUser(user.id, request).then(res => {
                        successNotification("Success", "Successfully updated user information!");
                        setUser({
                            id: user.id,
                            fullname: request.fullname,
                            username: request.username,
                            email: user.email,
                            avatar: user.avatar,
                            role: user.role
                        })
                        onCloseUpdate();
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
                            <TextInput label={'Fullname'} name={'fullname'} type={'text'} placeholder={'John Smith'} />
                            <TextInput label={'Username'} name={'username'} type={'text'} placeholder={'johnsmith'} />
                            <FileInput label="Profile Picture" name="file" type="file" />
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
                                Update
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        );
    }

    const PasswordChangeForm = () => {
        return (
            <>
                Hello there
            </>
        );
    }

    return (
        <>
            <Box align={'center'} my={3}>
                <Text fontSize={'2xl'} fontWeight={'bold'}>User Details</Text>
            </Box>
            <Divider />
            <Center>
                <Avatar src={user?.avatar} boxSize={'xs'} m={5} />
            </Center>
            <Box px={10} align={'center'}>
                <Text fontSize={'lg'}><strong>Fullname:</strong> {user?.fullname}</Text>
                <Text fontSize={'lg'}><strong>Username:</strong> <i>@{user?.username}</i></Text>
                <Text fontSize={'lg'}><strong>Email:</strong> {user?.email}</Text>
                <Text fontSize={'lg'}><strong>Role:</strong> {user?.role.name}</Text>
            </Box>
            <Divider mt={5} />
            <Box w={'100%'} align={'center'}>
                <Button my={5} mx={5} bg={'orange.500'} color={'white'} onClick={onOpenPassword}>
                    Change Password
                </Button>
                <Button my={5} mx={5} bg={'green.500'} color={'white'} onClick={onOpenUpdate}>
                    Update Information
                </Button>
            </Box>

            <Drawer onClose={onCloseUpdate} isOpen={isUpdateOpen} size={'lg'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Update your Information</DrawerHeader>
                    <Divider />
                    <DrawerBody mt={2}>
                        <Stack spacing={4}>
                            <UserUpdateForm />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Drawer onClose={onClosePassword} isOpen={isPasswordOpen} size={'lg'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Reset your password</DrawerHeader>
                    <Divider />
                    <DrawerBody mt={2}>
                        <Stack spacing={4}>
                            <PasswordChangeForm />
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default UserCard;