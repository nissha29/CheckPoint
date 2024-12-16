import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage.jsx";
import DashBoard from "../Pages/DashBoard.jsx";
import { AuthContextProvider } from "../Context/AuthContext.jsx";
import ProtectedRoute from "../Components/ProtectedRoute.jsx";

function Routing() {

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default Routing;
