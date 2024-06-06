import * as Yup from 'yup';

export const loginFormValidation = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

export const registerFormValidation = Yup.object({
    firstname: Yup
        .string()
        .min(2, 'Firstname cannot be shorter than 2 characters!')
        .required('Firstname is required'),
    lastname: Yup
        .string()
        .min(2, 'Lastname cannot be shorter than 2 characters!')
        .required('Lastname is required'),
    username: Yup.string()
        .min(5, 'Username cannot be shorter than 5 characters!')
        .max(25, 'Username cannot be longer than 25 characters!')
        .required('Username is required'),
    email: Yup.string().email('Enter a valid email!').required('Email is required'),
    password:   Yup.string()
        .min(8, 'Password cannot be shorter than 8 characters!')
        .max(25, 'Password cannot be longer than 25 characters!')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match!')
        .required('Password confirmation is required!')
});

export const userUpdateFormValidation = Yup.object({
    fullname: Yup
        .string()
        .min(2, 'Fullname cannot be shorter than 4 characters!')
        .required('Fullname is required'),
    username: Yup.string()
        .min(5, 'Username cannot be shorter than 5 characters!')
        .max(25, 'Username cannot be longer than 25 characters!')
        .required('Username is required'),
    image: Yup
        .mixed()
        .nullable(true)
        .test("fileFormat", "Not a valid image type", value => {
            if (value) {
                const supportedFormats = ['jpg', 'jpeg', 'png'];
                return supportedFormats.includes(value.name.split('.').pop());
            }
            return true;
        })
        .test('fileSize', 'File size must be less than 3MB', value => {
            if (value) {
                return value.size <= 3145728;
            }
            return true;
        })
})

export const tripRegistrationFormValidation = Yup.object({
    startDate: Yup.date()
        .typeError('Please enter a valid start date')
        .min(new Date(), 'Start date cannot be before today')
        .required('Start date is required'),
    endDate: Yup.date()
        .typeError('Please enter a valid end date')
        .min(Yup.ref('startDate'), 'End date must be after start date')
        .required('End date is required'),
})

export const postRegistrationFormValidation = Yup.object({
    text: Yup.string()
        .min(10, 'Text must be at least 10 characters!')
        .max(500, 'Text cannot be longer than 500 characters!')
        .required('Text is required'),
    tripId: Yup.number()
        .required("Trip is required!"),
    image: Yup
        .mixed()
            .nullable(true)
            .test("fileFormat", "Not a valid image type", value => {
                if (value) {
                    const supportedFormats = ['jpg', 'jpeg', 'png'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
        .test('fileSize', 'File size must be less than 3MB', value => {
            if (value) {
                return value.size <= 3145728;
            }
            return true;
        })
})

export const reviewRegistrationFormValidation = Yup.object({
    description: Yup
        .string()
        .min(10, "Description has to be at least 10 characters!")
        .max(500, "Description cannot be longer than 500 characters!")
        .required("Description is required!"),
    rating: Yup
        .number()
        .min(0, "Rating cannot be less than 0!")
        .max(5, "Rating cannot be larger than 5")
        .required("Rating is required!"),
    locationId: Yup
        .number()
        .required("Location is required!")
})

export const recommendationRegistrationFormValidation = Yup.object({
    description: Yup
        .string()
        .min(10, "Description has to be at least 10 characters!")
        .max(500, "Description cannot be longer than 500 characters!")
        .required("Description is required!"),
    activityId: Yup
        .number()
        .required("Activity is required!")
})

export const planRegistrationFormValidation = Yup.object({
    date: Yup.date()
        .typeError('Please enter a valid date')
        .min(new Date(), 'Date cannot be before today')
        .required('Date is required'),
    locationId: Yup
        .number()
        .required("Location is required!")
})