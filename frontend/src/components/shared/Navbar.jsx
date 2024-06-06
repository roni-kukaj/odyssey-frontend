import UnAuthenticatedNavbar from "./UnAuthenticatedNavbar.jsx";
import AuthenticatedNavbar from "./AuthenticatedNavbar.jsx";
import {useAuth} from "../context/AuthContext.jsx";

const Navbar = () => {
    const { isUserAuthenticated } = useAuth();

    if (isUserAuthenticated()) {
        return (
            <AuthenticatedNavbar />
        );
    } else {
        return (
            <UnAuthenticatedNavbar />
        );
    }
};


export default Navbar;