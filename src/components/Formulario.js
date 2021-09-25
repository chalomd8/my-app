import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import axios from 'axios';
import './formulario.css';

const Formulario = () => {

    // State para leer guardar la busqueda del id
    const [busqueda, setBusqueda] = useState('');

    const [pokemon, setPokemon] = useState({
        nombre: '',
        sprite: ''
    });

    // Destructuring al state pokemon
    const { nombre, sprite } = pokemon;

    // Función para leer la información del input
    const leerBusqueda = e => {
        // Actualizar el state
        setBusqueda(e.target.value);
    }

    const buscarPokemon = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;
        const resultado = await axios.get(url);
        setPokemon({
            nombre: resultado.data.name,
            sprite: resultado.data.sprites.front_default
        });
    }

    return (
        <div className="contenedor">
            <img src={logo} alt="Logo" className="margen-arriba" width="30%" />
            <label className="label sumer-ma">ID Pokémon</label>
            <input
                className="input margen-arriba"
                type="number"
                placeholder="ID"
                value={busqueda}
                onChange={leerBusqueda}
            />
            {sprite.length === 0
                ? ''
                : <div className="contenedor-img margen-arriba">
                    <img src={sprite} alt="Imagen" className="img" />
                    <div className="texto-img">
                        <p className="caps">{nombre}</p>
                    </div>
                </div>
            }
            <button
                type="button"
                className="button margen-arriba"
                onClick={() => buscarPokemon()}
            >Consultar</button>
            <Link to={'/'} className="button margen-arriba">
                Ir a Inicio
            </Link>
        </div>
    );
}

export default Formulario;