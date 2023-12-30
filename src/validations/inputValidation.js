import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).trim().required(),
  email: yup.string().email().lowercase().trim().required(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase character')
    .matches(/[0-9]/, 'Password must contain at least one numeric characte')
    .required('Password is required')
    .trim(),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .lowercase()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

export const searchSchema = yup.object().shape({
  position: yup.string().required('position is required'),
  city: yup.string().required('city is required'),
});

export const updatePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required('fill the field!'),
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('fill the field!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], "Passwords don't match.")
    .required('fill the field!'),
});
