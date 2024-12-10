import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

useEffect(() => {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    logout();
}, [])

const navigate = useNavigate();
navigate('/login')