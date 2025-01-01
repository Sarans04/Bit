import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import { PIDsProvider } from './components/PIDsContext'; // Import the PIDs context
import UserPage2 from './components/UserPage2';

const App = () => {
    return (
        <PIDsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/user2" element={<UserPage2 />} /> 
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </Router>
        </PIDsProvider>
    );
};

export default App;