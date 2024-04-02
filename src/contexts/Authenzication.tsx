import React, { createContext } from "react";
import { useSessionStorage } from "../hooks/useLocal";
type AuthorizationProviderProps = {
    children: React.ReactNode;
}


export const authorizationContext = createContext([] as any[]);

export const AuthorizationProvider = ({ children }: AuthorizationProviderProps) => {
    const [token, setToken, removeToken] = useSessionStorage("token", null);

    return (<authorizationContext.Provider value={[token, setToken, removeToken]}> {children} </authorizationContext.Provider>)
}