import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import LoginForm from './LoginForm';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Login" element={<LoginForm />} />
        <Route
          path="/Home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
