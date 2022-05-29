import React from 'react'
import Button from '../Button'
import "./contact.css"

export default function Contact() {
  return (
    <section name="#contact" id='contact' className='contact'>
        <div className='contact__title'>
            <h2>Contáctanos </h2>
            <p>¿Quiere una respuesta inmediata a una pregunta? <br/> Consulte nuestro centro de ayuda para conocer las preguntas frecuentes. </p>
        </div>
        <div className='contact__container'>
            <div className='contact__container--input'>
                <label>Solicitante:</label>
                <input type="text" placeholder="Correo..." />
            </div>
            <div className='contact__container--input'>
                <label>Descripción:</label>
                <textarea placeholder='¿Qué sucede?'></textarea>
            </div>
            <div className='contact__container--buttons'>
            
                <Button info={"Enviar"} />
                <Button info={"Cancelar"} mode/>
                
            </div>
            
        </div>
        
    </section>
  )
}
