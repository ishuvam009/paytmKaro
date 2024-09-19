import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Send from "./Pages/Send";

export default function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/send" element={<Send />}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    </>
  );
}
