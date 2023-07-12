import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./ContextProvider";
import { AuthContextInterface } from "../interfaces/interfaces";


const useAuth = () => {
    const { isAuthenticated, login, logout, setIsAuthenticated, authLoading } = useContext(AuthContext) as AuthContextInterface
    const [loading, setLoading] = useState(true)

    return {
        isAuthenticated,
        login,
        logout,
        setIsAuthenticated, authLoading
    }
}

export default useAuth