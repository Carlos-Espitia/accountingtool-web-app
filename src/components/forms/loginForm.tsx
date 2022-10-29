import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../auth/authContext";
import SvgGoogle from "../../iconComponents/SvgGoogle";
import Logout from "../../pages/logout/logout";
import Register from "../../pages/register";
import {
    GoogleSignIn,
    FButton,
    Seperate,
    Form,
    FormTitle,
    FInput,
    FormHeader,
    FormSub,
    GoogleIcon,
} from "./forms.style";


export function LoginForm() {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()


    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (err) {
            console.log(err)
        }
    }


    //runs when logging in and out 
    useEffect(() => {
        console.log(user)
        if(user == null || Object.keys(user)?.length === 0 ) return 
        navigate(Logout.Route)
    }, [user])


    return(
        <Form>
            <FormHeader>
                <FormTitle>Sign In</FormTitle>
                <FormSub href={Register.Route}>I don't have an account</FormSub>
            </FormHeader>
            <FInput placeholder="Email"></FInput>
            <FInput placeholder="Password" type="password"></FInput>
            <FButton>Sign in</FButton>
            <Seperate/>
            <GoogleSignIn onClick={handleGoogleSignIn}><GoogleIcon><SvgGoogle/></GoogleIcon>Sign in with Google</GoogleSignIn>
        </Form>
    )
}
