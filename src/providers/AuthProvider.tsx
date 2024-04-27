import  {createContext, useState} from "react";
import { UserModel } from "../models/user";


interface AuthContext {
    user: UserModel | null;
    login: (data: UserModel) => void;
    logout: () => void;
}
export const AuthStateContext = createContext<AuthContext>({} as AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const [user, setUser] = useState<UserModel | null>(null);

    const login = (data: UserModel) => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
    }

    const logout = () => {
        user?.deleteUser()
    }


    return (
        <AuthStateContext.Provider value={{
            user, login, logout,
        }}>
            {children}
        </AuthStateContext.Provider>
    )
}
