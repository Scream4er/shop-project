import {createUserDocumentFromAuth, signInWithGooglePopup} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    }

  return (
      <div>
          <h1>Sign in</h1>
          <button onClick={logGoogleUser}>Sign in with Google</button>
          <SignUpForm/>
      </div>
  )
}

export default SignIn;