import * as Yup from 'yup';
export const loginSchema = Yup.object({
    email: Yup.string().email().required("Email Address is required!"),
    password: Yup.string().min(6).required("Password is required!"),
    captcha: Yup.string().required("Captcha is required!")
})

export const signupSchema = Yup.object({
    email: Yup.string().email().required("Email Address is required!"),
    password: Yup.string().min(6).required("Password is required!"),
    captcha: Yup.string().required("Captcha is required!")
})

export const resetSchema = Yup.object({
    email: Yup.string().email().required("Email Address is required!"),
    captcha: Yup.string().required("Captcha is required!")
})
