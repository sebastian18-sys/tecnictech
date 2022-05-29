import React from 'react'
import "./wrap.css"
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


export default function Wrap() {
    return (
        <div className='wrap'>
            <div className='wrap__mision'>
                <TrackChangesIcon fontSize='large' />
                <div>
                    <h2>Misión</h2>
                    <p>Llevar a nuestros clientes las mejores prácticas de negocio y tecnologías informáticas que los habiliten para competir en la nueva economía. Generando valor en nuestros clientes, empleados, socios de negocios.</p>
                </div>
            </div>
            <div className='wrap__vision'>
                <RemoveRedEyeIcon fontSize='large' />
                <div>
                <h2>Visión</h2>
                    <p>Alcanzar calidad de nivel internacional en la prestación de nuestros productos, servicios y reconocimiento como una de las principales empresas de tecnología en nuestro medio.</p>
                </div>
            </div>
        </div>
    )
}
