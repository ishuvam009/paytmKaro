import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Send from "./Pages/Send";
import ProtectedRoute from "./RouteHandler/ProtectedRoute";
import RedirectLogInUser from "./RouteHandler/RedirectLogInUser"

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<RedirectLogInUser> <Login /> </RedirectLogInUser>} />
          <Route path="/signup" element={<RedirectLogInUser> <SignUp /> </RedirectLogInUser>} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
          <Route path="/send" element={<ProtectedRoute> <Send /> </ProtectedRoute>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    </>
  );
}
