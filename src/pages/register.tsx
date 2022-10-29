
import { RegisterForm } from '../components/forms/registerForm';
import Navbar from '../components/navbar/navbar';


const Register = {
    Route: '/register',

    Page: function RegisterPage() {
        return (
            <>
                <Navbar/>
                <RegisterForm/>
            </>
        );
    } 
}

export default Register;
