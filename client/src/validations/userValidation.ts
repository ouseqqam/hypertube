import * as yup from 'yup'

const userSchema = yup.object().shape({
    username: yup.string()
    .min(2, 'Username must be at most 12 characters')
    .max(12, 'Username must be at most 12 characters')
    .required('Username is required'),

    email: yup.string().email('Invalid email').required('Email is required'),

    firstName: yup.string().required('First Name is required'),

    lastName: yup.string().required('Last Name is required'),

    password: yup.string()
      .min(8, 'Password must be between 8 characters and 12')
      .max(16, 'Password must be between 8 characters and 16')
      .required('Password is required'),
  })

export default userSchema