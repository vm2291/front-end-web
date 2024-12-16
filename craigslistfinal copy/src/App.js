// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './pages/Home1';
import ForSale1 from './pages/ForSale1'; // Import your For Sale page
import './App.scss';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home1 />} />
                    <Route path="/for-sale" element={<ForSale1 />} /> {/* For Sale page */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
