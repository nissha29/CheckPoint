import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage.jsx";

function Routing() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default Routing;
