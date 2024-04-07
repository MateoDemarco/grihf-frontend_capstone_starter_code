import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  // Agregar estados adicionales para otros campos de registro

  const handleRegister = async () => {
    // Lógica para registrar al usuario y enviar los datos al servidor
    try {
      // Aquí se puede realizar una llamada a la API para registrar al usuario
      // Una vez registrado con éxito, navegar a la página de inicio
      navigate('/');
    } catch (error) {
      console.error('Error al registrar al usuario:', error);
    }
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    onLogout();
  };

  const extractUsername = (email) => {
    // Función para extraer el nombre de usuario del correo electrónico
    const username = email.split('@')[0];
    return username;
  };

  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        {isLoggedIn ? (
          <>
            <li>{extractUsername(email)}</li>
            <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
          </>
        ) : (
          <>
            <li><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico" /></li>
            {/* Agregar elementos de formulario para otros campos de registro */}
            <li><button onClick={handleRegister}>Registrarse</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
