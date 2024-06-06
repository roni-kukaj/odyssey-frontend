import { jwtDecode } from 'jwt-decode';

export const getAuthenticatedUsername = () => {
    const token = localStorage.getItem("access_token");
    const decodedToken = jwtDecode(token);
    return decodedToken.sub;
}
