import React from 'react'
import "./Modal.css"

export default function Modal({ children, onClose}) {
  return (
    <div className='modal'>
        <div className='modal__container'>
            <button className='modal--button' onClick={onClose}>X</button>
            {children}
        </div>
    </div>
  )
}
