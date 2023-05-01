import {useState} from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../button";
import FormInput from "../form-input";

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithPassword
} from '../../utils/firebase/firebase.utils';

import {SignUpContainer, ButtonsContainer} from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
       await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInWithPassword(email, password);
            resetFormField();
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('Dont have user with this email');
                    break
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break
                default:
                    console.log('user creation error', error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <ButtonsContainer>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignUpContainer>
    )

}

export default SignInForm;