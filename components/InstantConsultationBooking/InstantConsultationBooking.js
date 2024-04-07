// InstantConsultation.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const InstantConsultation = () => {
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const fetchDoctors = async () => {
            // Fetch doctors data from API or any data source
            const response = await fetch('api/doctores');
            const data = await response.json();

            // Filter doctors based on search query
            if (searchParams.get('especialidad')) {
                const filtered = data.filter(doctor => doctor.especialidad.toLowerCase() === searchParams.get('especialidad').toLowerCase());
                setFilteredDoctors(filtered);
                setIsSearched(true);
            }
        };

        fetchDoctors();
    }, [searchParams]);

    return (
        <div>
            {isSearched ? (
                <div>
                    <h2>Médicos Filtrados</h2>
                    <ul>
                        {filteredDoctors.map((doctor, index) => (
                            <li key={index}>{doctor.nombre} - {doctor.especialidad}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h2>Consulta Instantánea</h2>
                    {/* Agrega funcionalidad de búsqueda u otro contenido */}
                </div>
            )}
        </div>
    );
}

export default InstantConsultation;
