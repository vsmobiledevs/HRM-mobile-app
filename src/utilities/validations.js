import * as yup from 'yup';

export const loginFormFields = {
  email: '',
  password: '',
};

export const signupFormFields = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmpassword: '',
};

export const forgotPassFormFields = {
  email: '',
};

export const changePassFormFields = {
  password: '',
  confirmPassword: '',
};

export const leaveMsgFormFields = {
  message: '',
};

export const accessoryMsgFormFields = {
  message: '',
};

export const LoginVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
});

export const SignupVS = yup.object().shape({
  firstname: yup.string().required('First Name Required'),
  lastname: yup.string().required('Last Name Required'),
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmpassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

export const ForgotPassVS = yup.object().shape({
  email: yup
    .string()
    .required('Email Required')
    .email('Please provide a valid email address'),
});

export const ChangePassVS = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password Required'),
  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm Password Required')
    .oneOf([yup.ref('password'), null], 'Password must match'),
});

export const LeaveMsgVS = yup.object().shape({
  message: yup.string().required('Message Required'),
});

export const AccessoryMsgVS = yup.object().shape({
  message: yup.string().required('Message Required'),
});
