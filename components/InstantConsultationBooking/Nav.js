// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/consulta-instantanea">Consulta Instantánea</Link></li>
                {/* Agrega otros enlaces de la barra de navegación */}
            </ul>
        </nav>
    );
}

export default Navbar;
