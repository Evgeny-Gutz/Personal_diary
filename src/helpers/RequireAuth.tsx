import { useContext, type ReactNode } from "react";
import { GlobalContext } from "../context/global.context";
import { Navigate } from "react-router-dom";


export const RequireAuth = ({children}: {children: ReactNode}) => {
    const {dataUser} = useContext(GlobalContext);

    if(!dataUser.isLogined) {
        return <Navigate to={'/login'} replace/>
    }

    return children;
}