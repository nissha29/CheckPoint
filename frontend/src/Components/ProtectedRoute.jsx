import { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom';

export default function({ children }){
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user) {
            navigate('/signin');
        }
    }, [user, navigate]);

    if (user) {
        return children; 
    }

    return null;
}