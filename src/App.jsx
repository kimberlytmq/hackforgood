// App.jsx
// import React from "react";
import Signup from "./components/SignUp";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Place from './Place.jsx';
import "./app.css" // Import the CSS file


function App() {

    return (
        <Container
           className="app-container"
        >
            <div className="app-content">
                <Router>
                    <AuthProvider>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PrivateRoute>
                                        <Dashboard />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/update-profile"
                                element={
                                    <PrivateRoute>
                                        <UpdateProfile />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            {/* <Route path="/place/*" element={<PrivateRoute> <Place /></PrivateRoute> } /> */}
                            <Route path="/place" element={<Place />} />

                        </Routes>
                        <ToastContainer />
                    </AuthProvider>
                </Router>
            </div>
        </Container>
    )
}

export default App