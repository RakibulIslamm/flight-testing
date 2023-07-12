import { authInterface } from "@/app/interfaces/interfaces";
import { useState, useEffect } from "react";



const useAnonymusAuth=()=>{
    const [isAuthenticated, setIsAuthenticated] = useState<authInterface | null>(null);
    const [authLoading, setAuthLoading] = useState<boolean>(true);

    const login = () => {
        const expirationTime = Date.now() + 60 * 60 * 1000;
        const data = {
            isLogin: true,
            loginAt: Date.now(),
            expireAt: expirationTime
        }

        localStorage.setItem('auth', JSON.stringify(data))
        setIsAuthenticated(data);
    };

    const logout = () => {
        localStorage.removeItem('auth')
        setIsAuthenticated(null);
    };

    useEffect(() => {
        const getAuth = async()=>{
            try{
                const getAuth = localStorage.getItem('auth') as string;
                setIsAuthenticated(JSON.parse(getAuth))
            }
            catch(error){
                console.log(error)
            }
            finally{
                setAuthLoading(false);
            }
        }
        getAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        authLoading
    }
}

export default useAnonymusAuth