import { useAuth } from "./context/AuthContext";
import { Navigate, useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ()=>{
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    // if(!isAuthenticated) return navigate('/login',{replace:true});
    if(!isAuthenticated) return <Navigate to='login' replace/>

    return(
            <Outlet/>
         )
}

export default ProtectedRoute;