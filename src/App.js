// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './MyComponent';
import RoomPage from './RoomPage';
import RatesPage from './RatesPage';
import ContactPage from './ContactPage'; // Import the ContactPage component

const Home = () => <MyComponent />;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resort" element={<RoomPage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="/contact" element={<ContactPage />} /> {/* Add the ContactPage route */}
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
