import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='footer'>
        <nav className='footer__menu'>
            <div className='footer__menuColumn'>
                <h4>TecnicTech</h4>
                <p>TecnicTech es uno de los <br /> negocios más justo, <br /> accesible, eficiente y <br /> transparente.</p>
            </div>
            <div className='footer__menuColumn'>
                <h4>Links</h4>
                <ul>
                    <li><a href="./">Inicio</a></li>
                    <li><a href="./">Nosotros</a></li>
                    <li><a href="./">Beneficios</a></li>
                    <li><a href="./">Contacto</a></li>
                </ul>
            </div>
            <div className='footer__menuColumn'>
                <h4>Contáctanos</h4>
                <p>
                    <strong>Teléfono:</strong> +01 123 4567<br />
                    <strong>Correo:</strong> sebastian18@gmail.com<br />
                </p>
            </div>
            <div className='footer__menuColumn'>
                <h4>Siguenos en</h4>
                <div className='footer__icon'>
                    <a href='/'>
                        <FacebookIcon fontSize='large' />
                    </a>
                    
                    <a href='/'>
                        <TwitterIcon fontSize='large' />
                    </a>
                </div>
                <div className='footer__icon'>
                    <a href='/'>
                        <InstagramIcon fontSize='large' />
                    </a>
                    <a href='/'>
                        <LinkedInIcon fontSize='large' />
                    </a>
                </div>
            </div>
        </nav>
    </div>
  )
}
