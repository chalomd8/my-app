import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './formulario.css';

const Inicio = () => {
    return (
        <div className="contenedor">
            <img src={logo} alt="Logo" className="margen-arriba" width="30%" />
            <h1>Bienvenidos al App donde puedes buscar tú pokémon favorito</h1>
            <Link to={'/pokedex'} className="button margen-arriba">
                Ir a Pokédex
            </Link>
        </div>
    );
}

export default Inicio;