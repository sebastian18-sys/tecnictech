import React, { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal';
import Stories from '../Stories';
import "./content.css"

export default function Content({title, titleLight, info, button}) {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    return setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <section className='content'>
        <h2 className='content__title'>
          {title}<br /> 
          <span className='content__titleLight'>{titleLight}</span>
        </h2>
        <div className='content__info'>
            <p>
                {info}
            </p>
            {button && (
              <Button info={"Nuestros proyectos"} icon handleClick={handleClick} />
            )}
        </div>
        {showModal && <Modal onClose={handleClose}><Stories /></Modal>}
    </section>
  )
}
