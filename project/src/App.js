import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./Login";
import Signup from "./Signup";
import Facial from "./pages/Facial";
import Voice from "./pages/Voice";
import Text from "./pages/Text";
import './App.css';

function AppWithNavbar() {
  const location = useLocation();

  const showNavbar = location.pathname !== '/' && location.pathname !== '/Signup';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/facial" element={<Facial />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="/text" element={<Text />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
}

export default App;
