import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.user);;

    // if (!currentUser) {
    if (!true) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;