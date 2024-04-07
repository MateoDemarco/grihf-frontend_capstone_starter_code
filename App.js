// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import InstantConsultation from './components/InstantConsultation/InstantConsultation';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Route path="/consulta-instantanea" element={<InstantConsultation />} />
            {/* Agrega otras rutas */}
        </Router>
    );
}

export default App;
