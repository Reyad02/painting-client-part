import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <span className="text-center loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;