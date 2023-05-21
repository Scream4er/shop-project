import {useState} from "react";
import {useDispatch} from "react-redux";

import FormInput from "../form-input";
import Button from "../button";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

import {SignUpContainer} from "./sign-up-form.styles";
import {signUpStart} from "../../store/user/user.action";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();


    const resetFormField = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            console.log('Password do not match');
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormField();
        } catch (error) {
            console.log('user creation error', error)
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type='submit'>Sign up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;