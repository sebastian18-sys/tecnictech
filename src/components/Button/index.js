import React from 'react'
import "./button.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Button({info, icon, mode, handleClick}) {
  return (
    <div className={`button ${mode && 'button__icon--mode'}`} onClick={handleClick}>
        <p>{info}</p>
        {icon && (
            <div className='button__icon'>
                <ArrowBackIcon fontSize='medium' />
            </div>
            )
        }
    </div>
  )
}
