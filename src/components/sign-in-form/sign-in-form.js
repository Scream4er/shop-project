import {useState} from "react";

import Button from "../button";
import FormInput from "../form-input";

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

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
        <div className="sign-up-container">
            <h2>Do you have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="group">
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google sign in</Button>
                </div>
            </form>
        </div>
    )

}

export default SignInForm;