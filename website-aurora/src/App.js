import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
