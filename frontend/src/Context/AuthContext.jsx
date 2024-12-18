import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import URL from '../../constants.js'

const AuthContext = createContext()

function AuthContextProvider({ children }){
    const navigate = useNavigate()
    const [user, setUser] = useState(() => {
        const storedUser = Cookies.get('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

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
                Cookies.set('user', JSON.stringify({
                    username: user.name,
                    email: user.email,
                }), { expires: 7 }); 
            }catch(err){
                console.log(`Error AuthContext, ${err}`)
                signOut()
            }
        }
    }
    useEffect(()=>{
        getUserDetails()
    }, []);

    function signIn(user){
        setUser(user);
        Cookies.set('user', JSON.stringify(user), { expires: 7 });
    }

    function signOut(){
        setUser(null)
        Cookies.remove('token')
        Cookies.remove('user');
        navigate('/signin')
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };