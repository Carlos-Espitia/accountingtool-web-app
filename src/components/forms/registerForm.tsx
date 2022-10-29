import SvgGoogle from "../../iconComponents/SvgGoogle";
import Login from "../../pages/login";
import {
    GoogleSignIn,
    FButton,
    Seperate,
    Form,
    FormTitle,
    FInput,
    FormHeader,
    GoogleIcon,
    FormSub,
} from "./forms.style";
import { UserAuth } from '../../auth/authContext'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logout from "../../pages/logout/logout";

// import { googleSignIn } from '../../auth/authContext'

export function RegisterForm() {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(user)
        if(user == null || Object.keys(user)?.length === 0 ) return 
        navigate(Logout.Route)
    }, [user])

    return(
        <Form>
            <FormHeader>
                <FormTitle>Register</FormTitle>
                <FormSub href={Login.Route}>I already have an account</FormSub>
            </FormHeader>
            <FInput placeholder="Email"></FInput>
            <FInput placeholder="Password" type="password"></FInput>
            <FInput placeholder="Confirm Password" type="password"></FInput>
            <FButton>Sign up</FButton>
            <Seperate/>
            <GoogleSignIn onClick={handleGoogleSignIn}><GoogleIcon><SvgGoogle/></GoogleIcon>Sign up with Google</GoogleSignIn>
        </Form>
    )
}
