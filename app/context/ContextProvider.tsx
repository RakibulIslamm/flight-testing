"use client"
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";
import { AuthContextInterface, EnvOptionInterface } from "../interfaces/interfaces";
import { EnvOptions } from "../Environment/envOptions";
import useAnonymusAuth from "../utils/auth";

// Env Context Interface
export interface EnvContextValueInterface {
    selectedEnv: EnvOptionInterface | null;
    setSelectedEnv: Dispatch<SetStateAction<EnvOptionInterface | null>>
}




// Env Context create
export const EnvContext = createContext<EnvContextValueInterface | undefined>(undefined);

export const AuthContext = createContext<AuthContextInterface | null>(null);

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedEnv, setSelectedEnv] = useState<EnvOptionInterface | null>(EnvOptions[0]);
    const { isAuthenticated, setIsAuthenticated, login, logout, authLoading } = useAnonymusAuth()

    const EnvContextValue: EnvContextValueInterface = {
        selectedEnv,
        setSelectedEnv,
    };

    const authContextValue: AuthContextInterface = {
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        authLoading
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <EnvContext.Provider value={EnvContextValue}>
                {children}
            </EnvContext.Provider>
        </AuthContext.Provider>
    )
}

export default ContextProvider;