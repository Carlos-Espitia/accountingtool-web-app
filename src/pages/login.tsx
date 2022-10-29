
import { LoginForm } from '../components/forms/loginForm';
import Navbar from '../components/navbar/navbar';

const Login = {
    Route: '/login',

    Page: function LoginPage() {
        return (
            <>
                <Navbar/>
                <LoginForm/>
            </>
        );
    } 
}



export default Login;
