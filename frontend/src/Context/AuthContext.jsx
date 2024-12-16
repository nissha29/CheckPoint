import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import URL from '../../constants.js'

const AuthContext = createContext()

function AuthContextProvider({ children }){
    const navigate = useNavigate()
    const [user, setUser] = useState(null);

    async function getUserDetails(){
        const token = Cookies.get('token');
        if (token) {
            try{
                const response = await axios.get(
                    `${URL}/user/me`,
                    {
                        withCredentials: true,
                    }
                )
                const user = response.data;
                setUser({
                    username: user.name,
                    email: user.email,
                })
            }catch(err){
                console.log(`Error AuthContext, ${err}`)
            }
        }
    }
    useEffect(()=>{
        getUserDetails()
    }, []);

    function signIn(user){
        setUser(user)
    }

    function signOut(){
        setUser(null)
        Cookies.remove('token')
        navigate('/signin')
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };