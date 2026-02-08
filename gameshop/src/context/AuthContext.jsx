import { createContext, useContext, useEffect, useState } from "react";
import pb from "../services/pocketbase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(pb.authStore.record);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setUser(pb.authStore.record);
        setLoading(false);
    }, [])

    const login = async (email, password) => {
        const authData = await pb
        .collection("users")
        .authWithPassword(email, password);

        setUser(authData.record);
    }
    
    const register = async (email, password, passwordConfirm) => {
        await pb.collection("users").create({
            email,
            password,
            passwordConfirm,
        });
    };

    const logout = () => {
        pb.authStore.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider
        value = {{ user, login, register, logout, loading}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}