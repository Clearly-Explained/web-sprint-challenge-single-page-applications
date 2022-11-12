import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('Name is required!')
    .min(2, "name must be at least 2 characters"),
    email: yup
    .string()
    .required('Email is required!')
    .email('Must be a valid email address!'),
    size:yup
    .string()
    .oneOf(['Kids', 'Small', 'Medium', 'Large',], 'What size would you like your pizza?'),
    address:yup
    .string(),
    specialText:yup
    .string(),
    bacon: yup.boolean(),
    pineapple: yup.boolean(),
    sardines: yup.boolean(),
    anchovies: yup.boolean()
})

export default schema;