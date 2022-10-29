import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../auth/authContext";
import Navbar from "../../components/navbar/navbar";
import Login from "../login";
import { LogoutButton } from "./logout.styles";


const Logout = {
    Route: '/logout',

    Page: function LogOut() {

        const { logOut, user } = UserAuth();
        const navigate = useNavigate()
        
        const handleSignOut = async () => {
            try {
                await logOut();
            } catch (error) {
                console.log(error);
            }
        };

            //runs when logging in and out 
        useEffect(() => {
            console.log(user)
            if(user != null) return 
            navigate(Login.Route)
        }, [user])

        return (
            <>
                <Navbar/>
                <div>
                    <p>Welcome, {user?.displayName}</p>
                </div>
                <LogoutButton onClick={handleSignOut}>logout</LogoutButton>
            </>
        );
    } 
}

export default Logout;
