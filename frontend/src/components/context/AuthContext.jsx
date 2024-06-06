import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {login as performLogin, registerUser, getUserByUsername} from '../../services/client.js';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let token = localStorage.getItem("access_token");
        if (token) {
            token = jwtDecode(token);
            getUserByUsername(token.sub).then(res => {
                setUser({
                    id: res.data.id,
                    fullname: res.data.fullname,
                    username: res.data.username,
                    email: res.data.email,
                    avatar: res.data.avatar,
                    role: res.data.role.name
                });
            }).catch(err => console.log(err));
        }
    }, []);

    const login = async (usernameAndPassword) => {
        return new Promise((resolve, reject) => {
            performLogin(usernameAndPassword).then(res => {
                const jwtToken = res.headers["authorization"];
                localStorage.setItem("access_token", jwtToken);
                const decodedToken = jwtDecode(jwtToken);

                setUser({
                    id: res.data.id,
                    fullname: res.data.fullname,
                    username: res.data.username,
                    email: res.data.email,
                    avatar: res.data.avatar,
                    role: decodedToken.scopes[0]
                })

                resolve(res)
            }).catch(err => reject(err));
        })
    }

    const register = async (user) => {
        return new Promise((resolve, reject) => {
            registerUser(user).then((res) => {
                const jwtToken = res.headers["authorization"];
                localStorage.setItem("access_token", jwtToken);
                const decodedToken = jwtDecode(jwtToken);
                setUser({
                    id: res.data.id,
                    fullname: res.data.fullname,
                    username: res.data.username,
                    email: res.data.email,
                    avatar: res.data.avatar,
                    role: decodedToken.scopes[0]
                })

                resolve(res)
            }).catch(err => reject(err));
        })
    }

    const logOut = () => {
        localStorage.removeItem("access_token");
        setUser(null);
    }


    const isUserAuthenticated = () => {
        const token = localStorage.getItem("access_token");

        if (!token) {
            logOut();
            return false;
        }
        const decodedToken = jwtDecode(token);
        if (Date.now() > decodedToken.exp * 1000) {
            logOut();
            return false;
        }
        if (decodedToken.scopes[0] !== "USER") {
            logOut();
            return false;
        }
        return true;
    }

    return (
        <AuthContext.Provider value={{
            user, setUser, login, logOut, isUserAuthenticated, register
        }}>
            { children }
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;