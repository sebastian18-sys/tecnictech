import React, { useState, useEffect } from 'react'
import "./nav.css";
import PanoramaHorizontalSelectIcon from '@mui/icons-material/PanoramaHorizontalSelect';

export default function Nav() {

    const [show, setShow] = useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    const redirect = (name) => {
        window.event.preventDefault();
        const href = document.getElementById(`${name}`).getAttribute("name")
        const offsetTop = document.querySelector(href).offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: "smooth",
        });

    }

    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <div className='nav__content'>
                <div className='nav__logo'>
                    <span>
                        <PanoramaHorizontalSelectIcon fontSize='large' />
                    </span>
                    <h4>TecnicTech</h4>
                </div>
                <div className='nav__menu'>
                    <a href='#background' onClick={() => redirect("background")}>
                        <span>Inicio</span>
                    </a>
                    <a href='#aboutus' onClick={() => redirect("aboutus")}>
                        <span>Nosotros</span>
                    </a>
                    <a href='#features' onClick={() => redirect("features")}>
                        <span>Beneficios</span>
                    </a>
                    <a href='#contact' onClick={() => redirect("contact")}>
                        <span>Contacto</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
