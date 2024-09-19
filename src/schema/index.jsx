import * as Yup from "yup"

export const userSchema = Yup.object({
    name : Yup.string().min(2).max(12).required("Please enter your name"),
    email : Yup.string().email().required("Please enter your email"),
    password : Yup.string().min(4).max(15).required("Please enter your password"),
    confirm_password : Yup.string().required().oneOf([Yup.ref('password'), null], "Password must match")
})